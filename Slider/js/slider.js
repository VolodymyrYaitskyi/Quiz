function Slider() {
    this.listOfImages = [];
    this.showPrevBtn = null
    this.showNextBtn = null;
    this.currentImage = null;
    this.currentIndex = 0;

    this.init = function (sliderId) {
        let thisIsSlider = this;
        let classSlider = document.getElementById(sliderId)

        this.showPrevBtn = classSlider.querySelector('.show-prev-image')
        this.showNextBtn = classSlider.querySelector('.show-next-image')
        this.currentImage = classSlider.querySelector('.main-photo')

        this.showPrevBtn.addEventListener('click', function(event) {thisIsSlider.onShowPrevBtnClick(event)} , (event) => {event.preventDefault();});
        this.showNextBtn.addEventListener('click', function(event) {thisIsSlider.onShowNextBtnClick(event)}, (event) => {event.preventDefault();});
        this.listOfImages.push('img/first.jpeg');
        this.listOfImages.push('img/second.jpg');
        this.listOfImages.push('img/third.jpg');
    };

    this.onShowPrevBtnClick = function(event) {
        if (this.currentIndex === 0) {
            this.currentIndex = this.listOfImages.length;
        }
        this.currentIndex -= 1;
        this.changeImage(this.listOfImages);
    };

    this.onShowNextBtnClick = function(event) {
        this.currentIndex += 1;
        if (this.currentIndex === this.listOfImages.length) {
            this.currentIndex = 0;
        }
        this.changeImage(this.listOfImages);
    };

    this.changeImage = function(listOfImages) {
        this.currentImage.src = listOfImages[this.currentIndex]
    };
}




