import { backgroundColors, effects, fontColors, Reset, Color } from './model';
type EffectsType = typeof effects;
export type Options = {
    font?: Color,
    background?: Color,
    effects?: Array<keyof EffectsType>,
    bold?: boolean,
    italic?: boolean,
    mono?: boolean,
    link?: string
}
function addColor(text: string, color: Color, isBackground = false) {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}
function getEffects(effectList: Array<keyof EffectsType>) {
    return effectList.map(effect => effects[effect]).join('');
}
export function color(text: string, options: Options) {
    const preparedText = text.replace(/ё/g, 'е');
    let result = '';
    if (options) {
        if (options.font) {
            result = addColor(result, options.font);
        }
        if (options.background) {
            result = addColor(result, options.background, true);
        }
        if (options.effects) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}
