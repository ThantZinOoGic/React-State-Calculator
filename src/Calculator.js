import React, { useState } from 'react'

export default function Calculator() {
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);
    const [result, setResult] = useState(0);
    const addHandler = () => {
        setResult((+firstNum) + (+secondNum));
    }
  return (
    <div className='col-6 mx-auto card p-5'>
        <div className="">
            <div className="mb-3">
              <label className="form-label">First Number</label>
              <input type="number" 
                     className="form-control" 
                     id="exampleInputEmail1" 
                     aria-describedby="emailHelp"
                     onChange={(e)=> setFirstNum(e.target.value)}
                     />
            </div>
            <div className="mb-3">
              <label  className="form-label">second Number</label>
              <input type="number" 
                     className="form-control" 
                     id="exampleInputPassword1"
                     onChange={(e)=> setSecondNum(e.target.value)}
                     />
            </div>
            <button type="submit" 
                    className="btn btn-outline-primary form-control"
                    onClick={addHandler}
                    >Add</button>
        </div>
        <div className='mt-4'>Result : {result}</div>

    </div>
  )
}
