import React, { Component } from "react";
//import './Slider.css';
import { Animation, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask} from
"mdbreact";
import im from './images.jpeg';
import im1 from './images1.jpeg';
import im2 from './images2.jpeg';
import im3 from './images3.jpeg'

class Slider extends Component {
  render() {
    return (
      <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img id="slider" className="d-block w-100 image" src={im} alt="First slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <Animation type="zoomInUp" duration="1s">
                <h3 className="h3-responsive">"VOUS CHERCHEZ UN EMPLOI ?
Nous vous donnons chaque jour toutes les offres d'emploi qui correspondent à votre profil." </h3>
              </Animation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
            
              <img id="slider" className="d-block w-100 image" src={im1} alt="Second slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <Animation type="zoomInUp" duration="1s">
                <h3 className="h3-responsive">"VOUS CHERCHEZ UN EMPLOI ?
Nous vous donnons chaque jour toutes les offres d'emploi qui correspondent à votre profil." </h3>
              </Animation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img id="slider" className="d-block w-100 image" src={im2}  width="700px" alt="Third slide" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <Animation type="zoomInUp" duration="1s">
                <h3 className="h3-responsive">"VOUS CHERCHEZ UN EMPLOI ?
Nous vous donnons chaque jour toutes les offres d'emploi qui correspondent à votre profil." </h3>
                </Animation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img id="slider" className="d-block w-100 image" src={im3} alt="Burnedforest" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <Animation type="zoomInUp" duration="2s">
                <h3 className="h3-responsive">"VOUS CHERCHEZ UN EMPLOI ?
Nous vous donnons chaque jour toutes les offres d'emploi qui correspondent à votre profil." </h3>
              </Animation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    
    );
  }
}

export default Slider;