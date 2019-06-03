import React, {Component} from 'react';
import photo from './photos/six.png';
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
                    cafeName="Tika"
                    location="Yonge and Charles St. W"
                    blurb="This cute bubble tea shop is definitely one of my fave aesthetic spots in the city. They do have free wifi but it gets quite busy during the night since they are open till 12."
                    closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
          </div>
        )
    }

}

export default Photo;
