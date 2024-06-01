// CREATE THE FOLLOWING HTML WITH REACT
{
  /* <div id='title'>
    <div id='child'>
        <h1 id="title"></h1>
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
    React.createElement(
      'h1',
      {
        id: 'title',
      },
      'Hello from React! '
    )
  ) // Children
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parentContainer);
