import React, {useState, useEffect} from 'react'
// import ImageSlider from "./ImageSlider";
import "./styles/Events.css";

const Events = () => {
    // const slides = [
    //     { url: "http://localhost:3000/Picture3.png", title: "Three" },
    //     { url: "http://localhost:3000/Picture2.png", title: "Two" },
    //     { url: "http://localhost:3000/Picture1.png", title: "One" },
    //     // { url: "http://localhost:3000/image-4.jpg", title: "city" },
    //     // { url: "http://localhost:3000/image-5.jpg", title: "italy" },
    // ];
    // const containerStyles = {
    //     width: "1300px",
    //     height: "600px",
    //     margin: "0 auto",
    // };

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        subject: "",
        description: ""
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
            setUserData({ ...data, username: data.username, email: data.email });
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userAuthenticateContact()
    }, []);

    let name, value;
    // we are storing data in state
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUserData({ ...userData, [name]: value });
    }

    const PostEvent = async (e) => {
        e.preventDefault();

        const { username, email, subject, description } = userData;

        const res = await fetch("/addevents", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, email, subject, description
            })
        });

        const data = res.json();

        if (res.status === 422 || !data) {
            window.alert("Please fill the fields");
            console.log("Please fill the fields");
        } else {
            window.alert("Event added successfully");
            console.log("Event added successfully");
            setUserData({ ...userData, subject: ""});
            setUserData({ ...userData, description: ""});
        }
    }

    return (
        <div className='events-page'>
            <div className='events-back-blur'>

                <div className="bg-img">
                    <div className="content">
                        <header className='heading'>Add Any Event!</header>
                        <form action="#" className='event-form'>
                            <div className="field">
                                {/* <span className="fa fa-user"></span> */}
                                <input 
                                    type="text" 
                                    className="username-field" 
                                    required placeholder=" Username" 
                                    value={userData.username}
                                    name="username"
                                    // onChange={handleInputs}
                                />
                            </div>
                            <div className="field space">
                                {/* <span className="fa fa-lock"></span> */}
                                <input 
                                    type="text" 
                                    className="pass-key" 
                                    required placeholder=" Email"
                                    value={userData.email}
                                    name="email" 
                                    // onChange={handleInputs}
                                />
                                    {/* <span className="show">SHOW</span> */}
                            </div>
                            <div className="field space">
                                <input 
                                    type="text" 
                                    className="pass-key" 
                                    required placeholder=" Subject"
                                    alue={userData.subject}
                                    name="subject" 
                                    onChange={handleInputs}
                                />
                                    {/* <span className="show">SHOW</span> */}
                            </div>
                            <div className="field space">
                                <input 
                                    type="text" 
                                    className="pass-key" 
                                    required placeholder=" Description"
                                    alue={userData.description}
                                    name="description"  
                                    onChange={handleInputs}
                                />
                                    {/* <span className="show">SHOW</span> */}
                            </div>
                            <div className="pass">
                                <p>Want to Add in Events? Click Add</p>
                            </div>
                            <div className="field">
                                <input type="submit" value="ADD EVENT" onClick={PostEvent}/>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Slider Section */}
                {/* <div className='containerStyles' style={containerStyles}>
                    <ImageSlider className="slides" slides={slides} />
                </div> */}

                {/* Choose Section */}
                {/* <div className="choose-section">

                </div> */}


            </div>
        </div>
    )
}

export default Events










// import React from 'react'
// import ImageSlider from "./ImageSlider";

// const Events = () => {
//     const slides = [
//         { url: "http://localhost:3000/Picture1.png", title: "One" },
//         { url: "http://localhost:3000/Picture2.png", title: "Two" },
//         { url: "http://localhost:3000/Picture3.png", title: "Three" },
//         // { url: "http://localhost:3000/image-4.jpg", title: "city" },
//         // { url: "http://localhost:3000/image-5.jpg", title: "italy" },
//       ];
//       const containerStyles = {
//         width: "1300px",
//         height: "600px",
//         margin: "0 auto",
//       };
//     return (
//         <div>
//       <h1>Hello monsterlessons</h1>
//       <div style={containerStyles}>
//         <ImageSlider slides={slides} />
//       </div>
//     </div>
//     )
// } 

// export default Events