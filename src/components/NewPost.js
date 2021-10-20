import React, {useState} from 'react'
import Reply from './Reply'

// const func = ({ key }) => {
//   const { key } = obj
// }


// takes in a name and a depth
const NewPost = ({input, setInput, id, depth, setId}) => {
  // const { n, t, d,i,r,c } = input
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  const sendState = () => {
    console.log(id)
    setInput(input=>[...input, {n:name, t:text, d:depth, i:id, r:[]}])
    setName('')
    setText('')
    setId(id+1)
    // setReply(0)
  }

  const buttonDisabled = () => {
    return !(text.length !== 0 && name.length !== 0);
  }

  return (
    <>
    {/* {depth === 3 && <h1>New Post</h1> }
    <br></br> */}
    <input onChange={e => setName(e.target.value)} />
    <input onChange={e => setText(e.target.value)} />
    <button type="submit" disabled={buttonDisabled()} onClick={sendState}>Submit</button>
    {/* <Reply input={input} setInput={setInput} reply={reply}  setReply={setReply} id={id} setId={setId}/> */}

    </>
  )
}

export default NewPost