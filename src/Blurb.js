import React, {Component} from 'react'
import karen from './icons/karen.png'
import './Blurb.css'

class Blurb extends Component {
    render(){
        return(
            <div clasName="review-div row">
                <img className="review-icon col-lg-2" src={karen}/>
                <div className="col-lg-10">
                <h4 className="review-name">Karens Thoughts:</h4>
                <br></br>
                <p className="review-blurb">{this.props.blurb}</p>
                </div>

            </div>
        )
    }
}

export default Blurb