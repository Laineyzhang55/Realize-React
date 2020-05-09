function createElement(tag, attrs, ...children) {
  return{
    tag,
    attrs,
    children
  }   
}

const React = {
  createElement
};


function render(vdom, container) {
  let node;
  if(typeof vdom === 'string') {
  node = document.createTextNode(vdom);
  }
  if(typeof vdom === 'object') {
  node = document.createElement(vdom.tag);
  vdom.children.forEach(childVdom => render(childVdom, node));
  }
  container.appendChild(node);
} 

const ReactDOM = {
  render(vdom, container) {
    container.inerHTML=''
    render(vdom,container)
  }
}

let div = (
  <div> 
    <p>hello <span>biger </span>word</p>
    
  </div>
)
console.log(div);

ReactDOM.render(div, document.body)
