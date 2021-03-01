import React from 'react'
import {ReactComponent as VolumeOn} from "../img/volume.svg";
import {ReactComponent as VolumeOff} from "../img/mute.svg";

const AudioButton = ({isPlaying, setIsPlaying}) => {
  return(
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <VolumeOn className="audio-button" /> : <VolumeOff className="audio-button" />}
      </button>
    </div>
  )
};

export default AudioButton