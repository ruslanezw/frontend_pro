const linkBtn = document.querySelector('#linkBtn');
const redirectBtn = document.querySelector('#redirectBtn');

let userLink = '';

linkBtn.addEventListener('click', () => {
    userLink = prompt('Введіть посилання:');
});

redirectBtn.addEventListener('click', () => {
    if (userLink) {
        window.location.href = userLink;
    } else {
        alert('Спочатку введіть посилання!');
    }
});