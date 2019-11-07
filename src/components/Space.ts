import Point from "./Point";

export default class Space {
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
}
