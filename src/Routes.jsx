var React = require('react')
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Topic = require('./components/Topic');

module.exports = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="topic/:id" component={Topic}></Route>
    </Route>
  </Router>
);
