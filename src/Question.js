import React, {Component} from 'react';
import Popup from './Popup.js'
import './Photo.css'
import logo from './icons/question.png'


class Question extends Component {
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
            <div>
            <div>
                <img  className="display" id={logo} onClick={this.togglePopup.bind(this)}></img>
            </div>
                {this.state.showPopup ? 
                   <p>hello</p>
                    : null
                }
          </div>
        )
    }

}

export default Question;
