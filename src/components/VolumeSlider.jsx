import React from 'react'

const VolumeSlider = ({ setRange }) => {


  function handleChange(e) {
    setRange(e.currentTarget.value / 100);
    console.log(e.currentTarget.value / 100);
    // e.target.blur();
  }

  return(
      <input className="change_volume" type="range" min="0.3" onChange={handleChange}/>
  )
};

export default VolumeSlider