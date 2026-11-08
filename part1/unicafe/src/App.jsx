import { useState } from "react"

const giveFeedbackTitle = "give feedback"
const statisticsTitle = "statistics"

const Title = (props) => {
  return (
    <h1>
      {props.text}
    </h1>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.count}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.good || props.bad || props.neutral) {
    return (
      <div>
        <Title text={statisticsTitle} />
        <table>
          <tbody>
            <StatisticLine text="good:" count={props.good} />
            <StatisticLine text="neutral:" count={props.neutral} />
            <StatisticLine text="bad:" count={props.bad} />
            <StatisticLine text="total:" count={props.good + props.neutral + props.bad} />
            <StatisticLine text="average:" count={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
            <StatisticLine text="positive:" count={((props.good) * 100 / (props.good + props.neutral + props.bad)) + "%"} />
          </tbody>
        </table>
      </div >
    )
  } else {
    return (
      <div>
        <Title text={statisticsTitle} />
        No feedback given
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title text={giveFeedbackTitle} />
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
export default App