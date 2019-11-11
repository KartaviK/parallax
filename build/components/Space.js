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
}
//# sourceMappingURL=Space.js.map