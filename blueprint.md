# Project Blueprint: Lotto Number Generator

## Overview

This project will create a visually stunning, single-page web application that generates random Lotto numbers. The application will be built using modern HTML, CSS, and JavaScript, with a focus on a bold, colorful, and engaging user experience.

## Design and Features

### Visual Design

*   **Color Palette:** A vibrant and energetic color palette will be used, featuring strong gradients and contrasting colors to create a dynamic look and feel.
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
    *   The button will have a hover effect to indicate interactivity.

## File Structure

```
.
├── index.html
├── main.js
└── style.css
```

## Implementation Plan

1.  **`index.html`:**
    *   Set up the basic HTML structure with a title, a container for the app, and a "Generate Numbers" button.
    *   Create placeholders for the generated numbers.
    .
2.  **`style.css`:**
    *   Implement the vibrant color palette and background texture.
    *   Style the number containers with the lifted effect and animations.
    *   Style the "Generate" button with the glow effect.
3.  **`main.js`:**
    *   Create a function to generate the unique random numbers.
    *   Add an event listener to the "Generate" button to call the number generation function.
    *   Update the HTML to display the newly generated numbers with animations.
