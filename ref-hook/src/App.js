import { useRef} from 'react';
import './App.css';

function App() {
  const nameRef = useRef();
  const clickHandler = () => {
    nameRef.current.focus();
    nameRef.current.value = 'Hello';
    nameRef.current.style.color = 'red';
}
  return (
    <>
      <input type='text' ref={nameRef}/>
      <button onClick={clickHandler}>Focus</button>
    </>
  );
}

export default App;
