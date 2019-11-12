import Point from "./Point.js";
import IRenderable from "../interfaces/IRenderable.js";

export default class Space implements IRenderable {
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
