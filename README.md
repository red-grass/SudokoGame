# Sudoku Game

## Overview
This project is a web-based Sudoku game consisting of two pages:
1. **Game Page**: Displays the 9x9 Sudoku board and allows the player to interact with it.
2. **High Scores Page**: Displays the list of high scores.

The game uses HTML for the structure, CSS for styling, and JavaScript for the game logic. The board is represented as a 9x9 table with hardcoded values for the initial setup. The game uses the **Bulma CSS framework** to ensure a responsive design that adjusts for both desktop and mobile views. It follows a clean and simple design for an engaging user experience.

## Features
- **Sudoku Board**: A 9x9 table styled with Bulma CSS and displayed in the center of the page.
- **Responsive Design**: The game adapts seamlessly to both desktop and mobile screens.
- **High Scores Page**: Displays the high scores in a separate page.

## Technologies Used
- **HTML**: Used to structure the game page and high scores page.
- **CSS**: Styled using the Bulma CSS framework for consistent and modern design.
- **JavaScript**: Used for future interactive features and to potentially extend the game with functionality like checking the board, validating solutions, and handling user input.

## File Structure
/sudoku-game
  ├── index.html          # Main game page containing the 9x9 Sudoku board
  ├── high-scores.html    # Page for displaying high scores
  ├── styles.css          # CSS file for styling the game board and page layout
  ├── script.js           # JavaScript file for interactive features (future development)
  └── README.md           # This README file


## Setup and Installation
1. Download or clone the repository to your local machine.
2. Open the `index.html` file in your browser to start playing the game.
3. Navigate to the `high-scores.html` page to view the high scores.

## Future Improvements
- Implement JavaScript to handle user input and validate the Sudoku solution.
- Add a timer and scoring system to track time taken and award points for solving the puzzle.
- Store high scores locally (using local storage or a back-end service).

## License
This project is open source and available under the [MIT License](LICENSE).
