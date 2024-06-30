// Get elements
const Button1 = document.querySelector('.button1');
const Button2 = document.querySelector('.button2');
const Button3 = document.querySelector('.button3');
const Button4 = document.querySelector('.button4');

Button1.addEventListener('click', () => {
    const buttons = document.getElementsByClassName('button');
    console.log(buttons);
    for (let i = 0; i < buttons.length; i++){
        if (buttons[i].classList.contains('active-button')){
            buttons[i].classList.remove('active-button');
        };
    }
    Button1.classList.add('active-button');
})
Button2.addEventListener('click', () => {
    const buttons = document.getElementsByClassName('button');
    console.log(buttons);
    for (let i = 0; i < buttons.length; i++){
        if (buttons[i].classList.contains('active-button')){
            buttons[i].classList.remove('active-button');
        };
    }
    Button2.classList.add('active-button');
})
Button3.addEventListener('click', () => {
    const buttons = document.getElementsByClassName('button');
    console.log(buttons);
    for (let i = 0; i < buttons.length; i++){
        if (buttons[i].classList.contains('active-button')){
            buttons[i].classList.remove('active-button');
        };
    }
    Button3.classList.add('active-button');
})
Button4.addEventListener('click', () => {
    const buttons = document.getElementsByClassName('button');
    console.log(buttons);
    for (let i = 0; i < buttons.length; i++){
        if (buttons[i].classList.contains('active-button')){
            buttons[i].classList.remove('active-button');
        };
    }
    Button4.classList.add('active-button');
})


