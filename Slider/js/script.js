let showPrevBtn = document.getElementById('show-prev-image');
let showNextBtn = document.getElementById('show-next-image');
let currentImage = document.querySelector('.main-photo')
let listOfImages = ['img/first.jpeg', 'img/second.jpg', 'img/third.jpg'];
var currentIndex = 0;

showPrevBtn.addEventListener('click', onShowPrevBtnClick, (event) => {
    event.preventDefault();});
showNextBtn.addEventListener('click', onShowNextBtnClick, (event) => {
    event.preventDefault();});

function onShowPrevBtnClick() {
    if (currentIndex === 0) {
        currentIndex = listOfImages.length;
    }
    currentIndex -= 1;
    changeImage(listOfImages);
}

function onShowNextBtnClick() {
    currentIndex += 1;
    if (currentIndex === listOfImages.length) {
        currentIndex = 0;
    }
    changeImage(listOfImages);
}

function changeImage(listOfImages) {
    currentImage.src = listOfImages[currentIndex]
}