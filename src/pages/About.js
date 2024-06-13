import React, { Component } from 'react';

import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";




export default class About extends Component {
  render() {
    return (
      <div>
        <p>
          
        <div>
          <div className="split left">
          <div className="centered">
          <img 
          className="profile_image"
          src={profile_pic}
          alt="Profile Pic"
          ></img>
          </div>
          </div>
          <div className="split right">
          <div className="centered">
          <div className="name_title"> <strong></strong>Elena Lukac</div>
          <div className="brief_description">
          I'm a junior at <strong>Barnard College </strong> 
           pursuing a major in <strong>Computer Science </strong>
          and a minor in <strong>Anthropology</strong>. <br></br><br></br>
          
          Outside of classes, I'm currently the Online Editor and a Staff Writer at the
          <strong> Columbia Federalist</strong>, a <strong>satire</strong> newspaper 
           at Columbia University. I'm also on the Organizing Team for 
          <strong> Columbia DivHacks</strong> in Publicity, Marketing, and Branding.
          
          </div>
          </div>
          </div>
          </div>
          

          

</p> 
      </div>
    )
  }
}