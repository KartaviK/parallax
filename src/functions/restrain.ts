import Point from "../components/Point.js";

export default function (point: Point, target: Window) {
    if (point.xAxis >= target.innerWidth - 25) {
        point.xAxis -= 75;
    } else if (point.xAxis <= 25) {
        point.xAxis += 75;
    }
    if (point.yAxis >= target.innerHeight - 25) {
        point.yAxis -= 75;
    } else if (point.yAxis <= 25) {
        point.yAxis += 75;
    }
}
