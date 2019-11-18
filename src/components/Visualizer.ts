import RenderAble from "../interfaces/RenderAble";

export default class Visualizer {

    get Root(): HTMLElement | null {
        return this.dom.getElementById(this.target);
    }

    constructor(document: Document, target: string = "root") {
        this.dom = document;
        this.target = target;
    }
    private dom: Document;
    private readonly target: string;

    public Clear(): this {
        this.Root.innerHTML = "";

        return this;
    }

    public Render<T extends RenderAble>(element: T): HTMLElement {
        const elementsToRender = element.ToNode();

        if (elementsToRender instanceof Array) {
            this.Root.append(...elementsToRender);
        } else {
            this.Root.append(elementsToRender);
        }

        return this.Root;
    }
}
