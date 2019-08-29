
import React, { Component } from 'react';
// import axios from 'axios';

export default class Inscrire extends Component {
  constructor(props) {
      super(props);
  
      this.state = {
        Nom:'',
        Prenom:'',
        Contact:'',
        photo_profil1:'',
        photo_profil2:''
  
      };
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
      data.append('photo_profil1', this.uploadInput1.files[0]);
      data.append('photo_profil2', this.uploadInput2.files[0]);
      data.append('Nom', this.state.Nom);
      data.append('Prenom', this.state.Prenom);
      data.append('Contact', this.state.Contact);
      fetch('http://localhost:8080/candidat/'+localStorage.getItem('travail'), {
        method: 'POST',
        body: data,
      }).then((response) => {
        response.json().then((body) => {
          this.setState({ photo_profil1: `http://localhost:8080/candidat/${body.photo_profil1}`});
          this.setState({ photo_profil2: `http://localhost:8080/candidat/${body.photo_profil2}`});
          console.log('ity ilay body.fil',body.photo_profil1);
          console.log('ity ilay body.fil',body.photo_profil2);
          
        });
      }).catch(err=>{
        console.log("diso");
        
      })
    }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
           
            <form onSubmit={this.handleUploadImage}>
            <h3>Veuillez nous envoyer votre CV et votre LM</h3>
            <center><input type="text"
              id = "inputtime"
              value={this.state.Nom}
              onChange={this.onChange}
              placeholder="Votre nom"
              name="Nom" /></center><br></br>
              <center><input type="text"
              id = "inputtime"
              value={this.state.Prenom}
              onChange={this.onChange}
              placeholder="Votre prenom"
              name="Prenom" /></center><br></br>
               <center><input type="number"
              id = "inputtime"
              value={this.state.Contact}
              onChange={this.onChange}
              placeholder="Votre contact"
              name="Contact" /></center><br></br>
                <center>
                 
                <label id="inputatelier">Ton CV</label>
                <input id="jtext" ref={(ref1) => { this.uploadInput1 = ref1; }} type="file" name="photo_profil1"/><br></br> <br></br>  
                <label id="inputatelier">Ta Lettre de Motivation</label>
                <input id="jtext" ref={(ref2) => { this.uploadInput2 = ref2; }} type="file" name="photo_profil2"/><br></br> <br></br>  
               
                <div className="form-group">
                    <input type="submit" id="butatpostule" value="Envoyer" className="btn btn-primary"/>
                </div></center>
            </form>
        </div>
    )
  }
}




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



