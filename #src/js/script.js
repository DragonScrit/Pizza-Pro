@@include("slick.min.js");

let menu = document.querySelector('.menu-btn');
let nav = document.querySelector('.navBar');

// menu
menu.addEventListener('click', (e)=>{
    e.preventDefault;
    menu.classList.toggle('menu-btn_active');
    nav.classList.toggle('hide');
});
// accordion
let ask = document.querySelector('.ask');
if(ask){
    ask.addEventListener(('click'), (event) =>{
        let target = event.target;
        if(target.tagName == 'H3'){
            target.nextElementSibling.classList.toggle('hide');
        }
    });
}
// slider
$(document).ready(()=>{
    $('.slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
      });
});
$(document).ready(()=>{ 
    $('.pizzaSlider').slick({
        arrows: false,
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 1000,
    });
});


@@include("calc.js");