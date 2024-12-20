import React from "react";
import { InstagramOutlined, TwitterOutlined , LinkedinOutlined} from "@ant-design/icons";
import "./footer.css"
import logo from "../assets/images/logo2cropped.png"

const Footer = () => {
    return (

       
        <div className="footerContainer">
             {/* <div className="horizontal"/> */}
            <div className="flex">
            <div className="logo"><img src={logo} alt="company brand" /></div>
           
            <div className="navbarList"> 
    
                <ul className="no-bullets">
                
                    <li><a href="/home"> Home </a></li>
                    <li><a href="#about-us"> About us </a></li>
                    <li><a href="#services"> challenges</a></li>
                    <li><a href="#more-functionality">Gallery</a></li>
                    
                    </ul>
               
                    </div>

                 <div className="bullets">
    
                    <ul>
                    <li>Phone: +250784774445</li>
                    <li>Email: powerhouse@gmail.com</li>
                    <li>Address:African Leadership University.</li>
                    
                  
                    </ul>
                    <div className="social-footer">
                
                <a href="https://www.linkedin.com/in/tuyishime-anaclet-04421a230/?originalSubdomain=rw"><LinkedinOutlined /></a>
                <a href="https://www.instagram.com/umuringa_fashion_code/"><InstagramOutlined /></a>
                <a href="https://web.whatsapp.com/"><TwitterOutlined /></a>
                </div>
                    
    </div>
   
 
                
    </div>      
    {/* <h1 className="heading2"><CopyrightOutlined /> 2024 by PowerHouse</h1> */}
                
            </div> 
       
    )
}
export default Footer