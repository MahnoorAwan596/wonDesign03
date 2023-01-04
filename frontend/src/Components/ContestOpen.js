import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Star from "../img/star.png";
import profile from "../img/profile-icon.png";
import Oc from "../img/oc.jpeg";
import axios from "axios";
import FooterNew from "./FooterNew";
import ImagesView from "./ImagesView";
import './styles/ContestOpen.css';
import Oc2 from "../img/ArrowDown.png";

const ContestOpen = ({ Contest }) => {
  const [singleContest, setSingleContest] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState([]);
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  const getdata = () => {
    axios
      .get(`/upload/${location.state.id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  };

  useEffect(() => {
    fetch(`/browse/contestopen/${location.state.id}`)
      .then((response) => response.json())
      .then((json) => setSingleContest(json));
    getdata();
  }, []);

  const onFileChange = (event) => {
    // Update the state
    setSelectedFile(event.target.files[0]);
  };
  
  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("File", selectedFile);
    formData.append("contestId", location.state.id);
    formData.append("userId", user.id);
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("phone", user.phone);

    // Details of the uploaded file

    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        response.json();
        if (response.status === 200) {
          getdata();
          alert("File uploaded successfully.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // Request made to the backend api
    // Send formData object
    // console.log("formdata", formData);
    // let mydata = { name: location.state.id, img: selectedFile };
    // axios.post("api/uploadfile", mydata);
  };

  let currenttime = new Date().getTime();

  let eventtime = new Date(singleContest.enddate).getTime();

  return (
    <div className="open-contest-page">
      <div className="background-set">
        <div className="background-set-blur">
          <div className="oc-upperpart">
            <div className="oc-desc1">
              <div className="oc-left">
                <div className="oc-title">
                  <h3>{singleContest.contesttitle}</h3>
                </div>
                <div className="oc-singleContest-creator">
                  <img className="oc-creator-img" src={profile} alt="" />
                  <div className="oc-creator-name">
                    <h5>{singleContest.contestcreator}</h5>
                  </div>
                </div>
                <div className="oc-creator-stars">
                  <img className="star" src={Star} alt="" />
                  <img className="star" src={Star} alt="" />
                  <img className="star" src={Star} alt="" />
                  <img className="star" src={Star} alt="" />
                  <img className="star" src={Star} alt="" />
                </div>
                {currenttime < eventtime ? (
                  <div className="oc-status-open">Status: Open</div>
                ) : (
                  <div className="oc-status-close">Status: Closed</div>
                )}
                <div className="box">
                  <div className="oc-description">
                    <h5>
                      <b>Description</b>
                    </h5>
                    <p>{singleContest.description}</p>
                  </div>
                  <div className="oc-ref-files">
                    <h5>
                      <b>Design Type</b>
                    </h5>
                    <p>{singleContest.designtype}</p>
                  </div>
                  <div className="oc-ref-files">
                    <h5>
                      <b>Design Used As</b>
                    </h5>
                    <p>{singleContest.designusedas}</p>
                  </div>
                  <div className="oc-ref-files">
                    <h5>
                      <b>Deadline</b>
                    </h5>
                    <p>
                      { new Date(singleContest.enddate).toLocaleDateString("en-GB", {
                        timeZone: "UTC",
                      })}
                    </p>
                  </div>
                  <div className="oc-ref-files">
                    <h5>
                      <b>Prize Money</b>
                    </h5>
                    <p>${singleContest.budget}</p>
                  </div>
                  <div className="oc-ref-files">
                    <h5>
                      <b>Additional Description</b>
                    </h5>
                    <p>{singleContest.additionaldescription}</p>
                  </div>
                </div>
              </div>
              <div className="oc-right">
                <img className="oc-image" src={Oc} alt="" />
                <div className="oc-image-blur">
                  <img className="oc-image2" src={Oc2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <hr className="hr"></hr>
        </div>
      </div>
      {
        (user.type === 'client') ? null :
          <div className="c-lowerpart">
            <label className="image-submission-form-label">
              <h4>
                <b>Submit your design here: </b>
              </h4>
            </label>
            <input type="file" onChange={onFileChange} />
            {currenttime < eventtime ? (
              <button className="submit-image-button" onClick={onFileUpload}>
                Submit
              </button>
              ) : null
            }
          </div>
      }
      <ImagesView data={data}/>;
      <FooterNew />
    </div>
  );
};

export default ContestOpen;


