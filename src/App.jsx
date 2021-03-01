import React, { useState, useEffect, useMemo } from "react";
import './App.css';
import Header from './components/Header'
import Figure from './components/Figure'
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import { playSounds, showNotification as show, checkWin } from "./helpers/helpers";
import Footer from "./components/Footer";
import note from "./audio/click-2.wav";
import audio1 from "./audio/ukulele.mp3";
import audio2 from "./audio/hey.mp3";
import audio3 from "./audio/jazzyfrenchy.mp3";
import AudioButton from "./components/AudioButton";
import SelectTopic from "./components/SelectTopic";
import VolumeSlider from "./components/VolumeSlider";


const words = {
  fruits: ['apple', 'banana', 'grapes', 'pear', 'orange'],
  animals: ['cat', 'frog', 'dog', 'goat', 'elephant'],
  programming: ['application', 'programming', 'interface', 'function', 'wizard']
};



// const words0 = ['apple', 'banana', 'grapes'];

const melodies = {
  'music0': new Audio(audio1),
  'music1': new Audio(audio2),
  'music2': new Audio(audio3),
};

const music = melodies['music1'];
music.volume = 0.2;
music.loop = true;
// music.addEventListener('ended', () => music = melodies['music0']);

// function changeVolume({e, music}) {
//   music.volume = e.currentTarget.value / 100;
// }



function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [topic, setTopic] = useState('fruits');
  const [range, setRange] = useState(0.50);

  // function changeVolume(range) {
  //   music.volume = range;
  // }

  const music = melodies['music1'];
  music.volume = 0.2;
  music.loop = true;
  music.volume = range;
  // if (music.volume === 0) setIsAudioPlaying (false);


  function getWord(topic) {
    return words[topic][Math.floor(Math.random() * words[topic].length)]
  }

  let selectedWord = useMemo(() => getWord(topic), [topic]);
  console.log('selectedWord', selectedWord);


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
            isAudioPlaying && playSounds(note);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter])
          } else {
            show(setShowNotification);
            isAudioPlaying && playSounds(note);
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
    // selectedWord = getWord(topic);
    setIsAudioPlaying(false);
    window.location.reload();
  }

  useEffect(() => {
      console.log(music);
      isAudioPlaying ? music.play() : music.pause();
      //setIsAudioPlaying(!isAudioPlaying);
      console.log(isAudioPlaying);

      return () => {
        if (isAudioPlaying) music.pause();
      }
    },
    [isAudioPlaying]
  );


  return (
    <>
      <Header />
      <div className="game-container">
        <div className="control_panel">
          <AudioButton isAudioPlaying={isAudioPlaying} setIsAudioPlaying={setIsAudioPlaying}/>
          <VolumeSlider setRange={setRange}/>
          <SelectTopic setTopic={setTopic} />
        </div>
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
      <Footer/>
      {!!checkWin(correctLetters, wrongLetters, selectedWord).length && <Popup
             correctLetters={correctLetters}
             wrongLetters={wrongLetters}
             selectedWord={selectedWord}
             setPlayable={setPlayable}
             playAgain={playAgain}
             isAudioPlaying={isAudioPlaying}
             setIsAudioPlaying={setIsAudioPlaying}
      />}
      <Notification showNotification={showNotification}/>
    </>
  );
}

export default App;
