import React from 'react'


const StatisticsPopup = ({canSeeStatistics, setCanSeeStatistics}) => {

  const statFromStorage = JSON.parse(localStorage.getItem('statisticsStorage')) || [];
  console.log('statFromStorage', statFromStorage );

  return (
  <div className="popup-container statistics" style={canSeeStatistics ? {display: 'flex'} : {}}>
    <div className="popup">
      <h2>Statistics</h2>
        <div className="table">
          <table>
            <thead>
              <tr>
                <td>
                  Word
                </td>
                <td>
                  Allowed mistakes
                </td>
                <td>
                  Topic
                </td>
                <td>
                  Wrong letters
                </td>
                <td>
                  Correct letters
                </td>
                <td>
                  Attempts
                </td>
              </tr>
            </thead>
            <tbody>
            {statFromStorage.map((item, index) => {
              return (
                <tr className="list-item" key={index}>
                  <td>
                    {item.selectedWord}
                  </td>
                  <td>
                    {item.errors}
                  </td>
                  <td>
                    {item.topic}
                  </td>
                  <td>
                    {item.wrongLetters.join(', ')}
                  </td>
                  <td>
                    {item.correctLetters.join(', ')}
                  </td>
                  <td>
                    {item.attempts}
                  </td>
                </tr>
              )
            })
            }
            </tbody>
          </table>
        </div>
      <button onClick={() => setCanSeeStatistics(false)}>Close</button>
    </div>
  </div>
  )
};

export default StatisticsPopup