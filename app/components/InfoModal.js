var React = require('react');

let InfoModal = React.createClass({
    componentDidMount(){
        $(this.getDOMNode()).modal('show');
        $(this.getDOMNode()).on('hidden.bs.modal', this.props.handleHideModal);
    },
    saveUser: function() {
      this.props.handleSubmitModal(this.state);
    },
    getInitialState: function() {
      return {
        id: this.props.itemId,
        name: '',
        surname: '',
        mobile: '',
        address: ''
      };
    },
    handleNameChange: function(event) {
      event.preventDefault();
      this.setState({
        name: event.target.value
      });
    },
    handleSurnameChange: function(event) {
      event.preventDefault();
      this.setState({
        surname: event.target.value
      });
    },
    handleMobileChange: function(event) {
      event.preventDefault();
      this.setState({
        mobile: event.target.value
      });
    },
    handleAddressChange: function(event) {
      event.preventDefault();
      this.setState({
        address: event.target.value
      });
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
                  <form className="form-horizontal" role="form">
                    <div className="form-group">
                      <label className="control-label col-sm-2" htmlFor="name">Name:</label>
                      <div className="col-sm-10">
                        <input type="text"
                          onChange={this.handleNameChange}
                          className="form-control"
                          id="name"
                          value={this.state.name}
                          placeholder="Enter name"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-sm-2" htmlFor="surname">Surname:</label>
                      <div className="col-sm-10">
                        <input type="text"
                          onChange={this.handleSurnameChange}
                          className="form-control"
                          id="surname"
                          value={this.state.surname}
                          placeholder="Enter surname"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-sm-2" htmlFor="mobile">Mobile:</label>
                      <div className="col-sm-10">
                        <input type="phone"
                          onChange={this.handleMobileChange}
                          className="form-control"
                          id="mobile"
                          value={this.state.mobile}
                          placeholder="Enter mobile no"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-sm-2" htmlFor="Address">Address:</label>
                      <div className="col-sm-10">
                        <textarea
                          onChange={this.handleAddressChange}
                          className="form-control"
                          id="Address"
                          value={this.state.address}
                          placeholder="Enter address"/>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="button"
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={this.saveUser}> Save changes </button>
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
