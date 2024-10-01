import { Ripple } from '../core/ripple';
import { colorOptions } from '../options/colorOptions';

export const lightRipple = (element) => {
    const lightOptions = {
        rippleColor: colorOptions.lightMode,
        rippleDuration: 400,
        rippleEasing: 'ease-out',
        overflowHidden: true,
    };

    return new Ripple(element, lightOptions);
};
