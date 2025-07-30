/* Minimal KeyboardState ES Module */

export default class KeyboardState {
  constructor() {
    this.keyStates = {};

    window.addEventListener('keydown', (event) => {
      this.keyStates[event.key] = true; // Keep original casing
    });

    window.addEventListener('keyup', (event) => {
      this.keyStates[event.key] = false;
    });
  }

  // Returns true if the key was just pressed this frame
  down(key) {
    return this.keyStates[key] === true;
  }

 // Alias for continuous check
  pressed(key) {
    return this.down(key);
  }
}
