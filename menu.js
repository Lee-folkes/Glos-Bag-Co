//Nav bits
const primaryNav = document.querySelector('.nav_items');
const navToggle = document.querySelector('.mobile_nav_toggle');
const menuIcon1 = document.querySelector('.menu_icon1');
const menuIcon2 = document.querySelector('.menu_icon2');
const menuIcon3 = document.querySelector('.menu_icon3');
const menuIcon4 = document.querySelector('.menu_icon4');
const listItem1 = document.querySelector('.list_item1');
const listItem2 = document.querySelector('.list_item2');
const listItem3 = document.querySelector('.list_item3');
const listItem4 = document.querySelector('.list_item4');

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
listItem4.addEventListener('mouseover', () =>{
  
  menuIcon4.setAttribute('animation','tada');
  // menuIcon3.setAttribute('color','#FFA436');
})
listItem4.addEventListener('mouseout', () =>{
  
  menuIcon4.setAttribute('animation','');
  // menuIcon3.setAttribute('color','#573535');
})