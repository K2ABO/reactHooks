import React from 'react'
import FunctionState from './components/FunctionState'
import Todo from './components/Todo'
import Container from '../src/components/Container'



function App(){
    return(
        <div>
          <h1 className="text-center">hookstates</h1>  
            <FunctionState />
            <Todo />
            <Container/>
           
        </div>
    )
}

export default App
