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
  
  const comment = () => {
    return(<div>hi</div>)
  }

  return (
    <>
      <Title />
      <NewPost input={input} setInput={setInput} />
      {/* {input.map(({name, text}) => ( */}
      <Reply input={input} onClick={comment()}/>


      {/* ))} */}
     
    </>
  )
}

export default App