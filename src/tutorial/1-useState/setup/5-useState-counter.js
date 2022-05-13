 import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  // const decrease = () =>{
  //   let num = value-1;
  //   setValue(num);
  // };
  const reset = () =>{
    setValue(0);
  };
  // const increase = () =>{
  //   let increase = value+1;
  //   setValue(increase);
  // };

  const complex=()=>{
    setTimeout(() => {
      // setValue (value + 1);
      setValue((preState)=>{
        return preState + 1;
      });
    }, 2000);
  };

  return (
  <>
    <section style={{margin: '4rem 0'}}>
      <h2>useState counter example</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={()=> setValue(value - 1)}>decrease</button>
      <button className='btn' onClick={reset}>reset</button>
      <button className='btn' onClick={()=> setValue(value + 1)}>increase</button>
    </section>

    <section style={{margin: '4rem 0'}}>
      <h2>complex counter example</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={complex}>increase later</button>
    </section>
  </>
  );
};

export default UseStateCounter;
