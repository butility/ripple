import { Ripple } from '../core/ripple';
import { colorOptions } from '../options/colorOptions';

export const darkRipple = (element) => {
    const darkOptions = {
        rippleColor: colorOptions.darkMode,
        rippleDuration: 500,
        rippleEasing: 'ease-in-out',
        overflowHidden: true,
        enableDamping: false,
    };

    return new Ripple(element, darkOptions);
};
