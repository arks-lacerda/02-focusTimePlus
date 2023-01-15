import {
  darkModeButton,
  playButton,
  pauseButton,
  stopButton,
  plusFiveButton,
  minusFiveButton,
  forestButton,
  rainButton,
  coffeeShopButton,
  fireplaceButton,
  vForestRange,
  vRainRange,
  vCoffeeShopRange,
  vFireplaceRange,
} from "./elements.js";

export function Events({ controls, timer, soundControls, sounds }) {

  darkModeButton.addEventListener("click", function() {
    controls.darkMode();
  })

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

  vForestRange.addEventListener("input", function () {
    sounds.forestAudio.volume = vForestRange.value;
  });

  vRainRange.addEventListener("input", function () {
    sounds.rainAudio.volume = vRainRange.value;
  });
  vCoffeeShopRange.addEventListener("input", function () {
    sounds.coffeeShopAudio.volume = vCoffeeShopRange.value;
  });
  vFireplaceRange.addEventListener("input", function () {
    sounds.fireplaceAudio.volume = vFireplaceRange.value;
  });
}