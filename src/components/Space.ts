import IRenderable from "../interfaces/IRenderable";
import Point from "./Point";

export default class Space implements IRenderable {
    private readonly points: Point[];

    constructor(points: Point[] = []) {
        this.points = points;
    }

    get Points(): Point[] {
        return this.points;
    }

    public Append(point: Point) {
        this.points.push(point);
    }

    public ToNode(): HTMLElement | HTMLElement[] {
        return this.Points.map((point: Point) => point.ToNode());
    }
}
