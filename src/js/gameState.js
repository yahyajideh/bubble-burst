import { GAME_TIME_DURATION } from './config.js';
import {
  updateTimeProgress,
  aboutBtnHandler,
  playGameBtnHandler,
  increaseLevel,
} from './ui.js';
import { burstBubbleHandler, bubbleFactory, removeBubbles } from './bubble.js';

const gameState = {
  current: 'INIT',
  clock: 0,
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

    bubbleFactory();
    this.ticks++;
  },
  levelFinished() {
    this.current = 'INCREASE_LEVEL';
    this.clock = 0;
  },
  increaseLevel() {
    removeBubbles();
    increaseLevel();
    this.current = 'TODO';
  },
  handleUserAction() {
    burstBubbleHandler();
    playGameBtnHandler();
    aboutBtnHandler();
  },
};

export default gameState;
