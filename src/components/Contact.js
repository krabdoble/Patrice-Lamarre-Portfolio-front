import React from 'react';
import "./Contact.css";


function Contact(){
    return(
        <>
        <section  className="section4">
          <div className="row1 row">
             <div className="column col-12 col-md-4">
                <p className="text1">Let's talk!</p>
             </div>
             <div className="column col-12 col-md-4">
                <p className="text2">Contact me to start your web development project. I learn and create every day...</p>
             </div>
             <div id="contact" className="column col-12 col-md-4">
                <a className="button" href="mailto:patricelmrr@gmail.com"><button>Contact <i class="bi bi-envelope-at-fill"></i></button></a>
             </div>
          </div>
        </section>
        <section className="footer">
          <div className="social">
            <a className="profile-link" href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook"></i></a>
            <a className="profile-link" href="https://www.linkedin.com/in/patrice-lamarre-62054625b/" target="_blank"><i class="bi bi-linkedin"></i></a>
            <a className="profile-link" href="https://github.com/krabdoble/patriceLamarrePort" target="_blank"><i class="bi bi-github"></i></a>
            <a className="profile-link" href="mailto:patricelmrr@gmail.com" target="_blank"><i class="bi bi-instagram"></i></a>
            
          </div>
          <div className="create">
            Created by Lamarre Patrice 2024
          </div>
      </section>
        </>
    )
}

export default Contact

/*
<!--<a id="profile-link" href="2222" target="_blank"><i class="bi bi-whatsapp"></i></a>-->
*/