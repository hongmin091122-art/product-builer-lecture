document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersDisplay = document.querySelector('.numbers-display');

    generateBtn.addEventListener('click', () => {
        const numbers = generateLottoNumbers();
        displayNumbers(numbers);
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }
        return Array.from(numbers);
    }

    function displayNumbers(numbers) {
        numbersDisplay.innerHTML = '';
        numbers.forEach((number, index) => {
            setTimeout(() => {
                const numberEl = document.createElement('div');
                numberEl.classList.add('number');
                if (index === 5) {
                    numberEl.classList.add('bonus');
                }
                numberEl.textContent = number;
                numbersDisplay.appendChild(numberEl);
            }, index * 200);
        });
    }
});
