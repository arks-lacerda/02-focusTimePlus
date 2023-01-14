export function Controls({
  playButton,
  pauseButton,
  buttonPressAudio,
  body,
}) {

  function darkMode() { 
    body.classList.toggle("darkTheme");
    buttonPressAudio.play();
  }


  function play() {
    playButton.classList.add("hide");
    pauseButton.classList.remove("hide");
    buttonPressAudio.play();
  }

  function pause() {
    playButton.classList.remove("hide");
    pauseButton.classList.add("hide");
    buttonPressAudio.play();
  }

  function reset() {
    playButton.classList.remove("hide");
    pauseButton.classList.add("hide");
  }
  
  function stop() {
    reset();
    buttonPressAudio.play();
  }


  return {
    darkMode,
    play,
    pause,
    stop,
    reset,
  }
}