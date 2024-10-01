import { Ripple } from './core/ripple';
import { lightRipple } from './presets/lightRipple';
import { darkRipple } from './presets/darkRipple';
import { customRipple } from './presets/customRipple';

export { Ripple as default, lightRipple, darkRipple, customRipple };

// Global utility for direct usage in browser environments
if (typeof window !== 'undefined') {
    window.Ripple = Ripple;
    window.lightRipple = lightRipple;
    window.darkRipple = darkRipple;
    window.customRipple = customRipple;
}
