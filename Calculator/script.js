"use strict";

const display = document.querySelector(".input-box");
const evaluateBtn = document.querySelector(".equalsign");
const allClearBtn = document.querySelector(".all-clear");
const backspaceBtn = document.querySelector(".backspace");

evaluateBtn.addEventListener("click", () => {
  try {
    display.value = eval(display.value);
    if (!isFinite(display.value)) {
      throw new Error("Not a finite number");
    }
  } catch (error) {
    display.value = "Error";
  }
});

allClearBtn.addEventListener("click", () => {
  display.value = "";
});

backspaceBtn.addEventListener("click", () => {
  display.value = display.value.toString().slice(0, -1);
});
