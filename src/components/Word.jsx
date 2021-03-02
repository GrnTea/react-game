import React from 'react'

const Word = ({ selectedWord, correctLetters }) => {
  let moves;

  localStorage.setItem('correctLetters', correctLetters);
  moves = correctLetters.length;
  localStorage.setItem('moves', moves);

  return(
    <div className="word">
      {selectedWord?.split('').map((letter, index) => {
        return(
          <span className="letter" key={index}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )}
      )}
    </div>
  )
};

export default Word

