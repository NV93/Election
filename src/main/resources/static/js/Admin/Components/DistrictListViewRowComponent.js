﻿var DistrictListViewRowComponent = React.createClass({
  onHandleDeleteClick : function(){
    this.props.onHandleDelete(this.props.id);
  } ,
  onHandleUploadCanClick : function(){
    this.props.onHandleDelete({

    });
  } ,
  render: function() {
    return (
            <tr>
              <td>
                {this.props.id}
              </td>
              <td>
                {this.props.name}
              </td>
              <td>
                {this.props.adress}
              </td>
              <td>
                {this.props.countyName}
              </td>
              <td>
                {this.props.representativeName}
              </td>
              <td>
                <div>
                &nbsp;
                <a href={'#/admin/district/edit/' + this.props.id} data-toggle="tooltip2" title="Redaguoti" id={'edit-district-' + this.props.id} type="button " className="btn btn-primary btn-sm fa fa-pencil"></a>
                &nbsp;
                  <button
                    onClick={this.onHandleDeleteClick}
                    data-toggle="tooltip1"
                    title="Ištrinti"
                    id={'delete-district-' + this.props.id}
                    type="button"
                    className="btn btn-danger btn-sm fa fa-trash"
                  ></button>
                
               </div>
              </td>
            </tr>
    );
  }
});

window.DistrictListViewRowComponent = DistrictListViewRowComponent;
