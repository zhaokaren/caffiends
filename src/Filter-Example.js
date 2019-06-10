import React, {Component} from 'react'
import Data from './Data.js'

class FilterEx extends Component {

    constructor(props) {
    super(props);
    this.state = {
        mainContent = Data,
        selectedContentId: "",
    };
    this.filterContent = this.filterContent.bind(this);
}

// FUNCTION TO SELECT FILTER
filterContent(id) {
    this.setState({
        selectedContentId: id
    });
}


render() {

let filtered_content = this.state.mainContent.filter(data => (data.ContentId === this.state.selectedContentId));

return (
 <div className="Body">
      // NEXT LINE: need to pass in specific filtering info into "id"
      <div onClick={() => this.filterContent(id)}>Good</div>
      {filtered_content.map(filtered_content.name)}
 </div>
);

}
}
export default FilterEx
