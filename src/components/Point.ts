import Renderable from "../interfaces/Renderable";

export default class Point implements Renderable {
    private _xAxis: number;
    private _yAxis: number;
    private _color: string;
    private _radius: number;
    private _gravitationTime: number = 1;

    private target: HTMLElement;

    constructor(xAxis: number, yAxis: number, color: string, radius: number) {
        this._xAxis = xAxis;
        this._yAxis = yAxis;
        this._color = color;
        this._radius = radius;
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

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get gravitationTime(): number {
        return this._gravitationTime;
    }

    set gravitationTime(value: number) {
        this._gravitationTime = value;
    }

    public update(): void {
        this.target.style.left = `${this.xAxis}px`;
        this.target.style.top = `${this.yAxis}px`;
    }

    public toNode(): HTMLElement {
        let element = document.createElement('span');
        element.style.left = `${this.xAxis}px`;
        element.style.top = `${this.yAxis}px`;
        element.style.backgroundColor = this._color;
        element.style.transitionDuration = '0.5s';
        element.style.width = `${this.radius * 2}px`;
        element.style.height = `${this.radius * 2}px`;

        this.target = element;

        return element
    }
}
