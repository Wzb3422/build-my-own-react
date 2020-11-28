import React from './react';

const element = (
  <article id="foo">
    <h1 className="title">Hello world</h1>
    <p><a href="https://reactjs.org">React</a>is a JavaScript library for building user interfaces</p>
  </article>
)

const container = document.getElementById('root');
React.render(element, container);
