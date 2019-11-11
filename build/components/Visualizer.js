export default class Visualizer {
    constructor(document) {
        this.dom = document;
    }
    root() {
        return this.dom.getElementById('root');
    }
    clear() {
        this.root().innerHTML = '';
    }
    render(space) {
        let root = this.root() || new HTMLElement();
        space.points.forEach((point) => {
            root.append(point.toNode());
        });
        return root;
    }
}
//# sourceMappingURL=Visualizer.js.map