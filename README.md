# Simon Game

[cite_start]A web-based memory game inspired by the classic **Simon**[cite: 1]. [cite_start]The game challenges players to remember and repeat increasingly complex sequences of colors and sounds[cite: 1].

---

## 🎮 How to Play

- [cite_start]**Start**: Press any key on your keyboard to begin the first level[cite: 1].
- [cite_start]**Watch**: The game will flash a color and play a specific sound to show you the sequence[cite: 1].
- [cite_start]**Repeat**: Click the buttons in the exact order they were presented[cite: 1].
- [cite_start]**Progress**: Each successful round adds a new step to the pattern and increases your level[cite: 1].
- [cite_start]**Game Over**: If you click the wrong button, the screen flashes red, a "wrong" sound plays, and you must press a key to restart[cite: 1].

---

## 🛠️ Built With

- [cite_start]**HTML5**: Structure for the game board and title[cite: 1].
- [cite_start]**CSS3**: Styling for the 2x2 grid, button colors, and "pressed" animations[cite: 1].
- [cite_start]**JavaScript (ES6)**: Logic for pattern generation, state management, and user input validation[cite: 1].
- [cite_start]**jQuery**: Handles DOM manipulation, event listeners, and visual effects like `fadeIn` and `fadeOut`[cite: 1].

---

## 📂 Project Structure

- [cite_start]**`index.html`**: The main interface, including links to the Google Font "Press Start 2P" and the jQuery library[cite: 1].
- [cite_start]**`game.js`**: The core game engine managing the `gamePattern`, `userClickedPattern`, and sequence logic[cite: 1].
- [cite_start]**`styles.css`**: Defines the visual layout and the `.game-over` state[cite: 1].
- [cite_start]**`.gitattributes`**: Manages line normalization for the repository[cite: 1].

---

## 🚀 Setup

1.  Clone the repository.
2.  [cite_start]Ensure you have a `sounds/` folder containing: `red.mp3`, `blue.mp3`, `green.mp3`, `yellow.mp3`, and `wrong.mp3`[cite: 1].
3.  Open `index.html` in your browser.

---

Would you like me to fix the typo in your `index.html` file (on line 21, it says `lass="row"` instead of `class="row"`) to ensure the CSS grid aligns properly?
