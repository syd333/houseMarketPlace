import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import googleIcon from "../assets/svg/googleIcon.svg";

function OAuth() {
  return (
    <div>OAuth</div>
  )
}

export default OAuth