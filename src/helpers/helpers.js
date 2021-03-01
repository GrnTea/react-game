export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false)
  }, 2000)
}

export function checkWin(correct, wrong, word) {
  let status = 'win';

  word.split('').forEach(letter => {
    if(!correct.includes(letter)){
      status = '';
    }
  });

  if(wrong.length === 6) status = 'lose';

  return status;
}

export function playSounds(track) {
  let audio = new Audio(track);
  audio.play();
  audio.volume = 0.3;
}


