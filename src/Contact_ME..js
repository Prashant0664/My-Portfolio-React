import About_Me from "./About_me_data"

export default function Contact(){
    return(
        <>
        <article>
          <h2 className="h2 article-title active">Contact</h2>
          <section className="mapbox" data-mapbox>
            <figure>
              <iframe src={About_Me[6].Location_map[0].Location}
              width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </figure>
          </section>
          </article>
          
        <section className="contact-form">
            <h3 className="resumeeducation">Contact Form</h3>

  
            <form action="#" className="form">
  
              <div className="input-wrapper">
                <input type="text" name="fullname" className="form-input" placeholder="Full name"/>
  
                <input type="email" name="email" className="form-input" placeholder="Email address"/>
              </div>
  
              <textarea name="message" className="form-input" placeholder="Your Message"></textarea>
  
              <button className="form-btn" type="submit">
                <ion-icon name="paper-plane"></ion-icon>
                {About_Me[6].Location_map[1].Message}
              </button>
  
            </form>
          </section>
        </>
    )
}