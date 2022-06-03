import React from 'react'
import dblclick from "../audio/dbl-click.mp3";
import {playSounds} from "../helpers/helpers";

const StartGame = ({ setCanStartGame, topic, errors, isAudioPlaying }) => {

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