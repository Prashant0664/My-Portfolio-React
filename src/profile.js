import Profile_Data from "./data_profile.js"
export default function Profile(){
    return(
        <>
            <div className="side_info">
                <figure className="avatar">
                    <img src={Profile_Data[0].Profile_image} alt="PRASHANT" width="100" border-radius="100px" className="avatar2"/>
                </figure>
                <div className="info-contact">
                    <h1 className="name">{Profile_Data[1].Name}</h1>
                    <p className="title">{Profile_Data[1].Job}</p>
                </div>
                <div className="side-more-info">
                    <div className="seperator">
                        <hr/>
                    </div>
                    <ul className="contacts-list">
                        <li>
                            <table><tbody>
                                <tr>
                                    <td rowSpan="2" className="logo">
                                         <img src={Profile_Data[0].Mail} alt="Mail" className="logo"/>
                                    </td> 
                                    <td className="contact-title">
                                        MAIL
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="mailto:prashant201103@gmail.com" className="contact-link">{Profile_Data[2].Mail}</a>
                                    </td>
                                </tr>
                            </tbody></table>
                        </li>
                        <li>
                            <table><tbody>
                                <tr>
                                    <td rowSpan="2" className="logo">
                                         <img src={Profile_Data[0].Phone} className="logo"/>
                                    </td>
                                    <td className="contact-title">
                                        PHONE
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="tel:+91 98********9" className="contact-link">{Profile_Data[2].Phone}</a>
                                    </td>
                                </tr>
                            </tbody></table>
                        </li>
                        <li>
                            <table><tbody>
                                <tr>
                                    <td rowSpan="2" className="logo">
                                         <img src={Profile_Data[0].Calender} className="logo"/>
                                    </td>
                                    <td className="contact-title">
                                        BIRTHDAY
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <time dateTime="1982-06-23" className="contact-link">{Profile_Data[2].DOB}</time>
                                    </td>
                                </tr>
                            </tbody></table>
                        </li>
                        <li>
                            <table><tbody>
                                <tr>
                                    <td rowSpan="2" className="logo">
                                         <img src={Profile_Data[0].Location_image} className="logo"/>
                                    </td>
                                    <td className="contact-title">
                                        LOCATION
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <address>{Profile_Data[2].Address}</address>
                                    </td>
                                </tr>
                            </tbody></table>
                        </li>
                    </ul>
                    <hr/>
                    <ul className="socialm">
                        <li className="socialli">
                            <a href="#" className="social-link">
                                <img src={Profile_Data[0].Linkedln} className="logo2"/>Linkedln
                            </a>
                        </li>
                        <li className="socialli">
                            <a href="#" className="social-link">
                                <img src={Profile_Data[0].Instagram} className="logo2"/>Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}