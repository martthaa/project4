document.querySelector('.btn_login').onclick = function(){
    document.querySelector('.overlay').classList.add('overlay_active');
    document.querySelector('.popup__form_login').classList.add('active');

}

document.querySelector('.btn_signUp').onclick = function(){
    document.querySelector('.overlay').classList.add('overlay_active');
    document.querySelector('.popup__form_signup').classList.add('active');
}

document.querySelector('.popup__close').onclick=function(){
    document.querySelector('.overlay').classList.remove('overlay_active');
    document.querySelector('.popup__form_login').classList.remove('active');
    document.querySelector('.popup__form_signup').classList.remove('active');
}

document.querySelector('.tools__more').onclick = function(){
    document.querySelector('.tools__more').classList.toggle('active')
        if(document.querySelector('.tools__more').classList.contains('active')){
            document.querySelector('.tools__more').textContent = 'hide'
        }else{
            document.querySelector('.tools__more').textContent = 'load more'
        }
        
    document.querySelectorAll('.tools__card_hide').forEach(function(card){
        card.classList.toggle('active');
    })
}

const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  document.querySelector('.burger').onclick=function(){
    document.querySelector('.burger').classList.toggle('burger_active');
    document.querySelector('.header__right').classList.toggle('header__right_active');
  }

const hamburger = document.querySelector(".burger__line");
const navMenu = document.querySelector(".header__list");

document.querySelectorAll(".header__link").forEach(n=> n.addEventListener("click",() =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))





