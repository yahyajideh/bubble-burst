import { GAME_TIME_DURATION } from './config.js';
import { updateTimeProgress, playGameBtnHandler } from './ui.js';
import { burstBubble, bubbleFactory } from './bubble.js';

const gameState = {
  current: 'INIT',
  clock: 0,
  ticks: 0,
  tick() {
    if (this.current == 'PLAYING') {
      this.playGame();
    }

    if (this.clock == GAME_TIME_DURATION + 1) {
      this.gameFinished();
    }

    return;
  },
  playGame() {
    console.log(this.ticks);
    if (this.ticks % 2 == 0) {
      console.log(`bubble created; tick: ${this.ticks}, clock: ${this.clock}`);
      updateTimeProgress(this.clock);
      this.clock++;
    }
    this.ticks++;

    bubbleFactory();
  },
  gameFinished() {
    this.CURRENT = 'LEVEL_FINISHED';
    this.clock = 0;
  },
  handleUserAction() {
    burstBubble();
    playGameBtnHandler();
  },
};

export default gameState;
