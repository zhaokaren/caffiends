import React, {Component} from 'react';
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
                <img  className="display" id={this.props.name} src={this.props.photo} onClick={this.togglePopup.bind(this)}></img>
                <h4 className="page-title">{this.props.name}</h4>
            </div>
                {this.state.showPopup ? 
                    <Popup
                    catergory={this.props.catergory}
                    ratings={this.props.ratings}
                    maps={this.props.maps}
                    photo={this.props.photo}
                    photos={this.props.photos}
                    cafeName={this.props.name}
                    location={this.props.location}
                    blurb={this.props.blurb}
                    karen={this.props.karen}
                    closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
          </div>
        )
    }

}

export default Photo;
