import { useEffect } from "react";
import "./aboutus.css";
import Homelayout from "../components/homelayout";
import cindy from "../assets/images/cindy.jpg";
import denzel from "../assets/images/denzel.jpg";
import nicole from "../assets/images/selfie2.jpg";
import sarah from "../assets/images/sarah.jpg";
import naomi from "../assets/images/Naomi.jpg";
import { InstagramOutlined, TwitterOutlined , LinkedinOutlined} from "@ant-design/icons";


const Aboutus= () => { 
  useEffect(() => {
    const members = document.querySelectorAll(".member");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fadeIn");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    members.forEach((member) => {
      observer.observe(member);
    });

    return () => {
      members.forEach((member) => observer.unobserve(member));
    };
  }, []);
  return (
    <Homelayout>
        <div className="work">
        <div className="vertical-1"/>
          <h1>TEAM INTRODUCTION</h1>
          <h2>The powerHouse-Where passion meets power</h2>
          <hr className="header-underline" ></hr>
          
        </div>
        <div className="team-container">
        <div className="sub-team">
          <div className="member">
            <img src={cindy}  alt="Member 1" />
            <div className="paragraph">
            <h3>Cindy Kayihura</h3>
            <p> I'm passionate about empowering my community and strive to make a lasting impact through meaningful initiatives and support. Although I might describe myself as "socially anti-social," I’m always up for connecting with others who share the same goal of building a stronger, more inclusive community. My journey is driven by a commitment to creating positive change.</p>
            <div className="social">
                
                <a href="https://www.linkedin.com/in/tuyishime-anaclet-04421a230/?originalSubdomain=rw"><LinkedinOutlined /></a>
                <a href="https://www.instagram.com/umuringa_fashion_code/"><InstagramOutlined /></a>
                <a href="https://web.whatsapp.com/"><TwitterOutlined /></a>
                </div>
                </div>
          </div>
          <div className="member">
            <img src={sarah}  alt="Member 1" />
            <div className="paragraph">
            <h3>Sarah Aisha</h3>
            <p> Meet Sarah, an extroverted introvert who excels at bringing people together while quietly observing from the sidelines. Their genuine curiosity fuels a passion for helping others thrive, making them a supportive presence in any social setting. Sarah balances their love for social interaction with a preference for introspection, creating meaningful connections along the way. </p>
            <div className="social">
                
                <a href="https://www.linkedin.com/in/tuyishime-anaclet-04421a230/?originalSubdomain=rw"><LinkedinOutlined /></a>
                <a href="https://www.instagram.com/umuringa_fashion_code/"><InstagramOutlined /></a>
                <a href="https://web.whatsapp.com/"><TwitterOutlined /></a>
                </div>
                </div>
          </div>
  
          <div className="member">
            <img src={denzel}  alt="Member 2" />
            <div className="paragraph">
            <h3>Denzel Uwizera</h3>
            <p>Meet Denzel, a passionate advocate for orphanages and community empowerment. Driven by a commitment to uplift vulnerable populations, he dedicates himself to meaningful social impact. Outside of his philanthropic efforts, he enjoys the game of basketball, blending his competitive spirit with his drive to make a difference. </p>
            <div className="social">
                
                <a href="https://www.linkedin.com/in/tuyishime-anaclet-04421a230/?originalSubdomain=rw"><LinkedinOutlined /></a>
                <a href="https://www.instagram.com/umuringa_fashion_code/"><InstagramOutlined /></a>
                <a href="https://web.whatsapp.com/"><TwitterOutlined /></a>
                </div>
                </div>
          </div>
        
          <div className="member">
            <img src={naomi}  alt="Member 3" />
            <div className="paragraph">
            <h3>Harmony Naomi</h3>
            <p>Meet Harmony, Calmness with high energy right in the heart of PowerHouse! Not only is she an energetic and passionate environmentalist but she adds harmony and life into the company. When not driving the team forward, Harmony is an adventurer at heart, and since attitude determines altitude, is always set to mix enthusiasm with serenity to create change. </p>
            <div className="social">
                
                <a href="https://www.linkedin.com/in/tuyishime-anaclet-04421a230/?originalSubdomain=rw"><LinkedinOutlined /></a>
                <a href="https://www.instagram.com/umuringa_fashion_code/"><InstagramOutlined /></a>
                <a href="https://web.whatsapp.com/"><TwitterOutlined /></a>
                </div>
                </div>
          </div>
          
          <div className="member">
            <img src={nicole} alt="Member 4" />
            <div className="paragraph">
            <h3>Nicole Mbera</h3>
            <p>I’m passionate about blending tech and medicine to create a more holistic, people-centered approach to healthcare. Whether it’s using AI to empower doctors or finding ways to make care more accessible, I’m all about pushing the boundaries of what’s possible in health tech. Outside work, you’ll probably find me hiking a new trail, cycling around town, or catching up with friends over some good worship music. </p>
            <div className="social">
                
                <a href="https://www.linkedin.com/in/tuyishime-anaclet-04421a230/?originalSubdomain=rw"><LinkedinOutlined /></a>
                <a href="https://www.instagram.com/umuringa_fashion_code/"><InstagramOutlined /></a>
                <a href="https://web.whatsapp.com/"><TwitterOutlined /></a>
                </div>
          </div>
          </div>
        </div>
      </div>
{/* <div className="vmc">
    <div className="vision">
<div className="icon"><img src={vision} alt="Description of vision"></img></div>
<h1>Vision</h1>
<p>Turning dreams into reality through state-of-the-art advanced technology, transfer, and applied science.</p>
</div>
<div className="vertical"/>
<div className="vision">
<div className="icon"><img src={mission} alt="mission potrayed"></img></div>
<h1>Mission</h1>
<p>Donate complete next generation password solutions to make a unique character as a professional.</p>
</div>
<div className="vertical"/>
<div className="vision">
<div className="icon"><img src={values} alt="core values"></img></div>
<h1>Values</h1>
<p>Teamwork, integrity, excellence, innovation, and honesty.</p>
</div>
    </div> */}
    {/* <div className="introduction">
        <div className="individual">
            <img src={cindy}></img>
        </div>
        <div className="individual">
            <img src={cindy}></img>
        </div>

   
        <div className="individual">
            <img src={cindy}></img>
        </div>
        
        </div> */}
        
    </Homelayout>
);
}

export default Aboutus;
