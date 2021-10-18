import React, {useState} from 'react'

// const func = ({ key }) => {
//   const { key } = obj
// }

const NewPost = ({setInput}) => {
  // const { n, t } = setInput
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  
  const sendState = () => {
    setInput(input=>[...input, [name, text]])
    setName('')
    setText('')
    console.log("after clear" + name);
    console.log("after clear"+ text);
  }

  const buttonDisabled = () => {
    return !(text.length !== 0 && name.length !== 0);
  }

  return (
    <>
    <h1>New Post</h1>
    <input onChange={e => setName(e.target.value)} />
    <input onChange={e => setText(e.target.value)} />
    <button type="submit" disabled={buttonDisabled()} onClick={sendState}>Submit</button>
    </>
  )
}

export default NewPost