import React,{useState,useEffect} from 'react'

const FunctionState = () => {

    const[count, setCount] = useState(0)

    useEffect(() =>{
            setTimeout(() => {
                document.title= `vous avez cliqué 10 fois`  
            },(5000));
            
       
    })
    
    return(
        <div>
            <p>number of click:{count} </p>
            <button className="btn btn-danger" onClick={() => setCount(prevCount => prevCount + 1)} >Click me</button>
        </div>
    )
}

export  default FunctionState 