import About_Me from "./About_me_data"
import React from 'react';

function About2(props){
    return (
        <li className="service-item">
            <div className="service-icon-box">
                <img src={props.Imgs} alt="design_icon" width="40"/>
            </div>
            <div className="service-item-box">
                <h4 className="h4 service-item-title">
                    {props.Jobs}
                </h4>
                <p className="service-item-text">
                    {props.Desc}
                </p>
            </div>
        </li>
    )
}
function About3(props){
    return (
        <li className="testlistitem" id="t1" /*onClick="popup(1)"*/>
            <fieldset className="testfield">
                <legend><img src={props.Imgs} className="testimg"/></legend>
                <div className="testtext"><h3 style={{padding:"0px",margin:"0px",}}><b>{props.Name}</b></h3>{props.Desc}</div>
            </fieldset>
        </li>
    )
}
export default function About(){
    var services=About_Me[1].IAmDoing
    const service=services.map(item=>{
        return(
            <About2
                Jobs={item.Job}
                Desc={item.Jdesc}    
                Imgs={item.Imgs}
            />
        )
    })
    var services2=About_Me[2].Test;
    const service2=services2.map(item=>{
        return(
            <About3
                Name={item.Tname}
                Desc={item.Jdesc}    
                Imgs={item.Imgs}
            />

        )    }
    
    )
    return (
    <article className="about active">
        <header>
            <h2 className="h2 article-title active">About Me</h2>
        </header>
        <section className="about-text">
            <p>
            {About_Me[0].aboutme1}
            </p>
            <p>
            {About_Me[0].aboutme2}
            </p>
        </section>

            <section className="service">
            <h2 className="h2 whatidoing active">What I'm Doing</h2>
            <ul className="service-list">
            {service}
            </ul>
        </section>
        <h2 className="h2 whatidoing active">Testimonials</h2>
        <ul className="testcontainer">
            {service2}
        </ul>
        </article>
)}