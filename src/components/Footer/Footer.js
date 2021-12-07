import React from "react"
import { SocialIcon } from 'react-social-icons';
import AppBar from "@mui/material/AppBar";
import SportsBarIcon from '@mui/icons-material/SportsBar';
import "./Footer.css";
import SocialFollow from "./SocialFollow";

// icon(faUser)
// icon(fab.faFortAwesome)



const Footer = () => {
  return (
    <div className='App'>
        <AppBar position="static">    
            <div className='row'>
            <SocialFollow />
               <p>Copyright &copy;{new Date().getFullYear()}  | <SportsBarIcon /> BAR.io   |   All Rights Reserved   |   Privacy </p>
               
            </div>
        </AppBar>
    </div>
  )
}

export default Footer