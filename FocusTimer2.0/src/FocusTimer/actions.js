import state from "./state.js";
import * as timer from "./timer.js";
import { updateDisplay } from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  const playPauseButton = document.getElementById("playPauseButton");

  if (state.isRunning) {
    playPauseButton.classList.remove("ph-play");
    playPauseButton.classList.add("ph-pause");
  } else {
    playPauseButton.classList.remove("ph-pause");
    playPauseButton.classList.add("ph-play");
    document.documentElement.classList.add("ph-pause");
  }

  timer.countdow();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");

  timer.updateDisplay();

  console.log("reset");
}

export function set() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}

export function plusMinutes() {
  if (state.isRunning) {
    return;
  }

  state.minutes += 5;

  updateDisplay(state.minutes, state.seconds);
}

export function minusMinutes() {
  if (state.isRunning) {
    return;
  }

  state.minutes -= 5;

  state.minutes = Math.max(0, state.minutes);

  updateDisplay(state.minutes, state.seconds);

  console.log("Diminuídos 5 minutos");
}

export function cardClicked(index) {
  switch (index) {
    case "0":
      toggleMusic(sounds.forestPressAudio);
      break;
    case "1":
      toggleMusic(sounds.rainPressAudio);
      break;
    case "2":
      toggleMusic(sounds.shopPressAudio);
      break;
    case "3":
      toggleMusic(sounds.fireplacePressAudio);
      break;
    default:
      break;
  }
}

export function toggleMusic(audio) {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
