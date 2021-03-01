import React from 'react'

const SelectBox = ({ setTopic }) => {

  function handleChange(e) {
    setTopic(e.target.value);
    console.log(e.target.value);
    e.target.blur();
  }

  return (
    <div className="select_box">
      {/*<label>Choose a topic</label>*/}
      <select
        onChange={handleChange}
        name="topic"
        className="select_input">
        {/*<option value="">--Select a topic--</option>*/}
        <option value="fruits">fruits</option>
        <option value="animals">animals</option>
        <option value="programming">programming</option>
      </select>
    </div>
  )
};

export default SelectBox