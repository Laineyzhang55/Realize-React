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

function setAttribute(node, attrs) {
  if(!attrs) return

  for(let key in attrs) {
    if(key.startsWith('on')){
      node[key.toLocaleLowerCase()] = attrs[key];
    }else if(key === 'style'){
      Object.assign(node.style, attrs[key]);
    } else {
      node[key] = attrs[key];
    }
  }
}

function render(vdom, container) {
  let node;
  if(typeof vdom === 'string') {
  node = document.createTextNode(vdom);
  }
  if(typeof vdom === 'object') {
  node = document.createElement(vdom.tag);
  setAttribute(node, vdom.attrs);
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
  <div className="text" style={ {color:"red"} } Onclick={(()=>console.log('click me'))}> 
    <p>hello <span>bigger </span>word</p>
  </div>
)
console.log(div);

ReactDOM.render(div, document.body)
