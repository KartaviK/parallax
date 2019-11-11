export default class Point {
    private _xAxis: number;
    private _yAxis: number;
    private _color: string;

    private target: HTMLElement;

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

    public update(): void {
        this.target.style.left = `${this.xAxis.toString()}px`;
        this.target.style.top = `${this.yAxis.toString()}px`;
    }

    public toNode(): HTMLElement {
        let element = document.createElement('span');
        element.style.position = 'absolute';
        element.style.left = `${this.xAxis.toString()}px`;
        element.style.top = `${this.yAxis.toString()}px`;
        element.style.width = '3px';
        element.style.height = '3px';
        element.style.borderRadius = '50%';
        element.style.backgroundColor = this._color;

        this.target = element;

        return element
    }
}
