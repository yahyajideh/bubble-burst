const pauseBtn = document.querySelector('.pause-button');
const modalOverlay = document.querySelector('.paused-modal');
const modal = document.querySelector('.modal');

export const togglePauseModal = function togglePauseModal() {
  pauseBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('hide');
    modal.style.animationName = 'scalein';
  });
};
