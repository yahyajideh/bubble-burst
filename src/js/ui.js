import { TIME_PROGRESS_MAX, TIME_PROGRESS_DEC } from './config.js';

const pauseBtn = document.querySelector('.pause-button');
const modalOverlay = document.querySelector('.paused-modal');
const modal = document.querySelector('.modal');
const timeProgressEl = document.querySelector('.time-progress');

export const togglePauseModal = function togglePauseModal() {
  pauseBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('hide');
    modal.style.animationName = 'scalein';
  });
};

export const updateTimeProgress = function updateTimeProgress(timePassed) {
  const currentProgress = TIME_PROGRESS_MAX - timePassed * TIME_PROGRESS_DEC;
  if (currentProgress <= 40) {
    timeProgressEl.classList.add('time-ending-animation');
  }
  timeProgressEl.style.width = `${currentProgress}%`;

  console.log(TIME_PROGRESS_MAX, timePassed, TIME_PROGRESS_DEC);
};
