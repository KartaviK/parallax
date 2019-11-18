import {Listener, ListenerParams} from "../../interfaces/Listener";
import Point from "../Point";

export const acceleration: number = 9.80665;

export interface GravityParams extends ListenerParams {
    iteration: () => number;
    targetXAxis: (point?: Point) => number;
    targetYAxis: (point?: Point) => number;
    time: () => number;
}

export const Gravity: Listener<Point, GravityParams> = (point: Point, params: GravityParams): void => {
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
    point.GravitationTime += 1;
};
