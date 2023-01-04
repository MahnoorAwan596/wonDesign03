import React from "react";
import create from "../img/create.png";
import { useNavigate } from 'react-router-dom';
import logoIcon from "../img/Logos-icon.png";
import webIcon from "../img/web-icon.png";
import flyerIcon from "../img/flyer-icon.png";
import packagingIcon from "../img/packaging-icon.png";
import bookIcon from "../img/book-icon.png";
import graphicsIcon from "../img/graphics2-icon.png";
import './styles/CreateContest.css';

const CreateContest = () => {    

    const navigate = useNavigate();

    const GetStarted = () => {
        navigate('/createtwo');
    }
    const alert = () => {
        alert()
    }

    return (
        <div className="c-p-section">
            <div className="create-page-section">
                <div className="create-page-title">
                    <h3>Let's Create a <span>Contest !</span></h3>
                </div>
                <div className="create-page-content">
                    <div className="create-page-data">
                        <div className="question-1">
                            <h3>What do you need designed?</h3>
                        </div>
                        <div className="categories">
                            <div className="c-row-1">
                                <button className="card1" value="logo-design" onClick={alert}>
                                    <img className="button-icon1" src={logoIcon} alt="" />
                                    <h5>Logo design</h5>
                                </button>
                                <button className="card2" value="product-packaging">
                                    <img className="button-icon2" src={packagingIcon} alt="" />
                                    <h5>Product packaging</h5>
                                </button>
                            </div>
                            <div className="c-row-2">
                                <button className="card3" value="book-cover">
                                    <img className="button-icon3" src={bookIcon} alt="" />
                                    <h5>Book cover</h5>
                                </button>
                                <button className="card4" value="web-page-design">
                                    <img className="button-icon4" src={webIcon} alt="" />
                                    <h5>Web page design</h5>
                                </button>
                            </div>
                            <div className="c-row-3">
                                <button className="card5" value="illustrations-or-graphics">
                                    <img className="button-icon5" src={graphicsIcon} alt="" />
                                    <h5>Illustrations or graphics</h5>
                                </button>
                                <button className="card6" value="postcard-or-flyer">
                                    <img className="button-icon6" src={flyerIcon} alt="" />
                                    <h5>Postcard or flyer</h5>
                                </button>
                            </div>
                            <button onClick={GetStarted} type="submit" className="next1-button" name="">Get Started</button>
                        </div>
                    </div>
                    <div className="create-page-image">
                        <img className="image-create" src={create} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CreateContest;