import {ListenerParams, Listener} from "../../interfaces/Listener";
import Point from "../Point";

export const acceleration: number = 9.80665;

export interface GravityParams extends ListenerParams {
    targetXAxis: () => number,
    targetYAxis: (point: Point) => number,
    time: () => number,
    iteration: () => number
}

export const Gravity: Listener<Point, GravityParams> = (point: Point, params: GravityParams): void => {
    let {targetXAxis, targetYAxis, time, iteration} = params;
    let x = targetXAxis();
    let y = targetYAxis(point);
    let t = time();
    let i = iteration();

    let targetDistance = Math.sqrt(
        Math.pow(x - point.xAxis, 2)
        + Math.pow(y - point.yAxis, 2)
    );
    let traveledDistance =
        (acceleration * Math.pow(t, 2)) / 2
        - (acceleration * Math.pow(t - i, 2)) / 2;

    if (targetDistance - traveledDistance <= 0) {
        point.xAxis = x;
        point.yAxis = y;
        point.gravitationTime = 1;

        return;
    }

    let traveledPartRatio = traveledDistance / targetDistance;
    let lambda = traveledPartRatio / (1 - traveledPartRatio);

    point.xAxis = (point.xAxis + (lambda * x)) / (1 + lambda);
    point.yAxis = (point.yAxis + (lambda * y)) / (1 + lambda);
    point.gravitationTime++;
};
