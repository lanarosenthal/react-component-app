import React from 'react'

const Reply = ({input}) => {
  // console.log(input)
  // const { name, text } = input


  return(<>
    {input.map(([n,text]) => (
      <>
      <div>Name: {n}</div>
      <div>Post: {text}</div>
      <button type="submit">Reply</button>

      </>
    ))}
  </>)
}

export default Reply