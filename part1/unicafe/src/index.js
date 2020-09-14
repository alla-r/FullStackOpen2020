import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const handleGoodCkick = () => {
    setGood(good + 1)
  }

  const handleNeutralCkick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadCkick = () => {
    setBad(bad + 1)
  }

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good * 100 / all

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={handleGoodCkick}>good</button>
      <button onClick={handleNeutralCkick}>neutral</button>
      <button onClick={handleBadCkick}>bad</button>
      <h2>statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {average}</div>
      <div>positive {positive}%</div>
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

