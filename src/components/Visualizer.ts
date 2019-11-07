import Space from './Space';
import Point from "./Point";

export default class Visualizer {
    private dom: Document;

    constructor(document: Document) {
        this.dom = document;
    }

    protected root(): HTMLElement|null {
        return this.dom.getElementById('root');
    }

    public clear() {
        this.root().innerHTML = '';
    }

    public render(space: Space) {
        let root = this.root() || new HTMLElement();

        space.points.forEach((point: Point) => {
            root.append(point.toNode());
        });

        return root;
    }
}
