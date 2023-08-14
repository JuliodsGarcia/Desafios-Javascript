import { controls } from "./elements.js";
import * as actions from "./actions.js";
import * as el from "./elements.js";
import state from "./state.js";
import { updateDisplay } from "./timer.js";

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    if (typeof actions[action] != "function") {
      return;
    }

    actions[action]();
  });
}

export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = "";
  });

  el.minutes.onkeypress = (event) => /\d/.test(event.key);

  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent;
    time = time > 60 ? 60 : time;

    state.minutes = time;
    state.seconds = 0;

    updateDisplay();
  });
}

export function registerPlusMinutesButton() {
  const addMinutesButton = document.getElementById("addMinutesButton");
  addMinutesButton.addEventListener("click", actions.plusMinutes);
}

export function registerMinusMinutesButton() {
  const subtractMinutesButton = document.getElementById(
    "subtractMinutesButton"
  );
  subtractMinutesButton.addEventListener("click", actions.minusMinutes);
}

export function registerCardClicks() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const index = card.dataset.index;
      actions.cardClicked(index);
    });
  });
}
