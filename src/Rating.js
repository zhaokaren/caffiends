import React from 'react';
import dot from "./dot.png"
import not from "./notfill.png"
 
class AppR extends React.Component {
  render() {
    var dict = this.props.ratingObj
    var arr = [];
    
    for (var key in dict){
      var value = key
        let stars = []  
        for (var i = 1; i <=5; i++){
          if (dict[value] >= i){
              stars.push(<img src={dot}/>)
          }
          else{
            stars.push(<img src={not}/>)
          }
        }
      arr.push(<tr><td className="catergory">{value}</td><td>{stars}</td></tr>)
    }
    

    return (
			<div>
				<table className="ranking-table">
          <tr className={this.props.style}>
            <td>{arr}</td>
          </tr>
        </table>
			</div>
    );
  }
}

export default AppR 