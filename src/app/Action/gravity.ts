import Point from "../Component/Point";

export const acceleration: number = 9.80665;

export default function gravity(
    point: Point,
    targetXAxis: number,
    targetYAxis: number,
    time: number,
    iteration: number = 1
): void {
    let targetDistance = Math.sqrt(
        Math.pow(targetXAxis - point.xAxis, 2)
        + Math.pow(targetYAxis - point.yAxis, 2)
    );
    let traveledDistance =
        (acceleration * Math.pow(time, 2)) / 2
        - (acceleration * Math.pow(time - iteration, 2)) / 2;

    if (targetDistance - traveledDistance <= 0) {
        point.xAxis = targetXAxis;
        point.yAxis = targetYAxis;
        point.gravitationTime = 1;

        return;
    }

    let traveledPartRatio = traveledDistance / targetDistance;
    let lambda = traveledPartRatio / (1 - traveledPartRatio);

    point.xAxis = (point.xAxis + (lambda * targetXAxis)) / (1 + lambda);
    point.yAxis = (point.yAxis + (lambda * targetYAxis)) / (1 + lambda);
}