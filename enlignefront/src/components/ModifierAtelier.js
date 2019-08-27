import React from 'react';
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {MDBIcon} from 'mdbreact';

class ModifierAteliers extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        Titre: '',
        Description:'',
        Date:'',
        HoraireDebut:'',
        Duree:'',
        NombrePlacesDispo:'',
        NombrePlacesRes:'',
        Prix:'',
        photo_profil:''
  
    }
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
}

onChange(event) {
  this.setState({
    [event.target.name]: event.target.value
  })
}
handleUploadImage(ev) {
  ev.preventDefault();

  const data = new FormData();
  data.append('photo_profil', this.uploadInput.files[0]);
  data.append('Titre',this.state.Titre);
  data.append('Description',this.state.Description);
  data.append('Date',this.state.Date)
  data.append('HoraireDebut',this.state.HoraireDebut);
  data.append('Duree',this.state.Duree);
  data.append('NombrePlacesDispo',this.state.NombrePlacesDispo);
  data.append('NombrePlacesRes',this.state.NombrePlacesRes)
  data.append('Prix',this.state.Prix);

  fetch('http://localhost:8080/putAtelier/'+this.props.match.params._id, {
    method: 'PUT',
    body: data,
  }).then((response) => {
    //   console.log('ity n response ' + response);
      console.log('this.props.match.params.id '+this.props.match.params._id);
    
    response.json().then((body) => {
      this.setState({ photo_profil: `http://localhost:8080/putAtelier/${body.photo_profil}` });
      console.log('ity ilay body.image', body.photo_profil);

    });
  });
}

  render() {
    return (
        <form onSubmit={this.handleUploadImage}>
        <center>
          <h1 id="divatelier">Modification d'une offre d'emploi</h1>
        <input type="text"
          id = "inputtime"
          value={this.state.Titre}
          onChange={this.onChange}
          placeholder="Intitulité du poste"
          name="Titre" /><br></br>

          
        <input type="text"
          id = "inputtime"
          value={this.state.Description}
          onChange={this.onChange}
          placeholder="Type de contrat"
          name="Description" /><br></br>
         
        <input type="text"
         id = "inputtime"
          value={this.state.Date}
          onChange={this.onChange}
          placeholder="Expérience exigée"
          name="Date" /><br></br>
         
        <input type="text"
          id = "inputtime"
          value={this.state.HoraireDebut}
          onChange={this.onChange}
          placeholder="Salaire"
          name="HoraireDebut" /><br></br>
      
        <input type="text"
          id = "inputtime"
          value={this.state.Duree}
          onChange={this.onChange}
          placeholder="Specialité de l'entreprise"
          name="Duree" /><br></br>
        <input type="Number"
          id = "inputtime"
          value={this.state.NombrePlacesDispo}
          onChange={this.onChange}
          placeholder="type de fonction"
          name="NombrePlacesDispo" /><br></br>
        <input type="text"
          id = "inputtime"
          value={this.state.NombrePlacesRes}
          onChange={this.onChange}
          placeholder="nombre à recruter souhaité"
          name="Place Res" /><br></br>       
        <input type="Number"
          id = "inputtime"
          value={this.state.Prix}
          onChange={this.onChange}
          placeholder="adresse entreprise"
          name="Prix" /><br/><br/><br/><br/><br/>   
        <input id="jtext" ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo_profil"/><br/>
          <button className="btn btn-outline-orange" type="submit" onClick={() => {
                        confirmAlert({
                          customUI: () => {
                            return (
                              <div className='custom-ui'>
                                <h1>Mise à jour reussi! </h1>
                                <center></center><a href="/dashboard" id="okajout" className="btn btn-primary">OK</a>
                              </div>
                            );
                          }
                        });
                      }} id="ajouter_boutton">
                        Modifier <MDBIcon icon="paper-plane" className="ml-3" />
              </button>
        </center>
      </form>

      
    );
  }
}

export default ModifierAteliers;






