import React,{useState} from 'react'
import NewPost from './NewPost'


const Reply = ({input, n, t, setInput, id, setId, depth}) => {
  // console.log(input)
  // const { name, text } = input
  const [name, setName] = useState('')
  const [replies, setReplies] = useState([])
  const [text, setText] = useState('')
  const [clicked, setClicked] = useState(false)



  const handleComment = () =>{
    // setName(name),
    // setDepth(depth-1),
    setClicked(true),
    setId(id+1)
  }

  const addReply = () =>{
    setReplies(replies=>[...replies, {n:n, t:t, d:depth, i:id, r:[]}]),
    // setInput(input=>[...input, {n:prevName, t:prevText, d:depth, i:id, r:replies}])
    setClicked(false)
  }

  
  return(<>
    <div>Name: {n}</div>
    <div>Post: {t}</div>
    <div>Depth:{depth}</div>
    <div>ID:{id}</div>
    <input type="number"
            onChange={e => e.target.value} />
    <button type="submit" onClick={handleComment}>Reply</button>
    {(clicked) ? <><input onChange={e => setName(e.target.value)} />
                        <input onChange={e => setText(e.target.value)} />
                        <button type="submit" onClick={addReply}>Submit</button></>: <br></br>}
    {replies.map(({ n,t,d,i,r}) => (
    <div>
      { 
      <Reply input={input} setInput={setInput} n={name} t={text} id={i} setId={setId} depth={d - 1}></Reply> }
    </div>
    ))} 

  </>)
}

export default Reply
