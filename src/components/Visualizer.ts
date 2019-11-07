import Space from './Space';
import Point from "./Point";

export default class Visualizer {
    private dom: Document;

    constructor(document: Document) {
        this.dom = document;
    }

    public render(space: Space) {
        let root = this.dom.getElementById('root');

        space.points.forEach((point: Point) => {
            root.append(point.toNode());
        });
    }
}
