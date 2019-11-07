export default class Point {
    private _xAxis: number;
    private _yAxis: number;
    private _color: string;

    constructor(xAxis: number, yAxis: number, color: string) {
        this._xAxis = xAxis;
        this._yAxis = yAxis;
        this._color = color;
    }

    get xAxis(): number {
        return this._xAxis;
    }

    get yAxis(): number {
        return this._yAxis;
    }

    get color(): string {
        return this._color;
    }

    set xAxis(value: number) {
        this._xAxis = value;
    }

    set yAxis(value: number) {
        this._yAxis = value;
    }

    set color(value: string) {
        this._color = value;
    }

    public toNode(): HTMLElement {
        let pointElement = new HTMLElement();
        pointElement.style.position = 'absolute';
        pointElement.style.left = this.xAxis.toString();
        pointElement.style.top = this.yAxis.toString();
        pointElement.style.width = '2px';
        pointElement.style.height = '2px';
        pointElement.style.borderRadius = '50%';
        pointElement.style.backgroundColor = this._color;

        return pointElement
    }
}
