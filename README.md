# FactorialPro - Responsive Landing Page & Calculator
FactorialPro is a responsive web application designed as a landing page for a conceptual "Factorial Calculator" product. It allows users to calculate the factorial of a non-negative integer using both iterative and recursive methods. The application features a clean user interface, product details, testimonials, and a contact form.

## Features

*   **Responsive Design:** The landing page is fully responsive and adapts to various screen sizes (desktops, tablets, mobiles).
*   **Factorial Calculator:**
    *   Input field for a non-negative integer.
    *   Buttons to calculate factorial using:
        *   **Iterative Method:** Efficient for all numbers, especially large ones.
        *   **Recursive Method:** Demonstrates the recursive approach, suitable for smaller numbers due to potential stack overflow.
    *   **Input Validation:** Ensures the user enters a valid non-negative integer. Clear error messages are provided for invalid input.
    *   **BigInt Support:** Uses JavaScript's `BigInt` to handle very large factorial results that exceed the standard number limits.
    *   **Output Display:** Shows the calculated factorial value and the method used.
*   **Landing Page Sections:**
    *   **Hero Section:** Catchy headline and the calculator app itself.
    *   **Product Details:** Highlights key features and benefits of "FactorialPro".
    *   **Testimonials:** Showcases fictional user feedback.
    *   **Contact Form:** A simple (front-end only demo) contact form.
*   **Smooth Scrolling:** Navigation links provide smooth scrolling to different sections of the page.

## Technologies Used

*   **HTML5:** For the structure of the web page.
*   **CSS3:** For styling, layout (Flexbox, Grid), and responsiveness (Media Queries).
*   **JavaScript (ES6+):** For implementing:
    *   Factorial calculation logic (iterative and recursive).
    *   DOM manipulation to interact with the UI.
    *   Input validation.
    *   Event handling.

No backend technologies or external CSS frameworks (like Bootstrap/Tailwind) were used in this core implementation to keep it focused on fundamental web technologies, as per the primary request.

## Setup and Usage

### Local Setup

1.  **Clone the repository or download the files:**
    ```bash
    git clone <repository_url> # If hosted on Git
    cd factorial-page
    ```
    Or simply download `index.html`, `style.css`, and `script.js` into a single folder.

2.  **Open `index.html` in your web browser:**
    Navigate to the folder where you saved the files and double-click `index.html`. This will open the application in your default web browser.

### How to Use the Calculator

1.  **Navigate to the Calculator:** The calculator is prominently displayed in the hero section or can be accessed via the "Calculator" navigation link.
2.  **Enter a Number:** Type a non-negative integer (e.g., 0, 1, 5, 10) into the input field.
3.  **Choose a Method:**
    *   Click the "**Calculate Iterative**" button for the iterative method.
    *   Click the "**Calculate Recursive**" button for the recursive method.
4.  **View Result:** The calculated factorial will be displayed below the buttons, along with the method used.
5.  **Error Handling:**
    *   If you enter invalid input (e.g., text, negative number, decimal), an error message will appear.
    *   For very large numbers with the recursive method, a warning or error regarding stack overflow potential will be shown. The iterative method is recommended for large numbers. Factorials of numbers greater than ~170 result in `Infinity` for standard JavaScript numbers, but this app uses `BigInt` to overcome this, limited mainly by browser performance for extremely large inputs.

## Code Structure

*   `index.html`: Contains the HTML markup for all sections of the landing page, including the calculator UI.
*   `style.css`: Contains all CSS rules for styling the page, making it responsive and visually appealing.
*   `script.js`: Contains the JavaScript logic for:
    *   `factorialIterative(n)`: Calculates factorial iteratively.
    *   `factorialRecursive(n)`: Calculates factorial recursively.
    *   `validateInput(inputValue)`: Validates user input.
    *   `displayResult(value, method)`: Updates the UI with the result.
    *   `displayError(message)`: Shows error messages.
    *   Event listeners for button clicks and form submission.
    *   Smooth scrolling functionality.

## Testing and Compatibility

*   The web application has been designed to be compatible with modern web browsers like Chrome, Firefox, Safari, and Edge.
*   Responsiveness has been tested using browser developer tools to simulate different device viewports. For production, testing on actual devices is recommended.

## Limitations

*   **Recursive Method Stack Overflow:** The recursive factorial calculation can lead to a stack overflow error for large input numbers (typically > 5000-10000, depending on the browser's JavaScript engine). The iterative method is more robust for larger numbers. The UI provides warnings for this.
*   **Extremely Large Numbers:** While `BigInt` is used, calculating and displaying factorials of extremely large numbers (e.g., factorial of 100,000) can still be computationally intensive and might slow down the browser or lead to extremely long strings that are hard to display. Practical limits are in place with warnings.
*   **Contact Form:** The contact form is a front-end-only demonstration. It does not actually send emails or store data. A backend would be required for full functionality.

## Optional Enhancements (Not Implemented)

*   **Backend Integration:** For the contact form to be functional or to offload calculations (though unnecessary for factorial), a backend (e.g., Node.js/Express.js) could be added.
*   **CSS Frameworks:** Bootstrap or Tailwind CSS could be used for faster styling and pre-built responsive components.
*   **Frontend Frameworks:** For more complex single-page applications, React.js, Vue.js, or Angular could be used.
*   **API for Calculation:** An API endpoint could be created if server-side calculation was desired.
*   **Database:** If user data or calculation history needed to be stored.

This project fulfills the requirements by providing a complete front-end solution for the factorial calculator landing page.
