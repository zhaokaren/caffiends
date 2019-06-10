import React , {Component} from 'react'
import photo from './photos/two.jpg'
import photo2 from './photos/Photo2.jpeg'

class PhotoScroll extends Component{
    render(){
        var photos = this.props.photos
        var arr = []

        for (var i= 0; i <= (photos.length); i++){
            var pic = photos[i]
            arr.push(<img className="photo-scroll" src={pic}/>)
        }

        return(
            <div>
                {arr}
            </div>
        )
    }
}

export default PhotoScroll