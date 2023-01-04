import React, { useEffect, useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import FooterNew from "./FooterNew";
import './styles/Contact.css';
import { RingLoader } from 'react-spinners';


const Contact = () => {

    const [loading, setLoading] = useState(false);

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        usertype: "",
        message: ""
    });

    const userAuthenticateContact = async () => {
        try {
            const res = await fetch("/getdata", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            const data = await res.json();
            console.log(data);
            setUserData({ ...data, username: data.username, email: data.email, usertype: data.usertype });
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
        userAuthenticateContact()
    }, []);

    let name, value;
    // we are storing data in state
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUserData({ ...userData, [name]: value });
    }

    const PostContact = async (e) => {
        e.preventDefault();

        const { username, email, usertype, message } = userData;

        const res = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, email, usertype, message
            })
        });

        const data = res.json();

        if (res.status === 422 || !data) {
            window.alert("Login First");
            console.log("Login First");
        } else {
            window.alert("Message sent successfully");
            console.log("Message sent successfully");
            setUserData({ ...userData, message: "" });
        }
    }

    return (
        <div className="c-f-section">
            <div className="contact-page-section">
                <div className="contact-page-title">
                    <h3>Get in Touch <span>!</span></h3>
                    <p>Contact Us for a free consultation to evaluate your needs.</p>
                </div>
                <div className="contact-page-content">
                    <div className="contact-page-form">
                        <form method="POST" className="form-section">
                            <div className="contact-form-row">
                                <label className="c-f-label">Full Name</label>
                                <input type="text" className="form-control"
                                    value={userData.username}
                                    name="username"
                                    // onChange={handleInputs} 
                                />
                            </div>
                            <div className="contact-form-row">
                                <label className="c-f-label">Email</label>
                                <input type="email" className="form-control"
                                    value={userData.email}
                                    name="email"
                                    // onChange={handleInputs} 
                                />
                            </div>
                            <div className="contact-form-row">
                                <label className="c-f-label">User Type</label>
                                <input type="text" className="form-control"
                                    value={userData.usertype}
                                    name="usertype"
                                    // onChange={handleInputs} 
                                />
                            </div>
                            <div className="contact-form-row">
                                <label className="c-f-label">Message</label>
                                <textarea className="form-control"
                                    value={userData.message}
                                    name="message"
                                    onChange={handleInputs} />
                            </div>
                            <div className="contact-form-row-1">
                                <button onClick={PostContact} type="submit" className="contact-form-button" name="">Send</button>
                            </div>
                        </form>
                    </div>
                    <div className="contact-page-image">
                        {
                            loading ?
                                <RingLoader
                                    className="loader-contact"
                                    color={"#147d6c"}
                                    loading={loading}
                                    size={150}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                />
                                :
                                <Wrapper>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13271.326872279007!2d72.71186263064914!3d33.73916739107426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa710d77828e5%3A0xbd39902baf608901!2sNew%20City%20Phase%202!5e0!3m2!1sen!2s!4v1665598165068!5m2!1sen!2s"
                                        width="600"
                                        height="500"
                                        className="contact-map"
                                        style={{ border: "0" }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        title="Map"
                                        referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </Wrapper>
                        }
                    </div>
                </div>
            </div>
            <FooterNew />
        </div>
    );
}
export default Contact;