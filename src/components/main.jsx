var React = require('react')
var Header = require('./header')
var TopicList = require("./Topic-List.jsx")

module.exports = React.createClass({
  render: function() {
    return <div>
      <Header />
      {this.content()}
    </div>
  },

  content: function() {
    if(this.props.children) {
      return this.props.children
    } else {
      return <TopicList />
    }
  }
})
