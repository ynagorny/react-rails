var React = require("react")

module.exports = React.createClass({
  getInitialState: function() {
    return({mounted: "nope"});
  },
  componentWillMount: function() {
    this.setState({mounted: 'yep'});
  },
  render: function() {
    console.log("Test Console Replay")
    return (
      <ul>
        <li id='status'>{this.state.mounted}</li>
        {this.props.todos.map(function(todo, i) {
          return (<li key={i}>{todo}</li>)
        })}
        <li>From Webpacker</li>
      </ul>
    )
  }
})