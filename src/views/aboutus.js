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
            <h3>Cindy Kayihura</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <div className="social">
                
                <a href="https://www.linkedin.com/in/tuyishime-anaclet-04421a230/?originalSubdomain=rw"><LinkedinOutlined /></a>
                <a href="https://www.instagram.com/umuringa_fashion_code/"><InstagramOutlined /></a>
                <a href="https://web.whatsapp.com/"><TwitterOutlined /></a>
                </div>
          </div>
          <div className="member">
            <img src={sarah}  alt="Member 1" />
            <h3>Sarah Aisha</h3>
            <p> An extroverted introvert who excels at bringing people together while quietly observing from the sidelines. Genuine curiosity fuels a passion for helping others thrive, making her supportive. Sarah balances love for social interaction with a preference for introspection, creating meaningful connections along the way. </p>
            <div className="social">
                
                <a href="https://www.linkedin.com/in/tuyishime-anaclet-04421a230/?originalSubdomain=rw"><LinkedinOutlined /></a>
                <a href="https://www.instagram.com/umuringa_fashion_code/"><InstagramOutlined /></a>
                <a href="https://web.whatsapp.com/"><TwitterOutlined /></a>
                </div>
          </div>
  
          <div className="member">
            <img src={denzel}  alt="Member 2" />
            <h3>Denzel Uwizera</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <div className="social">
                
                <a href="https://www.linkedin.com/in/tuyishime-anaclet-04421a230/?originalSubdomain=rw"><LinkedinOutlined /></a>
                <a href="https://www.instagram.com/umuringa_fashion_code/"><InstagramOutlined /></a>
                <a href="https://web.whatsapp.com/"><TwitterOutlined /></a>
                </div>
           
          </div>
        
          <div className="member">
            <img src={naomi}  alt="Member 3" />
            <h3>Harmony Naomi</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <div className="social">
                
                <a href="https://www.linkedin.com/in/tuyishime-anaclet-04421a230/?originalSubdomain=rw"><LinkedinOutlined /></a>
                <a href="https://www.instagram.com/umuringa_fashion_code/"><InstagramOutlined /></a>
                <a href="https://web.whatsapp.com/"><TwitterOutlined /></a>
                </div>
          </div>
          
          <div className="member">
            <img src={nicole} alt="Member 4" />
            <h3>Nicole Mbera</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <div className="social">
                
                <a href="https://www.linkedin.com/in/tuyishime-anaclet-04421a230/?originalSubdomain=rw"><LinkedinOutlined /></a>
                <a href="https://www.instagram.com/umuringa_fashion_code/"><InstagramOutlined /></a>
                <a href="https://web.whatsapp.com/"><TwitterOutlined /></a>
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
