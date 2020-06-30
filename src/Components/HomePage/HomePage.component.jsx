import React from "react";

import "./HomePage.styles.scss";

export const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <h1 className="title">EXTERIOR</h1>
        <span className="subtitle">Buy Now</span>
      </div>
      <div className="menu-item">
        <h1 className="title">INTERIOR</h1>
        <span className="subtitle">Buy Now</span>
      </div>
      <div className="menu-item">
        <h1 className="title">WHEELS</h1>
        <span className="subtitle">Buy Now</span>
      </div>
      <div className="menu-item">
        <h1 className="title">ACCESSORIES</h1>
        <span className="subtitle">Buy Now</span>
      </div>
      <div className="menu-item">
        <h1 className="title">OEM</h1>
        <span className="subtitle">Buy Now</span>
      </div>
    </div>
  </div>
);
