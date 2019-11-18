import RenderAble from "../interfaces/RenderAble";

export default class Point implements RenderAble {
    get Color(): string {
        return this.color;
    }

    set Color(value: string) {
        this.color = value;
    }

    get GravitationTime(): number {
        return this.gravitationTime;
    }

    set GravitationTime(value: number) {
        this.gravitationTime = value;
    }

    get Radius(): number {
        return this.radius;
    }

    set Radius(value: number) {
        this.radius = value;
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

    private color: string;
    private gravitationTime: number = 1;
    private radius: number;
    private target: HTMLElement;
    private xAxis: number;
    private yAxis: number;

    constructor(xAxis: number, yAxis: number, color: string, radius: number) {
        this.xAxis = xAxis;
        this.yAxis = yAxis;
        this.color = color;
        this.radius = radius;
    }

    public ToNode(): HTMLElement {
        const element = document.createElement("span");

        element.style.left = `${this.XAxis}px`;
        element.style.top = `${this.YAxis}px`;
        element.style.backgroundColor = this.color;
        element.style.transitionDuration = "0.4s";
        element.style.width = `${this.Radius * 2}px`;
        element.style.height = `${this.Radius * 2}px`;
        this.target = element;

        return element;
    }

    public Update(): void {
        this.target.style.left = `${this.XAxis}px`;
        this.target.style.top = `${this.YAxis}px`;
    }
}
