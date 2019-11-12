export default function (point, circle) {
    let nextX = Math.random() * 75;
    let nextY = Math.random() * 75;
    let inCircle = Math.pow(point.xAxis - circle.xAxis, 2)
        + Math.pow(point.yAxis - circle.yAxis, 2)
        - Math.pow(circle.radius, 2) <= 0;
    if (inCircle) {
        point.yAxis += point.yAxis >= circle.yAxis ? nextY : -(nextY);
        point.xAxis += point.xAxis <= circle.xAxis ? -(nextX) : nextX;
    }
    else {
        point.yAxis += point.yAxis >= circle.yAxis ? -(nextY) : nextY;
        point.xAxis += point.xAxis <= circle.xAxis ? nextX : -(nextX);
    }
    if (point.xAxis >= window.innerWidth - 25) {
        point.xAxis -= 75;
    }
    else if (point.xAxis <= 25) {
        point.xAxis += 75;
    }
    if (point.yAxis >= window.innerHeight - 25) {
        point.yAxis -= 75;
    }
    else if (point.yAxis <= 25) {
        point.yAxis += 75;
    }
}
//# sourceMappingURL=Chaos.js.map