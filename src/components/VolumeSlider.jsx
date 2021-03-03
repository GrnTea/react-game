import React from 'react'

const VolumeSlider = ({ setRange }) => {

  function handleChange(e) {
    setRange(e.currentTarget.value / 100);
  }

  return(
      <input className="change_volume" type="range" min="0.3" onChange={handleChange}/>
  )
};

export default VolumeSlider