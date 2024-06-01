const heading = React.createElement(
  'h1', // element
  { className: 'title' }, // Attributes
  'Hello from React!' // Children
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
