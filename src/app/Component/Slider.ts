export default class Slider {
    private readonly _target: HTMLInputElement;

    constructor(target: string) {
        let input = document.getElementById(target);

        if (input instanceof HTMLInputElement && input.type === 'range') {
            this._target = input;
        } else {
            throw new Error('Given target must be exist input element');
        }
    }

    get target(): HTMLInputElement {
        return this._target;
    }

    get value(): string {
        return this._target.value;
    }
}
