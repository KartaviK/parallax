export default function (nextX, nextY, point, figure) {
    if (figure.isInside(point)) {
        point.yAxis += figure.isUpper(point) ? nextY : -nextY;
        point.xAxis += figure.isOnLeft(point) ? -nextX : nextX;
    }
    else {
        point.yAxis += figure.isUnder(point) ? nextY : -nextY;
        point.xAxis += figure.isOnRight(point) ? -nextX : nextX;
    }
}
//# sourceMappingURL=chaos.js.map