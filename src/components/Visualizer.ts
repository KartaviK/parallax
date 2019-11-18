import IRenderable from "../interfaces/IRenderable";

export default class Visualizer {
    private dom: Document;
    private readonly target: string;

    constructor(document: Document, target: string = "root") {
        this.dom = document;
        this.target = target;
    }

    get Root(): HTMLElement | null {
        return this.dom.getElementById(this.target);
    }

    public Clear(): this {
        this.Root.innerHTML = "";

        return this;
    }

    public Render<T extends IRenderable>(element: T): HTMLElement {
        const elementsToRender = element.ToNode();

        if (elementsToRender instanceof Array) {
            this.Root.append(...elementsToRender);
        } else {
            this.Root.append(elementsToRender);
        }

        return this.Root;
    }
}
