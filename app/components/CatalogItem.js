var React = require('react');
var ReactDOM = require('react-dom');
InfoModal = require('./InfoModal');

var CatalogItem = React.createClass({
  lauchModal: function() {
     $(ReactDOM.findDOMNode(this.refs.modal)).modal();
  },
  render: function() {
    return (
      <div className="col-md-4 card">
        <div>
          <img src={this.props.img}/>
          <h2>{this.props.title}</h2>
          <p>
            {this.props.summary}
          </p>
          <button
            className="btn btn-primary"
            onClick={this.lauchModal}
            title={"Buy " + this.props.cost}> {"Buy " + this.props.cost + " Rs"}
          </button>
          <InfoModal
            title={this.props.title}
            content={this.props.summary}
            ref="modal"/>
        </div>
      </div>
    );
  }
})

module.exports = CatalogItem;
