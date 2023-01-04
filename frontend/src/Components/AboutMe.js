import React, { useEffect, useState } from "react";
import AboutMee from "../img/AboutMEnew.png";
import "./styles/AboutMe.css";
import axios from "axios";

const Event = ({ eventt }) => {
  return (
    <div className="news">
      <div className="event"><b>Event update by:</b> {eventt.username}</div>
      <div className="event"><b>Email:</b> {eventt.email}</div>
      <div className="event"><b>Event is about:</b> {eventt.subject}</div>
      <div className="event"><b>Event description:</b> {eventt.description}</div>
      <div className="event"><b>Event created At:</b> {eventt.createdAt}</div>
    </div>
  )
}

const ContestTitle = (props) => {
  const [data, setData] = useState([]);

  const getdata = () => {
    fetch(`/browse/contestopen/${props.id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  
  useEffect(() => {
    getdata();
  }, [props]);
  
  return (
    <div className="won-contest-component">
      <h3><b>Contest Title : </b><span> {data.contesttitle}</span></h3>
      <h3><b>Contest Type :</b><span> {data.designtype}</span> </h3>
      <h3><b>Prize Money :</b><span> ${data.budget}</span> </h3>
      <h3><b>Contest Locked At :</b><span> {data.enddate}</span></h3>
    </div>
  );
};

const AboutMe = () => {

  const [events, setEvents] = useState(null)

  const fetchEvents = async () => {
    const response = await fetch('/fetchevents')
    const json = await response.json()

    if (response.ok) {
      setEvents(json)
    }
  }

  const [data, setData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const getwinner = () => {
    axios
      .get(`/winner/${user.id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  };

  useEffect(() => {
    getwinner();
    fetchEvents();
  }, []);

  return (
    <div>
      <div className="AboutMe-Page">
        <div className="AM-background-trans">
          <div className="AM-container">
            <div className="AM-left">
              <div className="AM-title">
                <h1>About Me</h1>
              </div>
              <div className="AM-content">
                <hr />
                <h4>NAME</h4>
                <p>{user.name}</p>
                <hr />
                <h4>EMAIL</h4>
                <p>{user.email}</p>
                <hr />
                <h4>ROLE</h4>
                <p>{user.type}</p>
                <div className="AM-line" />
              </div>
            </div>
            <div className="AM-right">
              <img className="AM-image" src={AboutMee} alt="" />
            </div>
          </div>
          <aside>
            <h4>UpComing Events</h4>
            {events && events.map((eventt) => (
              <Event key={eventt._id} eventt={eventt} />
            ))}
          </aside>
          {
            (user.type === 'client') ?
              <div>
                <div className="AM-second-container">
                  <div className="created-contests-title">
                    <h1>Contests You Created</h1>
                  </div>
                </div>
                {/* <ContestCard /> */}
              </div>
              :
              <div>
                <div className="AM-second-container">
                  <div className="won-contests-title">
                    <h1>Contests You Won</h1>
                  </div>
                </div>
                <div className="AM-third-container">
                  {data.map((item) => (
                    <div className="won-contest-card">
                      <div className="won-contest-card-content">
                        <ContestTitle id={item.contestId} />
                        {/* <h4>Winner Name : {item.name}</h4> */}
                        {/* <h4>Email : {item.email}</h4> */}
                      </div>
                    </div>
                    //  <div className="won-contest-card">
                    //    <ContestTitle id={item.contestId} />
                    //    <h4>Winner Name : {item.name}</h4>
                    //    <h4>Email : {item.email}</h4>
                    //  </div>
                  ))}
                </div>
              </div>
            // <div>
            //   <h3 style={{ display: "flex", justifyContent: "center" }}>
            //     Contests Win by {user.name}
            //   </h3>
            //   <div style={{ backgroundColor: "white", padding: "25px" }}>
            //     {data.map((item) => (
            //       <div style={{ padding: "25px" }}>
            //         <ContestTitle id={item.contestId} />
            //         <h4>Winner Name : {item.name}</h4>
            //         <h4>Email : {item.email}</h4>
            //       </div>
            //     ))}
            //   </div>
            // </div>
          }
        </div>
</div>


      {/* <div className="AboutMe-Page">
        <div className="AM-container">
          <div className="AM-left" style={{ padding: "20px" }}>
            <div className="AM-title">
              <h3 style={{ display: "flex", justifyContent: "center" }}>
                PROFILE
              </h3>
            </div>
            <div className="AM-name">
              <h5>NAME</h5>
              <p>{user.name}</p>
            </div>
            <div className="AM-email">
              <h5>EMAIL</h5>
              <p>{user.email}</p>
            </div>
            <div className="AM-role">
              <h5>ROLE</h5>
              <p>{user.type}</p>
            </div>
          </div>
          <div className="AM-right">
            <img className="AM-image" src={AboutMee} alt="" />
          </div>
        </div>
      </div>{
        (user.type === 'client') ? null :
        <div>
      
      <h3 style={{ display: "flex", justifyContent: "center" }}>
        Contests Win by {user.name}
      </h3>
      <div style={{ backgroundColor: "white", padding: "25px" }}>
        {data.map((item) => (
          <div style={{ padding: "25px" }}>
            <ContestTitle id={item.contestId} />
            <h4>Winner Name : {item.name}</h4>
            <h4>Email : {item.email}</h4>
          </div>
        ))}
      </div>
      </div>
} */}
    </div>
  );
};

export default AboutMe;
