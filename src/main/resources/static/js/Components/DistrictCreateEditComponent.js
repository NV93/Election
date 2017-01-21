var DistrictCreateEditComponent = React.createClass({

  render: function() {

    var counties = [];
    this.props.countyList.map(function(county,index) {
      counties.push(
        <option key={index} value={county.id}>{county.name}</option>
      );
    });

    return (
			      <div className="container vertical-center">
			        <div className="row">
			          <div className="col-md-6 col-md-offset-1">
			            <div className="panel panel-default">
			              <div className="panel-body">
			              	<div className="form-heading">
			              	  <h4> Registruoti apylinkę </h4>
			              	</div>
			              	<form onSubmit={this.props.onHandleSubmit} role="form">
			                <div className="input-group">
			                <label>Apylinkės Pavadinimas</label>
			                  <input
			                    type="text"
			                    onChange={this.props.onHandleNameChange}
			                    value={this.props.name}
			                    className="form-control"
			                    placeholder="Pavadinimas"
			                    required
			                  />
			                </div><br/>
			                <div className="input-group">
			                <label>Apylinkės Adresas</label>
			                  <input
			                    type="text"
			                    onChange={this.props.onHandleAdressChange}
			                    value={this.props.Adress}
			                    className="form-control"
			                    placeholder="Adresas"
			                    required
			                  />
			                </div><br/>
			                <div className="form-group">
			                  <label>Atstovaujama Apygarda:</label>
			                  <select value={this.props.county} onChange={this.props.onHandleCountyChange} className="form-control"required>
			                    {counties}
			                  </select>
			                </div><br/>
			                <button className='btn btn-success btn-block'>
			                  {this.props.action}
			                </button>
			                </form>
			                <div>
			                  <a className="btn btn-danger btn-block" href="#/admin/district" role="button">Atšaukti</a>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
    );
  }
});

window.DistrictCreateEditComponent = DistrictCreateEditComponent;
