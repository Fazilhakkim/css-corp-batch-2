import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <h1>
      hello from react
    </h1>
    <h2
      style={{
        backgroundColor: 'red',
        color: '#fff',
      }}
    >
      hello from style
    </h2>
  </div>
);
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
