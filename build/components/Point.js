export default class Point {
    constructor(xAxis, yAxis, color, radius) {
        this._xAxis = xAxis;
        this._yAxis = yAxis;
        this._color = color;
        this._radius = radius;
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
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    update() {
        this.target.style.left = `${this.xAxis.toString()}px`;
        this.target.style.top = `${this.yAxis.toString()}px`;
    }
    toNode() {
        let element = document.createElement('span');
        element.style.left = `${this.xAxis.toString()}px`;
        element.style.top = `${this.yAxis.toString()}px`;
        element.style.backgroundColor = this._color;
        element.style.transitionDuration = `0.5s`;
        element.style.width = `${this.radius}px`;
        element.style.height = `${this.radius}px`;
        this.target = element;
        return element;
    }
}
//# sourceMappingURL=Point.js.map