import React from "react";
import "./page.css";
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";
import { useState } from "react";
function Page() {
  const images = [
    { url: "images/firstImg.jpg" },
    { url: "images/secondImg.jpg" },
    { url: "images/crm.jpg" },
    { url: "images/elearn.png" },
  ];

  const [isActive, setIsActive] = useState(false);
  const handleButtonClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div id="container">
      <div className="logo-part">
        <div>
          <img className="logo_img" src="images/logo.png" />
        </div>
        <a href="#" class="btn" onClick={handleButtonClick}>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>

        <div className={`nav-links ${isActive ? "active" : ""}`}>
          <ul>
            <a href="#">
              <li>Company</li>
            </a>
            <a href="#">
              <li>Career</li>
            </a>
            <a href="#">
              <li>Services</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
      </div>

      <Slider
        imageList={images}
        width={896}
        height={504}
        showBullets={true}
        showNavs={true}
      />

      <div className="second_box">
        <div className="frondend_Box">
          <h1>FrontEnd Developer</h1>
          <p>
            A front-end developer builds the front-end portion of websites and
            web applications—the part users see and interact with.
          </p>
          <p>
            A front-end developer creates websites and applications using web
            languages such as HTML, CSS,
          </p>
          <p>
            and JavaScript that allow users to access and interact with the site
            or app.
          </p>
          <p>
            The tools and technologies that are used to develop the front-end of
            a website change constantly.
          </p>
          <p>
            The plethora of these front-end tools and frameworks often confuses
            beginners who
          </p>
          <p>
            are trying to step into the front end because they are unsure of
            what they need to learn.
          </p>
          <p>
            If you want to become a Front-End Developer and don’t know where to
            start, this is the right place for you. In this article,
          </p>
          <p>
            we will look at what tools, technologies, frameworks, and
            programming languages
          </p>
          <p>
            you need to learn. We will cover the Front End Developer roadmap
          </p>
          <div className="nested_box">
            <img src="images/Digital-Technology-.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
