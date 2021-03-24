import { TIME_PROGRESS_MAX, TIME_PROGRESS_DEC } from './config.js';
import { removeBubbles } from './bubble.js';
import gameState from './gameState.js';

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
const pauseBtn = document.querySelector('.pause-button');
const pauseModalEl = document.querySelector('.paused-modal');
const modal = document.querySelector('.modal');
const resumeBtnEl = document.getElementById('resume-button');
const exitBtnEl = document.getElementById('exit-button');
const restartBtnEl = document.getElementById('restart-button');

let score = 0;

export const updateTimeProgress = function updateTimeProgress(timePassed) {
  const currentProgress = TIME_PROGRESS_MAX - timePassed * TIME_PROGRESS_DEC;

  console.log(currentProgress);
  if (currentProgress == 0) {
    setTimeout(() => {
      timeProgressEl.classList.remove('time-ending-animation');
      timeProgressEl.classList.add('hidden-visibility');
    }, 1000);
  } else if (currentProgress <= 35) {
    timeProgressEl.classList.add('time-ending-animation');
  } else {
    setTimeout(() => {
      timeProgressEl.classList.remove('hidden-visibility');
    }, 1000);
  }
  timeProgressEl.style.width = `${currentProgress}%`;
};

export const updatePlayerScore = function updateScore() {
  score++;
  scoreEl.textContent = score;
};

export const increaseLevel = function increaseLevel(level) {
  levelContainerEl.classList.add('level-animation');
  setTimeout(() => {
    levelEl.textContent = level;
  }, 1000);
  setTimeout(() => {
    levelContainerEl.classList.remove('level-animation');
  }, 3000);
};

const playGame = function playGame() {
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
    gameState.current = 'PLAYING';
  }, 2005);
};

export const playGameBtnHandler = function playGameBtnHandler() {
  playButtonEl.addEventListener('click', () => {
    homeScreenEl.classList.add('fade-out');
    playGame();
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

export const pauseBtnHandler = function pauseBtnHandler(pauseBubbles) {
  pauseBtn.addEventListener('click', () => {
    gameState.current = gameState.current == 'PAUSED' ? 'PLAYING' : 'PAUSED';
    pauseBubbles();

    pauseModalEl.classList.remove('hide');
    setTimeout(() => {
      pauseModalEl.classList.add('fade-in');
    }, 100);
  });
};

export const resumBtnHandler = function pauseBtnHandler(pauseBubbles) {
  resumeBtnEl.addEventListener('click', () => {
    gameState.current = gameState.current == 'PAUSED' ? 'PLAYING' : 'PAUSED';
    pauseBubbles();

    pauseModalEl.classList.remove('fade-in');
    setTimeout(() => {
      pauseModalEl.classList.add('hide');
    }, 300);
  });
};

export const restartBtnHandler = function restartBtnHandler() {
  restartBtnEl.addEventListener('click', () => {
    scoreEl.textContent = 0;
    levelEl.textContent = 1;
    score = 0;
    gameState.level = 1;
    removeBubbles();
    gameState.current = 'START';
    gameState.clock = 1;
    gameState.ticks = 0;
    pauseModalEl.classList.add('hide');
    pauseModalEl.classList.remove('fade-in');
    gamePlayEl.classList.remove('slide-down');
    readyTextEl.classList.remove('ready-text--animation');
    readyTextEl.classList.add('hidden-visibility');
    readyTextEl.classList.remove('hide');
    goTextEl.classList.remove('ready-text--animation');
    goTextEl.classList.add('hidden-visibility');
    goTextEl.classList.remove('hide');
    pauseBtnEl.classList.add('hidden-visibility');
    pauseBtnEl.classList.remove('fade-in');
    timeProgressEl.classList.add('hidden-visibility');
    timeProgressEl.style.width = `100%`;
    playGame();
  });
};

export const exitGameBtnHandler = function exitGameBtnHandler() {
  exitBtnEl.addEventListener('click', () => {
    scoreEl.textContent = 0;
    levelEl.textContent = 1;
    score = 0;
    gameState.level = 1;
    removeBubbles();
    gameState.current = 'START';
    gameState.clock = 1;
    gameState.ticks = 0;
    homeScreenEl.classList.remove('hide');
    homeScreenEl.classList.remove('fade-out');
    gamePlayEl.classList.add('hidden-visibility');
    pauseModalEl.classList.add('hide');
    pauseModalEl.classList.remove('fade-in');
    gamePlayEl.classList.remove('slide-down');
    readyTextEl.classList.remove('ready-text--animation');
    readyTextEl.classList.add('hidden-visibility');
    readyTextEl.classList.remove('hide');
    goTextEl.classList.remove('ready-text--animation');
    goTextEl.classList.add('hidden-visibility');
    goTextEl.classList.remove('hide');
    pauseBtnEl.classList.add('hidden-visibility');
    pauseBtnEl.classList.remove('fade-in');
    timeProgressEl.classList.add('hidden-visibility');
    timeProgressEl.style.width = `100%`;
  });
};
