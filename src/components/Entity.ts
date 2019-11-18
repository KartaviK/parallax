import Vector from "../interfaces/Vector";
import State from "./Entity/State";

export default class Entity<T extends State<Vector>> {
    get Height(): number {
        return parseInt(this.Target.style.height, 10);
    }

    set Height(value: number) {
        this.Target.style.height = `${value}px`;
    }

    get State(): T {
        return this.state;
    }

    set State(value: T) {
        this.state = value;
    }

    get Target(): HTMLElement {
        return this.target;
    }

    get Width(): number {
        return parseInt(this.Target.style.width, 10);
    }

    set Width(value: number) {
        this.Target.style.width = `${value}px`;
    }

    private state: T;
    private readonly target: HTMLElement;

    constructor(target: HTMLElement, state: T, width: number, height: number) {
        this.state = state;
        this.target = target;

        this.Target.style.left = `${state.Position.x}px`;
        this.Target.style.top = `${state.Position.y}px`;
        this.Target.style.width = `${width}px`;
        this.Target.style.height = `${height}px`;
    }
}
