import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "../views/home";
import Challenges from "../views/challenges";


const Index=()=>{
    return(
        <Routes>
        <Route path='/' element={<Home/>} />
       < Route path='/home' element={<Home/>} />
        <Route path='/challenges' element={<Challenges/>} />
        
       
     
    </Routes>
    )

}
export default Index;