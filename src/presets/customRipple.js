import { Ripple } from '../core/ripple';

export const customRipple = (element, userOptions) => {
    const customOptions = {
        rippleColor: userOptions.rippleColor || 'rgba(255, 0, 0, 0.5)', // Default is a red ripple
        rippleDuration: userOptions.rippleDuration || 800,
        rippleEasing: userOptions.rippleEasing || 'ease-in-out',
        rippleRadius: userOptions.rippleRadius || null, // Allows for fixed radius if defined
        customClass: userOptions.customClass || 'custom-ripple',
        enableDamping:
            userOptions.enableDamping !== undefined
                ? userOptions.enableDamping
                : true,
        dampingFactor: userOptions.dampingFactor || 0.75,
    };

    return new Ripple(element, customOptions);
};
