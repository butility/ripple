## API

### Ripple Constructor

```typescript
new Ripple(element: HTMLElement, options?: RippleOptions)
```

- **element**: The DOM element to which the ripple effect will be applied.
- **options**: Optional object to customize the ripple effect. See `RippleOptions` below.

### `RippleOptions`

| Option          | Type    | Default                   | Description                                                                 |
|-----------------|---------|---------------------------|-----------------------------------------------------------------------------|
| `rippleColor`    | string  | `'rgba(0, 0, 0, 0.3)'`    | The color of the ripple effect. Accepts any valid CSS color value.           |
| `rippleDuration` | number  | `600`                     | The duration of the ripple animation in milliseconds.                       |
| `rippleEasing`   | string  | `'ease-out'`              | CSS easing function for the ripple animation.                               |
| `overflowHidden` | boolean | `true`                    | Set element’s overflow to 'hidden' to prevent ripple overflow.              |
| `rippleRadius`   | number  | `null`                    | Set a fixed radius for the ripple (optional). Defaults to auto-scaling.     |
| `customClass`    | string  | `null`                    | Add a custom CSS class to the ripple effect element.                        |
| `enableDamping`  | boolean | `true`                    | Enable damping for ripple growth.                                           |
| `dampingFactor`  | number  | `0.8`                     | Factor to control damping. Lower values make the ripple slower.             |

### Methods

#### `updateOptions(newOptions: Partial<RippleOptions>): void`

Updates the existing ripple options after initialization.

```javascript
ripple.updateOptions({
  rippleColor: 'blue',
  rippleDuration: 400
});
```

#### `destroy(): void`

Removes the ripple effect from the element and restores its original state.

```javascript
ripple.destroy();
```

---

## Presets

### `lightRipple(element: HTMLElement): Ripple`

Applies a light-themed ripple effect to the specified element.

```javascript
lightRipple(element);
```

### `darkRipple(element: HTMLElement): Ripple`

Applies a dark-themed ripple effect to the specified element.

```javascript
darkRipple(element);
```

### `customRipple(element: HTMLElement, options: RippleOptions): Ripple`

Applies a customizable ripple effect with user-defined options.

```javascript
customRipple(element, {
  rippleColor: 'purple',
  rippleDuration: 800,
  enableDamping: false
});
```

## Development

### Building the Bundle

To build the bundled JavaScript file (`ripple.bundle.js`), run:

```bash
npm run build
npm run build:types
```

This will use `esbuild` to bundle the JavaScript files in `src/` and output the result into `/`.

### Running Examples

To see the ripple effect in action, open one of the example HTML files in the `examples/` folder in your browser.