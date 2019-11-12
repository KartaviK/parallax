export default function (point) {
    let nextX = point.xAxis + (Math.random() * 150) - 75;
    let nextY = point.yAxis + (Math.random() * 150) - 75;
    if (nextX >= window.innerWidth - 25) {
        nextX -= 75;
    }
    else if (nextX <= 25) {
        nextX += 75;
    }
    if (nextY >= window.innerHeight - 25) {
        nextY -= 75;
    }
    else if (nextY <= 25) {
        nextY += 75;
    }
    point.xAxis = nextX;
    point.yAxis = nextY;
}
//# sourceMappingURL=Chaos.js.map