import React, {useState, useEffect} from 'react';
import "./Home.css";
import axios from 'axios';


function Home(){
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
        <div className="koule">
      <section id="welcome-section"  className="section1">
        <div className="image-principal">
        <img
              src={`http://localhost:3000/uploads/${users.image2}`}
              className="hero-principal rounded-circle"
              alt={users.name}
              
            />
          </div>
        <div className="text0">
          <h1>Hi, I'm {users.name}</h1>
          <p className="descrip"> a web developper...</p>
        </div>
      </section>
    </div>
        
    )
}

export default Home