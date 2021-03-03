import React from 'react'
import {ReactComponent as VolumeOn} from "../img/volume.svg";
import {ReactComponent as VolumeOff} from "../img/mute.svg";

const AudioButton = ({isAudioPlaying, setIsAudioPlaying}) => {

  return(
    <div>
      <button onClick={() => setIsAudioPlaying(!isAudioPlaying)}>
        {isAudioPlaying ? <VolumeOn className="audio-button" /> : <VolumeOff className="audio-button" />}
      </button>
    </div>
  )
};

export default AudioButton