import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {login} from "./features/userSlice";
import {auth} from "./firebase";
import './Login.css';


function Login() {

    const [name, setName] = useState("");
    const [email, setEmail]  = useState("");
    const [password, setPassword]  = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();


    const loginToApp =(e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl:userAuth.user.profileURL, 
            })
            );
        }).catch(error=> alert(error) );
        
    };

    const register = () => {
            if(!name){
                return alert("Please enter a full name!");
            }

            auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,

                })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic,
                    }));
                });
            }).catch((error) => alert(error));
        
    };

    return (
        <div className="login">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ALinkedIn_Logo.svg&psig=AOvVaw1ctDSGE04_zmjtqu9guXne&ust=1611193461550000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjTrMGxqe4CFQAAAAAdAAAAABAI" alt=""/>

            <form action="">

                    <input value={name} onChange={e => setName(e.target.value)} placeholder="full name (required if registering)"  type="text"/>

                    <input value = {profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Profile pic URL (optional)'type="text"/>

                    <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} type="email"/>

                      <input placeholder='Password'value={password} onChange={e => setPassword(e.target.value)} type="password"/>

                        <button type='submit' onClick={loginToApp} > Sign In  </button>
            </form>
            <p>Not a member?{" "}
                <span className="login__register" onCLick={register}>Register Now</span>
            </p>



        </div>
    )
}

export default Login
