import Vector from "../../interfaces/Vector";

export default class State<T extends Vector> {
    get Direction(): T {
        return this.direction;
    }

    set Direction(value: T) {
        this.direction = value;
    }

    get Position(): T {
        return this.position;
    }

    set Position(value: T) {
        this.position = value;
    }

    get Speed(): T {
        return this.speed;
    }

    set Speed(value: T) {
        this.speed = value;
    }

    private direction: T;
    private position: T;
    private speed: T;

    constructor(position: T, speed: T, direction: T) {
        this.position = position;
        this.speed = speed;
        this.direction = direction;
    }
}
