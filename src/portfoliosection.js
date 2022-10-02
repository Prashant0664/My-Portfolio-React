import About_Me from "./About_me_data"
import React from 'react';
function Portfolioprop(props){
    return (
        <div className="portimgbox">
        <img src={props.Img} className="portimg2"/>
    </div>
    )
  }
export default function Portfolio_Section(){
    var port=About_Me[4].Port; 
    const service3=port.map(item=>{
        return(
            <Portfolioprop
            Img={item.Img}
            />
      )}) 
    return(
        <article className="resume" id="resume">
            <article className="about  active" data-page="about" id="about">
              <header>
                <h2 className="h2 article-title active">Portfolio</h2>
              </header>
            </article>
            <div className="portimage">
                {service3}
            </div>
        </article>
    )
}