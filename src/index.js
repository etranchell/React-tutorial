import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

import { data } from './data';
import SpecificBook from './Books';
import { greeting } from './testing/testing';

function Booklist() {
  console.log(greeting);
  return (
    <section className='booklist'>
      {data.map((book) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

ReactDOM.render(<Booklist />, document.getElementById('root'));
