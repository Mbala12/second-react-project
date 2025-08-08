import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import {Hello} from './Components/Hello'
import {Counter} from './Components/Counter'
import {Message} from './Components/Message'
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import { EventBind } from './Components/EventBind';
import { ParentComponent } from './Components/ParentComponent';
import { UserGreeting } from './Components/UserGreeting';
import NameList from './Components/NameList';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import './Components/appStyles.css'
import styles from './Components/appStyles.module.css'
import Form from './Components/Form'
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import PureCompo from './Components/PureCompo';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
import Input from './Components/Input'
import FocusInput from './Components/FocusInput';


function App() {
  return (
    <div className="App">
      {/* 
        <Greet name="Apoulah" age="34" >
          <p>This is Children</p>
        </Greet>
        <Greet name="Jay" age="35">
          <button>Try button</button>
        </Greet>
        <Greet name="Djedje" age="36" />
        <Welcome name="Apoulah" age="34" />
        <Welcome name="Jay" age="35"/> 
        <Message />
        <Counter />
        <Greet name="Apoulah" age="38" />
        <Welcome name="Apoulah" age="40" />
        <ClassClick />
        <EventBind />
        <UserGreeting /> 
        <NameList />
        <Stylesheet color={true}/>
        <h1 className='error'>Error from AppStyles</h1>
        <h1 className={styles.success}>Error from AppStyles.module</h1>
        <Inline />
        <Form />
        <FragmentDemo />
        <Table />
        <ParentComp />
        <RefsDemo />
        <Input />
      */}
      <FocusInput />
    </div>
  );
}

export default App;
