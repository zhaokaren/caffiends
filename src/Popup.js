import React, {Component} from 'react'
import './Popup.css'
import AppR from './Rating.js'
import pin from './locationpin.png'
import Blurb from './Blurb.js'
import backshadow from './x.png'
import PhotoScroll from './PhotoScroll.js'
import Dots from './Dots';

class Popup extends Component{
    render(){
        return(
            <div className="popup">
                 <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 photo-scroll-main">
                    <img onClick={this.props.closePopup} className="back-button" src={backshadow}/>
                    <Dots/>
                        <div>
                            <PhotoScroll 
                                photos={this.props.photos}
                            />
                            
                        </div>
                    </div>
                    
                    <div class="col-lg-6 col-md-6 col-sm-12" id="rating">
                            <h3 className="cafe-name">{this.props.cafeName}</h3>
                            <div>
                                <img className="pin" src={pin}></img>
                                <a href={this.props.maps} className="pin-text">{this.props.location}</a> 

                            </div>
                            <div className="mini-blurb">
                                <p>{this.props.blurb}</p>
                            </div>
                            <div>
                            <AppR
                                style="catergory"
                                ratingObj= {this.props.ratings}
                                catergory={this.props.catergory}
                            />
                            </div>
                            <br></br>
                            <Blurb
                                blurb={this.props.karen}
                            />
                    </div>
                </div>
            </div>
     
        )
    }
}

export default Popup;