import Figure from "../types/Figure.js";
export default class Circle extends Figure {
    constructor(radius, xAxis, yAxis) {
        super(xAxis, yAxis);
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    isInside(point) {
        return Math.pow(point.xAxis - this.xAxis, 2)
            + Math.pow(point.yAxis - this.yAxis, 2)
            - Math.pow(this.radius, 2) <= 0;
    }
    isUnder(point) {
        return point.yAxis <= this.yAxis;
    }
    isUpper(point) {
        return point.yAxis >= this.yAxis;
    }
    isOnRight(point) {
        return point.xAxis >= this.xAxis;
    }
    isOnLeft(point) {
        return point.xAxis <= this.xAxis;
    }
}
//# sourceMappingURL=Circle.js.map