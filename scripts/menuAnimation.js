const navList = document.querySelector('.nav-list');
const hamburgerMenuBtn = document.querySelector('.menu-hamburger-icon');
const hiddenElementsBannerImg = document.querySelectorAll('.hidden-banner-img');
const hiddenBannerHeading = document.querySelectorAll('.hidden-banner-heading');
const hiddenElementsOffer = document.querySelectorAll('.hidden-offer');
const elementsArr = [hiddenBannerHeading, hiddenElementsBannerImg, hiddenElementsOffer]
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-banner-img');
            entry.target.classList.add('show-banner-heading');
            entry.target.classList.add('show-offer');
        }
    })
})

elementsArr.forEach((elements) => {
    elements.forEach((element) => observer.observe(element));
});

hamburgerMenuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navList.classList.toggle('show')
})

