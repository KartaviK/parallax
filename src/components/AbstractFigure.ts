import IFigure from "../interfaces/IFigure";
import Point from "./Point";

export default abstract class AbstractFigure implements IFigure {
    private xAxis: number;
    private yAxis: number;

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

    public abstract IsInside(point: Point): boolean;

    public abstract IsUnder(point: Point): boolean;

    public abstract IsUpper(point: Point): boolean;

    public abstract IsOnLeft(point: Point): boolean;

    public abstract IsOnRight(point: Point): boolean;
}
