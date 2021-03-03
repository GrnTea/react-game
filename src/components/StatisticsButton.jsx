import React from 'react'

const StatisticsButton = ({ setCanSeeStatistics}) => {
  return (
      <button onClick={() => setCanSeeStatistics(true)}>
        Statistics
      </button>
  )
};

export default StatisticsButton