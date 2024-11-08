import React from "react";
import Homelayout from "../components/homelayout";
import "./challenges.css";
import tyres from "../assets/images/stairscropped.jpg";
import work from "../assets/images/serena.jpg";
import help from "../assets/images/groupic.jpg";
import present from "../assets/images/best.jpg";
import youTube from "../assets/images/youTube.png";
import chal6 from "../assets/images/6.jpg";
import green from "../assets/images/green.jpg"
const Challenges = () => {
    return (

        <div className="social-container">
            <Homelayout>
            

                {/* <h3 style={{textAlign:"center", fontSize:"x-large", marginTop:"30px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}> WHAT IS POWERHOUSE SOCIAL IMPACT?</h3> */}
                
                <div className="row">
                <div className="image-container">
        <img src={tyres} alt="Tyres" className="thumbnail-image" />
        <img
            src={youTube} // replace with your YouTube logo URL or import
            alt="YouTube Logo"
            className="youtube-logo"
            onClick={() => window.open("https://youtu.be/mIqdI-dfwzw")}
        />
    </div>
                    <div className="descriptive">
                        <h1>CHALLENGE 1: MEET THE TEAM</h1>
                        <p>The Meet the Team challenge offers a closer look at the members of a passionate and skilled team, the powerhouse,  each bringing their unique expertise and experiences to a shared mission. Each team member shared insights into their professional backgrounds, their motivations, and the specific roles they play within the group, illustrating the diversity and complementary nature of their skills. Through personal stories, we expressed our values and dedication that drive our commitment to the team's vision, and how individual strengths combine to overcome challenges and achieve meaningful goals. 

</p>
                        
                    </div>
                </div>


                <div className="rom">

                    <div className="descriptive">
                        <h1>CHALLENGE 2: DISCOVER AFRICA: SHARO-A FULANI'S TRIBE TRADITION </h1>
                        <p>The video is a podcast discussing the Fulani people, exploring their rich cultural heritage, history, and traditions. The hosts delve into the Fulani's nomadic lifestyle, their social structures, and the significance of cattle herding in their way of life. They also touch on modern challenges faced by the Fulani, including issues around identity, migration, and conflict. Through storytelling and expert insights, the podcast provides an in-depth look at one of West Africa's most influential and widespread ethnic groups, highlighting the resilience and adaptability that characterize the Fulani community.
                        </p>

                    </div>
                    <div className="image-container">
        <img src={green} alt="Tyres" className="thumbnail-image" />
        <img
            src={youTube} // replace with your YouTube logo URL or import
            alt="YouTube Logo"
            className="youtube-logo"
            onClick={() => window.open("https://youtu.be/fkIbZru5Iog?si=Fk6QAHxuBJpR87jm")}
        />
    </div>
                </div>
                <div className="rowl">
                <div className="image-container">
        <img src={help} alt="Tyres" className="thumbnail-image" />
        <img
            src={youTube} // replace with your YouTube logo URL or import
            alt="YouTube Logo"
            className="youtube-logo"
            onClick={() => window.open("https://youtu.be/fkIbZru5Iog?si=Fk6QAHxuBJpR87jm")}
        />
    </div>
                    <div className="descriptive">
                        <h1>CHALLENGE 2: DISCOVER AFRICA: SHARO-A FULANI'S TRIBE TRADITION</h1>
                        <p>EThe video is a podcast discussing the Fulani people, exploring their rich cultural heritage, history, and traditions. The hosts delve into the Fulani's nomadic lifestyle, their social structures, and the significance of cattle herding in their way of life. They also touch on modern challenges faced by the Fulani, including issues around identity, migration, and conflict. Through storytelling and expert insights, the podcast provides an in-depth look at one of West Africa's most influential and widespread ethnic groups, highlighting the resilience and adaptability that characterize the Fulani community.



                        </p>
                    </div>


                </div>

                <div className="row">

                <div className="image-container">
        <img src={help} alt="Tyres" className="thumbnail-image" />
        <img
            src={youTube} // replace with your YouTube logo URL or import
            alt="YouTube Logo"
            className="youtube-logo"
            onClick={() => window.open("https://youtu.be/2lFAY0zXI6o")}
        />
    </div>
                    <div className="descriptive">
                        <h1>CHALLENGE 3: COMMUNITY OUTREACH AT KIMISAGARA</h1>
                        <p>For this challenge we did a community outreach event in Kimisagara focused on providing critical support unprivileged children. Through the combined efforts of ALU and our think tank the powerhouse, essential items like food and educational supplies such as books were donated, aimed at uplifting and giving a gift- knowledge that can be passed on generations- to those vulnerable young kids who often face resource shortages. This outreach effort reflects our commitment to fostering sustainable community development, empowering underserved community, and addressing their socioeconomic challenges.
                        </p>
                        

                    </div>



                </div>

                <div className="rom">

                    <div className="descriptive">
                        <h1>CHALLENGE 4: INTERVIEW WITH EMPOWER RWANDA</h1>
                        <p> we interviewed an NGO called Empower Rwanda dedicated to empowering women through job creation initiatives, directly supporting the mission of gender equality and economic opportunity. This organization offers vocational training programs, mentorship, and skill-building resources tailored for women aiming for financial independence. By addressing specific employment challenges, it helps women overcome social and economic barriers, providing a pathway to stable, meaningful employment.
                        </p><p> The NGO’s approach includes fostering a supportive community, enhancing women’s participation in the economy, and promoting long-term personal growth. This contributes to broader social goals of equity, community upliftment, and sustainable development. 
                            
                            It was eye-opening to talk and learn from people with whom we are like-minded. We were deeply moved and inspired.
                        </p>

                    </div>
                    <div className="image-container">
        <img src={work} alt="Tyres" className="thumbnail-image" />
        <img
            src={youTube} // replace with your YouTube logo URL or import
            alt="YouTube Logo"
            className="youtube-logo"
            onClick={() => window.open("https://youtu.be/h4KKesnjJBw?si=xnTW87pKoEAxYSJX")}
        />
    </div>
                </div>
                <div className="rowl">
                <div className="image-container">
        <img src={work} alt="Tyres" className="thumbnail-image" />
        <img
            src={youTube} // replace with your YouTube logo URL or import
            alt="YouTube Logo"
            className="youtube-logo"
            onClick={() => window.open("https://youtu.be/h4KKesnjJBw?si=xnTW87pKoEAxYSJX")}
        />
    </div>
                    <div className="descriptive">
                        <h1>CHALLENGE 4: INTERVIEW WITH EMPOWER RWANDA</h1>
                        <p> we interviewed an NGO called Empower Rwanda dedicated to empowering women through job creation initiatives, directly supporting the mission of gender equality and economic opportunity. This organization offers vocational training programs, mentorship, and skill-building resources tailored for women aiming for financial independence. By addressing specific employment challenges, it helps women overcome social and economic barriers, providing a pathway to stable, meaningful employment. The NGO’s approach includes fostering a supportive community, enhancing women’s participation in the economy, and promoting long-term personal growth. This contributes to broader social goals of equity, community upliftment, and sustainable development. It was eye-opening to talk and learn from people with whom we are like-minded. We were deeply moved and inspired.
                        </p>
                    </div>


                </div>
                <div className="row">

                <div className="image-container">
        <img src={present} alt="Tyres" className="thumbnail-image" />
        <img
            src={youTube} // replace with your YouTube logo URL or import
            alt="YouTube Logo"
            className="youtube-logo"
            onClick={() => window.open("https://youtu.be/IiZLSJDxri0")}
        />
    </div>
                    <div className="descriptive">
                        <h1>CHALLENGE 5: EMPOWERHER CONNECTION HUB PITCH</h1>
                        <p>We introduced the EmpowerHer Connection Hub, a transformative platform designed to empower women by providing a space where job seekers, employers, investors, and mentors can connect and collaborate. This platform serves as a bridge, creating opportunities for women to access career advancement, funding, and expert guidance. It emphasizes the importance of mentorship and networking, offering women the tools and support they need to overcome barriers in their professional journeys. Through these connections, EmpowerHer aims to create a lasting impact by fostering economic independence, personal growth, and professional success.

                        </p>

                    </div>



                </div>
                
                <div className="rom">

                    <div className="descriptive">
                        <h1>CHALLENGE 6: DEVELOPING THE POWERHOUSE WEBSITE</h1>
                        <p>In our project, we collaborated to develop the powerHouse website  guided by the Digital Print Rubric. We used React.js to create a visually appealing and user-friendly platform that integrates multimedia elements like images and videos to keep users engaged. Our website includes a well-defined mission statement, problem statement, and proposed solution, as well as a prototype section and individual profiles of each think tank member, complete with photos and descriptions. Additionally, we documented all six E-LAB challenges, providing clear definitions and supportive visuals for each. Thanks to everyone’s contributions, we successfully built a website that meets the rubric’s criteria for overall design, content, and challenge documentation.
                        </p>

                    </div>
                    <div className="image-container">
        <img src={chal6} alt="Tyres" className="thumbnail-image" />
        <img
            src={youTube} // replace with your YouTube logo URL or import
            alt="YouTube Logo"
            className="youtube-logo"
            onClick={() => window.open("https://youtu.be/IiZLSJDxri0")}
        />
    </div>
                </div>
                <div className="rowl">
                <div className="image-container">
        <img src={chal6} alt="Tyres" className="thumbnail-image" />
        <img
            src={youTube} // replace with your YouTube logo URL or import
            alt="YouTube Logo"
            className="youtube-logo"
            onClick={() => window.open("https://youtu.be/IiZLSJDxri0")}
        />
    </div>
                    <div className="descriptive">
                        <h1>CHALLENGE 6: DEVELOPING THE POWERHOUSE WEBSITE</h1>
                        <p>In our project, we collaborated to develop the powerHouse website  guided by the Digital Print Rubric. We used React.js to create a visually appealing and user-friendly platform that integrates multimedia elements like images and videos to keep users engaged. Our website includes a well-defined mission statement, problem statement, and proposed solution, as well as a prototype section and individual profiles of each think tank member, complete with photos and descriptions. Additionally, we documented all six E-LAB challenges, providing clear definitions and supportive visuals for each. Thanks to everyone’s contributions, we successfully built a website that meets the rubric’s criteria for overall design, content, and challenge documentation.
                        </p>
                    </div>


                </div>
            </Homelayout>
        </div>

    )
}

export default Challenges;