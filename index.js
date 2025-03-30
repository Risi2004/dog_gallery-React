import ReactDOM from "react-dom/client";
import style from "../src/style.css";
import one from "../src/assets/1.jpg";
import two from "../src/assets/2.jpg";
import three from "../src/assets/3.jpg";
import four from "../src/assets/4.jpg";
import five from "../src/assets/5.jpg";
import six from "../src/assets/6.jpg";
import seven from "../src/assets/7.jpg";
import eight from "../src/assets/8.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));

function ImageContainer(props) {
    return (
            <div class="Box">
                <img class = "BoxImage" src={props.image} alt="" />
                <p>{props.dogName}</p>
            </div>
    );
}
var dog = [
    {
        image: one,
        dogName: "Julie's Rabbit Ears"
    },
    {
        image: two,
        dogName: "The Innocent Look"
    },
    {
        image: three,
        dogName: "Big Eyed Buggy"
    },
    {
        image: four,
        dogName: "The Saint Doggo"
    },
    {
        image: five,
        dogName: "Big Eyed Buggy"
    },
    {
        image: six,
        dogName: "The Innocent Look"
    },
    {
        image: seven,
        dogName: "The Saint Doggo"
    },
    {
        image: eight,
        dogName: "Julie's Rabbit Ears"
    }
];
root.render(
    <div>
        {dog.map(function(item) {
            return (
                <ImageContainer image={item.image} dogName={item.dogName} key={item.dogName} /> 
            );
        })}
    </div>
);