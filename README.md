# X-O Game (Tic Tac Toe)

A modern, dark-themed Tic Tac Toe game built with vanilla JavaScript, HTML, and CSS.

## Features

- **Two-player gameplay** - Play against a friend locally
- **Score tracking** - Keep track of wins for both players
- **Custom names** - Enter names for X and O players
- **Win detection** - Automatically detects horizontal, vertical, and diagonal wins
- **Draw detection** - Recognizes when the game ends in a draw
- **Modern UI** - Sleek dark theme with smooth animations

## Project Structure

```
X-O-Game/
├── index.html          # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css   # Styling (dark theme)
│   └── js/
│       ├── main.js     # Game logic & event handling
│       ├── Board.js    # Board class (3x3 grid management)
│       ├── Game.js     # Game class (win detection)
│       └── Player.js   # Player class (name & score)
```

## How to Play

1. Open `index.html` in a web browser
2. Enter names for both players (X and O)
3. Click "Start Game" to begin
4. Players take turns clicking on the grid cells
5. First player to get 3 in a row (horizontal, vertical, or diagonal) wins

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables
- **JavaScript (ES6)** - Object-oriented programming with classes

## Game Logic

- **Board class** - Manages the 3x3 grid state
- **Player class** - Stores player name, symbol (X/O), and score
- **Game class** - Handles win/draw detection across all possible winning combinations

## License

MIT License