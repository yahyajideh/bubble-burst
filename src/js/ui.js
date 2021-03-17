import { TIME_PROGRESS_MAX, TIME_PROGRESS_DEC } from './config.js';
import game from './gameState.js';

const playButtonEl = document.getElementById('playBtn');
const gamePlayEl = document.querySelector('.game-play');
const homeScreenEl = document.querySelector('.home-screen');
const timeProgressEl = document.querySelector('.time-progress');
const pauseBtnEl = document.querySelector('.pause-button');
const scoreEl = document.querySelector('.player-score');
const levelContainerEl = document.querySelector('.level-container');
const levelEl = document.querySelector('.player-level');
const readyTextEl = document.querySelector('.ready-text');
const goTextEl = document.querySelector('.go-text');
const aboutBtnEl = document.getElementById('aboutBtn');
const aboutModalEl = document.querySelector('.about-modal');
const closeAboutModalEl = document.getElementById('close-about-modal');

let score = 0;
let level = 1;

export const updateTimeProgress = function updateTimeProgress(timePassed) {
  const currentProgress = TIME_PROGRESS_MAX - timePassed * TIME_PROGRESS_DEC;

  if (currentProgress <= 35) {
    timeProgressEl.classList.add('time-ending-animation');
  }
  timeProgressEl.style.width = `${currentProgress}%`;
};

export const updatePlayerScore = function updateScore() {
  score++;
  scoreEl.textContent = score;
};

export const increaseLevel = function increaseLevel() {
  level++;
  levelContainerEl.classList.add('level-animation');
  setTimeout(() => {
    levelEl.textContent = level;
  }, 1000);
  setTimeout(() => {
    levelContainerEl.classList.remove('level-animation');
  }, 3000);
};

export const playGameBtnHandler = function playGameBtnHandler() {
  playButtonEl.addEventListener('click', () => {
    homeScreenEl.classList.add('fade-out');
    setTimeout(() => {
      homeScreenEl.classList.add('hide');
      gamePlayEl.classList.remove('hidden-visibility');
      gamePlayEl.classList.add('slide-down');
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

export const aboutBtnHandler = function aboutBtnHandler() {
  aboutBtnEl.addEventListener('click', () => {
    aboutModalEl.classList.remove('hide');
    setTimeout(() => {
      aboutModalEl.classList.add('fade-in');
    }, 100);
  });
  closeAboutModalEl.addEventListener('click', () => {
    aboutModalEl.classList.remove('fade-in');
    aboutModalEl.classList.add('fade-out');
    setTimeout(() => {
      aboutModalEl.classList.add('hide');
    }, 300);
  });
};
