import About from "./about"
import React from 'react';
import Resume from "./resume"
import Blog from "./Blog.js"
import Contact from "./Contact_ME."
import Portfolio_Section from "./portfoliosection" 
export default function Navbar_info(){
        var [mm,sett]=React.useState(<About/>)
    return(
        <>
            <nav className="navbar">
                <button className="navbar-link active" id="navbar-link1"onClick={()=>sett(<About/>)}>About</button>  
                <button className="navbar-link" id="navbar-link2"onClick={()=>sett(<Resume/>)}>Resume</button>  
                <button className="navbar-link" id="navbar-link3"onClick={()=>sett(<Portfolio_Section/>)}>Portfolio</button>  
                <button className="navbar-link" id="navbar-link4"onClick={()=>sett(<Blog/>)}>Blog</button>  
                <button className="navbar-link" id="navbar-link5"onClick={()=>sett(<Contact/>)}>Contact</button>  
            </nav>
            {mm}

        </> 
    )    
}