import React, { useEffect, useState } from "react"
// components
import BrowseHome from './BrowseHome'
import FooterNew from "./FooterNew";
import "./styles/BrowseContest.css";

const BrowseContest = () => {

    const [contests, setContests] = useState(null)

    useEffect(() => {
        const fetchContests = async () => {
            const response = await fetch('/browse')
            const json = await response.json()

            if (response.ok) {
                setContests(json)
            }
        }
        fetchContests()
    }, [])

    return (
        <div className="browse-contest-div-main">
            <div className='contests'>
                <div className="contest-page-title">
                    <br></br>
                    <h3>Welcome to <span>Contest's World!</span></h3>
                </div>
                {contests && contests.map((contest) => (
                    <BrowseHome key={contest._id} contest={contest} />
                ))}
            </div>
            <FooterNew />
        </div>
    )
}
export default BrowseContest