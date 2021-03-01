import React from 'react'
import SelectBox from "./SelectBox";
import AudioButton from "./AudioButton";

const ControlPanel = ({isPlaying, setIsPlaying}) => {
  return(
    <div className="control_panel">
      <AudioButton isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
      <SelectBox/>
    </div>
  )
};

export default ControlPanel