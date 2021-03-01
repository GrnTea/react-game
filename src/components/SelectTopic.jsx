import React from 'react'

const SelectTopic = ({ setTopic }) => {

  function handleChange(e) {
    setTopic(e.target.value);
    console.log(e.target.value);
    e.target.blur();
  }

  return (
    <div className="select_box">
      <select
        onChange={handleChange}
        name="topic"
        className="select_input">
        <option value="">--Select a topic--</option>
        <option value="fruits">fruits</option>
        <option value="animals">animals</option>
        <option value="IT">IT</option>
      </select>
    </div>
  )
};

export default SelectTopic