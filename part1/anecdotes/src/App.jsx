import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function increaseVote(currentVoteState, position) {
  const newVoteState = [...currentVoteState]
  newVoteState[position] += 1
  return newVoteState
}

function getCoolest(currentVoteState) {
  let largest = null
  let largestIndex = null

  for (let i = 0; i < currentVoteState.length; i++) {
    if (currentVoteState[i] > largest) {
      largest = currentVoteState[i];
      largestIndex = i
    }
  }

  return largestIndex
}


const Title = (props) => {
  return (
    <h1>
      {props.text}
    </h1>
  )
}

const CoolestComponent = (props) => {
  if (props.voteAmount > 0) {
    return (
      <div>
        <Title text={"Anecodote with most votes"} />
        {props.anecdote}
        <div>has {props.voteAmount} votes</div>
      </div>
    )
  } else {
    return (
      <div>
        <br />
        Not enough votes
      </div >
    )
  }
}

const RandomButton = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const VoteButton = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])

  return (
    <div>
      <Title text={"Anecodote of the day"} />

      {anecdotes[selected]}
      <div>has {votes[selected]} votes</div>
      <VoteButton onClick={() => setVotes(increaseVote(votes, selected))} text="vote" />
      <RandomButton onClick={() => setSelected(getRandomInt(8))} text="next anecdote" />
      <CoolestComponent anecdote={anecdotes[getCoolest(votes)]} voteAmount={votes[getCoolest(votes)]} />
    </div>
  )
}

export default App