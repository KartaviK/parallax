export default function (nextX, nextY, point, figure, clockwise = true) {
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
//# sourceMappingURL=spin.js.map