import { animationOptions } from '../options/animationOptions';

export const generateRippleStyle = (options, size) => {
    const rippleColor = options.rippleColor || 'rgba(0, 0, 0, 0.3)';
    const rippleDuration = `${options.rippleDuration || 600}ms`;
    const rippleEasing = options.rippleEasing || animationOptions.easeOutCubic;

    return {
        backgroundColor: rippleColor,
        transitionDuration: rippleDuration,
        animationTimingFunction: rippleEasing,
        transform: `scale(${calculateScale(options, size)})`,
    };
};

const calculateScale = (options, size) => {
    if (options.enableDamping) {
        return Math.max(size / 100, 1) * options.dampingFactor;
    }
    return Math.max(size / 100, 1);
};
