import React from 'react'
import Course from './componets/course/Course'

// const Total = (props) => {
//   return (
//     <div>
//       <p>
//         Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
//       </p>
//     </div>
//   )
// }

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
      }
    ]
  }


  return <Course course={course} />
}

export default App