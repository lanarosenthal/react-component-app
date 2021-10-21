import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';

const Reply = ({
  input, n, t, setInput, id, setId, depth,
}) => {
  const [name, setName] = useState('');

  const [replies, setReplies] = useState([]);
  const [text, setText] = useState('');
  const [clicked, setClicked] = useState(false);

  const buttonDisabled = () => !(text.length !== 0 && name.length !== 0);

  const replyDisabled = () => depth <= 1;

  const handleComment = () => {
    setClicked(true);
    setId(id + 1);
  };

  const addReply = () => {
    setReplies((replies) => [...replies, {
      n: name, t: text, d: depth, i: id, r: [],
    }]),
    setClicked(false);
    setName('');
    setText('');
  };

  return (
    <Card>
      <div className="replyContents name">
        {n}
      </div>
      <div className="replyContents text">
      &nbsp;&nbsp; &nbsp; &nbsp;
        {t}
      </div>
      <input className="replyContents voter" type="number" placeholder="vote" onChange={(e) => e.target.value} />
      {replies.map(({
        n, t, d, i, r,
      }) => (
        <div className="replyContents" key={`reply-${Math.random()}`}>
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
        className="replyContents"
        variant="primary"
        type="submit"
        disabled={replyDisabled()}
        onClick={handleComment}
      >
        Reply
      </Button>

      {(clicked)
        ? (
          <Form className="formContents">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Post</Form.Label>
              <Form.Control type="post" placeholder="Post" onChange={(e) => setText(e.target.value)} />
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
