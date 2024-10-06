function showRandomImage() {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    const randomImage = `${randomNumber}.jpg`;
    document.querySelector('.images-random').src = `images/${randomImage}`;
}

window.onload = showRandomImage;

document.querySelector('.btn-img').addEventListener("click", showRandomImage);