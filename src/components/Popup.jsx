import React from 'react'
import { checkWin } from '../helpers/helpers'

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'congratulations! You won!';
    playable = false;
  } else if(checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'Unfortunately you lost :(';
    finalMessageRevealWord = `the word was ${selectedWord}`;
    playable = false;
}

  return(
    <div className="popup-container">
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button>Play Again</button>
      </div>
    </div>
  )
};

export default Popup



