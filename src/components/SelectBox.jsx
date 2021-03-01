import React, {useState} from 'react'

const SelectBox = () => {

  const [topic, setTopic] = useState('');
  return(
    <div className="select_box">
      {/*<label>Choose a topic</label>*/}
      <select
        onChange={(e) => setTopic(e.target.value)}
        name="topic"
        className="select_input">
        <option value="">--Select a topic--</option>
        <option value="fruits">fruits</option>
        <option value="animals">animals</option>
        <option value="programming">programming</option>
      </select>
    </div>
  )
};

export default SelectBox