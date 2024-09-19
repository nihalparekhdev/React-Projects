import { useState } from 'react'
import './App.css'

function App() {
  
    let [counter, setCounter] = useState(0)

    //let counter = 15;

    const addValue = () =>{
      if(counter >19){
        setCounter(counter)
      }
      else{
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
      }
        }

        const removeValue = () =>{
          if(counter< 1)
          {
            setCounter(counter)
          }
          else
          {
            counter--;
          }
          setCounter(counter)
          //console.log(counter);
            }

            const resetValue = () =>{
              counter=0;
              setCounter(counter)
              //console.log(counter);
                }

  return (
    <>
      <h1>React</h1>
      <br />
      <div>
      <button onClick={addValue}>Add Value {counter}</button> <br /> <br />
      <button onClick={removeValue}>Remove Value {counter}</button><br /> <br />
      <button onClick={resetValue}>Reset Value {counter}</button>
      </div>
    </>
  )
}

export default App
