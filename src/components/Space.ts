import RenderAble from "../interfaces/RenderAble";
import Point from "./Point";

export default class Space implements RenderAble {

    get Points(): Point[] {
        return this.points;
    }

    constructor(points: Point[] = []) {
        this.points = points;
    }
    private readonly points: Point[];

    public Append(point: Point) {
        this.points.push(point);
    }

    public ToNode(): HTMLElement | HTMLElement[] {
        return this.Points.map((point: Point) => point.ToNode());
    }
}
