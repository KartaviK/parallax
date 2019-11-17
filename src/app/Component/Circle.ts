import Figure from "./Figure";
import Point from "./Point";

export default class Circle extends Figure {
    private _radius: number;

    constructor(radius: number, xAxis: number, yAxis: number) {
        super(xAxis, yAxis);

        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    isInside(point: Point): boolean {
        return Math.pow(point.xAxis - this.xAxis, 2)
            + Math.pow(point.yAxis - this.yAxis, 2)
            - Math.pow(this.radius, 2) <= 0;
    }

    isUnder(point: Point): boolean {
        return point.yAxis <= this.yAxis;
    }

    isUpper(point: Point): boolean {
        return point.yAxis >= this.yAxis;
    }

    isOnRight(point: Point): boolean {
        return point.xAxis >= this.xAxis;
    }

    isOnLeft(point: Point): boolean {
        return point.xAxis <= this.xAxis;
    }
}
