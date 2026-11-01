const Header = (props) => {
  return (
    <>
      <h1>
        {props.headerText}
      </h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.partTitle} {props.exerciseCount}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part partTitle={props.partTitle1} exerciseCount={props.exerciseCount1} />
      <Part partTitle={props.partTitle2} exerciseCount={props.exerciseCount2} />
      <Part partTitle={props.partTitle3} exerciseCount={props.exerciseCount3} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises {props.totalCount}
      </p>
    </>)
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
      <Header headerText={course} />
      <Content partTitle1={part1} exerciseCount1={exercises1} partTitle2={part2} exerciseCount2={exercises2} partTitle3={part3} exerciseCount3={exercises3} />
      <Total totalCount={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App