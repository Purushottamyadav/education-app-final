import React, { useEffect, useState } from "react"
import axios from 'axios'
import "../App.css"
const UsingFetch = () => {
  const [users, setUsers] = useState([])

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:3001/getUsers")
      setUsers(response.data)
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user  => (
            <>
            <div className="main-container">
            <h3 className="header">TOPICS</h3>
            <div className="Topics"><h1>{`${user.Topics} ` }</h1></div>
            <div className="subtopics">
            <div className="course-detail">
            <h3 className="header">SUB-TOPICS</h3>
            {`${user.subtopics}` }
            </div>
           </div>
           <h3 className="header">PPT</h3>
            <div className="ppt-link"><a href={user.ppt }> CLICK HERE FOR TOPICS PPT</a></div>
            <div>
              <h3>Full Course Material</h3>
            </div>
            <div className="ppt-link"> <a href={user.material}>CLICK HERE FOR FULL COURSE MATERIAL</a></div>
            <h3>ASSIGNMENT TO COMPLETE</h3>
            <div className="course-detail">{`${user.assisgnment} `}</div>
            </div>
             
             
            </>
            
          ))}
        </ul>
      )}
    </div>
  )
}

export default UsingFetch
