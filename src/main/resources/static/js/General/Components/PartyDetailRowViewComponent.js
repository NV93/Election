var PartyDetailRowViewComponent = React.createClass({
  componentDidMount: function () {
    $(this.refs.info).tooltip();
  },
  render: function() {
    return (
      <tr className="small">
        <td>
          {this.props.numberInParty}
        </td>
        <td>
          <a href="#"
            ref="info"
            title="Kandidato aprašymas"
            data-toggle="tooltip"
            data-placement="right"
            data-toggle="modal"
            id={'description-button-' + this.props.id}
            data-target={'#' + this.props.listType + this.props.id}>
            {this.props.name} {this.props.surname}
          </a>
            <div className="modal fade" id={this.props.listType + this.props.id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" id="modal-close-button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 className="modal-title">{this.props.name} {this.props.surname}</h4>
                  </div>
                  <div className="modal-body">
                    {this.props.description}
                  </div>
                  <div className="modal-footer">
                    <button type="button" id="close-button" className="btn btn-default btn-sm" data-dismiss="modal">Uždaryti</button>
                  </div>
                </div>
              </div>
            </div>
        </td>
        <td>
          {this.props.birthDate}
        </td>

        <td>
          {this.props.countyName}
        </td>
      </tr>
    );
  }

});

window.PartyDetailRowViewComponent = PartyDetailRowViewComponent;
