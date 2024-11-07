
import './App.css';
import { useState } from 'react';
import Register from './components/Register';


function App() {
  const [state, setState] = useState();

  return (
    <>
      <Register />
    </>
  )
}

export default App;


