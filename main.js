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

    // Load saved theme (Default to Light now)
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️'; // Sun icon for switching to light
    } else {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙'; // Moon icon for switching to dark
    }

    // Theme toggle logic
    themeToggle.addEventListener('click', () => {
        const theme = body.getAttribute('data-theme');
        if (theme === 'dark') {
            body.removeAttribute('data-theme');
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
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
        // Generate 7 numbers total (6 main + 1 bonus)
        while (numbers.size < 7) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }
        const tempArray = Array.from(numbers);
        const sorted = tempArray.slice(0, 6).sort((a, b) => a - b);
        const bonus = tempArray[6];
        return [...sorted, bonus];
    }

    function getBallColor(num) {
        if (num <= 10) return 'var(--ball-10)';
        if (num <= 20) return 'var(--ball-20)';
        if (num <= 30) return 'var(--ball-30)';
        if (num <= 40) return 'var(--ball-40)';
        return 'var(--ball-45)';
    }

    function displayNumbers(numbers) {
        numbersDisplay.innerHTML = '';
        numbers.forEach((number, index) => {
            setTimeout(() => {
                if (index === 6) {
                    const bonusWrapper = document.createElement('div');
                    bonusWrapper.classList.add('bonus-wrapper');
                    bonusWrapper.innerHTML = `
                        <span class="plus-sign">+</span>
                        <div class="number bonus" style="background-color: ${getBallColor(number)}">${number}</div>
                    `;
                    numbersDisplay.appendChild(bonusWrapper);
                } else {
                    const numberEl = document.createElement('div');
                    numberEl.classList.add('number');
                    numberEl.textContent = number;
                    numberEl.style.backgroundColor = getBallColor(number);
                    numbersDisplay.appendChild(numberEl);
                }
            }, index * 100);
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
            historyList.innerHTML = '<p class="empty-msg" style="text-align:center; color:var(--text-tertiary); padding: 40px;">아직 추첨된 번호가 없습니다.</p>';
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
                if (i === 6) {
                    numsHtml += `<span class="plus-sign-mini">+</span>`;
                }
                numsHtml += `<div class="history-num" style="background-color: ${getBallColor(n)}">${n}</div>`;
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
