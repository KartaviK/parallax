export default function (point, target) {
    if (point.xAxis >= target.innerWidth - 25) {
        point.xAxis -= 75;
    }
    else if (point.xAxis <= 25) {
        point.xAxis += 75;
    }
    if (point.yAxis >= target.innerHeight - 25) {
        point.yAxis -= 75;
    }
    else if (point.yAxis <= 25) {
        point.yAxis += 75;
    }
}
//# sourceMappingURL=restrain.js.map