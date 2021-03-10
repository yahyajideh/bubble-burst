import { TICK_RATE } from './config.js';
import { updateTimeProgress } from './ui.js';
import game from './gameState.js';

function init() {
  let nexTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();
    if (nexTimeToTick <= now) {
      console.log(`${game.clock}s passed`);

      updateTimeProgress(game.tick());

      nexTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }

  nextAnimationFrame();
}

init();
