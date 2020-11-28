function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => typeof child === 'object' ? child : createTextElement(child)),
    },
  }
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    }
  }
}

function render(element, container) {
  const node = element.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(element.type);

  element.props.children.forEach(child => {
    render(child, node);
  })

  for (const key in element.props) {
    if (key !== 'children') {
      node[key] = element.props[key];
    }
  }

  container.appendChild(node);

}

export default {
  createElement,
  render,
}
