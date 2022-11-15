import React, { useState, useEffect } from 'react';
import './App.css';

import { BallTriangle } from 'react-loader-spinner';

function App() {
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
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
        { post ? post : 
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass= "loader"
            wrapperStyle=""
            visible={true}
        />
         }
    </div>
  );
}

export default App;
