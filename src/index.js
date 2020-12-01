import React from './react';

const container = document.getElementById("root")

function App() {
  const [state, setState] = React.useState(0);
  return (
    <div>
      <h1>Hello Function Components</h1>
      <p>Click me, count: {state}</p>
      <button onClick={() => setState(s => s + 1)}>Plus one</button>
    </div>
  )
}

const elements = <App />
React.render(elements, container);
