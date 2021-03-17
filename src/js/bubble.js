import { updatePlayerScore } from './ui.js';

const gameFrameEl = document.querySelector('.game-frame');

const getRandomValue = function getRandomValue(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

const getRandomDiameter = function getRandomDiameter() {
  return getRandomValue(35, 75);
};

const getRandomPosition = function getRandomPosition() {
  return getRandomValue(7, 85);
};

export const bubbleFactory = function bubbleFactory() {
  generateBubble();
};

const generateBubble = function generateBubble() {
  const bubble = document.createElement('div');
  const bubbleReflection = document.createElement('span');
  bubbleReflection.classList.add('bubble-reflection');
  bubble.appendChild(bubbleReflection);
  bubble.classList.add('bubble', 'cyan');
  bubble.style.width = bubble.style.height = `${getRandomDiameter()}px`;
  bubble.style.left = `${getRandomPosition()}%`;
  gameFrameEl.appendChild(bubble);
};

export const burstBubbleHandler = function burstBubble() {
  gameFrameEl.addEventListener('click', e => {
    const bubbleEl = e.target.closest('.bubble');
    if (!bubbleEl) return;

    bubbleEl.parentElement.removeChild(bubbleEl);
    updatePlayerScore();
  });
};

export const removeBubbles = function removeBubbles() {
  const bubbles = document.querySelectorAll('.bubble');
  setTimeout(() => {
    [...bubbles].forEach(bubble => {
      if (bubble.parentElement) bubble.parentElement.removeChild(bubble);
    });
  }, 1000);
};
