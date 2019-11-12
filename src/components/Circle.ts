export default class Circle {
    private _radius: number;
    private _xAxis: number;
    private _yAxis: number;

    constructor(radius: number, xAxis: number, yAxis: number) {
        this._radius = radius;
        this._xAxis = xAxis;
        this._yAxis = yAxis;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
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
}
