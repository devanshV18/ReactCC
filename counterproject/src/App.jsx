import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //useState - propogates changes on UI
  //return type is array so we declare it like const [variable,updation function of the variable]

  let [counter, setCounter] = useState(20) //default value is the use state arguemnt
  
  //let counter = 20

  const addValue = () => {
    console.log("Clicked",counter);
    counter = counter + 1
    setCounter(counter)

  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button>Decrease Value {counter}</button>
      <p>footer : {counter}</p>
    </>   
  )
}

export default App
