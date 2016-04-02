var React = require('react');

var Navbar = React.createClass({
  render() {
    return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Zenleather</a>
        </div>
      </div>
    </nav>
    );
  }
});

module.exports = Navbar;
