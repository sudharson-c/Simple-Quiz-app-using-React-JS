import { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz/Quiz'
import Code from './components/Code';

function App() {
  const [open,setOpen] = useState(false);

  return (
    <>
      {/* <Quiz /> */}
      <button onClick={()=>setOpen(!open)}>Show</button>
        {open && <Code />}
    </>
  )
}

export default App
