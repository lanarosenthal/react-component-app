// package imports
import React, { useState } from 'react'

// local imports
import Title from './components/Title'
import NewPost from './components/NewPost'
import Reply from './components/Reply'

// import './App.css'

// functional component
const App = () => {
  const [input, setInput] = useState([])
  const [child, setChild] = useState([])

  // const [votes, setVotes] = useState(0)
  const [reply, setReply] = useState(0)
  const [id, setId] = useState(0)
  const [depth, setDepth] = useState(3)

// have a field of child post for each post


  return (
    <>
      <Title />
      <NewPost input={input} setInput={setInput} reply={reply} setReply={setReply} id={id} setId={setId} depth={depth} setDepth={setDepth}/>
      {input.map(({n,t,d,i,r}) => (
        <div>
          <Reply input={input} setInput={setInput} n={n} t={t} depth={d} setId={setId} id={i} r={r}/>
        </div>
      ))}


      {/* <Reply input={input} setInput={setInput} reply={reply}  setReply={setReply} id={id} setId={setId} depth={3} setDepth={setDepth}/> */}
    </>
  )
}

export default App