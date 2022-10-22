import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/1`)
        .then((res) => res.json())
            .then((data) => {
                const { body } = data;
                setPost(body); //!setting it to 'post' so that it can be accessed
            })
    })

  return (
    <div className="App">
      <h1>Welcome to Home</h1>

        {/*!!We add a carnary statement to show loading
        * if (post == null { Loading... } { Post }
        */}
        { post ? post : 'Loading...' }
    </div>
  );
}

export default App;
