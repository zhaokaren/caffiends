import React, {Component} from 'react'
import filled from './scroll-dots/filled-dot.png'
import blank from './scroll-dots/blank-dot.png'

class Dots extends Component {
    render(){
        return(
            <table className="ind">
                <tr>
                    <img className="ind-dot" src={filled}/>
                </tr>
                <tr>
                    <img className="ind-dot" src={blank}/>
                </tr>
            </table>

        )
    }
}

export default Dots