import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

const Header = (props) => {
  // console.log(props);
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  // console.log(props.parts[0]);
  // props.parts.forEach( obj => {
  //   // console.log(obj)
  //   <Part part={obj} />
    
    
  //   // <Part part={obj} />
  // })
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
  
  // props.parts.forEach( obj => <Part part={obj} />)
}

const Total = (props) => {
  let sum = 0;
  props.parts.forEach(el => {
    sum += el.exercises;
  });
  console.log(sum)
  return (
    <p>Number of exercises {sum}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      {/* <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} /> */}
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
