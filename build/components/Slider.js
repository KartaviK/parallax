export default class Slider {
    constructor(target) {
        let input = document.getElementById(target);
        if (input instanceof HTMLInputElement && input.type === 'range') {
            this._target = input;
        }
        else {
            throw new Error('Given target must be exist input element');
        }
    }
    get target() {
        return this._target;
    }
    get value() {
        return this._target.value;
    }
}
//# sourceMappingURL=Slider.js.map