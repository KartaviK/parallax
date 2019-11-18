import {IListener, IListenerParams} from "../../interfaces/IListener";
import Point from "../Point";

export const acceleration: number = 9.80665;

export interface IGravityParams extends IListenerParams {
    targetXAxis: (point?: Point) => number;
    targetYAxis: (point?: Point) => number;
    time: () => number;
    iteration: () => number;
}

export const Gravity: IListener<Point, IGravityParams> = (point: Point, params: IGravityParams): void => {
    const {targetXAxis, targetYAxis, time, iteration} = params;
    const x = targetXAxis(point);
    const y = targetYAxis(point);
    const t = time();
    const i = iteration();

    const targetDistance = Math.sqrt(
        Math.pow(x - point.XAxis, 2)
        + Math.pow(y - point.YAxis, 2),
    );
    const traveledDistance =
        (acceleration * Math.pow(t, 2)) / 2
        - (acceleration * Math.pow(t - i, 2)) / 2;

    if (targetDistance - traveledDistance <= 0) {
        point.XAxis = x;
        point.YAxis = y;
        point.GravitationTime = 1;

        return;
    }

    const traveledPartRatio = traveledDistance / targetDistance;
    const lambda = traveledPartRatio / (1 - traveledPartRatio);

    point.XAxis = (point.XAxis + (lambda * x)) / (1 + lambda);
    point.YAxis = (point.YAxis + (lambda * y)) / (1 + lambda);
    point.GravitationTime++;
};
