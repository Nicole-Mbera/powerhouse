import React from "react";
import Header from "./header";
import Footer from "./footer";
const Homelayout=({children})=>{
return(
    <>
    <Header></Header>
    <div className="home-container">

<div style={{height:"75%"}}>
{children}
</div>

    </div>
    <Footer></Footer>
    </>
)} 

export default Homelayout;