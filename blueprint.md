# Project Blueprint: Lotto Number Generator

## Overview

This project will create a visually stunning, single-page web application that generates random Lotto numbers. The application will be built using modern HTML, CSS, and JavaScript, with a focus on a bold, colorful, and engaging user experience.

## Design and Features

### Visual Design

*   **Color Palette:** A vibrant and energetic color palette will be used, featuring strong gradients and contrasting colors to create a dynamic look and feel. The application will support both a default (dark) and a light theme.
*   **Typography:** Expressive and modern fonts will be used to create a clear visual hierarchy.
*   **Layout:** A clean, centered layout will be used to focus the user's attention on the generated numbers.
*   **Effects:**
    *   **3D/Lifted Effect:** The number containers will have a "lifted" appearance using multi-layered drop shadows.
    *   **Glow Effect:** Interactive elements like the "Generate" button will have a subtle glow effect.
    *   **Animations:** The numbers will be animated as they appear, adding to the engaging experience.
    *   **Background:** A subtle noise texture will be applied to the background to add a premium feel.

### Features

*   **Number Generation:**
    *   The application will generate 5 unique random numbers from 1 to 45.
    *   It will also generate 1 unique bonus number from 1 to 45, ensuring it does not conflict with the main numbers.
*   **Display:**
    *   The generated numbers will be displayed in individual, styled containers.
    *   The bonus number will be visually distinct from the main numbers.
*   **Interactivity:**
    *   A "Generate Numbers" button will trigger the number generation process.
    *   A "Toggle Theme" button will switch the application between a dark and a light theme.
*   **Draw History:**
    *   Generated numbers will be automatically saved to the browser's local storage.
    *   A list of recent draws will be displayed, allowing users to review their history.
    *   A "Clear History" option will be provided to remove all saved records.

## File Structure

```
.
├── blueprint.md
├── index.html
├── main.js
└── style.css
```

## Current Task: Implement Theme Toggling

1.  **`blueprint.md`:** Update the project blueprint to include the theme toggling feature.
2.  **`style.css`:**
    *   Define CSS variables for both light and dark themes.
    *   Create a `.light-mode` class to apply the light theme styles when added to the `body` element.
3.  **`main.js`:**
    *   Get a reference to the theme toggle button from `index.html`.
    *   Add a `click` event listener to the button.
    *   Implement the logic to toggle the `.light-mode` class on the `body` element when the button is clicked.
