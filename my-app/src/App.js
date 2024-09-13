// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

function App() {
  const firstName = "John"; // Replace with your first name

  return (
    <div className="container">
      <h1>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</h1>
      {firstName && (
        <img src="https://via.placeholder.com/150" alt="Profile Picture" />
      )}
      <div className="card">
        <div className="card-body">
          <Name />
          <Price />
          <Description />
          <Image />
        </div>
      </div>
    </div>
  );
}

export default App;
