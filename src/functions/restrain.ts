import Point from "../components/Point";

export default function restrain(point: Point, target: Window) {
    if (point.xAxis > target.innerWidth - point.radius * 2) {
        point.xAxis = target.innerWidth - point.radius * 2;
    } else if (point.xAxis <= point.radius * 2) {
        point.xAxis = point.radius * 2;
    }
    if (point.yAxis > target.innerHeight - point.radius * 2) {
        point.yAxis = target.innerHeight - point.radius * 2;
    } else if (point.yAxis <= point.radius * 2) {
        point.yAxis = point.radius * 2;
    }
}
