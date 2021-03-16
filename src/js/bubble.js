import { updatePlayerScore } from './ui.js';

const gameFrameEl = document.querySelector('.game-frame');

const getRandomValue = function getRandomValue(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

const getRandomDiameter = function getRandomDiameter() {
  return getRandomValue(35, 75);
};

const getRandomPosition = function getRandomPosition() {
  return getRandomValue(7, 93);
};

export const generateBubbles = function generateBubbles() {
  const bubble = document.createElement('div');
  const bubbleReflection = document.createElement('span');
  bubbleReflection.classList.add('bubble-reflection');
  bubble.appendChild(bubbleReflection);
  bubble.classList.add('bubble');
  bubble.classList.add('cyan');
  bubble.style.width = bubble.style.height = `${getRandomDiameter()}px`;
  bubble.style.left = `${getRandomPosition()}%`;
  gameFrameEl.appendChild(bubble);
};

export const burstBubble = function burstBubble() {
  gameFrameEl.addEventListener('click', e => {
    const bubbleEl = e.target.closest('.bubble');
    if (!bubbleEl) return;

    bubbleEl.parentElement.removeChild(bubbleEl);
    updatePlayerScore();
  });
};
