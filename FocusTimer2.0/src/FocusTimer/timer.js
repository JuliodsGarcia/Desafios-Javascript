import state from "./state.js";
import * as el from "./elements.js";
import { reset } from "./actions.js";

export function countdow() {
  if (!state.isRunning) {
    return;
  }

  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    reset();

    const playPauseButton = document.getElementById("playPauseButton");
    playPauseButton.classList.remove("ph-pause");
    playPauseButton.classList.add("ph-play");
    return;
  }

  updateDisplay(minutes, seconds);

  setTimeout(() => countdow(), 1000);
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}
