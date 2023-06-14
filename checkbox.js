// Timer variables
let timeRemaining = 480; // 8 minutes in seconds
let timerInterval;

// Get elements
const timeElement = document.getElementById("time");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");
const add30SecondsButton = document.querySelector(".add-30-seconds");

// Start button click event
startButton.addEventListener("click", function () {
  startTimer();
});

// Stop button click event
stopButton.addEventListener("click", function () {
  stopTimer();
});

// Reset button click event
resetButton.addEventListener("click", function () {
  resetTimer();
});

// Add 30 seconds button click event
add30SecondsButton.addEventListener("click", function () {
  add30Seconds();
});

// Timer function
function startTimer() {
  startButton.classList.add("hidden");
  stopButton.classList.remove("hidden");

  timerInterval = setInterval(function () {
    timeRemaining--;
    updateTimerDisplay();

    if (timeRemaining <= 0) {
      stopTimer();
    }
  }, 1000);
}

// Stop timer function
function stopTimer() {
  clearInterval(timerInterval);

  startButton.classList.remove("hidden");
  stopButton.classList.add("hidden");
}

// Reset timer function
function resetTimer() {
  clearInterval(timerInterval);
  timeRemaining = 480; // Reset to 8 minutes

  startButton.classList.remove("hidden");
  stopButton.classList.add("hidden");

  updateTimerDisplay();
}

// Add 30 seconds function
function add30Seconds() {
  timeRemaining += 30;

  if (timeRemaining > 0) {
    updateTimerDisplay();
  }
}

// Update timer display function
function updateTimerDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const minutesDisplay = String(minutes).padStart(2, "0");
  const secondsDisplay = String(seconds).padStart(2, "0");

  timeElement.textContent = `${minutesDisplay}:${secondsDisplay}`;
}




// let time = document.querySelector(".time");
// let history = document.querySelector(".history");
// let startButton = document.querySelector(".start");
// let stopButton = document.querySelector(".stop");
// let resetButton = document.querySelector(".reset");


// //Add 1/100th of a second to the time.
// function updateTime() {
//     time.textContent = (Number(time.textContent) - 1).toFixed(2);
// }

// let intervalCode = null;

// startButton.addEventListener("click", function() {
//     intervalCode = setInterval(updateTime, 10); //save the code!
//     startButton.classList.toggle("hidden");
//     stopButton.classList.toggle("hidden");
// });

// stopButton.addEventListener("click", function() {
//     clearInterval(intervalCode);
//     startButton.classList.toggle("hidden");
//     stopButton.classList.toggle("hidden");
// });

// resetButton.addEventListener("click", function() {
//     if (time.textContent == "8:00")
//         return;
//     addToHistory(time.textContent);
//     time.textContent = "8:00";
// });

// // if (the timer reaches 0){
// //     alert("hey check on your cookies")
// // }

