export default function chaos(nextX, nextY, point, figure) {
    if (figure.isInside(point)) {
        point.yAxis += figure.isUpper(point) ? nextY : -nextY;
        point.xAxis += figure.isOnLeft(point) ? -nextX : nextX;
    }
    else {
        point.yAxis += figure.isUnder(point) ? nextY : -nextY;
        point.xAxis += figure.isOnRight(point) ? -nextX : nextX;
    }
    point.gravitationTime = 1;
}
//# sourceMappingURL=chaos.js.map