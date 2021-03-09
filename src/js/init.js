import { TICK_RATE, LEVEL_DURATION, TIMER_BAR_WIDTH } from './config.js';
import game from './gameState.js';
import { togglePauseModal } from './ui.js';

const timerBar = document.querySelector('.timer-bar');

function init() {
  let total = TIMER_BAR_WIDTH;
  let minus = total / LEVEL_DURATION;
  let secondsPassed = -1;
  let nexTimeToTick = Date.now();

  // function nextAnimationFrame() {
  //   const now = Date.now();
  //   if (nexTimeToTick <= now) {
  //     game.tick();
  //     console.log(total, `${secondsPassed++}s passed`);

  //     total = TIMER_BAR_WIDTH - minus * secondsPassed;
  //     timerBar.style.width = `${total}%`;

  //     nexTimeToTick = now + TICK_RATE;
  //   }
  //   requestAnimationFrame(nextAnimationFrame);
  // }

  // nextAnimationFrame();

  togglePauseModal();
}

init();
