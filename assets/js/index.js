import {
  body,
  darkModeButton,
  playButton,
  pauseButton,
  forestCard,
  rainCard,
  coffeeShopCard,
  fireplaceCard,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

import { Sounds } from "./sounds.js";
import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import { SoundControls } from "./soundControls.js";
import { Events } from "./events.js";

const sounds = Sounds();

const controls = Controls({
  darkModeButton,
  playButton,
  pauseButton,
  body,
  buttonPressAudio: sounds.buttonPressAudio,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  controls,
  kitchenTimer: sounds.kitchenTimer,
})


const soundControls = SoundControls({
  forestCard,
  forestAudio: sounds.forestAudio,
  rainCard,
  rainAudio: sounds.rainAudio,
  coffeeShopCard,
  coffeeShopAudio: sounds.coffeeShopAudio,
  fireplaceCard,
  fireplaceAudio: sounds.fireplaceAudio,
});


Events({ controls, timer, sounds, soundControls });
