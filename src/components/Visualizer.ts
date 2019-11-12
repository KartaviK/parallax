import IRenderable from "../interfaces/IRenderable";

export default class Visualizer {
    private dom: Document;
    private readonly target: string;

    constructor(document: Document, target: string = 'root') {
        this.dom = document;
        this.target = target;
    }

    get root(): HTMLElement | null {
        return this.dom.getElementById(this.target);
    }

    public clear(): this {
        this.root.innerHTML = '';

        return this;
    }

    public render<T extends IRenderable>(element: T): HTMLElement {
        let elementsToRender = element.toNode();

        if (elementsToRender instanceof Array) {
            this.root.append(...elementsToRender);
        } else {
            this.root.append(elementsToRender);
        }

        return this.root;
    }
}
