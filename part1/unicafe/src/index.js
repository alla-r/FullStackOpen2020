import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistic = ({text, value, unit}) => {
return (
  <tr>
    <td>{text}</td> 
    <td>{value}{unit}</td>
  </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good || neutral || bad) {
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = good * 100 / all
    return (
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
          <Statistic text='good' value={good} />
          <Statistic text='neutral' value={neutral} />
          <Statistic text='bad' value={bad} />
          <Statistic text='all' value={all} />
          <Statistic text='average' value={average} />
          <Statistic text='positive' value={positive} unit='%' />
          </tbody>
        </table>
      </div>
    )
  }
   return (
     <p>No feedback given</p>
   )
}

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
    
      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

