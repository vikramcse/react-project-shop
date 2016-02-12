var React = require('react');
var Navbar = require('./Navbar');
var Catalog = require('./Catalog');

var ref = require('../constants').firebase_ref;
var Firebase = require('firebase');
var ReactFire = require('reactfire');

var App = React.createClass({
  mixins: [ReactFire],
  getInitialState: function() {
    return {
      catalog: {},
      loaded: false
    };
  },
  componentWillMount: function() {
    var fb = new Firebase(ref + 'catalog/');
    this.bindAsObject(fb, 'catalog');
    fb.on('value', this.handleProductsLoaded);
  },
  handleProductsLoaded: function() {
    this.setState({
      loaded: true
    });
  },
  render() {
    return (
      <div>
        <Navbar />
        <div className={"container content " + (this.state.loaded ? 'loaded' : '')}>
          <Catalog catalog={this.state.catalog}/>
        </div>
      </div>
    );
  }
});

module.exports = App;
