export default class Slider {

    get Target(): HTMLInputElement {
        return this.target;
    }

    get Value(): string {
        return this.target.value;
    }

    constructor(target: string) {
        const input = document.getElementById(target);

        if (input instanceof HTMLInputElement && input.type === "range") {
            this.target = input;
        } else {
            throw new Error("Given target must be exist input element");
        }
    }
    private readonly target: HTMLInputElement;
}
