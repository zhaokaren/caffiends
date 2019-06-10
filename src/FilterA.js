import React, {Component} from 'react'
import one from './photos/two.jpg'
import two from './photos/one.jpg';
import three from './photos/four.png'
import four from './photos/five.png';
import { directive } from '@babel/types';

class FilterA extends Component{
    render(){
        var arr = [one,two,three,four]
        const result = arr.filter(arr => arr.length > 4);
        var arr2 =[]
        for (var i=0; i<=result.length; i++){
            var pic = arr[0]
            arr2.push({pic})
        }

        return(
            <div>{arr2}</div>
        )
    }
}

export default FilterA