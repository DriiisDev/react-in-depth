import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const[text, setText] = useState('Idris');
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      <h2>short circuit</h2>
       {/* <h1>{firstValue}</h1>
       <h1>value: {secondValue}</h1> */}
       <h1>{text && 'john doe'}</h1>
       <button className='btn' onClick={()=>setIsError(!isError)}>toggle error</button>
       {/* short-circuit evaluation */}
       {/* {isError && <h1>Error...</h1>} */}
       {/* ternary operator */}
       {isError ? <h1>true</h1>:<h1>false</h1>}
       {/* {!text && <h1>hello world</h1>} */}
    </>
  );
};

export default ShortCircuit;
