import { GAME_TIME_DURATION } from './config.js';
import { updateTimeProgress } from './ui.js';
import { generateBubbles, burstBubble } from './bubble.js';

const gameState = {
  current: 'INIT',
  clock: 0,
  tick() {
    if (this.clock >= 0) {
      updateTimeProgress(this.clock);
      generateBubbles();
    }

    if (this.clock == GAME_TIME_DURATION) {
      this.CURRENT = 'LEVEL_FINISHED';
      this.clock = 0;
      return 0;
    }

    return this.clock++;
  },
  // startGame() {
  //   this.current = 'PLAYING';
  //   generateBubbles();
  // },
  handleUserAction() {
    // if (this.current == 'INIT') {
    //   this.startGame();
    //   return;
    // }
    burstBubble();
  },
};

export default gameState;
