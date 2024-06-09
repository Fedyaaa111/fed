const display = document.querySelectorAll('.boxs .box');
const footer = document.querySelector('.footer');
const cont = document.querySelectorAll('.boxs2 .box2')


let song = new Audio('song.mp3');

cont.forEach(buttons => {
    buttons.addEventListener('click', () => {
      footer.style.display = 'block';
      song.play();
    })
});


display.forEach(buttons => {
    buttons.addEventListener('click', () => {
      footer.style.display = 'block';
    })
});
