var React = require('react');
var Navbar = require('./Navbar');
var Catalog = require('./Catalog');

var App = React.createClass({
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Catalog />
        </div>
      </div>
    );
  }
});

module.exports = App;
