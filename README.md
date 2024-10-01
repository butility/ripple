
# Butility Ripple Effect Utils

A lightweight, highly customizable ripple effect library from @butility for adding interactive feedback to any HTML element. This package is designed for browser environments, bundled using `esbuild`, and provides flexibility through both default and custom ripple options.

## Features

- **No external dependencies**.
- **Highly customizable**: Control color, duration, easing, damping, and more.
- **Multiple presets**: Light and dark ripple themes, with an option for full customization.
- **Easy integration**: Apply ripple effects to any element in your web app.
- **Pure JavaScript**: No bundler is required for CSS, but it's easy to customize.

## Installation

To install the package, you can use npm or CDN:

```sh
npm install @butility/ripple
```

```html
<!-- To use all the functions and methods -->
<script src="https://unpkg.com/@butility/ripple@latest/ripple.js" type="module"></script>
<!-- Get the css -->
<script src="https://unpkg.com/@butility/ripple@latest/ripple.css"></script>

<script src="https://cdn.jsdelivr.net/npm/@butility/ripple@latest/ripple.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/@butility/ripple@latest/ripple.css"></script>
```

## Usage

- For detailed example, you can refer to the [example](https://github.com/butility/ripple/tree/main/example/) files and see in action code.
### 1. Basic Ripple Effect

To add a basic ripple effect to an element, simply create a new instance of the `Ripple` class:

```html
<button id="myButton">Click Me</button>

<script>
  const button = document.getElementById('myButton');
  const ripple = new Ripple(button);
</script>
```

This will apply a default ripple effect to the button.

### 2. Light and Dark Presets

If you prefer a themed ripple effect, you can use the light or dark presets:

```html
<script>
  const button = document.getElementById('lightButton');
  lightRipple(button); // Apply light ripple theme

  const darkButton = document.getElementById('darkButton');
  darkRipple(darkButton); // Apply dark ripple theme
</script>
```

### 3. Custom Ripple Effect

You can customize the ripple effect with various options like color, duration, easing, and more:

```html
<script>
  const customButton = document.getElementById('customButton');
  customRipple(customButton, {
    rippleColor: 'rgba(0, 150, 136, 0.5)', // Custom ripple color
    rippleDuration: 1000, // Ripple lasts for 1 second
    rippleEasing: 'ease-in-out', // Custom easing function
    enableDamping: true, // Enable damping for slower growth
    dampingFactor: 0.7 // Adjust the damping effect
  });
</script>
```

## Documentation

For `@butility/ripple` documentation refer to the [docs/api.md file](https://github.com/butility/ripple/tree/main/docs/api.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for more details.

