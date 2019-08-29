import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Atelier from './components/Atelier';
import MesAteliers from './components/Mesateliers';
import ModifierAteliers from './components/ModifierAtelier';
import Inscrire from './components/postuleDossier';
import FooterPage from './components/FooterPage';
//import PrivateRoute from './components/PrivateRoute'
import Entreprise from './components/Entreprise'
import OffreEmploi from './components/OffreEmploi'
import DossierCandidat from './components/dossierCandidat'


import 'bootstrap/dist/css/bootstrap.min.css';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div>
            <Navbar />
                <Route exact path="/" component={ Home } />
                <div className="container">
                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/login" component={ Login } />
                  <Route exact path="/monAtelier" component={ Atelier } />
                  <Route exact path={"/profil/"+localStorage.getItem('id')} component={ MesAteliers } />
                  <Route exact path="/putAtelier/:_id" component={ ModifierAteliers } />
                  {/* <Route exact path="/inscrire" component={ Inscrire } />  */}
                  <Route exact path="/entreprise" component={ Entreprise } /> 
                  <Route exact path="/offre" component={ OffreEmploi } /> 
                  <Route exact path="/postuler/:id2" component={ Inscrire } /> 
                  <Route exact path="/afficheListe/:_id" component={ DossierCandidat } /> 
                  {/* <PrivateRoute exact path="/admin" component={Login}/> */}
                </div>
              {/* <FooterPage /> */}
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;





// componentDidMount() {
//   axios.get('http://localhost:8080/profil').then(res=>{
//     this.setState({
//         Titre: res.Titre,
//         Description:res.Description,
//         Date:res.Date,
//         HoraireDebut:res.HoraireDebut,
//         Duree:res.Duree,
//         NombrePlacesDispo:res.NombrePlacesDispo,
//         NombrePlacesRes:res.NombrePlacesRes,
//         Prix:res.Prix,
//     })
//   })