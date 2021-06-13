const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});

var myAnimation = new hoverEffect({
    parent: document.querySelector('.box'),
    intensity: 0.3,
    image1: 'img/1h.jpg',
    image2: 'img/2h.jpg',
    displacementImage: 'img/displacement/1.jpg'
});

// Array.from(document.querySelectorAll(".card"));
// forEach(function(e) {
//     var myAnimation = new hoverEffect({
//         parent: document.querySelector('.card'),
//         intensity: 0.3,
//         image1: 'img/img-1-2.jpg',
//         image2: 'img/img-1.jpg',
//         displacementImage: 'img/displacement/1.jpg'
//     });
// })
