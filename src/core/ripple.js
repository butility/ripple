
import { addStyles } from "@butility/style/css";
import { span } from "@butility/dom/html";
import { mergeDeep } from '../utils/dom';
import { defaultOptions } from '../options/defaultOptions';
import { generateRippleStyle } from '../utils/style';

export class Ripple {
    constructor(element, userOptions = {}) {
        if (!element) throw new Error('No element provided for ripple effect.');
        this.element = element;
        this.options = mergeDeep(defaultOptions, userOptions);
        this.isAnimating = false;

        this.init();
    }

    init() {
        this.applyInitialStyles();
        this.element.addEventListener('mousedown', this.handleRipple.bind(this));
        this.element.addEventListener('touchstart', this.handleRipple.bind(this));
    }

    applyInitialStyles() {
        const { overflowHidden } = this.options;
        if (overflowHidden) {
            addStyles(this.element, { overflow: "hidden" });
        }
    }

    handleRipple(event) {
        if (this.isAnimating) return;
        this.isAnimating = true;

        const rippleContainer = span({ class: "ripple-container" });
        const ripple = span({ class: "ripple" });
        const size = Math.max(this.element.offsetWidth, this.element.offsetHeight);
        const rect = this.element.getBoundingClientRect();
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        addStyles(rippleContainer, {
            width: `${size}px`,
            height: `${size}px`,
            left: `${x}px`,
            top: `${y}px`
        });

        const rippleStyle = generateRippleStyle(this.options, size);
        addStyles(ripple, rippleStyle);

        rippleContainer.appendChild(ripple);
        this.element.appendChild(rippleContainer);

        ripple.addEventListener('animationend', () => {
            rippleContainer.remove();
            this.isAnimating = false;
        });
    }

    updateOptions(newOptions) {
        this.options = mergeDeep(this.options, newOptions);
    }

    destroy() {
        this.element.removeEventListener('mousedown');
        this.element.removeEventListener('touchstart');
        addStyles(this.element, {
            overflow: ""
        });
    }
}
