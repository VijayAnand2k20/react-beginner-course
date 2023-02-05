import Bag from './components/Bag';
import Apple from './components/Apple';
import Pear from './components/Pear';
import './App.css';



function App() {
  return (
    <>
    <Bag>
      <Apple color="green" number="10" />
    </Bag>
    <Bag>
      <Pear friend="John" />
    </Bag>
    </>
  );
}

export default App;
