import Point from "../components/Point.js";

export default function(point: Point): void {
    let nextX = point.xAxis + (Math.random() * 20) - 10;
    let nextY = point.yAxis + (Math.random() * 20) - 10;
    if (nextX >= window.innerWidth - 20) {
        nextX -= 20;
    } else if (nextX <= 20) {
        nextX += 20;
    }
    if (nextY >= window.innerHeight - 20) {
        nextY -= 20;
    } else if (nextY <= 20) {
        nextY += 20;
    }

    point.xAxis = nextX;
    point.yAxis = nextY;
}
