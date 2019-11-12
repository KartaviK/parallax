export default class Visualizer {
    constructor(document, target = 'root') {
        this.dom = document;
        this.target = target;
    }
    get root() {
        return this.dom.getElementById(this.target);
    }
    clear() {
        this.root.innerHTML = '';
        return this;
    }
    render(element) {
        let elementsToRender = element.toNode();
        if (elementsToRender instanceof Array) {
            this.root.append(...elementsToRender);
        }
        else {
            this.root.append(elementsToRender);
        }
        return this.root;
    }
}
//# sourceMappingURL=Visualizer.js.map