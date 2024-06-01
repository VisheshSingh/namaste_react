import React from 'react';
import ReactDOM from 'react-dom/client';

// CREATE THE FOLLOWING HTML WITH REACT
{
  /* <div id='title'>
    <div id='child'>
        <h1 id="first">First Child</h1>
        <h1 id="second">Second child</h1>
    </div>
</div> */
}

const parentContainer = React.createElement(
  'div', // element
  { id: 'parent' }, // Attributes
  React.createElement(
    'div',
    {
      id: 'child',
    },
    [
      React.createElement(
        'h1',
        {
          id: 'first',
        },
        'First'
      ),
      React.createElement(
        'h1',
        {
          id: 'second',
        },
        'Second'
      ),
    ]
  ) // Children
);

console.log(parentContainer); // this is a React object that the browser understands
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parentContainer);
