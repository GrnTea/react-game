import React from 'react'

const SelectTopic = ({ setLevel }) => {

  function handleChange(e) {
    setLevel(e.target.value);
    console.log(e.target.value);
    e.target.blur();
  }

  return (
    <div className="select_box">
      {/*<label>Choose a topic</label>*/}
      <select
        onChange={handleChange}
        name="level"
        className="select_input">
        <option value="">--Select level--</option>
        <option value="6">6 mistakes</option>
        <option value="9">9 mistakes</option>
        <option value="12">12 mistakes</option>
      </select>
    </div>
  )
};

export default SelectTopic