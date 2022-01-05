
import './App.css';
import Greet from './Components/props/Greet';
import Child from './Components/props/Child';
import Parent from './Components/props/Parent';
import Event from './Components/props/Event';
import State from './Components/state/State';
import CounterRender from './Components/reducer/Counter_reducer';
import { ThemeContext } from './Components/context/ThemeContext';
import Box from './Components/context/Box';
import { UserContext } from './Components/context/UserContext';
import User from './Components/context/User';
import Dom from './Components/ref/Dom';
import MutableRef from './Components/ref/MutableRef';
import Personal from './Components/component_props/Personal';
import Public from './Components/component_props/Public';
import Position from './Components/Template/Position';
// import List from './Components/props/Generic/List';

const greetSlot = {
    countList: 10
}

const personList = [
  {
    first: "jaii",
    last: "priya"
  },
  {
    first: "jaii",
    last: "prakash"
  }
]



function App() {
  return (
    <div className="App">
      <Greet name='jaii' slot = {greetSlot} persons= {personList}  solution= "success"/>

      <Parent>
      <Child>this is child</Child>
      </Parent>
      <Event  handleClick={event => {
        console.log("you clicked me", event)
      }} handleChange={event => {
        console.log("changes happened", event, event.target.value)
      }}
      styles = {{ padding: '10px', color: 'red'}}/>
      <State/>
     <CounterRender/>
     <ThemeContext> 
       <Box/>
        </ThemeContext>
        <UserContext>
          <User/>
        </UserContext>
        <Dom/>
        <MutableRef/>
        <Personal isLoggedIn={true} component={Public}/>
        {/* <List items={[{
          
          id: 1,
          name:"jaii"
          
        },
        {
          id:3,
          name:"hema"
        }
        ]} onClick={(item) => console.log(item)}/> */}
        <Position position='center- center'/>
    </div>
  );
}

export default App;
