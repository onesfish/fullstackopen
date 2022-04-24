import React from 'react'
import Course from './componets/course/Course'
import Total from './componets/Total'


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }


  return (
    <div>
      <Course course={course} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App