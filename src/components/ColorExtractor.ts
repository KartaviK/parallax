import randomInt from "random-int";
import randomFloat from "random-float";

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

    public RGB(params: ColorExtractorParams = this.default): string {
        const blue = randomInt(params.blue.min, params.blue.max);
        const green = randomInt(params.green.min, params.green.max);
        const red = randomInt(params.red.min, params.red.max);

        return ColorExtractor.wrap("rgb", [red, green, blue]);
    }

    public RGBA(params: AlphaColorExtractorParams = this.defaultAlpha): string {
        const alpha = parseFloat(randomFloat(params.alpha.min, params.alpha.max).toFixed(2));
        const blue = randomInt(params.blue.min, params.blue.max);
        const green = randomInt(params.green.min, params.green.max);
        const red = randomInt(params.red.min, params.red.max);

        return ColorExtractor.wrap("rgba", [red, green, blue, alpha]);
    }
}
