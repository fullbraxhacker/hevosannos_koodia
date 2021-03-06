import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = (props) => {

    return [
        <div>
            <p> {props.part1} {props.exercises1} </p>
            <p> {props.part2} {props.exercises2} </p>
            <p> {props.part3} {props.exercises3} </p>
        </div>
    ]
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <p> 
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

