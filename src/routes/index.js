import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "../views/home";
import Challenges from "../views/challenges";
import Aboutus from "../views/aboutus";
import Gallery from "../views/gallery";


const Index=()=>{
    return(
        <Routes>
        <Route path='/' element={<Home/>} />
       < Route path='/home' element={<Home/>} />
        <Route path='/challenges' element={<Challenges/>} />
        <Route path='/aboutus' element={<Aboutus/>} />
        <Route path='/gallery' element={<Gallery/>} />
        
       
     
    </Routes>
    )

}
export default Index;