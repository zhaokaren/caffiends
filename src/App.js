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

function App() {
  return (
    <div className="App">
        <SideBar/>
        <div className="Body">
        <Photo
          ratings = {{"Aesthetic:":4, "Workplace:":3, "Hangout:":2, "Coffee:":4}}
          catergory="Menu:"
          photo={one}
          maps="https://www.google.com/maps/dir//Strange+Love+Coffee,+627+Queen+St+W,+Toronto,+ON+M5V+2B7/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x882b35abe5d950cf:0xd516e656243b44ab?sa=X&ved=0ahUKEwig99KKpcfiAhVnvFkKHdEQDFcQ48ADCBowAA"
          name="Strange Love Coffee"
          location="Queen St. West and Bathurst"
          karen="This is the spot to hit if you want something quick for on the go. There is a seating workspace, but the sapce itself isnt fully furnished."
          blurb= "Off to the side of the city, the location of Strange Love brings a different type of vibe. A middle sized coffeeshop mixed with a tatoo parlour definitely brings something new. "
        />
        <Photo
          ratings = {{"Aesthetic:":4, "Workplace:":0, "Hangout:":2, "Coffee:":4}}
          photo={two}
          name="A-OK"
          location="Bloor and Yonge"
          blurb= "A tiny little shop connected to Aritzia, for a grab and go coffee."
        />
        <Photo
          ratings = {{"Aesthetic:":5, "Workplace:":4, "Hangout:":4, "Coffee:":4}}
          photo={three}
          name="Tokyo Smoke"
          location="Queen St. West and Bathurst"
          blurb= "Off to the side of the city, the location of Strange Love brings a different type of vibe A middle sized coffeeshop mixed with a tatoo parlour definitely brings something new."
        />
        <Photo
          ratings = {{"Aesthetic:":4, "Workplace:":5, "Hangout:":4, "Coffee:":0}}
          photo={four}
          name="Icha Tea"
          location="Spadina and Dundas"
          blurb= "Off to the side of the city, the location of Strange Love brings a different type of vibe. A middle sized coffeeshop mixed with a tatoo parlour definitely brings something new."
        />
        <Photo
          ratings = {{"Aesthetic:":4, "Workplace:":3, "Hangout:":2, "Coffee:":4}}
          photo={five}
          name="Tika"
          location="Yonge and Charles St. W"
          blurb= "This cute bubble tea shop is definitely one of my fave aesthetic spots in the city. They do have free wifi but it gets quite busy during the night since they are open till 12."
        />
        </div>
        <FilterBar/>
    </div>
  );
}

export default App;
