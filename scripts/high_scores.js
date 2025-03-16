// add your code here
// JavaScript to toggle menu visibility
function toggleMenu() {
  const burger = document.querySelector(".navbar-burger");
  const menu = document.getElementById(burger.dataset.target);

  burger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
}

class HighScores {
  constructor(date, duration) {
    this.date = date;
    this.duration = duration;
  }

  toString() {
    return `${this.date}, ${this.duration})`;
  }
}

// {"date": "2021/03/02", "duration": "2:51"}

window.onload = function () {
  const highScoresList = [
    new HighScores("2021/01/17", "3:41"),
    new HighScores("2021/01/21", "4:01"),
    new HighScores("2021/02/01", "2:52"),
    new HighScores("2021/02/17", "3:08"),
    new HighScores("2021/03/02", "2:51"),
  ];

  const tableBody = document.getElementById("highscores-body");

  if (tableBody) {
    highScoresList.forEach((score) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${score.date}</td><td>${score.duration}</td>`;
      tableBody.appendChild(row);
    });
  } else {
    console.error("Table body not found!");
  }
};
