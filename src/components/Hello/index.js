import React from 'react';

const Hello = (props) => {

    if (props.name) {
        return <h1 data-testid="item">Hello, {props.name}!</h1>;
      } else {
        return <span data-testid="item">Hey, stranger</span>;
      }
}

export default Hello;