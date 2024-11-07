
import './App.css';
import { useState } from 'react';
import Register from './components/Register';
import HookExam from './components/HookExam';


function App() {
  const [state, setState] = useState();

  return (
    <>
      <HookExam />
    </>
  )
}

export default App;


