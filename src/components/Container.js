import React,{useState} from 'react'
import FunctionDisplayKey from './FunctionDisplayKey'

const Container= () => {

    const [show, setShow] = useState(true);

    const btnDisplay = show ? 'caher' : 'afficher';

  return (
    <div className="text-center">
        <button className="btn btn-warning m-3" onClick={() =>setShow(!show)} >{btnDisplay}</button>
        TEST 3

        {
             show && <FunctionDisplayKey/>
        }
    </div>
  )
}

export default Container
