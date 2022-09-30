var slider1 = {
    listOfImages: [],
    showPrevBtn: document.getElementById('show-prev-image'),
    showNextBtn: document.getElementById('show-next-image'),
    currentImage: document.querySelector('.main-photo'),
    currentIndex: 0,

    init: function () {
        let thisIsSlider = this;
        this.showPrevBtn.addEventListener('click', function(event) {thisIsSlider.onShowPrevBtnClick(event)} , (event) => {event.preventDefault();});
        this.showNextBtn.addEventListener('click', function(event) {thisIsSlider.onShowNextBtnClick(event)}, (event) => {event.preventDefault();});
        this.listOfImages.push('img/first.jpeg');
        this.listOfImages.push('img/second.jpg');
        this.listOfImages.push('img/third.jpg');
    },

    onShowPrevBtnClick: function(event) {
        if (this.currentIndex === 0) {
            this.currentIndex = this.listOfImages.length;
        }
        this.currentIndex -= 1;
        this.changeImage(this.listOfImages);
    },

    onShowNextBtnClick: function(event) {
        this.currentIndex += 1;
        if (this.currentIndex === this.listOfImages.length) {
            this.currentIndex = 0;
        }
        this.changeImage(this.listOfImages);
    },

    changeImage: function(listOfImages) {
        this.currentImage.src = listOfImages[this.currentIndex]
    },
}

slider1.init();