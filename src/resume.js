import About_Me from "./About_me_data"
import React from 'react';
function Resume2(props){
  return (
    <tr className="resumerow">
    <td className="resumedata">
        {props.Year}
    </td>
    <td className="resumedata">
        {props.Name}
    </td>
    <td className="resumedata">
        {props.Desc}<sup>th</sup>
    </td>
    <td className="resumedata">
        {props.Imgs}
    </td>
</tr>
  )
}
function Skills(props){
  return(<button className="resumeskillbutton">{props.Skill}</button>)
}
function Resume3(props){
  return(<div className="resumeprojectbox">
  <a href={props.Linkd} className="projectlink">
  <h4 className="resumeproject">{props.Named}</h4>
  <h6 className="resumeprojecttime">{props.Timed}</h6>
  </a>
  <div className="resumeprojectdesc">
      {props.Descd}
  </div>
  </div>)
}

export default function Resume(){
  var services=About_Me[3].Education;
  const service=services.map(item=>{
      return(
          <Resume2
          Year={item.Year}
          Name={item.Iname}
          Desc={item.Iclass}    
          Imgs={item.Iresult}
          />
    )}) 
    var services3=About_Me[3].Skills;
    const service3=services3.map(item=>{
        return(
            <Skills
            Skill={item.s1}
            />
      )}) 
  var services2=About_Me[3].Projects;
    const service2=services2.map(item=>{
        return(
            <Resume3
            Linkd={item.Link}
            Named={item.Name}
            Timed={item.Time}
            Descd={item.Desc}    
            />
        )
})
    return (
        <article className="resume" id="resume">
          <article className="about  active" id="about">
            <header>
              <h2 className="h2 article-title active">Resume</h2>
            </header>
            <table className="resumetable"><tbody>
                <tr className="resumerow">
                    <th className="resumedatah">
                        Year
                    </th>
                    <th className="resumedatah" >
                        Institute
                    </th>
                    <th className="resumedatah">
                        Class
                    </th >
                    <th className="resumedatah">
                        Result
                    </th>
                </tr>
                {service}</tbody>
              </table>
              <h3 className="resumeeducation">Projects</h3>
                {service2}
                <h3 className="resumeeducation">Skills</h3>
            <div className="resumeskills">
            {service3}
            </div>
            </article>
            
        </article>

    )
}