import React from './lib/react';
import ReactDOM from './lib/react-dom';


ReactDOM.render((
  <div className="text" style={ {color:"blue"} }> 
    <p>hello <span>bigger </span>word</p>
  </div>
), document.body)
