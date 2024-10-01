// Example JavaScript for interactive demo purposes
window.onload = function() {
    const buttons = document.querySelectorAll('.ripple-button, .ripple-advanced-button');
    
    buttons.forEach(button => {
        new Ripple(button);  // Default ripple for each button on the page
    });

    const advancedButton = document.getElementById('advanced-button');
    
    // Custom ripple for advanced button with user options
    customRipple(advancedButton, {
        rippleColor: 'rgba(0, 0, 255, 0.3)',
        rippleDuration: 1200,  // Make the ripple last longer
        rippleEasing: 'ease-in',
        dampingFactor: 0.7
    });
};
