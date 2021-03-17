import { TIME_PROGRESS_MAX, TIME_PROGRESS_DEC } from './config.js';
import game from './gameState.js';

const playButtonEl = document.getElementById('playBtn');
const gamePlay = document.querySelector('.game-play');
const homeScreenEl = document.querySelector('.home-screen');
const timeProgressEl = document.querySelector('.time-progress');
const pauseBtnEl = document.querySelector('.pause-button');
const scoreEl = document.querySelector('.player-score');
const readyTextEl = document.querySelector('.ready-text');
const goTextEl = document.querySelector('.go-text');

let score = 0;

export const updateTimeProgress = function updateTimeProgress(timePassed) {
  const currentProgress = TIME_PROGRESS_MAX - timePassed * TIME_PROGRESS_DEC;

  if (currentProgress <= 35) {
    timeProgressEl.classList.add('time-ending-animation');
  }
  timeProgressEl.style.width = `${currentProgress}%`;

  // console.log(TIME_PROGRESS_MAX, timePassed, TIME_PROGRESS_DEC);
};

export const updatePlayerScore = function updateScore() {
  score++;
  scoreEl.textContent = score;
};

export const playGameBtnHandler = function playGameBtnHandler() {
  playButtonEl.addEventListener('click', () => {
    homeScreenEl.classList.add('fade-out');
    setTimeout(() => {
      homeScreenEl.classList.add('hide');
      gamePlay.classList.remove('hidden-visibility');
      gamePlay.classList.add('slide-down');
    }, 100);
    setTimeout(() => {
      readyTextEl.classList.remove('hidden-visibility');
      readyTextEl.classList.add('ready-text--animation');
    }, 110);
    setTimeout(() => {
      readyTextEl.classList.add('hide');
      goTextEl.classList.remove('hidden-visibility');
      goTextEl.classList.add('ready-text--animation');
    }, 1000);
    setTimeout(() => {
      goTextEl.classList.add('hide');
      pauseBtnEl.classList.remove('hidden-visibility');
      pauseBtnEl.classList.add('fade-in');
      timeProgressEl.classList.remove('hidden-visibility');
      game.current = 'PLAYING';
    }, 2005);
  });
};
