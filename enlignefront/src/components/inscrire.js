
import React, { Component } from 'react';
import axios from 'axios';

export default class Inscrire extends Component {
  constructor(props) {
    super(props);
    this.onChangenom = this.onChangenom.bind(this);
    this.onChangeprenom = this.onChangeprenom.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangetelephone = this.onChangetelephone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Nom: '',
      Prenom: '',
      Email:'',
      Telephone:''
    }
  }
  onChangenom(e) {
    this.setState({
      Nom: e.target.value
    });
  }
  onChangeprenom(e) {
    this.setState({
      Prenom: e.target.value
    })  
  }
  onChangeemail(e) {
    this.setState({
      Email: e.target.value
    })
  }
  onChangetelephone(e) {
    this.setState({
      Telephone: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      Nom: this.state.Nom,
      Prenom: this.state.Prenom,
      Telephone: this.state.Telephone,
      Email: this.state.Email,
      
    };
    axios.post('http://localhost:8080/particulier/'+localStorage.getItem('ti'), obj)
        .then(res => console.log(res.data));
    
    this.setState({
      Nom: '',
      Prenom: '',
      Email: '',
      Telephone:''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
           
            <form onSubmit={this.onSubmit}>
            <h3>Veuillez nous envoyer vos CV et vos LM</h3>
                <center><div className="form-group">
                    <input 
                      id="inputatelier"
                      type="text" 
                      className="form-control" 
                      placeholder="Nom"
                      value={this.state.Nom}
                      onChange={this.onChangenom}
                      required
                      />
                </div>
                <div className="form-group">
                    <input type="text"
                     id="inputatelier" 
                      className="form-control"
                      placeholder="Prenom"
                      value={this.state.Prenom}
                      onChange={this.onChangeprenom}
                      required
                      />
                </div>
                <div className="form-group">
                    <input type="text" 
                      id="inputatelier"
                      className="form-control"
                      placeholder="Telephone"
                      value={this.state.Telephone}
                      onChange={this.onChangetelephone}
                      required
                      />
                </div>
                <div className="form-group">
                    <input type="email" 
                      id="inputatelier"
                      className="form-control"
                      placeholder="Email"
                      value={this.state.Email}
                      onChange={this.onChangeemail}
                      required
                      />
                </div>
                <label id="inputatelier">Ton CV</label>
                <input id="jtext" ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo_profil"/><br></br> <br></br>  
                <label id="inputatelier">Ta Lettre de Motivation</label>
                <input id="jtext" ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo_profil"/><br></br> <br></br>  
               
                <div className="form-group">
                    <input type="submit" id="butatelier" value="Envoyer" className="btn btn-primary"/>
                </div></center>
            </form>
        </div>
    )
  }
}



// import React, { Component } from 'react';
// import axios from 'axios';

// export default class Inscrire extends Component {
//   constructor(props) {
//     super(props);
//     this.onChangenom = this.onChangenom.bind(this);
//     this.onChangeprenom = this.onChangeprenom.bind(this);
//     this.onChangeemail = this.onChangeemail.bind(this);
//     this.onChangetelephone = this.onChangetelephone.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       Nom: '',
//       Prenom: '',
//       Email:'',
//       Telephone:''
//     }
//   }
//   onChangenom(e) {
//     this.setState({
//       Nom: e.target.value
//     });
//   }
//   onChangeprenom(e) {
//     this.setState({
//       Prenom: e.target.value
//     })  
//   }
//   onChangeemail(e) {
//     this.setState({
//       Email: e.target.value
//     })
//   }
//   onChangetelephone(e) {
//     this.setState({
//       Telephone: e.target.value
//     })
//   }

//   onSubmit(e) {
//     e.preventDefault();
//     const obj = {
//       Nom: this.state.Nom,
//       Prenom: this.state.Prenom,
//       Telephone: this.state.Telephone,
//       Email: this.state.Email,
      
//     };
//     axios.post('http://localhost:8080/particulier/'+localStorage.getItem('ti'), obj)
//         .then(res => console.log(res.data));
    
//     this.setState({
//       Nom: '',
//       Prenom: '',
//       Email: '',
//       Telephone:''
//     })
//   }
 
//   render() {
//     return (
//         <div style={{ marginTop: 10 }}>
           
//             <form onSubmit={this.onSubmit}>
//             <h3>Veuillez nous envoyer vos CV et vos LM</h3>
//                 <center><div className="form-group">
//                     <input 
//                       id="inputatelier"
//                       type="text" 
//                       className="form-control" 
//                       placeholder="Nom"
//                       value={this.state.Nom}
//                       onChange={this.onChangenom}
//                       required
//                       />
//                 </div>
//                 <div className="form-group">
//                     <input type="text"
//                      id="inputatelier" 
//                       className="form-control"
//                       placeholder="Prenom"
//                       value={this.state.Prenom}
//                       onChange={this.onChangeprenom}
//                       required
//                       />
//                 </div>
//                 <div className="form-group">
//                     <input type="text" 
//                       id="inputatelier"
//                       className="form-control"
//                       placeholder="Telephone"
//                       value={this.state.Telephone}
//                       onChange={this.onChangetelephone}
//                       required
//                       />
//                 </div>
//                 <div className="form-group">
//                     <input type="email" 
//                       id="inputatelier"
//                       className="form-control"
//                       placeholder="Email"
//                       value={this.state.Email}
//                       onChange={this.onChangeemail}
//                       required
//                       />
//                 </div>
//                 <input id="jtext" ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo_profil"/><br></br> <br></br>  
//                 <input id="jtext" ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo_profil"/><br></br> <br></br>  
               
//                 <div className="form-group">
//                     <input type="submit" id="butatelier" value="S'incrire" className="btn btn-primary"/>
//                 </div></center>
//             </form>
//         </div>
//     )
//   }
// }





// import React, { Component } from "react";
// import { Document, Page } from "react-pdf";

// export default class Inscrire extends Component {
//   state = { numPages: 5, pageNumber: 1 };

//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   };

//   goToPrevPage = () =>
//     this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
//   goToNextPage = () =>
//     this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

//   render() {
//     const { numPages,pageNumber } = this.state;

//     return (
//       <div>
//         <nav>
//           <button onClick={this.goToPrevPage}>Prev</button>
//           <button onClick={this.goToNextPage}>Next</button>
//         </nav>

//         <div style={{ width: 600 }}>
//           <Document
//             file="./example.pdf"
//             onLoadSuccess={this.ReactPDF}
//           >
//             <Page pageNumber={pageNumber} width={600} />
//           </Document>
//         </div>

//         <p>
//           Page {pageNumber} of {numPages}
//         </p>
//       </div>
//     );
//   }
// }



