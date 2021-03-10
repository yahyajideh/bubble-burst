import { GAME_TIME_DURATION } from './config.js';

const gameState = {
  current: 'PLAYING',
  clock: 0,
  tick() {
    if (this.clock > GAME_TIME_DURATION) {
      this.CURRENT = 'LEVEL_FINISHED';
      this.clock = 0;
      return 0;
    }

    return this.clock++;
  },
};

export default gameState;
