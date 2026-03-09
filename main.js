document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersDisplay = document.querySelector('.numbers-display');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Load saved theme
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'light');
        themeToggle.textContent = '☀️';
    }

    // Theme toggle logic
    themeToggle.addEventListener('click', () => {
        const theme = body.getAttribute('data-theme');
        if (theme === 'light') {
            body.removeAttribute('data-theme');
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        } else {
            body.setAttribute('data-theme', 'light');
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'light');
        }
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    generateBtn.addEventListener('click', () => {
        const numbers = generateLottoNumbers();
        displayNumbers(numbers);
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function displayNumbers(numbers) {
        numbersDisplay.innerHTML = '';
        numbers.forEach((number, index) => {
            setTimeout(() => {
                const numberEl = document.createElement('div');
                numberEl.classList.add('number');
                // The bonus logic (index 5) is preserved for visual variety
                if (index === 5) {
                    numberEl.classList.add('bonus');
                }
                numberEl.textContent = number;
                numbersDisplay.appendChild(numberEl);
            }, index * 150);
        });
    }
});
