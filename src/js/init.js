import { TICK_RATE } from './config.js';
import game from './gameState.js';

function init() {
  let nexTimeToTick = Date.now();
  game.handleUserAction();

  function nextAnimationFrame() {
    const now = Date.now();

    if (nexTimeToTick <= now) {
      game.tick();
      nexTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }

  nextAnimationFrame();
}

init();
