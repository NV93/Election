var fileErrorMesages = [];
var nameErrorMesages = [];
var numberErrorMesages = [];

function validate(self, code){
  if (code == 415) {fileErrorMesages.push('Netinkamas CSV failas');}
  if (code == 417) {numberErrorMesages.push('Partija su tokiu numeriu jau užregistruota');}
  if (code == 418) {nameErrorMesages.push('Partija su tokiu pavadinimu jau užregistruota');}
  if (code == 422) {fileErrorMesages.push('Blogi CSV duomenys');}
  self.setState({
    fileErrorMesages : fileErrorMesages,
    numberErrorMesages :numberErrorMesages,
    nameErrorMesages :nameErrorMesages,
  });
}

function getPartyById(self,id) {
  axios
  .get('/party/' + id)
  .then(function(response){
    console.log(response.data);
    self.setState({
      name : response.data.name.trim(),
      number : response.data.partyNumber,
      members : response.data.members,
      isLoading : false,
    });
  })
  .catch(function(err){
    console.error('PartyEditContainer.'+func+'.axios.get.party/:id', err);
  });
}

var PartyEditContainer = React.createClass({
  getInitialState: function() {
    return {
      name : '',
      number : '',
      file : null,
      members : [],
      nameErrorMesages : [],
      numberErrorMesages : [],
      fileErrorMesages : [],
      postErrCode : 199,
    };
  },
  componentWillMount: function() {
      getPartyById(this, this.props.params.id);
    },
  onHandleDeleteClick : function(event){
      var self = this;
      event.preventDefault();
      axios
        .delete('/candidate/party/'+ this.props.params.id)
        .then(function(response){
          getPartyById(self, self.props.params.id);
        })
        .catch(function(err){
          console.error('PartyEditContainer.onHandleDeleteClick.axios', err);
        });
    },
  onHandleFileChange : function(file){
    this.setState({file : file});
  },
  onHandleNumberChange : function(event){
    this.setState({number : event.target.value});
  },
  onHandleNameChange : function(event){
    this.setState({name : event.target.value});
  },
  onHandleSubmit : function(event){
      nameErrorMesages = [],
      numberErrorMesages = [],
      fileErrorMesages = [],
      event.preventDefault();
      var self = this;
      var partyNumber = parseInt(this.state.number);
      var putPartyInfo = {
          id : this.props.params.id,
          name : this.state.name.trim(),
          members : this.state.members,
          partyNumber,
        };
        if(!validation.checkPartyName(this.state.name)) {nameErrorMesages.push('Pavadinimą gali sudaryti tik raidės ir tarpai');}
        if(!validation.checkMax(this.state.name,50)) {nameErrorMesages.push('Pavadinimas negali būti ilgesnis, nei 50 simbolių');}
        if(!validation.checkMin(this.state.name,4)) {nameErrorMesages.push('Pavadinimas negali būti trumpesnis, nei 4 simboliai');}
        if(!validation.checkNumber(partyNumber)) {numberErrorMesages.push('Partijos numerio laukas priima tik skačius arba lieka tuščias');}
        if (nameErrorMesages.length == 0 &&
            fileErrorMesages.length == 0 &&
            numberErrorMesages.length == 0
          ) {
        axios
        .put('/party', putPartyInfo)
        .then(function(response){
          self.context.router.push('/admin/party?succesCreateText=Partija ' + self.state.name + ' atnaujinta');
        })
        .catch(function (error) {
          if (error.response) {
            validate(self, error.response.status);
          }
        });
      } else {
        self.setState({
          nameErrorMesages : nameErrorMesages,
          numberErrorMesages : numberErrorMesages,
          fileErrorMesages : fileErrorMesages,
        });
      }
    },

  render: function() {
    return (
      <PartyCreateEditFormComponent
       onHandleNameChange={this.onHandleNameChange}
       onHandleNumberChange={this.onHandleNumberChange}
       onHandleFileChange={this.onHandleFileChange}
       onHandleSubmit={this.onHandleSubmit}
       onHandleDeleteClick={this.onHandleDeleteClick}
       name={this.state.name}
       members={this.state.members}
       number={this.state.number}
       nameErrorMesages={this.state.nameErrorMesages}
       numberErrorMesages={this.state.numberErrorMesages}
       fileErrorMesages={this.state.fileErrorMesages}
       action='Atnaujinti'
       />
    );
  },
});

window.PartyEditContainer = PartyEditContainer;