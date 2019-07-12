import React, {Component} from 'react';
import Photo from './Photo.js';
import Data from './Data.js'
import './Body.css'
import Question from './Question.js'

class Body extends Component{
    constructor(props) {
        super(props);
        this.state = {
            mainContent: Data,
            selectedContentId: " ",
        };
        this.filterContent = this.filterContent.bind(this);
    }

    filterContent(id) {
        if (this.state.selectedContentId === id) {
            this.setState({
                selectedContentId: " "
            });
        } else {
            this.setState({
                selectedContentId: id
            });
        }
     }


    render(){
        let results = []
        if (this.state.selectedContentId == " "){  
            results = this.state.mainContent
            }
            else{
            results = this.state.mainContent.filter(Data => (Data.contentId == this.state.selectedContentId));
            }
        const components = results.map((Data) =>
            <Photo
                ratings = {Data.ratings}
                photo={Data.photo}
                photos={Data.photos}
                name={Data.name}
                location={Data.location}
                maps={Data.maps}
                blurb={Data.blurb}
            />
        );
    var data = {}
        return(
            <div>
                <div className="Body">
                    {components}
                </div>
                <div className="filter">
                <div className="hoverbar">
                    <table className="hover-table">
                    <tr className="hoverbarr">
                        <td>
                            Filter
                        </td>
                    </tr>
                    </table>
                </div>
                <div className="filterbar">
                </div>
                <div className="itembar">
                    <table className="item-table item-work">
                        <tr><p className="item-menu">Filter: <b>Workability</b></p></tr>
                        <tr><p className="item-menu item-bar">Chatting</p></tr>
                        <tr><p className="item-menu item-bar">Writing</p></tr>
                        <tr><p className="item-menu item-bar">Fast Wifi</p></tr>
                    </table>
                    <table className="item-table item-aesthetic">
                        <tr><p className="item-menu">Filter: <b>Aesthetic</b></p></tr>
                        <tr><p className="item-menu item-bar">Plant Vibes</p></tr>
                        <tr><p className="item-menu item-bar">Minamislist</p></tr>
                        <tr><p className="item-menu item-bar">Modern Retro</p></tr>
                    </table> 
                    <table className="item-table item-menu">
                        <tr ><p className="item-menu">Filter: <b>Aesthetic</b></p></tr>
                        <tr onClick={() => this.filterContent("drinks")}><p className="item-menu item-bar">Plant Vibes</p></tr>
                        <tr onClick={() => this.filterContent("good")}><p className="item-menu item-bar">Minamislist</p></tr>
                        <tr><p className="item-menu item-bar">Lunch</p></tr>
                    </table>
                </div>
            </div>
            </div>

        )
    }
}

export default Body