import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser } from "./features/userSlice";
import {auth} from "./firebase";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import Feed from "./Feed";


function App() {
  const user = useSelector(selectUser);
 const dispatch = useDispatch()

  useEffect (() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))

      } else{
        //user is loggded out
        dispatch(logout());
      }
    })
  }, [])




  return (
    <div className="app">
     

    {/* Header */}
    <Header />


    {!user ? (

      <Login  />
    ): (
        <div className="app__body">
          <Sidebar />
          
          <Feed />
          {/* Widgets */}
        </div>
        
    )}
    



    </div>
  );
}

export default App;
