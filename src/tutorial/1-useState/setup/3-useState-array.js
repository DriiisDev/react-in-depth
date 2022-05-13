import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  // this option or pass in the func directly
  // const clear = () => setPeople([]);
  const removeItem = (id)=>{
    // let newPeople = people.filter((person)=> person.id !== id);
    setPeople((persons)=>{
      return persons.filter((person)=>person.id !== id);
    });
  }
  return (
    <>
      <h2>useState array example</h2>
      {
        people.map((person) => {
          const {id, name} = person;
          return (
            <div key={id} className="item">
              <h4>{name}</h4>
              <button onClick={() => removeItem(id)}>remove</button>
            </div>
          );
        })
      }
      <button className='btn' onClick={()=>{setPeople([])}}>clear</button>
    </>
  );
};

export default UseStateArray;
