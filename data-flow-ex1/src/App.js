import PromoContent from './PromoContent';
import NewComponent from './NewComponent'
import './App.css';

function App() {
  const content = {
    heading: "Welcome to the Jungle",
    CallToAction: "Join the fun!"
  }
  return (
    <>
    <PromoContent heading={content.heading} CallToAction={content.CallToAction} />
    <NewComponent component=<PromoContent heading={"Hello"} CallToAction={"Vanakko"} /> />
    </>
  );
}

export default App;
