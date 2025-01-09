import React, { Fragment } from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div className="main">
      <div className="mainFooter">
        <div className="leftFooter">
          <h3 className="port">Portfolio</h3>
          <ul className="list">
            <li>Overview</li>
            <li>Know How</li>
            <li>History</li>
            <li>Partners</li>
          </ul>
          <ol className="links2">
            <li className="fa fa-github"></li>
            <li className="fa fa-linkedin"></li>
            <li className="fa fa-facebook"></li>
            <li className="fa fa-instagram"></li>
            <li className="fa fa-twitter"></li>
          </ol>
        </div>
        <div className="rightFooter">
          <ol className="qualities">
            <li> hardwork coach</li>
            <li> Productivity fan</li>
            <li> stunning UI's</li>
            <li> user satisfaction</li>
          </ol>
        </div>
        <ol className="qualities">
          <li> hardwork coach</li>
          <li> Productivity fan</li>
          <li> stunning UI's</li>
          <li> user satisfaction</li>
        </ol>
      </div>
      <p className="copyright">copyright@obedwirngo47@gmail.com</p>

      <hr />
    </div>
  );
}
