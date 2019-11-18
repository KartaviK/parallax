import AbstractFigure from "./AbstractFigure";
import Point from "./Point";

export default class Circle extends AbstractFigure {
    private radius: number;

    constructor(radius: number, xAxis: number, yAxis: number) {
        super(xAxis, yAxis);

        this.radius = radius;
    }

    get Radius(): number {
        return this.radius;
    }

    set Radius(value: number) {
        this.radius = value;
    }

    public IsInside(point: Point): boolean {
        return Math.pow(point.XAxis - this.XAxis, 2)
            + Math.pow(point.YAxis - this.YAxis, 2)
            - Math.pow(this.Radius, 2) <= 0;
    }

    public IsUnder(point: Point): boolean {
        return point.YAxis <= this.YAxis;
    }

    public IsUpper(point: Point): boolean {
        return point.YAxis >= this.YAxis;
    }

    public IsOnRight(point: Point): boolean {
        return point.XAxis >= this.XAxis;
    }

    public IsOnLeft(point: Point): boolean {
        return point.XAxis <= this.XAxis;
    }
}
