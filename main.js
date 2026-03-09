document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersDisplay = document.querySelector('.numbers-display');
    const themeToggle = document.getElementById('theme-toggle');
    const historyList = document.getElementById('history-list');
    const clearHistoryBtn = document.getElementById('clear-history');
    const body = document.body;

    // History data
    let history = JSON.parse(localStorage.getItem('lotto-history')) || [];

    // Initialize UI
    updateHistoryUI();

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
        saveToHistory(numbers);
    });

    clearHistoryBtn.addEventListener('click', () => {
        if (confirm('모든 추첨 기록을 삭제하시겠습니까?')) {
            history = [];
            localStorage.removeItem('lotto-history');
            updateHistoryUI();
        }
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        // Generate 6 numbers, 6th is bonus
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }
        const sorted = Array.from(numbers).slice(0, 5).sort((a, b) => a - b);
        const bonus = Array.from(numbers)[5];
        return [...sorted, bonus];
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
            }, index * 150);
        });
    }

    function saveToHistory(numbers) {
        const entry = {
            numbers: numbers,
            date: new Date().toLocaleString()
        };
        history.unshift(entry);
        if (history.length > 20) history.pop(); // Keep last 20
        localStorage.setItem('lotto-history', JSON.stringify(history));
        
        // Update UI after a short delay to match the animation
        setTimeout(updateHistoryUI, 1000);
    }

    function updateHistoryUI() {
        if (history.length === 0) {
            historyList.innerHTML = '<p class="empty-msg">아직 추첨된 번호가 없습니다.</p>';
            clearHistoryBtn.style.display = 'none';
            return;
        }

        clearHistoryBtn.style.display = 'block';
        historyList.innerHTML = '';
        history.forEach(entry => {
            const item = document.createElement('div');
            item.classList.add('history-item');
            
            let numsHtml = '<div class="history-nums">';
            entry.numbers.forEach((n, i) => {
                numsHtml += `<div class="history-num ${i === 5 ? 'bonus' : ''}">${n}</div>`;
            });
            numsHtml += '</div>';

            item.innerHTML = `
                ${numsHtml}
                <div class="history-date">${entry.date}</div>
            `;
            historyList.appendChild(item);
        });
    }
});
