import React from 'react';
import ReactDOM from 'react-dom';


// CSS
import './index.css';

//JSX Rules
// return single element
// div / section / article or Fragment
// stateless functional component
// always return JSX

function Booklist() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/713toGwMnqL._AC_UL600_SR600,400_.jpg'
    alt=''
  />
);

const Title = () => <h1>Dad Jokes</h1>
const Author = () => <h4>Jimmy Niro</h4>;

ReactDOM.render(<Booklist />, document.getElementById('root'));
