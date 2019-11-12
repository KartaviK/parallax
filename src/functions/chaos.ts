import Point from "../components/Point.js";
import Figure from "../types/Figure.js";

export default function chaos(nextX: number, nextY: number, point: Point, figure: Figure): void {
    if (figure.isInside(point)) {
        point.yAxis += figure.isUpper(point) ? nextY : -nextY;
        point.xAxis += figure.isOnLeft(point) ? -nextX : nextX;
    } else {
        point.yAxis += figure.isUnder(point) ? nextY : -nextY;
        point.xAxis += figure.isOnRight(point) ? -nextX : nextX;
    }
}
