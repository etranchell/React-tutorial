import React from 'react';

const ErrorExample = () => {
  let title = 'random title';
  const handleCLick = () => {
    title = "Hello People"
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleCLick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
