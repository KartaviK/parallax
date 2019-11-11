export default class Point {
    constructor(xAxis, yAxis, color) {
        this._xAxis = xAxis;
        this._yAxis = yAxis;
        this._color = color;
    }
    get xAxis() {
        return this._xAxis;
    }
    get yAxis() {
        return this._yAxis;
    }
    get color() {
        return this._color;
    }
    set xAxis(value) {
        this._xAxis = value;
    }
    set yAxis(value) {
        this._yAxis = value;
    }
    set color(value) {
        this._color = value;
    }
    update() {
        this.target.style.left = `${this.xAxis.toString()}px`;
        this.target.style.top = `${this.yAxis.toString()}px`;
    }
    toNode() {
        let element = document.createElement('span');
        element.style.position = 'absolute';
        element.style.left = `${this.xAxis.toString()}px`;
        element.style.top = `${this.yAxis.toString()}px`;
        element.style.width = '3px';
        element.style.height = '3px';
        element.style.borderRadius = '50%';
        element.style.backgroundColor = this._color;
        this.target = element;
        return element;
    }
}
//# sourceMappingURL=Point.js.map