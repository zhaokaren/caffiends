import React, {Component} from 'react';
import photo from './photos/five.png';
import Popup from './Popup.js'
import './Photo.css'


class Photo extends Component {
   constructor(){
       super();
       this.state = {
           showPopup: false
       };
   } 
   togglePopup() {
       this.setState({
           showPopup: !this.state.showPopup
       });
   }

    render(){
        return(
            <div className="photos">
            <div >
                <img  className="display" src={photo} onClick={this.togglePopup.bind(this)}></img>
            </div>
                {this.state.showPopup ? 
                    <Popup
                    photo={photo}
                    cafeName="Icha Tea"
                    location="Spadina and Dundas"
                    blurb="Off to the side of the city, the location of Strange Love brings a different type of vibe. 
                    A middle sized coffeeshop mixed with a tatoo parlour definitely brings something new."
                    closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
          </div>
        )
    }

}

export default Photo;
