import React from "react";
import "./contact.css";
import contactImage from "../../assets/happy.png";
export default function Contact() {
  return (
    <div data-aos="fade-up">
      <h1 className="ContactTitle">Contact Us</h1>
      <hr className="horizontalLine" />
      <div className="mainContact">
        <div className="leftContact">
          <img className="contactImage" src={contactImage} alt="" />
        </div>
        <div className="rightContact">
          <form action="">
            <div className="namesSection">
              <input type="text " placeholder="First name:" />
              <input type="text" placeholder="Last Name:" />
            </div>
            <input
              className="emailBox"
              type="text"
              placeholder="Email Address"
            />
            <input className="phoneBox" type="text" placeholder="Phone" />
            <textarea
              className="messageBox"
              name=""
              id=""
              placeholder="Message"
            ></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
