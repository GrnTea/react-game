import React from 'react'

const SelectLevel = ({ setErrors }) => {

  function handleChange(e) {
    setErrors(parseFloat(e.target.value));


    console.log(e.target.value);
    e.target.blur();
  }

  return (
    <div className="select_box">
      {/*<label>Choose a topic</label>*/}
      <select
        onChange={handleChange}
        name="errors"
        className="select_input">
        <option value="">--Select level--</option>
        <option value="6">6 mistakes</option>
        <option value="10">10 mistakes</option>
        <option value="13">13 mistakes</option>
      </select>
    </div>
  )
};

export default SelectLevel