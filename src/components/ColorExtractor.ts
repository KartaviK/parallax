export type Random = (min: number, max: number, int: boolean) => number;

export interface INumberInterval {
    min?: number;
    max?: number;
}

export interface IColorExtractorParams {
    red?: INumberInterval;
    green?: INumberInterval;
    blue?: INumberInterval;
}

export interface IAlphaColorExtractorParams extends IColorExtractorParams {
    alpha?: INumberInterval;
}

export default class ColorExtractor {
    protected static wrap(type: string, values: number[]) {
        return `${type}(${values.join(", ")})`;
    }

    private readonly random: Random;

    private default: IColorExtractorParams = {
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
    private defaultAlpha: IAlphaColorExtractorParams = {
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

    constructor(random: (min: number, max: number, int: boolean) => number) {
        this.random = random;
    }

    public RGB(params: IColorExtractorParams = this.default): string {
        const blue = this.random(params.blue.min, params.blue.max, true);
        const green = this.random(params.green.min, params.green.max, true);
        const red = this.random(params.red.min, params.red.max, true);

        return ColorExtractor.wrap("rgb", [red, green, blue]);
    }

    public RGBA(params: IAlphaColorExtractorParams = this.defaultAlpha): string {
        const alpha = parseFloat(this.random(params.alpha.min, params.alpha.max, false).toFixed(2));
        const blue = this.random(params.blue.min, params.blue.max, true);
        const green = this.random(params.green.min, params.green.max, true);
        const red = this.random(params.red.min, params.red.max, true);

        return ColorExtractor.wrap("rgba", [red, green, blue, alpha]);
    }
}
