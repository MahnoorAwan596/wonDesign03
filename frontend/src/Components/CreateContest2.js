import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import FooterNew from "./FooterNew";
import './styles/CreateContest2.css';

const CreateContest2 = () => {

    const navigate = useNavigate();

    const [contest, setContest] = useState({
        contestcreator:"", contesttitle: "", designtype:"", description:"", 
        designusedas:"", enddate:"", 
        budget:"", additionaldescription:""
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
            setContest({ ...contest, contestcreator: data.username });
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userAuthenticateContact();
    }, []);

    let name, value;

    const handleCreateInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setContest({ ...contest, [name]:value});
    }


    const PostContest = async (e) => {
        e.preventDefault();

        const { contestcreator, contesttitle, designtype, description, 
            designusedas, enddate, 
            budget, additionaldescription } = contest;

        const res = await fetch("/browse", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ contestcreator, contesttitle, designtype, description, 
                designusedas, enddate, 
                budget, additionaldescription})
        })

        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Invalid Credentials");
            console.log("Invalid Credentials");
        } else {
            // window.alert("Payment Process");
            window.alert("Contest created successfully");
            console.log("Contest created successfully");

            navigate('/browse');

        }
    }

    const Back = () => {
        navigate('/create');
    }

    return (
        <div className="c-c-2">
            <div className="dataCollection">
                <div className="dataCollectionTitle">
                    <h1>Tell us about your contest</h1>
                </div>
                <button className='backButton' onClick={Back}>Back</button>
                <form method="POST" className="dataCollectionForm">
                <div className="field1">
                        <label className="label"><h3><b>Contest Creator</b></h3></label>
                        <input type="text" className="inputField1" name="username" 
                            value={contest.contestcreator} />
                    </div>
                    <div className="field1">
                        <label className="label"><h3><b>Name your contest</b></h3></label>
                        <input type="text" className="inputField1" placeholder="E.g. Packaging for an organic juice company" 
                            name="contesttitle" onChange={handleCreateInputs} value={contest.contesttitle} autoComplete="off"  />
                    </div>
                    <div className="field1">
                        <label className="label"><h3><b>What type of design do you need?</b></h3></label>
                        <select className="inputField1" name="designtype" onChange={handleCreateInputs} value={contest.designtype} autoComplete="off">
                            <option value disabled>Select category</option>
                            <option>Logo & identity</option>
                            <option>Web & app design</option>
                            <option>Business & advertising</option>
                            <option>Clothing & merchandise</option>
                            <option>Art & illustration</option>
                            <option>Packaging & label</option>
                            <option>Book & magazine</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="field2">
                        <label className="label"><h3><b>Description</b></h3></label>
                        <textarea className="inputField2" placeholder="E.g. I need a package designed for a new flavor of organic juice. It should feature a retro and vibrant design style and include our company logo on the front of the bottle. Our juice appeals to adults aged from 25-35.  Our bottle contains 500mls (see attached reference image for actual shape and size)." 
                            name="description" onChange={handleCreateInputs} value={contest.description} autoComplete="off" />
                    </div>
                    <div className="field1">
                        <label className="label"><h3><b>How will your design be used?</b></h3></label>
                        <input type="text" className="inputField1" placeholder="E.g. Billboard, Facebook campaign, bookcover etc." 
                            name="designusedas" onChange={handleCreateInputs} value={contest.designusedas} autoComplete="off" />
                    </div>
                    {/* <div className="field1">
                        <label className="label"><h3><b>Start date</b></h3></label>
                        <input type="date" className="inputField1" name="startdate" 
                            onChange={handleCreateInputs} value={contest.startdate} autoComplete="off" />
                    </div> */}
                    <div className="field1">
                        <label className="label"><h3><b>End date</b></h3></label>
                        <input type="date" className="inputField1" name="enddate" onChange={handleCreateInputs} 
                            value={contest.enddate} autoComplete="off" />
                    </div>
                    <div className="field4">
                        <label className="label"><h3><b>What's your budget?</b></h3></label>
                        <p>Your designer will use your budget and brief details to provide a quote</p>
                        <div className="amountInput">
                            <div className="dollarSign">$</div>
                            <input type="number" className="inputField4" placeholder="Enter amount" 
                                name="budget" onChange={handleCreateInputs} value={contest.budget} autoComplete="off" />
                        </div>
                        <div className="priceGuide">
                            <p>Price guide: $50 - $1000</p>
                            <hr></hr>
                            <p>*WonDesign adds a 5% platform fee to cover support and processing payment</p>
                        </div>
                    </div>
                   
                    <div className="field2">
                        <label className="label"><h3><b>Anything else you'd like to share?</b></h3></label>
                        <textarea className="inputField2" name="additionaldescription" onChange={handleCreateInputs} 
                            value={contest.additionaldescription} autoComplete="off" />
                    </div>
                    <div className="NextButtonDiv">
                        <button onClick={PostContest} type="submit" className="next2-button" name="">Create Contest</button>
                    </div>
                </form>
            </div>
            
         
            <FooterNew />
        </div>
    );
}
export default CreateContest2;