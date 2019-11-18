import Figure from "../interfaces/Figure";
import Point from "./Point";

export default abstract class AbstractFigure implements Figure {
    protected constructor(xAxis: number, yAxis: number) {
        this.xAxis = xAxis;
        this.yAxis = yAxis;
    }

    get XAxis(): number {
        return this.xAxis;
    }

    set XAxis(value: number) {
        this.xAxis = value;
    }

    get YAxis(): number {
        return this.yAxis;
    }

    set YAxis(value: number) {
        this.yAxis = value;
    }

    private xAxis: number;
    private yAxis: number;

    public abstract IsInside(point: Point): boolean;

    public abstract IsOnLeft(point: Point): boolean;

    public abstract IsOnRight(point: Point): boolean;

    public abstract IsUnder(point: Point): boolean;

    public abstract IsUpper(point: Point): boolean;
}
