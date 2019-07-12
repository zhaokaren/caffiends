import React, {Component} from 'react'
import './SideBar.css'
import Question from './Question.js'

class SideBar extends Component {
    render(){
        return(
            <div className="SideBar">
                <table className="heading-table">
                    <tr className="heading">
                        <td>
                            Cafiends
                        </td>

                    </tr>
                </table>
            </div>
        )
    }
}

export default SideBar 