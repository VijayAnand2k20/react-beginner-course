import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('Vanakkamda Maapla!!');
  const changeHandler = (element) => {
    setText(element.target.value);
  }
  return (
    <>
      <input type="text" onChange={changeHandler} />
      <h1>{text}</h1>
      <button onClick={() => setText("Vanakkamda Maapla!!")}>Reset</button>
    </>
  );
    
}

export default App;
