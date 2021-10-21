// package imports
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// local imports
import Title from './components/Title';
import NewPost from './components/NewPost';
import Reply from './components/Reply';

import './App.css';

// functional component
const App = () => {
  const [input, setInput] = useState([]);

  const [reply, setReply] = useState(0);
  const [id, setId] = useState(0);
  const [depth, setDepth] = useState(3);

  // have a field of child post for each post

  return (
    <>
      <Title />
      <NewPost
        input={input}
        setInput={setInput}
        reply={reply}
        setReply={setReply}
        id={id}
        setId={setId}
        depth={depth}
        setDepth={setDepth}
      />
      { input.map(({
        n, t, d, i, r,
      }) => (
        <div key={`${i}`}>
          <Reply
            input={input}
            setInput={setInput}
            n={n}
            t={t}
            depth={d}
            setId={setId}
            id={i}
            r={r}
          />
        </div>
      ))}
    </>
  );
};

export default App;
