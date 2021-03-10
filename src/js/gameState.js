const gameState = {
  current: 'PLAYING',
  clock: 0,
  tick() {
    this.clock++;

    this.updateTimerBar();

    return this.clock;
  },

  updateTimerBar: function updateTimerbar() {},
};

export default gameState;
