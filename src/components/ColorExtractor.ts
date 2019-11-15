export type Random = (min: number, max: number, int: boolean) => number;

export interface NumberInterval {
    min?: number,
    max?: number
}

export interface ColorExtractorParams {
    red?: NumberInterval,
    green?: NumberInterval,
    blue?: NumberInterval,
}

export interface AlphaColorExtractorParams extends ColorExtractorParams{
    alpha?: NumberInterval,
}

export default class ColorExtractor {
    private readonly random: Random;

    private default: ColorExtractorParams = {
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
    private defaultAlpha: AlphaColorExtractorParams = {
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

    constructor(random: (min: number, max: number, int: boolean) => number) {
        this.random = random;
    }

    public rgb(params: ColorExtractorParams = this.default): string {
        let red = this.random(params.red.min, params.red.max, true);
        let green = this.random(params.green.min, params.green.max, true);
        let blue = this.random(params.blue.min, params.blue.max, true);

        return ColorExtractor.wrap('rgb', [red, green, blue]);
    }

    public rgba(params: AlphaColorExtractorParams = this.defaultAlpha): string {
        let red = this.random(params.red.min, params.red.max, true);
        let green = this.random(params.green.min, params.green.max, true);
        let blue = this.random(params.blue.min, params.blue.max, true);
        let alpha = parseFloat(this.random(params.alpha.min, params.alpha.max, false).toFixed(2));

        return ColorExtractor.wrap('rgba', [red, green, blue, alpha]);
    }

    protected static wrap(type: string, values: number[]) {
        return `${type}(${values.join(', ')})`;
    }
}
