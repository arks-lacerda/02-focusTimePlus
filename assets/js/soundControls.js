export function SoundControls({
  forestCard,
  rainCard,
  coffeeShopCard,
  fireplaceCard,
  forestAudio,
  rainAudio,
  coffeeShopAudio,
  fireplaceAudio,
}) {

  function playPause(audio) {
    if (audio.paused) audio.play();
    else audio.pause();
  }

  function selectingSounds(button) {
    button.classList.toggle("selected");
  }

  function forestSound() {
    selectingSounds(forestCard);
    playPause(forestAudio);
  }

  function rainSound() {
    selectingSounds(rainCard);
    playPause(rainAudio);
  }

  function coffeeShopSound() {
    selectingSounds(coffeeShopCard);
    playPause(coffeeShopAudio);
  }

  function fireplaceSound() {
    selectingSounds(fireplaceCard);
    playPause(fireplaceAudio);
  }

  return {
    forestSound,
    rainSound,
    coffeeShopSound,
    fireplaceSound,
  }
}