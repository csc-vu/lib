/* Minimal KeyboardState ES Module */

export default class KeyboardState {
  constructor() {
    this.keyStates = {};

    window.addEventListener('keydown', (event) => {
      this.keyStates[event.key.toLowerCase()] = true;
    });

    window.addEventListener('keyup', (event) => {
      this.keyStates[event.key.toLowerCase()] = false;
    });
  }

  // Returns true if the key was just pressed this frame
  down(key) {
    return this.keyStates[key.toLowerCase()] === true;
  }

  // Alias for continuous check
  pressed(key) {
    return this.down(key);
  }

  update() {
    // You can extend this if you want to debounce key transitions, but not needed for simple use
  }
}
