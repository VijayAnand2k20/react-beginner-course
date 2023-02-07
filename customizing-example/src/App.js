import Nav from './components/Nav';
import Body from "./components/Body"
import Footer from './components/Footer';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Body logo = {logo}/>
      <Footer />
    </div>
  );
}

export default App;
