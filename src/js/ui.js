import {
  TIME_PROGRESS_MAX,
  TIME_PROGRESS_DEC,
  GAME_TIME_DURATION,
} from './config.js';

const timeProgressEl = document.querySelector('.time-progress');
const scoreEl = document.querySelector('.player-score');
let score = 0;

export const updateTimeProgress = function updateTimeProgress(timePassed) {
  const currentProgress = TIME_PROGRESS_MAX - timePassed * TIME_PROGRESS_DEC;

  if (currentProgress <= 35) {
    timeProgressEl.classList.add('time-ending-animation');
  }
  timeProgressEl.style.width = `${currentProgress}%`;

  console.log(TIME_PROGRESS_MAX, timePassed, TIME_PROGRESS_DEC);
};

export const updatePlayerScore = function updateScore() {
  score++;
  scoreEl.textContent = score;
};
