import {
  playButton,
  pauseButton,
  stopButton,
  plusFiveButton,
  minusFiveButton,
  forestButton,
  rainButton,
  coffeeShopButton,
  fireplaceButton,
} from "./elements.js";

export function Events({ controls, timer, soundControls, sounds }) {

  playButton.addEventListener("click", function () {
    controls.play();
    timer.countdown();
  });

  pauseButton.addEventListener("click", function () {
    controls.pause();
    timer.hold();
  });

  stopButton.addEventListener("click", function () {
    controls.stop();
    timer.reset();
  });

  plusFiveButton.addEventListener("click", function () {
    timer.plusFiveMinutes();
    sounds.buttonPressAudio.play();
  });

  minusFiveButton.addEventListener("click", function () {
    timer.minusFiveMinutes();
    sounds.buttonPressAudio.play();
  });

  forestButton.addEventListener("click", function () {
    soundControls.forestSound();
  });

  rainButton.addEventListener("click", function () {
    soundControls.rainSound();
  });

  coffeeShopButton.addEventListener("click", function () {
    soundControls.coffeeShopSound();
  });

  fireplaceButton.addEventListener("click", function () {
    soundControls.fireplaceSound();
  });
}