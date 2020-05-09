import ReactDOM from './react-dom'

window.Components =[]
class Component {
  constructor(props){
    this.props = props
    this.state = {}
    Components.push(this)
  }

  setState(newState){
    Object.assign(this.state, newState)
    ReactDOM.renderComponent(this);
  }
}

const React = {
  createElement(tag, attrs, ...children) {
    return{
      tag,
      attrs,
      children
    }   
  },
  Component
}

export default React