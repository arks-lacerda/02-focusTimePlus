export function Sounds() {
  const forestAudio = new Audio("./assets/music/musicForest.wav");
  const rainAudio = new Audio("./assets/music/musicRain.wav");
  const coffeeShopAudio = new Audio("./assets/music/musicCoffeeShop.wav");
  const fireplaceAudio = new Audio("./assets/music/musicFireplace.wav");

  const buttonPressAudio = new Audio("./assets/music/audios_button-press.wav");
  const kitchenTimer = new Audio("./assets/music/audios_kichen-timer.mp3");

  forestAudio.loop = true;
  rainAudio.loop = true;
  coffeeShopAudio.loop = true;
  fireplaceAudio.loop = true;

  forestAudio.volume = 0.5;
  rainAudio.volume = 0.5;
  coffeeShopAudio.volume = 0.5;
  fireplaceAudio.volume = 0.5;
  
  return {
    forestAudio,
    rainAudio,
    coffeeShopAudio,
    fireplaceAudio,
    buttonPressAudio,
    kitchenTimer,
  }
}