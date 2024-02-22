import { useState } from 'react';

export default function Calculator() {
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);
    const [result, setResult] = useState(0);
    const addHandler = () => {
        setResult((+firstNum) + (+secondNum));
    }
    const substractHandler = () => {
        if((+firstNum) >= (+secondNum)) {
            setResult(firstNum - secondNum);
        } else {
            setResult("First Number must greater than Second Number");
        }
    }
    const multipleHandler = () => {
        setResult(firstNum * secondNum);
    }
    const divideHandler = () => {
        if(secondNum != 0)
        {
            setResult(firstNum/secondNum);
        } else {
            setResult("Divider not be Zero");
        }
        
    }
  return (
    <div className='col-4 mx-auto card p-5 shadow-sm'>
        <h3 className='text-center'>React Calculator</h3>
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
            <div className="d-flex justify-content-around">
            <button type="button" 
                    className="btn btn-outline-primary px-3"
                    onClick={addHandler}
                    >Add</button>
            <button type="button" 
                    className="btn btn-outline-primary px-3"
                    onClick={substractHandler}
                    >Sub</button>
            <button type="button" 
                    className="btn btn-outline-primary px-3"
                    onClick={multipleHandler}
                    >Multi</button>
            <button type="button" 
                    className="btn btn-outline-primary px-3"
                    onClick={divideHandler}
                    >Div</button>
            </div>
        </div>
        <h5 className='mt-4 text-center'>
            {typeof(result) === "number" ? ` Result -  ${result} `: <div className='text-danger'>{result}</div>}
        </h5>
    </div>
  )
}
