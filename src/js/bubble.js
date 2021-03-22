import { updatePlayerScore } from './ui.js';

const gamePlayEl = document.querySelector('.game-play');

const getRandomValue = function getRandomValue(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

const getRandomDiameter = function getRandomDiameter() {
  return getRandomValue(35, 75);
};

const getRandomPosition = function getRandomPosition() {
  return getRandomValue(7, 85);
};

export const generateBubble = function generateBubble(level) {
  const bubble = document.createElement('div');
  const bubbleReflection = document.createElement('span');
  bubbleReflection.classList.add('bubble-reflection');
  bubble.appendChild(bubbleReflection);
  bubble.classList.add('bubble', 'cyan');
  bubble.style.animation = `rise ${15 - level}s ease-out ${
    level == 1 ? 0 : 1.5
  }s`;
  bubble.style.width = bubble.style.height = `${getRandomDiameter()}px`;
  bubble.style.left = `${getRandomPosition()}%`;
  gamePlayEl.appendChild(bubble);
};

export const burstBubbleHandler = function burstBubble() {
  gamePlayEl.addEventListener('click', e => {
    const bubbleEl = e.target.closest('.bubble');
    if (!bubbleEl) return;

    bubbleEl.parentElement.removeChild(bubbleEl);
    updatePlayerScore();
  });
};

export const removeBubbles = function removeBubbles() {
  const bubbles = document.querySelectorAll('.bubble');
  setTimeout(() => {
    bubbles.forEach(bubble => {
      if (bubble.parentElement) bubble.parentElement.removeChild(bubble);
    });
  }, 1000);
};

export const pauseBubbles = function pauseBubbles() {
  const bubbles = document.querySelectorAll('.bubble');
  bubbles.forEach(bubble => {
    const running = bubble.style.animationPlayState || 'running';
    bubble.style.animationPlayState =
      running == 'running' ? 'paused' : 'running';
  });
};
