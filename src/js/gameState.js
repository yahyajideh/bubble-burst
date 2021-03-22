import { GAME_TIME_DURATION } from './config.js';
import {
  updateTimeProgress,
  aboutBtnHandler,
  playGameBtnHandler,
  increaseLevel,
  pauseBtnHandler,
  resumBtnHandler,
} from './ui.js';
import {
  burstBubbleHandler,
  generateBubble,
  removeBubbles,
  pauseBubbles,
} from './bubble.js';

const gameState = {
  current: 'INIT',
  level: 1,
  clock: 1,
  ticks: 0,
  tick() {
    if (this.current == 'PLAYING') {
      this.playGame();
    }

    if (this.current == 'LEVEL_FINISHED') {
      this.levelFinished();
    }

    if (this.current == 'INCREASE_LEVEL') {
      this.increaseLevel();
    }

    return;
  },
  playGame() {
    if (this.ticks % 2 == 0) {
      updateTimeProgress(this.clock);
      this.clock++;
    }

    if (this.clock == GAME_TIME_DURATION + 1) {
      this.current = 'LEVEL_FINISHED';
    }

    generateBubble(this.level);
    this.ticks++;
  },
  levelFinished() {
    this.current = 'INCREASE_LEVEL';
    this.clock = 0;
  },
  increaseLevel() {
    this.current = 'STATE_TRANSITION';
    removeBubbles();
    increaseLevel(++this.level);
    this.stateTransition('PLAYING', 2000);
  },
  handleUserAction() {
    burstBubbleHandler();
    playGameBtnHandler();
    aboutBtnHandler();
    pauseBtnHandler(pauseBubbles);
    resumBtnHandler(pauseBubbles);
  },
  stateTransition(state, wait) {
    setTimeout(() => {
      this.current = state;
    }, wait);
  },
};

export default gameState;
