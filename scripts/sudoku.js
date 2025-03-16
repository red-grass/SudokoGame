// JavaScript to toggle menu visibility
function toggleMenu() {
  const burger = document.querySelector(".navbar-burger");
  const menu = document.getElementById(burger.dataset.target);

  burger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
}

const board = document.getElementById("board");
const numberPalette = document.getElementById("number-palette");
let selectedNumber = null;
let moveHistory = [];

// Function to handle number selection from palette
numberPalette.addEventListener("click", (event) => {
  if (event.target.tagName === "TD") {
    selectedNumber = event.target.innerText.trim();
  }
});

// Function to handle cell selection in the board
board.addEventListener("click", (event) => {
  if (
    event.target.tagName === "TD" &&
    selectedNumber &&
    !event.target.dataset.fixed
  ) {
    moveHistory.push({ cell: event.target, previous: event.target.innerText });
    event.target.innerText = selectedNumber;
    event.target.classList.add("user-input"); // Mark as user input
    checkConflicts();
  }
});

// Function to check for conflicts in the board
function checkConflicts() {
  let rows = Array.from(board.rows);
  let columns = Array.from({ length: 9 }, (_, col) =>
    rows.map((row) => row.cells[col])
  );
  let blocks = [];

  for (let r = 0; r < 9; r += 3) {
    for (let c = 0; c < 9; c += 3) {
      blocks.push(
        rows
          .slice(r, r + 3)
          .flatMap((row) => Array.from(row.cells).slice(c, c + 3))
      );
    }
  }

  [...rows, ...columns, ...blocks].forEach((group) => {
    let seen = new Map();
    group.forEach((cell) => {
      if (cell.innerText) {
        if (seen.has(cell.innerText)) {
          cell.classList.add("error");
          seen.get(cell.innerText).classList.add("error");
        } else {
          seen.set(cell.innerText, cell);
          cell.classList.remove("error");
        }
      }
    });
  });
}

// Undo last move
function undoMove() {
  if (moveHistory.length > 0) {
    let lastMove = moveHistory.pop();
    lastMove.cell.innerText = lastMove.previous;
    checkConflicts();
  }
}

// Add event listener for undo button
const undoButton = numberPalette.querySelector("img");
undoButton.addEventListener("click", undoMove);

// Initialize fixed numbers
Array.from(board.rows).forEach((row) => {
  Array.from(row.cells).forEach((cell) => {
    if (cell.innerText) {
      cell.dataset.fixed = "true";
      cell.style.fontWeight = "bold";
    }
  });
});
