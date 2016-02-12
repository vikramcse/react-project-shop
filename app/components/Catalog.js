var React = require('react');
var CatalogItem = require('./CatalogItem');

var Catalog = React.createClass({
  renderItems: function() {
    if (this.props.catalog && Object.keys(this.props.catalog).length === 0) {
      return <h4>No items in store</h4>
    } else {
      var children = [];
      for (var k in this.props.catalog) {
        if (typeof this.props.catalog[k] === 'object') {
          children.push (
            <CatalogItem
              key={k}
              title={this.props.catalog[k].title}
              img={this.props.catalog[k].url}
              summary={this.props.catalog[k].summary}
              cost={this.props.catalog[k].cost}/>
          );
        }
      }
      return children;
    }
  },
  render() {
    return (
      <div className="row stylish-panel">
        {this.renderItems()}
      </div>
    );
  }
});

module.exports = Catalog;
