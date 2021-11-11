import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Slider from "../components/Slider";

export const HomePage = () => {
  const history = useHistory(); // for redirect

  // hook for update input's field -> library materialize
  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  return (
    <>
      <Slider />
      <div class="home-stack-section">
        <div class="my-home-stack-section">
          <h3 class="main-content-title">
            Stack of technologies used to create that site
          </h3>
          <div class="my-home-stack-block">
            <h4 class="my-home-stack-position">
              MERN:{" "}
              <span class="my-home-stack-company">
                MongoDB, ExpressJS, ReactJS, NodeJS
              </span>
            </h4>
            <ul class="my-home-stack-lists">
              <li class="my-home-stack-list-item">
                Backend:
                <p>
                  Node.js, Express.js, Middlewares
                </p>
              </li>
              <li class="my-home-stack-list-item">
                Database: 
                <p>MongoDB, Mongoose</p>
              </li>
              <li class="my-home-stack-list-item">
                Frontend:
                <p>
                  Authorization, React.js, Fetch, Hooks, WebToken
                </p>
              </li>
              <li class="my-home-stack-list-item">
                <p>HTML, CSS, JavaScrypt, JSX </p>
              </li>
              <li class="my-home-stack-list-item">
                Libraries
                <p>npm: materializecss, bootstrap, jsonwebtoken, express-validator, bcryptjs </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
