document.addEventListener('DOMContentLoaded', function () {
    const bannerImages = document.querySelectorAll('.banner-img');
    const dotsContainer = document.querySelector(".dots");
    const arrowLeft = document.querySelector('.arrow_left');
    const arrowRight = document.querySelector('.arrow_right');
    let indexActuel = 0;
    
    const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



function diaporamaImageSuivante() {
    indexActuel = (indexActuel + 1) % bannerImages.length;
    bannerActualise();
}

function diaporamaImagePrecedente() {
    indexActuel = (indexActuel - 1 + bannerImages.length) % bannerImages.length;
    bannerActualise();
}

function bannerActualise() {
    for (i =0; i < slides.length; i++) {
        const image = bannerImages[i];
        if (i === indexActuel) {
            image.style.display = 'block';
            const slogan = document.querySelector('.tag-line');
            if (slogan) {
                slogan.innerHTML = slides[i].tagLine;
            }
        } else {
            image.style.display = 'none';
        }
    };

    const dots = document.querySelectorAll('.dot');
    for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        dot.classList.toggle('dot_selected', i === indexActuel);
    }
}

    dotsContainer.innerHTML = '';


    slides.forEach((_, i) => { 
        const dot = document.createElement('div');
        dot.classList.add('dot');

        dot.addEventListener('click', function () {
            indexActuel = i;
            bannerActualise();
        });

        dotsContainer.appendChild(dot);
    });

    arrowRight.addEventListener('click', diaporamaImageSuivante);
    console.log("J'ai cliqué sur la flèche de droite")

    arrowLeft.addEventListener('click', diaporamaImagePrecedente);
    console.log("J'ai cliqué sur la flèche de gauche")

    bannerActualise();

});
