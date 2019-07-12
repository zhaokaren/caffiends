import React from 'react';
import Photo from './Photo.js';
import './App.css'
import SideBar from './SideBar.js'
import FilterBar from './FilterBar.js'
import one from './photos/two.jpg'
import two from './photos/one.jpg';
import three from './photos/four.png'
import four from './photos/five.png';
import five from './photos/six.png';
import six from './photos/eight.jpg';
import seven from './photos/seven.png';
import one2 from './photos/Photo2.jpeg'
import FilterA from './FilterA.js'
import Body from './Body.js'
import Question from './Question.js'



function App() {
  return (
    <div className="App">
        <SideBar/>
        <Body/>

    </div>
  );
}

export default App;
