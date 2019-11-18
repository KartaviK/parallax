export type Random = (min: number, max: number, int: boolean) => number;

export interface NumberInterval {
    max?: number;
    min?: number;
}

export interface ColorExtractorParams {
    blue?: NumberInterval;
    green?: NumberInterval;
    red?: NumberInterval;
}

export interface AlphaColorExtractorParams extends ColorExtractorParams {
    alpha?: NumberInterval;
}

export default class ColorExtractor {
    protected static wrap(type: string, values: number[]) {
        return `${type}(${values.join(", ")})`;
    }

    private default: ColorExtractorParams = {
        blue: {
            max: 255,
            min: 0,
        },
        green: {
            max: 255,
            min: 0,
        },
        red: {
            max: 255,
            min: 0,
        },
    };
    private defaultAlpha: AlphaColorExtractorParams = {
        alpha: {
            max: 1,
            min: 0,
        },
        blue: {
            max: 255,
            min: 0,
        },
        green: {
            max: 255,
            min: 0,
        },
        red: {
            max: 255,
            min: 0,
        },
    };

    private readonly random: Random;

    constructor(random: (min: number, max: number, int: boolean) => number) {
        this.random = random;
    }

    public RGB(params: ColorExtractorParams = this.default): string {
        const blue = this.random(params.blue.min, params.blue.max, true);
        const green = this.random(params.green.min, params.green.max, true);
        const red = this.random(params.red.min, params.red.max, true);

        return ColorExtractor.wrap("rgb", [red, green, blue]);
    }

    public RGBA(params: AlphaColorExtractorParams = this.defaultAlpha): string {
        const alpha = parseFloat(this.random(params.alpha.min, params.alpha.max, false).toFixed(2));
        const blue = this.random(params.blue.min, params.blue.max, true);
        const green = this.random(params.green.min, params.green.max, true);
        const red = this.random(params.red.min, params.red.max, true);

        return ColorExtractor.wrap("rgba", [red, green, blue, alpha]);
    }
}
