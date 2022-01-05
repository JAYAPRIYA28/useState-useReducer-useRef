
import './App.css';

import State from './Components/state/State';
import CounterRender from './Components/reducer/Counter_reducer';
import MutableRef from './Components/ref/MutableRef';





function App() {
  return (
    <div className="App">
      <State/>
     <CounterRender/>
      <MutableRef/>
   
    </div>
  );
}

export default App;
