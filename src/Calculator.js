import { useState } from 'react';

export default function Calculator() {
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);
    const [result, setResult] = useState(0);
    const addHandler = () => {
        setResult((+firstNum) + (+secondNum));
    }
  return (
    <div className='col-4 mx-auto card p-5 shadow-sm'>
        <h3 className='text-center'>Sum Calculator</h3>
        <div className="">
            <div className="mb-3">
              <label className="form-label">First Number</label>
              <input type="number" 
                     className="form-control" 
                     id="exampleInputEmail1" 
                     aria-describedby="emailHelp"
                     value={firstNum}
                     onChange={(e)=> setFirstNum(e.target.value)}
                     />
            </div>
            <div className="mb-3">
              <label  className="form-label">second Number</label>
              <input type="number" 
                     className="form-control" 
                     id="exampleInputPassword1"
                     value={secondNum}
                     onChange={(e)=> setSecondNum(e.target.value)}
                     />
            </div>
            <div className="d-grid">
            <button type="button" 
                    className="btn btn-primary"
                    onClick={addHandler}
                    >Add</button>
            </div>
        </div>
        <h5 className='mt-4 text-center'>Result : {result}</h5>

    </div>
  )
}
