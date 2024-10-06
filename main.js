const text = document.querySelector('.text');
const btnColor = document.querySelector('.btn-color');

btnColor.addEventListener('click', () => {
    if (text.style.color === 'black') {
        text.style.color = 'chartreuse';
    } else {
        text.style.color = 'black';
    }
});