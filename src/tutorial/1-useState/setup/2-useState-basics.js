import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1[0])
  // const handler = useState(1[1])

  const [text, setText] = useState('random ');
  const handleClick = () =>{
    if(text === 'random '){
      setText('109');
    }
    else{
      setText('random')
    }

  };
  return (
  <React.Fragment>
<h1>{text}</h1>
<button className='btn' onClick= {handleClick}>
  change tilte
</button>
  </React.Fragment>
  );
};

export default UseStateBasics;
