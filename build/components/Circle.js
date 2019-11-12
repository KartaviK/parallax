export default class Circle {
    constructor(radius, xAxis, yAxis) {
        this._radius = radius;
        this._xAxis = xAxis;
        this._yAxis = yAxis;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    get xAxis() {
        return this._xAxis;
    }
    set xAxis(value) {
        this._xAxis = value;
    }
    get yAxis() {
        return this._yAxis;
    }
    set yAxis(value) {
        this._yAxis = value;
    }
}
//# sourceMappingURL=Circle.js.map