import { TICK_RATE } from './config.js';
import game from './gameState.js';

function init() {
  let nexTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();
    if (nexTimeToTick <= now) {
      console.log(`${game.tick()}s passed`);

      nexTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }

  nextAnimationFrame();
}

init();
