import { GAME_TIME_DURATION } from './config.js';
import { updateTimeProgress } from './ui.js';
import { burstBubble, bubbleFactory } from './bubble.js';

const gameState = {
  current: 'INIT',
  clock: 0,
  ticks: 0,
  tick() {
    this.ticks++;

    if (this.ticks % 2 == 0) {
      this.clock++;
      updateTimeProgress(this.clock);
    }

    if (this.clock == GAME_TIME_DURATION) {
      this.CURRENT = 'LEVEL_FINISHED';
      this.clock = 0;
      return 0;
    }

    // bubbleFactory();

    return this.ticks;
  },
  // startGame() {
  //   this.current = 'PLAYING';
  //   generateBubbles();
  // },
  handleUserAction() {
    burstBubble();
  },
};

export default gameState;
