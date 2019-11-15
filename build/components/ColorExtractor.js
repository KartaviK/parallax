export default class ColorExtractor {
    constructor(random) {
        this.default = {
            red: {
                min: 0,
                max: 255,
            },
            green: {
                min: 0,
                max: 255,
            },
            blue: {
                min: 0,
                max: 255
            }
        };
        this.defaultAlpha = {
            red: {
                min: 0,
                max: 255,
            },
            green: {
                min: 0,
                max: 255,
            },
            blue: {
                min: 0,
                max: 255,
            },
            alpha: {
                min: 0,
                max: 1,
            },
        };
        this.random = random;
    }
    rgb(params = this.default) {
        let red = this.random(params.red.min, params.red.max, true);
        let green = this.random(params.green.min, params.green.max, true);
        let blue = this.random(params.blue.min, params.blue.max, true);
        return ColorExtractor.wrap('rgb', [red, green, blue]);
    }
    rgba(params = this.defaultAlpha) {
        let red = this.random(params.red.min, params.red.max, true);
        let green = this.random(params.green.min, params.green.max, true);
        let blue = this.random(params.blue.min, params.blue.max, true);
        let alpha = parseFloat(this.random(params.alpha.min, params.alpha.max, false).toFixed(2));
        return ColorExtractor.wrap('rgba', [red, green, blue, alpha]);
    }
    static wrap(type, values) {
        return `${type}(${values.join(', ')})`;
    }
}
//# sourceMappingURL=ColorExtractor.js.map