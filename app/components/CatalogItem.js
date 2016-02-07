var React = require('react');

var CatalogItem = React.createClass({
  render: function() {
    return (
      <div className="col-md-4 card">
        <div>
          <img src={this.props.img}/>
          <h2>{this.props.title}</h2>
          <p>
            {this.props.summary}
          </p>
          <a href="#" className="btn btn-primary" title={"Buy " + this.props.cost}>{"Buy " + this.props.cost + " Rs"}</a>
        </div>
      </div>
    );
  }
})

module.exports = CatalogItem;
