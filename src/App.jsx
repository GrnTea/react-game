import React, {useState, useEffect} from "react";
import './App.css';
import Header from './components/Header'
import Figure from './components/Figure'
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import {playSounds, showNotification as show} from "./helpers/helpers";
import Footer from "./components/Footer";
import note from "./audio/click-2.wav";
import audio1 from "./audio/ukulele.mp3";
import audio2 from "./audio/hey.mp3";
import audio3 from "./audio/jazzyfrenchy.mp3";
import ControlPanel from "./components/ControlPanel";



const words = ['apple', 'banana', 'grapes', 'application', 'programming', 'interface', 'wizard', 'frog', 'cub'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let melodies = {
  'music0': new Audio(audio1),
  'music1': new Audio(audio2),
  'music2': new Audio(audio3),
};


let music = melodies['music1'];
music.addEventListener('ended', () => music = melodies['music0']);
music.volume = 0.3;

function App() {
  const[playable, setPlayable] = useState(true);
  const[correctLetters, setCorrectLetters] = useState([]);
  const[wrongLetters, setWrongLetters] = useState([]);
  const[showNotification, setShowNotification] = useState(false);
  const[isPlaying, setIsPlaying] = useState(false);




  useEffect(() => {
      const handleKeydown = event => {
      const {key, keyCode} = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter])
          } else {
            show(setShowNotification);
            playSounds(note);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter])
          } else {
            show(setShowNotification);
            playSounds(note);
          }
        }

      }
    };

    window.addEventListener('keydown', handleKeydown);

    return() => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);


  function playAgain(){
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    selectedWord = words[Math.floor(Math.random() * words.length)];
    setIsPlaying(false);
  }

  useEffect(() => {
      console.log(music);
      isPlaying ? music.play() : music.pause();
      //setIsPlaying(!isPlaying);
      console.log(isPlaying);

      return () => {
        if (isPlaying) music.pause();
      }
    },
    [isPlaying]
  );


  return (
    <>
      <Header />
      <div className="game-container">
        <ControlPanel isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
      <Footer/>
      <Popup correctLetters={correctLetters}
             wrongLetters={wrongLetters}
             selectedWord={selectedWord}
             setPlayable={setPlayable}
             playAgain={playAgain}
             setIsPlaying={setIsPlaying}
      />
      <Notification showNotification={showNotification}/>
    </>
  );
}

export default App;
