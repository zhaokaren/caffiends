import React, {Component} from 'react'
import './FilterBar.css'
import work from './icons/work.png'
import aesthetic from './icons/aesthetic.png'
import menu from './icons/menu.png'

class FilterBar extends Component {
    render(){
        return(
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
                    <table className="menu-table">
                        <tr><img className="icon" src={work}/></tr>
                        <tr><img className="icon" src={aesthetic}/></tr>
                        <tr><img className="icon" src={menu}/></tr>
                    </table>
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
                    </table> <table className="item-table item-menu">
                        <tr><p className="item-menu">Filter: <b>Menu</b></p></tr>
                        <tr><p className="item-menu item-bar">Vegan/Dairy Free</p></tr>
                        <tr><p className="item-menu item-bar">Snacking</p></tr>
                        <tr><p className="item-menu item-bar">Lunch</p></tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default FilterBar