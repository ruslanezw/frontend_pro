const containerBtn = document.querySelector('.containerBtn');

containerBtn.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        alert(`Ви натиснули: ${e.target.textContent}`);
    }
});