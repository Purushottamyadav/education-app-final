// import React, {useEffect } from "react";
import "./home.css"
import { useNavigate } from "react-router-dom";
import UsingFetch from "../content";

function HomePage() {
 
  const navigate = useNavigate();
  const handlelogout = () => {
    sessionStorage.removeItem("authentication");
    navigate("/");
  };

  // useEffect(() => {
  //   fetch("http://localhost:3001/home", {
  //     method: "get",
  //     headers: {
  //       authentication: sessionStorage.getItem("authentication"),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //     });
  // }, []);

  

  return (
  <>
         <h1>EDUCATION APPLICATION</h1>
        <div className="home-container">
           <div className="input-button">
           <div className="input">
           <input type="text" placeholder="Search Your Courses Here........."/>
           </div>
            <div className="search"><button>Search</button></div>
           </div>
           <div className="user-logout">
           <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZqm2wlBrnMpNt1QF32f0O8oU31uVH5E5MfrQLo1oBXv3nXhWzFePgqeMGeSpYsaQ03o&usqp=CAU" alt="logo" /></div>
           <div onClick={handlelogout}
                style={{ cursor: "pointer" }}
                className="logout">
                    <h4>
                        Logout
                    </h4>
                </div>
           </div>

        </div>
      
            <UsingFetch/>
        </>
  );
}
export default HomePage;
