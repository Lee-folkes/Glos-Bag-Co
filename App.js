//Nav bits
const primaryNav = document.querySelector('.nav_items');
const navToggle = document.querySelector('.mobile_nav_toggle');
const menuIcon1 = document.querySelector('.menu_icon1');
const menuIcon2 = document.querySelector('.menu_icon2');
const menuIcon3 = document.querySelector('.menu_icon3');
const listItem1 = document.querySelector('.list_item1');
const listItem2 = document.querySelector('.list_item2');
const listItem3 = document.querySelector('.list_item3');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible')
  
  if(visibility === 'false'){
    primaryNav.setAttribute('data-visible',true)
    navToggle.setAttribute('aria-expanded', true)
  } else if (visibility === 'true'){
    primaryNav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
  }
});

listItem1.addEventListener('mouseover', () =>{
  
  menuIcon1.setAttribute('animation','tada');
  // menuIcon1.setAttribute('color','#FFA436');
})
listItem1.addEventListener('mouseout', () =>{
  
  menuIcon1.setAttribute('animation','');
  // menuIcon1.setAttribute('color','#573535');
})
listItem2.addEventListener('mouseover', () =>{
  
  menuIcon2.setAttribute('animation','tada');
  // menuIcon2.setAttribute('color','#FFA436');
})
listItem2.addEventListener('mouseout', () =>{
  
  menuIcon2.setAttribute('animation','');
  // menuIcon2.setAttribute('color','#573535');
})
listItem3.addEventListener('mouseover', () =>{
  
  menuIcon3.setAttribute('animation','tada');
  // menuIcon3.setAttribute('color','#FFA436');
})
listItem3.addEventListener('mouseout', () =>{
  
  menuIcon3.setAttribute('animation','');
  // menuIcon3.setAttribute('color','#573535');
})





// Swiper Functionality
const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique',
      },
      pagination: {
        el: '.swiper-pagination',
      },
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    centeredSlides: false,

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        
      },
      // when window width is >= 480px
      850: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  })