import IFigure from "./IFigure";
import Point from "./Point";

export default abstract class Figure implements IFigure {
    private _xAxis: number;
    private _yAxis: number;

    protected constructor(xAxis: number, yAxis: number) {
        this._xAxis = xAxis;
        this._yAxis = yAxis;
    }

    get xAxis(): number {
        return this._xAxis;
    }

    set xAxis(value: number) {
        this._xAxis = value;
    }

    get yAxis(): number {
        return this._yAxis;
    }

    set yAxis(value: number) {
        this._yAxis = value;
    }

    abstract isInside(point: Point): boolean
    abstract isUnder(point: Point): boolean
    abstract isUpper(point: Point): boolean
    abstract isOnLeft(point: Point): boolean
    abstract isOnRight(point: Point): boolean
}

