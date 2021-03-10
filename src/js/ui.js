const pauseBtn = document.querySelector('.pause-button');
const modalOverlay = document.querySelector('.paused-modal');
const modal = document.querySelector('.modal');
const gameTimeProgressEl = document.querySelector('.game-timer-progress');

const timerBar = document.querySelector('.timer-bar');

export const togglePauseModal = function togglePauseModal() {
  pauseBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('hide');
    modal.style.animationName = 'scalein';
  });
};

export const updateGameTimeProgress = fucntion updateGameTimeProgress() {

}
