import Point from "./Point";
import Renderable from "../interfaces/Renderable";

export default class Space implements Renderable {
    private _points: Point[];

    constructor(points: Point[] = []) {
        this._points = points;
    }

    get points(): Point[] {
        return this._points;
    }

    public append(point: Point) {
        this._points.push(point);
    }

    toNode(): HTMLElement | HTMLElement[] {
        return this.points.map((point : Point) => point.toNode());
    }
}