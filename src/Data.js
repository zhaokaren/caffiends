import one from './photos/two.jpg'
import two from './photos/one.jpg';
import three from './photos/four.png'
import four from './photos/five.png';
import five from './photos/six.png';
import six from './photos/eight.jpg';
import seven from './photos/seven.png';
import one2 from './photos/Photo2.jpeg';


var Data = [{ratings:{"Aesthetic:":5, "Hangout:":2, "Coffee:":4},
            contentId:"good",
            photo: require("./photos/seven.png") ,
            photos:[require("./photos/seven.png")],
            name:"Boxcar Social - Summerhill",
            location:"Yonge and Summerhill",
            maps:"",
            blurb:"In the heart of yorkville, this small shop is only good for grab and go coffee. With a beautiful marble counter top, dark interior with bright copper accents, there isn't anything like this in the city."},
            {
            ratings:{"Aesthetic:":5, "Workplace:":0, "Hangout:":2, "Coffee:":4},
            contentId:"drinks",
            photo: require('./photos/eight.jpg'),
            photos:[require('./photos/eight.jpg')],
            name:"Sorry Coffee Co.",
            location:"Bloor and Bay",
            maps:"https://www.google.com/maps/place/Sorry+Coffee+Co/@43.669797,-79.3917437,15z/data=!4m2!3m1!1s0x0:0xf219ecb45585c9a7?sa=X&ved=2ahUKEwi3qIr9rN_iAhUMTd8KHftyC7sQ_BIwDnoECAsQCA"
            },
            {
            ratings:{"Aesthetic:":4, "Workplace:":3, "Hangout:":2, "Coffee:":4},
            contentId:"good",
            photo:one,
            photos:[one,one2],
            maps:"https://www.google.com/maps/dir//Strange+Love+Coffee,+627+Queen+St+W,+Toronto,+ON+M5V+2B7/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x882b35abe5d950cf:0xd516e656243b44ab?sa=X&ved=0ahUKEwig99KKpcfiAhVnvFkKHdEQDFcQ48ADCBowAA",
            name:"Strange Love Coffee",
            location:"Queen St. West and Bathurst",
            karen:"This is the spot to hit if you want something quick for on the go. There is a seating workspace, but the sapce itself isnt fully furnished.",
            blurb:"Off to the side of the city, the location of Strange Love brings a different type of vibe. A middle sized coffeeshop mixed with a tatoo parlour definitely brings something new. "
            },
            {
            ratings:{"Aesthetic:":4, "Workplace:":0, "Hangout:":2, "Coffee:":4},
            contentId:"good",
            photo:require('./photos/one.jpg'),
            photos:[two],
            maps:"https://www.google.com/maps/place/A-OK+CAFE/@43.6703401,-79.3882622,15z/data=!4m2!3m1!1s0x0:0x1f0e8e0a244932dd?sa=X&ved=2ahUKEwiAlt2DjsziAhUFEawKHbpGBNYQ_BIwCnoECA4QCA",
            name:"A-OK",
            location:"Bloor and Yonge",
            blurb:"A tiny little shop connected to Aritzia, for a grab and go coffee."
            },
            {
            ratings:{"Aesthetic:":5, "Workplace:":4, "Hangout:":4, "Coffee:":4},
            contentId:"drinks",
            photo:require('./photos/four.png'),
            photos:[three],
            maps:"https://www.google.com/maps/place/Tokyo+Smoke/@43.6467568,-79.4093899,17z/data=!3m1!4b1!4m5!3m4!1s0x882b34e14accc7fb:0x46b4239ae0014ed5!8m2!3d43.6467529!4d-79.4072012",
            name:"Tokyo Smoke",
            location:"Queen St. West and Bathurst",
            blurb:"Off to the side of the city, the location of Strange Love brings a different type of vibe A middle sized coffeeshop mixed with a tatoo parlour definitely brings something new."
            },
            {
                ratings:{"Aesthetic:":4, "Workplace:":5, "Hangout:":4, "Coffee:":0},
                photo:four,
                photos:[four],
                maps:"https://www.google.com/maps/place/ICHA+TEA/@43.6514215,-79.3992512,17z/data=!3m1!4b1!4m5!3m4!1s0x882b34c4a403ffff:0x4056d5bbc0d5dc3c!8m2!3d43.6514176!4d-79.3970625",
                name:"Icha Tea",
                location:"Spadina and Dundas",
                blurb:"Off to the side of the city, the location of Strange Love brings a different type of vibe. A middle sized coffeeshop mixed with a tatoo parlour definitely brings something new."
            },
            {
                ratings:{"Aesthetic:":4, "Workplace:":3, "Hangout:":2, "Coffee:":4},
                photo:five,
                photos:[five],
                maps:"https://www.google.com/maps/dir/43.8573929,-79.2923563/TIKA+Tea+House,+Yonge+Street,+Toronto,+ON/@43.7538687,-79.4983041,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x882b34ae005f9605:0x6dee49226b53bd45!2m2!1d-79.3859811!2d43.6687859",
                name:"Tika",
                location:"Yonge and Charles St. W",
                blurb:"This cute bubble tea shop is definitely one of my fave aesthetic spots in the city. They do have free wifi but it gets quite busy during the night since they are open till 12."
            }
            ]
export default Data