import React from 'react'
import pic from "../img/six.jpg";
import closed from "../img/closed.jpg";
import { useNavigate } from 'react-router-dom';
import "./styles/BrowseContest.css";

const BrowseHome = ({ contest }) => {

  const navigate = useNavigate();

  const OpenContest = (e) => {
    navigate(`/contestopen/${e}`, { state: { id: e } });
  }

  let currenttime = new Date().getTime();

  let eventtime = new Date(contest.enddate).getTime();

  return (
    <div className="browse-page">
      {/* <Link to={`/contestopen/${contest._id}`}> */}
      <div className="contest-post-area">
        <button className="c-post" onClick={(e) => OpenContest(contest._id)}>
          <img className="c-pic" src={pic} alt="" />
          <div className="c-content">
            <div className="c-title"><b>{contest.contesttitle}</b></div>
            <div className="c-desc"><p>{contest.description}</p></div>

            <div className="lower-data">
              <div className="lower-left">
                {/* <div className="c-entries"><b>Created At:</b> {contest.createdAt}</div> */}
                <div className="c-entries"><b>Created At:</b> {
                  new Date(contest.createdAt).toLocaleDateString("en-GB", {
                    timeZone: "UTC",
                  })}
                </div>
                <div className="c-package"><b>Contest Design Type:</b> {contest.designtype}</div>
                {/* <div className="c-status"><b>End Date:</b> {contest.enddate}</div> */}
                <div className="c-status"><b>End Date:</b> {
                  new Date(contest.enddate).toLocaleDateString("en-GB", {
                    timeZone: "UTC",
                  })}
                </div>
              </div>
              <div className='lower-right'>
                {currenttime < eventtime ? 
                  null
                 : 
                  <img className="status-outside" src={closed} alt="" />
                }
              </div>
            </div>

          </div>
        </button>
      </div>
      {/* </Link> */}
    </div>
  )
}

export default BrowseHome