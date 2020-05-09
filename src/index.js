import React from './lib/react';
import ReactDOM from './lib/react-dom';

class Article extends React.Component {

  render() {
    return <p>hello { this.props.title }</p>;
  }
}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '测试1'
    };
  }

  render() {
    return (
      <div className="wrapper">
        <h1>App</h1>
        <Article title={ this.state.title }></Article>
        <div> <button onClick={ this.clickMe.bind(this) }> Click Me</button> </div>
      </div>
    )
  }

  clickMe() {
    this.setState({title: '测试2'});
  }
}

ReactDOM.render(<App />, document.body)
