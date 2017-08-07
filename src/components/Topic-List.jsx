var React = require('react')
var TopicStore = require('../stores/Topic-Store')
var Reflux = require("reflux")
var Actions = require("../actions")
var ReactRouter = require('react-router')
var Link = ReactRouter.Link

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],

  getInitialState: function() {
    return {
      topics: []
    }
  },

  componentWillMount: function() {
    Actions.getTopics()
  },

  render: function() {
    return <div className="list-group">
      {this.renderTopics()}
    </div>
  },

  renderTopics: function() {
    return this.state.topics.map(function(topic){
      return <Link to={"topic/" + topic.id} className="list-group-item" key={topic.id}>
        <h4>{topic.name}</h4>
        <p>{topic.description}</p>
      </Link>
    })
  },

  onChange: function(event, topics) {
    this.setState({topics: topics});
  }
})
