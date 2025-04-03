import "./App.css";
import Viewer from './components/Viewer';
import Controller from './components/Controller2';
import Controller2 from './components/Controller2';
import { useState } from "react";

function App(){
  const [count, setCount] = useState(0);
  const onClkBtn = (value)=>{
    setCount(count + value);
  }

  return (
  <div className="App">
    <h1>Simple counter</h1>
    <section>
      <Viewer count={count}/>
    </section>
    <section>
      <Controller2 onClkBtn={onClkBtn}/>
    </section>
  </div>
  )
}
export default App;