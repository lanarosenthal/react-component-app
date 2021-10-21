import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';

const Reply = ({
  input, n, t, setInput, id, setId, depth,
}) => {
  const [nam, setNam] = useState('');
  const [replies, setReplies] = useState([]);
  const [tex, setTex] = useState('');
  const [clicked, setClicked] = useState(false);

  const buttonDisabled = () => !(tex.length !== 0 && nam.length !== 0);

  const replyDisabled = () => depth <= 1;
  const handleComment = () => {
    setClicked(true);
    setId(id + 1);
  };

  const addReply = () => {
    setReplies((replies) => [...replies, {
      n: nam, t: tex, d: depth, i: id, r: [],
    }]),
    setClicked(false);
  };

  return (
    <Card>
      <div>
        Name:
        {n}
      </div>
      <div>
        Post:
        {t}
      </div>
      <input type="number" onChange={(e) => e.target.value} />
      {replies.map(({
        n, t, d, i, r,
      }) => (
        <div key="reply-{item}">
          <Reply
            input={input}
            setInput={setInput}
            n={n}
            t={t}
            id={id + 1}
            setId={setId}
            depth={d - 1}
          />
        </div>
      ))}
      <Button
        variant="primary"
        type="submit"
        disabled={replyDisabled()}
        onClick={handleComment}
      >
        {' '}
        Reply
      </Button>

      {(clicked)
        ? (
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter name" onChange={(e) => setNam(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Post</Form.Label>
              <Form.Control type="post" placeholder="Post" onChange={(e) => setTex(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={buttonDisabled()} onClick={addReply}>
              Submit
            </Button>
          </Form>
        )
        : <br />}
    </Card>
  );
};

export default Reply;
