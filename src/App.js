import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import {Hello} from './Components/Hello'
import {Counter} from './Components/Counter'
import {Message} from './Components/Message'


function App() {
  return (
    <div className="App">
      {/* <Greet name="Apoulah" age="34" >
        <p>This is Children</p>
      </Greet>
      <Greet name="Jay" age="35">
        <button>Try button</button>
      </Greet>
      <Greet name="Djedje" age="36" />
      <Welcome name="Apoulah" age="34" />
      <Welcome name="Jay" age="35"/> */}
      <Message />
      <Counter />
    </div>
  );
}

export default App;
