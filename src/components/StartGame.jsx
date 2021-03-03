import React from 'react'
import dblclick from "../audio/dbl-click.mp3";
import {playSounds} from "../helpers/helpers";

const StartGame = ({ setCanStartGame, topic, errors, isAudioPlaying }) => {

  localStorage.setItem('selectedErrors', errors);
  localStorage.setItem('selectedLevel', topic);

  /*const statFromStorage = JSON.parse(localStorage.getItem('statisticsStorage')) || [];
  console.log('statFromStorage1', statFromStorage);
  const errorsFromStorage = JSON.parse(localStorage.getItem('selectedErrors')) || [];
  console.log('errorsFromStorage', errorsFromStorage);

  statFromStorage[statFromStorage.length - 1].push(errorsFromStorage);
  localStorage.setItem('statisticsStorage', JSON.stringify(statFromStorage));
*/

  const toggleStartGame = (topic, errors) => {
    if (topic === "audio0" || errors === undefined) {
      alert('Select topic and number of mistakes!');
      isAudioPlaying && playSounds(dblclick);

    } else {
      setCanStartGame(true);
      isAudioPlaying && playSounds(dblclick);
    }
  };

  return(
      <button onClick={() => toggleStartGame(topic, errors)}>
        Start
      </button>
  )
};

export default StartGame