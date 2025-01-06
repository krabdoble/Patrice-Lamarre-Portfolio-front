import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./About.css";


function About(){
    const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/data/2",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("firebaseToken")}`,
        },
      }
    );
    setUsers(response.data);
  };

    return(
        <div className="container">
            <section id="aboutMe" className="experience">
                <h2 className="title">Personal Information</h2>
                <div className="row info">
                    <div className="col-12 col-md-4">
                        <h3 className="section-title">About me</h3>
                        <p className="section-text mb-4">My name is {users.name}, Responsive Website Design.
                            I speak Spanish, French, English and commercial Portuguese. I am a proactive person, I like to work as a team...
                        </p>
                    </div>
                   <div className="column1 col-12 col-md-4"> 
                            <h3 className="section-title">Certificate</h3>
                            <p className="section-text">Certified as an Organization Analyst in December 2022, freeCodeCamp certificate as a responsive web design, certified as a frontend developer Argentina program4.0, certified as a full stack web developer .
                            </p>
                            <div className="badges-container mt-4 mb-4">
                                <span className="badge text-bg-primary me-1">Web Designer</span> 
                                <span className="badge text-bg-primary me-1">API Request</span>
                                <span className="badge text-bg-primary me-1">JavaScript</span>
                                <span className="badge text-bg-primary me-1">HTML</span>
                                <span className="badge text-bg-primary me-1">CSS</span>
                                <span className="badge text-bg-primary me-1">React</span>
                                <span className="badge text-bg-primary me-1">Railway</span>
                                <span className="badge text-bg-primary me-1">Mysql</span>
                                <span className="badge text-bg-primary me-1">Bootstrap</span>
                                <span className="badge text-bg-primary me-1">GitHub</span>
                                <span className="badge text-bg-primary me-1">Sequelize</span>
                                <span className="badge text-bg-primary me-1">Primereact</span>
            
                            </div>
                    </div>
                    <div className="column1 col-12 col-md-4">
                            <h3 className="section-title">Student</h3>
                            <p className="section-text"> I studied the basics of Python, C in college. I learn and create every day, I am studying Java, Angular to upgrade my skills
                            .</p>
                            <div className="badges-container mt-4">
                                <span className="badge text-bg-primary me-1">Python</span>
                                <span className="badge text-bg-primary me-1">C</span>
                                <span className="badge text-bg-primary me-1">Java</span>
                                <span className="badge text-bg-primary me-1">Angular</span>
            
                            </div>
                    </div>
                </div>
              </section>
        </div>
    )
}

export default About