import React,{useState} from 'react'
import NewPost from './NewPost'


const Reply = ({input, setInput, reply, setReply, id, setId}) => {
  // console.log(input)
  // const { name, text } = input
  const [name, setName] = useState('')
  const [depth, setDepth] = useState(3)
  

  const handleComment = () =>{
    setName(name),
    setDepth(depth-1),
    setReply(reply+1)
  }


  return(<>
    {input.map(({n,t, d, i, r}) => (
      <>
      <div>Name: {n}</div>
      <div>Post: {t}</div>
      <div>Depth:{d}</div>
      <div>ID:{i}</div>
      {/* <div>Reply:{repl}</div> */}

      <input type="number"
            onChange={e => e.target.value} />
      <button type="submit" onClick={handleComment}>Reply</button>
      {/* make a form if reply button is clicked 
      instead of having reply call newpost, have*/}
      {(reply !== 0) ? <NewPost setInput={setInput} depth={depth} reply={reply} setReply={setReply} id={id} setId={setId}/>: <br></br>}
      </>
    ))}
  </>)
}

export default Reply
