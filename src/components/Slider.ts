export default class Slider {
    private readonly target: HTMLInputElement;

    constructor(target: string) {
        const input = document.getElementById(target);

        if (input instanceof HTMLInputElement && input.type === "range") {
            this.target = input;
        } else {
            throw new Error("Given target must be exist input element");
        }
    }

    get Target(): HTMLInputElement {
        return this.target;
    }

    get Value(): string {
        return this.target.value;
    }
}
