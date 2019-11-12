import Point from "../components/Point.js";
import Figure from "../types/Figure";

export default function (nextX: number, nextY: number, point: Point, figure: Figure, clockwise: boolean = true): void {
    if (figure.isOnRight(point) && figure.isUnder(point)) {
        point.yAxis += clockwise ? nextY : -nextY;
    }
    if (figure.isOnRight(point) && figure.isUpper(point)) {
        point.xAxis -= clockwise ? nextX : -nextX;
    }
    if (figure.isOnLeft(point) && figure.isUpper(point)) {
        point.yAxis -= clockwise ? nextY : -nextY;
    }
    if (figure.isOnLeft(point) && figure.isUnder(point)) {
        point.xAxis += clockwise ? nextX : -nextX;
    }
}