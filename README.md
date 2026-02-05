# Simon Game

A web-based memory game inspired by the classic **Simon** arcade experience. The game challenges players to remember and repeat increasingly complex sequences of colors and sounds.

---

## 🎮 How to Play

- **Start**: Press any key on your keyboard to begin the first level.
- **Watch**: The game will flash a color and play a specific sound to show you the sequence.
- **Repeat**: Click the buttons in the exact order they were presented.
- **Progress**: Each successful round adds a new step to the pattern and increases your level.
- **Game Over**: If you click the wrong button, the screen flashes red, a "wrong" sound plays, and the title updates to "Game Over, Press Any Key to Restart".

---

## 🛠️ Built With

- **HTML5**: Defines the structure for the game board, title, and buttons.
- **CSS3**: Handles the styling for the 2x2 grid, button colors, and "pressed" animations.
- **JavaScript (ES6)**: Manages the game logic, pattern generation, and state management.
- **jQuery**: Facilitates DOM manipulation, event listeners, and visual effects like `fadeIn` and `fadeOut`.

---

## 📂 Project Structure

- **`index.html`**: The main interface, containing the level title and button containers.
- **`game.js`**: The core logic file tracking `gamePattern` and `userClickedPattern`.
- **`styles.css`**: Defines the visual appearance, including the `.game-over` state and button layout.
- [cite_start]**`.gitattributes`**: Configures auto-detection for text files and LF normalization[cite: 1].

---

## 🚀 Setup

1. Clone the repository.
2. Ensure you have a `sounds/` folder containing the necessary audio files: `red.mp3`, `blue.mp3`, `green.mp3`, `yellow.mp3`, and `wrong.mp3`.
3. Open `index.html` in any modern web browser to play.

---

Would you like me to fix the typo in your `index.html` file where line 21 says `lass="row"` instead of `class="row"` so your buttons align correctly?
