export const acceleration = 9.81;
export default function gravity(point, targetXAxis, targetYAxis, time, iteration = 1) {
    let targetDistance = Math.sqrt(Math.pow(targetXAxis - point.xAxis, 2)
        + Math.pow(targetYAxis - point.yAxis, 2));
    let traveledDistance = (acceleration * Math.pow(time, 2)) / 2
        - (acceleration * Math.pow(time - iteration, 2)) / 2;
    if (targetDistance - traveledDistance <= 0) {
        point.xAxis = targetXAxis;
        point.yAxis = targetYAxis;
        return;
    }
    let traveledPartRatio = traveledDistance / targetDistance;
    let lambda = traveledPartRatio / (1 - traveledPartRatio);
    point.xAxis = (point.xAxis + (lambda * targetXAxis)) / (1 + lambda);
    point.yAxis = (point.yAxis + (lambda * targetYAxis)) / (1 + lambda);
}
//# sourceMappingURL=gravity.js.map