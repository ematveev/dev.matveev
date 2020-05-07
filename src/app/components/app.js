import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
      console.log('Enter effect')
      fetch('/welcome')
          .then(res => res.json())
          .then(data => {
          console.log(data);
          setMessage(data.message);
      });
  }, []);

  return (
    <div className="App">
        <p>{message} to my personal website</p>
    </div>
  );
}

export default App;
