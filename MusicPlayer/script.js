const display = document.querySelectorAll('.boxs .box');
const footer = document.querySelector('.footer');
const cont = document.querySelectorAll('.boxs2 .box2');
const time = document.querySelector('.footer .cont .second.seconds1');
const handle = document.querySelector('.footer .cont .handle .handle-white');
const width = document.querySelector('.footer .cont .handle');
const btn = document.querySelectorAll('.buttons .btn');

let song = new Audio('song.mp3','song.mp3', 'song.mp3');
let totalSeconds = 0;
let timerInterval;

cont.forEach(button => {
  button.addEventListener('click', () => {
    currentTime();
  });
});

  

btn[1].addEventListener('click', () => {
  song.pause();
  clearInterval(timerInterval)
})
function currentTime() {
  footer.style.display = 'block';
  song.play();
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    totalSeconds++;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    time.innerText = formatTime(minutes) + ':' + formatTime(seconds);
    const progress = song.currentTime / song.duration;
    handle.style.width = `${progress * 100}%`;
  }, 1000);
}

song.addEventListener('ended', () => {
  clearInterval(timerInterval);
  handle.style.width = null;
  time.innerText = '';
});

display.forEach(button => {
  button.addEventListener('click', () => {
    currentTime();
  });
});

function formatTime(time) {
  return time < 10 ? '0' + time : time;
};
