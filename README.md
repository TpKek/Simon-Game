# Simon Game

A classic memory game built with JavaScript and jQuery. Test your memory by repeating increasingly complex sequences of colors and sounds!

## How to Play

1. **Start**: Press any key on your keyboard to begin
2. **Watch**: The game flashes a color and plays a sound
3. **Remember**: Click the buttons in the exact order shown
4. **Progress**: Each successful round adds another step to the pattern
5. **Game Over**: Click the wrong color and the game ends - press any key to restart

## What I Learned

This project was a significant step up in complexity, teaching me:

- **Game State Management**: Tracking `gamePattern`, `userClickedPattern`, and `level` variables
- **Event-Driven Programming**: Handling both keyboard and click events
- **jQuery DOM Manipulation**: Using selectors, animations (`fadeIn`, `fadeOut`), and class toggling
- **Asynchronous JavaScript**: Using `setTimeout` for animations and delays between levels
- **Audio API**: Creating and playing sounds dynamically with `new Audio()`
- **Algorithm Design**: Implementing pattern matching logic in `checkAnswer()`
- **User Feedback**: Providing visual and audio feedback for correct/incorrect answers

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)

| Technology | Purpose                                          |
| ---------- | ------------------------------------------------ |
| HTML5      | Game board structure                             |
| CSS3       | Button styling, animations, game-over state      |
| JavaScript | Game logic, pattern generation, state management |
| jQuery     | DOM manipulation, event handling, animations     |

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/TpKek/Simon-Game.git
   cd Simon-Game
   ```

2. Open in browser:
   - Simply open `index.html` in any modern web browser

## Usage

1. Open the game in your browser
2. Press any key to start
3. Watch the pattern and click the colored buttons in order
4. Try to beat your high score!

## Project Structure

```
Simon-Game/
 index.html       # Game board HTML
 styles.css       # Button styling and animations
 game.js          # Core game logic
 sounds/          # Audio files for each color and wrong answer
 README.md        # This file
```

## Key Functions

| Function         | Purpose                               |
| ---------------- | ------------------------------------- |
| `nextSequence()` | Generates random color, updates level |
| `playSound()`    | Plays audio for each color            |
| `animatePress()` | Adds visual feedback on click         |
| `checkAnswer()`  | Compares user input to game pattern   |
| `startOver()`    | Resets game state on game over        |

## Author

**Bertin Dreyer**

- GitHub: [@TpKek](https://github.com/TpKek)

---

Can you reach Level 20?
