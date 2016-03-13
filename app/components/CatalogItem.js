var React = require('react');
var ReactDOM = require('react-dom');
var InfoModal = require('./InfoModal');

var CatalogItem = React.createClass({
  getInitialState: function(){
      return {view: {showModal: false}}
  },
  handleSubmitModal: function() {
    console.log('Submitted');
    this.setState({view: {showModal: false}});
  },
  handleHideModal: function(){
    this.setState({view: {showModal: false}})
  },
  handleShowModal: function(){
    this.setState({view: {showModal: true}})
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
            onClick={this.handleShowModal}
            title={"Buy " + this.props.cost}> {"Buy " + this.props.cost + " Rs"}
          </button>

          {this.state.view.showModal ?
            <InfoModal handleHideModal={this.handleHideModal} title={this.props.title} content={this.props.summary}
            handleSubmitModal={this.handleSubmitModal}/> : null}

        </div>
      </div>
    );
  }
})

module.exports = CatalogItem;
