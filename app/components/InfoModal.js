var React = require('react');

let InfoModal = React.createClass({
    componentDidMount(){
        $(this.getDOMNode()).modal('show');
        $(this.getDOMNode()).on('hidden.bs.modal', this.props.handleHideModal);
    },
    render(){
      return (
          <div className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title">{this.props.title}</h4>
                </div>
                <div className="modal-body">
                  {this.props.content}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={this.props.handleSubmitModal}> Save changes </button>
                </div>
              </div>
            </div>
          </div>
        )
    },
    propTypes:{
      handleHideModal: React.PropTypes.func.isRequired
    }
});

module.exports = InfoModal;
