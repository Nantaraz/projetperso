import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from './Slider'

class Home extends React.Component {


    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8080/profil')
            .then(response => {
               
                console.log('i am a response', response)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    liste() {
        return <div>
            <Slider />
             
            <div  class="row">

                {
                   (this.state.profil.length > 0) ? (this.state.profil.filter((params) => params.visibilite).map((obj) => {
                        return (
                            <div class="col-md-4 carde">
                                <div class="card" onClick={() => {localStorage.setItem('ti',obj._id)
                                 console.log(obj._id)}}>
                                    
                                    
                                    <div class="card-body">

                                        
                                        {/* <div className="container"><img width="98%" height="90%" src={'http://localhost:8080/user/' + obj.photo_profil} alt="pdp" /></div> */}
                                        
                                        <center><h6 class="card-title" id="titre">offre d'emploi</h6></center>
                                        <p class="card-text" id='milieu1'>Intitulé du poste: {obj.Titre}</p>
                                        {/* <img width="98%" height="190px" src={'http://localhost:8080/user/' + obj.photo_profil} alt="pdp" /> */}
                                        <p class="card-text" id='milieu1'>Type de contrat: {obj.Description}</p>
                                        <p class="card-text" id='milieu1'>Expérience exigée: {obj.Date}</p>
                                        <p class="card-text" id='milieu1'>Salaire: {obj.HoraireDebut} Ar</p>
                                        <p class="card-text" id='milieu'>Notre société spécialisée dans {obj.Duree} recherche un(e) {obj.NombrePlacesDispo} pour venir renforcer mes équipes!</p>
                                        {/* <p class="card-text" id='milieu'>Place dispo: {obj.NombrePlacesDispo}</p> */}
                                        <p class="card-text" id='milieu'>Pour occuper ce poste,nous aimerons recruter un proffesionel {obj.NombrePlacesRes} titulaire d'un (diplome souhaité) et possedant les compétences suivantes:</p>
                                        <p class="card-text" id='milieu' onClick={()=>{
                                            console.log(obj._id);
                                            
                                        }}>Si vous êtes intéressé par cette offre et posssédez toutes les qualités et compétences recherchées,n'hézitez pas à nous envoyer votre CV accompagné d'une lettre de motivation en cliquant sur le boutton s'inscrire ou à l'addresse à: {obj.Prix} Ar</p>
                                        <p id='milieu'>Nous vous répondons dans le plus bref détail</p>
                                        <p id='milieu'>Pour toute formation complémentaire: tel,e-mail</p>
                                        <Link to="inscrire"><center><button className="btn btn-success" id="butatelier">S'inscrire</button></center></Link>
                                    </div>
                                </div>
                            </div>)
                    })) : ('')
                }
            </div>
        </div>
    }
    render() {
        return (
            <div >
                {this.liste()}
            </div>
        );
    }
}

export default Home;