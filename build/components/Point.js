export default class Point {
    constructor(xAxis, yAxis, color) {
        this._xAxis = xAxis;
        this._yAxis = yAxis;
        this._color = color;
    }
    get xAxis() {
        return this._xAxis;
    }
    get yAxis() {
        return this._yAxis;
    }
    get color() {
        return this._color;
    }
    set xAxis(value) {
        this._xAxis = value;
    }
    set yAxis(value) {
        this._yAxis = value;
    }
    set color(value) {
        this._color = value;
    }
    toNode() {
        let pointElement = document.createElement('span');
        pointElement.style.position = 'absolute';
        pointElement.style.left = `${this.xAxis.toString()}px`;
        pointElement.style.top = `${this.yAxis.toString()}px`;
        pointElement.style.width = '3px';
        pointElement.style.height = '3px';
        pointElement.style.borderRadius = '50%';
        pointElement.style.backgroundColor = this._color;
        return pointElement;
    }
}
//# sourceMappingURL=Point.js.map