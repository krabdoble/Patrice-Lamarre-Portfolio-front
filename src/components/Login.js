import React, { useEffect, useState } from "react";
import { useAuth } from "../providers/AuthProvider"
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const { signInWithGoogle, user } = useAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

    // Redirigir si el usuario ya está autenticado
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]); // Dependencia de "user" y "navigate" para que se ejecute cuando el usuario cambie

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      setError("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
    }
  };

 /* <div id="koule">
        
        <div class="card-body section1 position-absolute top-50 start-50 translate-middle">
          <h1 class="mb-5"><span class="descrip ">Welcome,</span> to my Portfolio</h1>
          <a class="link-hover " href="./home.html"><button type="submit" class="btn btn-dark"><strong>Click</strong></button></a>
      </div></div>*/
return (
  <div className="koule">
  <div className="card-body section1 position-absolute top-50 start-50 translate-middle">
  <h1 className="mb-5"><span className="descrip ">Welcome,</span> to my Portfolio</h1>
    <button className="btn btn-dark" onClick={handleSignIn}>Sign in with Google</button>
  </div>
  </div>
)
  
};

/*return (
  <div className="auth card text-center">
    <h1>Login</h1>
  <div className="card-body position-absolute top-50 start-50 translate-middle">
    <button onClick={handleSignIn}>Sign in with Google</button>
  </div>
  </div>
)*/