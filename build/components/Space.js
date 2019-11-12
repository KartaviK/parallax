export default class Space {
    constructor(points = []) {
        this._points = points;
    }
    get points() {
        return this._points;
    }
    append(point) {
        this._points.push(point);
    }
    toNode() {
        return this.points.map((point) => point.toNode());
    }
}
//# sourceMappingURL=Space.js.map