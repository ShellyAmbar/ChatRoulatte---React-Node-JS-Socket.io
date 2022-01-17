import React, { useContext, useState, useEffect } from "react";
import "./Home.css";
import { makeStyles } from "@material-ui/core/styles";
import ContactMe from "../contactMe/ContactMe";
import Gallery from "../Gallery/Gallery";
import BubbleFloating from "../../Customs/BubbleFloating/BubbleFloating";


function Home() {
    const useStyles = makeStyles((theme) => ({
        root: {
          display: "flex",
          flexDirection: "column",
        },
        image:{
           
            height:"400px",
            width:"auto"

        },
      
        container: {
          display: "flex",
          flexDirection: "column",
          minWidth: "100%",
          height: "100%",
          right: 0,
          bottom: 0,
          left: 0,
          top: 0,
        },
        containerPage: {
         
       paddingTop:100
        },
      
        padding: {
          padding: "10px",
        },
        margin: {
          margin: "10px",
        },
      
        paper: {
          margin: "auto",
          width: "50%",
      
          alignSelf: "center",
          padding: "10px",
        },
        videoLarge: {
          position: "fixed",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
          right: 0,
          bottom: 0,
          left: 0,
          top: 0,
          minHeight: "100%",
          minWidth: "100%",
        },
        videoSmall: {
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "fixed",
        },
    
      }));
      const classes = useStyles();
    return (
     <div className="home-container">
        
      <div className="appbar">
        <ul>
          <li>
            <a href="#home">Home</a> 
           
          </li>
          <li>
            <a href="#gallery">Gallery</a> 
           
          </li>
         
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      
     
      <div className="section" id="home">
    
        <h1>Welcome to Date Roulette! </h1>
        
        <img src={'./images/19.png'} className={classes.image}/>
       <p>Here you will find your PERFECT Match in a fiew minutes..</p>
       <p>Just set you preferences and START date with random matches!</p>
      </div>
      <div className="section" id="gallery">
     
        <Gallery/>
      </div>
      <div className="section" id="contact">
     
     <ContactMe/>
      </div>
      
      <BubbleFloating/>
     
      </div>
    
 
    )
}

export default Home
