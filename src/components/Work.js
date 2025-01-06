import React, {useState, useEffect} from 'react';
import "./Work.css";
import axios from 'axios';


function Work(){
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
        <div>
        <section className="section3" id="projects">
            <div className="some-works"><h2>Here <i className="bi bi-laptop"></i> are the links to some of my projects</h2></div>
            <div className="row">
                <div className="column2 col-sm-12 col-lg-4" >
                            <div className="col1">
                               <div><p>E-SHOP</p></div>
                               <div className="link">
                                  <a href="https://github.com/krabdoble/tp-back" target="_blank" rel="noreferrer"><i class="bi bi-github"></i></a>
                                  <a href="https://proyecto-final-4483a.web.app" target="_blank" rel="noreferrer"><i class="bi bi-laptop"></i></a>
                                </div>
                            </div>
                            <img
              src={`http://localhost:3000/uploads/${users.image1}`}
              className="image-project"
              alt={users.name}
              
            />
                            
                </div>
                <div className="column2 col-sm-12 col-lg-4">
                            <div className="col1">
                              <div><p>Booking</p></div>
                              <div className="link">
                                <a href="https://github.com/krabdoble/lounge-project" target="_blank" rel="noreferrer" ><i className="bi bi-github"></i></a>
                                <a href="https://salon-project-c036b.web.app" target="_blank" rel="noreferrer"><i className="bi bi-laptop"></i></a>
                              </div>
                            </div>
                            <img
              src={`http://localhost:3000/uploads/${users.image2}`}
              className="image-project"
              alt={users.name}
              
            />
                </div>
                <div className="column2 col-sm-12 col-lg-4">
                            <div className="col1">
                               <div><p>Portfolio</p></div>
                               <div className="link">
                                <a href="https://github.com/krabdoble/Patrice-Lamarre-CV" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                                <a href="https://krabdoble.github.io/Patrice-Lamarre-CV/" target="_blank" rel="noreferrer"><i className="bi bi-laptop"></i></a>
                              </div>--
                            </div>
                            <img
              src={`http://localhost:3000/uploads/${users.image3}`}
              className="image-project"
              alt={users.name}
              
            />
                        </div>
            </div>
          </section>
      </div>
    )
}

export default Work

/*
<img className="image-project" src="project9.jpg" alt="first work"/>
*/