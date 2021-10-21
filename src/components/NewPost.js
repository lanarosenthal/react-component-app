import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';

// takes in a name and a depth
const NewPost = ({
  input,setInput, id, depth, setId,
}) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const sendState = () => {
    setInput((input) => [...input, {
      n: name, t: text, d: depth, i: id, r: []
    }]);
    setName('');
    setText('');
    setId(id + 1);
  };

  const buttonDisabled = () => !(text.length !== 0 && name.length !== 0);

  return (
    <>
      <Card>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Post</Form.Label>
            <Form.Control type="post" placeholder="Post" onChange={(e) => setText(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={buttonDisabled()} onClick={sendState}>
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default NewPost;
