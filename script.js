document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.getElementById('numberInput');
    const iterativeBtn = document.getElementById('iterativeBtn');
    const recursiveBtn = document.getElementById('recursiveBtn');
    const resultArea = document.getElementById('resultArea');
    const errorArea = document.getElementById('errorArea').querySelector('.error-message');
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');

    const resultPlaceholderText = "Your result will appear here.";

    // --- Factorial Logic ---

    function factorialIterative(n) {
        if (n === 0) return 1n; // Use BigInt for larger numbers
        let result = 1n;
        for (let i = 1n; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    function factorialRecursive(n) {
        if (n === 0n) return 1n; // Base case for recursion, using BigInt
        // Check for potential stack overflow with a reasonable limit
        // JavaScript's exact stack limit varies, but factorials grow very fast
        // For numbers > ~20, the result itself becomes extremely large.
        // For much larger numbers, iterative is safer.
        if (n > 20n && n < 10000n) { // A heuristic limit for recursion display
             // Warn but still try for demonstration, large values will hit JS recursion depth.
             // Real large number factorials are best with iterative.
        }
        if (n > 10000n) { // Arbitrary practical limit for recursion due to stack depth
            return "Number too large for practical recursive calculation (stack overflow risk). Use iterative.";
        }
        return n * factorialRecursive(n - 1n);
    }

    // --- Input Validation & UI Update ---

    function validateInput(inputValue) {
        errorArea.textContent = ''; // Clear previous errors
        resultArea.innerHTML = `<p class="result-placeholder">${resultPlaceholderText}</p>`; // Reset result

        if (inputValue.trim() === '') {
            errorArea.textContent = 'Error: Please enter a number.';
            return null;
        }
        
        const num = Number(inputValue);

        if (isNaN(num)) {
            errorArea.textContent = 'Error: Input must be a number.';
            return null;
        }
        if (!Number.isInteger(num)) {
            errorArea.textContent = 'Error: Input must be an integer.';
            return null;
        }
        if (num < 0) {
            errorArea.textContent = 'Error: Input must be a non-negative integer.';
            return null;
        }
        // JavaScript numbers lose precision for very large factorials
        // Using BigInt helps, but display can still be an issue.
        // Factorial of numbers > 20 are already huge.
        // Factorial of 170 is the max before Infinity for standard numbers.
        // With BigInt, we are limited by memory/processing time.
        if (num > 10000) { // A practical limit for performance and display with BigInt
             errorArea.textContent = 'Warning: Numbers > 10000 can take very long to compute and display.';
             // We can still proceed but it's good to warn
        }


        return BigInt(num); // Convert to BigInt for calculation
    }

    function displayResult(value, method) {
        let resultString = value.toString();
        if (resultString.length > 50) { // Truncate very long results for display
            resultString = resultString.substring(0, 47) + "... (result too long to display fully)";
        }
        resultArea.innerHTML = `
            <p>Factorial: ${resultString}</p>
            <p><small>Method: ${method}</small></p>
        `;
        errorArea.textContent = ''; // Clear any previous error/warning
    }

    function displayError(message) {
        resultArea.innerHTML = `<p class="result-placeholder">${resultPlaceholderText}</p>`;
        errorArea.textContent = message;
    }


    // --- Event Listeners for Calculator ---
    iterativeBtn.addEventListener('click', () => {
        const n = validateInput(numberInput.value);
        if (n !== null) {
            try {
                const result = factorialIterative(n);
                displayResult(result, 'Iterative');
            } catch (e) {
                displayError('An error occurred during iterative calculation.');
                console.error("Iterative Error:", e);
            }
        }
    });

    recursiveBtn.addEventListener('click', () => {
        const n = validateInput(numberInput.value);
        if (n !== null) {
            if (n > 20n && n < 10000n) { // Warn for recursion on larger (but not excessively large) numbers
                errorArea.textContent = 'Warning: Recursive calculation for larger numbers can be slow or hit stack limits. Iterative is recommended.';
            }
             if (n > 5000n) { // Harder limit for recursion to prevent browser freezing
                displayError('Number too large for practical recursive calculation due to stack depth. Please use iterative method or a smaller number.');
                return;
            }
            try {
                const result = factorialRecursive(n);
                if (typeof result === 'string' && result.startsWith("Number too large")) {
                    displayError(result);
                } else {
                    displayResult(result, 'Recursive');
                }
            } catch (e) {
                if (e instanceof RangeError) { // Catches stack overflow
                    displayError('Error: Stack overflow during recursive calculation. Number is too large. Use iterative method.');
                } else {
                    displayError('An error occurred during recursive calculation.');
                }
                console.error("Recursive Error:", e);
            }
        }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('header nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact Form Submission (Dummy)
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formStatus.textContent = 'Sending...';
            formStatus.style.color = '#007bff';

            // Simulate API call
            setTimeout(() => {
                formStatus.textContent = 'Thank you! Your message has been "sent". (This is a demo)';
                formStatus.style.color = 'green';
                contactForm.reset();
                setTimeout(() => {
                    formStatus.textContent = ''; // Clear message after a few seconds
                }, 5000);
            }, 1500);
        });
    }
});