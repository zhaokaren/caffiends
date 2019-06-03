import React, {Component} from 'react'
import './Popup.css'
import AppR from './Rating.js'
import pin from './locationpin.png'
import dot from './dot.png'
import back from './back.svg'
import Blurb from './Blurb.js'

class Popup extends Component{
    render(){
        return(
            <div className="popup">
                 <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <img className="photo-scroll" src={this.props.photo}/>
                        <img onClick={this.props.closePopup} className="back-button" src={back}/>
                    </div>
                    
                    <div class="col-lg-6 col-md-6" id="rating">
                            <h3 className="cafe-name">{this.props.cafeName}</h3>
                            <div>
                                <img className="pin" src={pin}></img>
                                <p href={this.props.maps} className="pin-text">{this.props.location}</p> 

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