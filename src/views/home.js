import React from "react";
import "./home.css"
import Homelayout from "../components/homelayout"
import unemployed from "../assets/images/unemployed.png"
import employed from "../assets/images/employed.jpg"
const Home = () => {
  return (
    <Homelayout>
    <div className='home-container'>
    <div className="yet"></div>
      <div className="culture">
        <div className="divtwo">
                    <div className="words">
                        <h1> Meet the PowerHouse</h1>
                        <p> We are a think tank of students from Rwanda and Burundi, united by a shared vision to uplift young, unemployed women. Rooted in the rich cultures of the heart of Africa, we draw strength from the rhythms of our lands and the stories of resilience that flow through our history.  Here, ambition finds its wings, and power is more than a promise—it’s a movement. This is where passion meets power..</p>
                    </div>
                    <div className="photos">
                        <div className="photo1"></div>
                        <div className="photo2"></div>
                        <div className="photo3"></div>
                    </div>
      </div>
      
     
    </div>
    <div className="mission">
<div className="images">
<img src={unemployed}/>
<img src={employed}/>
</div>
<div className="words">
                        <h1> Mission Statement</h1>
                        <p> Growing up from Rwanda and Burundi, we have witnessed how women succumb to the past  ideologies of the country such as the myth that their place is in the kitchen, they are birth machines, etc. As a result they end up questioning their self worth, see no point in education. Even those who graduate are underemployed or constantly harassed by their misogynistic bosses. 

</p>
<p>Our think tank mission is to uplift women, take them out of restrictive boxes, and fuel an inclusive future of economic independence and growth.</p>
                    </div>
      </div>
      <div className="yet-white"></div>
    </div>
    </Homelayout>
  );
}

export default Home;
