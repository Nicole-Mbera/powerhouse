import React from "react";
import Homelayout from "../components/homelayout";
import "./challenges.css";
import tyres from "../assets/images/stairs.jpg"
import work from "../assets/images/serena.jpg"
import help from "../assets/images/groupic.jpg"
const Challenges = () => {
    return (

        <div className="social-container">
            <Homelayout>
            

                {/* <h3 style={{textAlign:"center", fontSize:"x-large", marginTop:"30px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}> WHAT IS POWERHOUSE SOCIAL IMPACT?</h3> */}
                
                <div className="row">
                    <img src={tyres}></img>
                    <div className="descriptive">
                        <h1>CHALLENGE 1: MEET THE TEAM</h1>
                        <p>In the spirit of giving back to the community, Umuringa Fashion code offers training to young people who are interested in art and design. We inspire youth to be proactive, problem solvers, self-reliant, and big thinkers. </p>
                        <p>
                            We teach our students creativity and innovation on how to use available resources, for instance, fabricating artistic skin made bags and footwear. That way, we train a generation of job providers, contributing significantly to the sustainable development of Rwanda.

                        </p>
                    </div>
                </div>


                <div className="rom">

                    <div className="descriptive">
                        <h1>CHALLENGE 3: COMMUNITY OUTREACH AT KIMISAGARA</h1>
                        <p>Every year, almost 1.5 billion tyres are discarded globally.
                            All those disposied old tires,
                            according to the environmental group EcoGreen, contain toxins and heavy metals that seep into the environment
                            as the tires degrade.some of these substances are carcinogenic and mutagenic, i.e. they can cause cancer and gene alterations.


                            Umuringa Fashion Code recycles nearly  five thousand tyres every year to make adorable footwear brands for Rwandese,
                            alongside mitigating Environmental degradation.
                        </p>

                    </div>
                    <img src={help}></img>
                </div>
                <div className="rowl">
                    <img src={help}></img>
                    <div className="descriptive">
                        <h1>CHALLENGE 3: COMMUNITY OUTREACH AT KIMISAGARA</h1>
                        <p>Every year, almost 1.5 billion tyres are discarded globally.
                            All those disposied old tires,
                            according to the environmental group EcoGreen, contain toxins and heavy metals that seep into the environment
                            as the tires degrade.some of these substances are carcinogenic and mutagenic, i.e. they can cause cancer and gene alterations.


                            Umuringa Fashion Code recycles nearly  five thousand tyres every year to make adorable footwear brands for Rwandese,
                            alongside mitigating Environmental degradation.
                        </p>
                    </div>


                </div>

                <div className="row">

                    <img src={work}></img>
                    <div className="descriptive">
                        <h1>CHALLENGE 3: INTERVIEW WITH EMPOWER WOMEN RWANDA</h1>
                        <p>Rwanda is the luckiest country,
                            with more than half of the population
                            being young people in the labor force. Unfortunately,
                            the bulk of them, 23.8 percent, or over a quarter of the population,
                            are unemployed, calling for action.

                            Umulinga fashion Code pioneers is a group of youth
                            who resented those cycles of poverty and chose self-reliance,
                            who chose to be job providers rather than job seekers.
                        </p>
                        <p>
                            Though U-brand is still a start-up company, we are glad it became more
                            than an art club for three little students to earn  a living.
                            Now U-brand employs more than thirty young ladies and gents.

                        </p>

                    </div>



                </div>


            </Homelayout>
        </div>

    )
}

export default Challenges;