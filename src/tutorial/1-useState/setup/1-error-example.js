import React from 'react';

const ErrorExample = () => {
  var title = 'random title';
  const handleClick = () => {
    title = 'hello people';
    console.log(title);
  };
  return (
  < React.Fragment>
  <h2> {title}</h2>
  <button type = "button" className='btn' onclick ={handleClick}>
    change title
  </button>
  </React.Fragment>
  );
};

export default ErrorExample;
