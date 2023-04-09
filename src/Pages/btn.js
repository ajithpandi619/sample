import { useState } from "react";

function Btn() {
  const [selectedButton, setSelectedButton] = useState("ALL");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const rBoxes = () => {
    if (selectedButton === "Project1") {
      return (
        <div className="Eight_boxes">
          <div className="box_Head">
            <div className="box"><img src="images/secondImg.jpg"/></div>
            <div className="box_topic">LOGIN PAGE</div>
          </div>
          <div className="box_Head">
            <div className="box"><img src="images/todo.jpg"/></div>
            <div className="box_topic">TODO LIST</div>
          </div>
          <div className="box_Head">
            <div className="box"><img src="images/elearn.png"/></div>
            <div className="box_topic">E-LEARNINGS</div>
          </div>
          <div className="box_Head">
            <div className="box"><img src="images/crm.jpg"/></div>
            <div className="box_topic">CRM</div>
          </div>
        </div>
      );
    } else if (selectedButton === "Project2") {
      return (
        <div className="Eight_boxes">
      <div className="box_Head">
            <div className="box"><img src="images/food order.jpg"/></div>
            <div className="box_topic">FOOD ORDER</div>
          </div>
          <div className="box_Head">
            <div className="box"><img src="images/bus book.jpg"/></div>
            <div className="box_topic">BUS BOOKING</div>
          </div>
          <div className="box_Head">
            <div className="box"><img src="images/management.jpg"/></div>
            <div className="box_topic">MANAGEMENT</div>
          </div>
          <div className="box_Head">
            <div className="box"><img src="images/hospitality.jpg"/></div>
            <div className="box_topic">HOSPITALITY</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Eight_boxes">
          <div className="box_Head">
            <div className="box"><img src="images/secondImg.jpg"/></div>
            <div className="box_topic">LOGIN PAGE</div>
          </div>
          <div className="box_Head">
            <div className="box"><img src="images/todo.jpg"/></div>
            <div className="box_topic">TODO LIST</div>
          </div>
          <div className="box_Head">
            <div className="box"><img src="images/elearn.png"/></div>
            <div className="box_topic">E-LEARNINGS</div>
          </div>
          <div className="box_Head">
            <div className="box"><img src="images/crm.jpg"/></div>
            <div className="box_topic">CRM</div>
          </div>
          <div className="box_Head">
            <div className="box"><img src="images/food order.jpg"/></div>
            <div className="box_topic">FOOD ORDER</div>
          </div>
          <div className="box_Head">
            <div className="box"><img src="images/bus book.jpg"/></div>
            <div className="box_topic">BUS BOOKING</div>
          </div>
          <div className="box_Head">
            <div className="box"><img src="images/management.jpg"/></div>
            <div className="box_topic">MANAGEMENT</div>
          </div>
          <div className="box_Head">
            <div className="box"><img src="images/hospitality.jpg"/></div>
            <div className="box_topic">HOSPITALITY</div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="three_buttons">
        <div>
          <button className="btns" onClick={() => handleButtonClick("ALL")}>
            ALL
          </button>
        </div>
        <div>
          <button
            className="btns"
            onClick={() => handleButtonClick("Project1")}
          >
            Project1
          </button>
        </div>
        <div>
          <button
            className="btns"
            onClick={() => handleButtonClick("Project2")}
          >
            Project2
          </button>
        </div>
      </div>

      {rBoxes()}

      <div className="subscribe_txt">
        <h3>subscribe to the channel</h3>
        <button>click</button>
      </div>

      <div className="person_profiles">
        <ul className="profiles">
          <li>
            <img src="images/profileImg.png" alt="" />
            <h4>Ajith</h4>
            <h5>FRESHER</h5>
          </li>
          <li>
            <img src="images/profileImg.png" alt="" />
            <h4>Sridhar</h4>
            <h5>FRESHER</h5>
          </li>
          <li>
            <img src="images/profileImg.png" alt="" />
            <h4>Sakthi</h4>
            <h5>CEO</h5>
          </li>
        </ul>
      </div>

      <div className="bottom_container">
        <div className="grey_box">
          <p id="fLine">For Every type business</p>
          <p id="sLine">
            Entrust Your Project to Our Best <p>Team of Professionals</p>
          </p>

          <span>
            <button className="contact_btn"> CONTACT US</button>
          </span>
        </div>

        <div className="copyright_content">
          <div className="btm_contents">
            <h2>Company</h2>
            <ul className="btm_links">
              <a>
                <li>Terms & Conditions</li>
              </a>
              <a>
                <li>Privacy Policy</li>
              </a>
              <a>
                <li>Support</li>
              </a>
              <a>
                <li>FAQ</li>
              </a>
            </ul>
          </div>
          <div className="btm_contents">
            <h2>Quick Links</h2>
            <ul className="btm_links">
              <a>
                <li>About</li>
              </a>
              <a>
                <li>Services</li>
              </a>
              <a>
                <li>Team</li>
              </a>
              <a>
                <li>Contact</li>
              </a>
            </ul>
          </div>
          <div className="btm_contents">
            <h2>Subscribe Us</h2>
            <div className="btm_links">
              <p  className="subscribe">Subscribe to get latest news article and resources</p>
            </div>
            <div>
              <input type="text" placeholder="Subscribe now..."></input>
             <div className="subscribe_btn"><button>subscribe</button></div> 
            </div>
          </div>

          <div className="btm_contents">
            <h2>CDIX</h2>
            <p className="btm_links cdix">xyz@gmail.com</p>
            <p className="btm_links cdix">1234567890</p>
          </div>
        </div>

        <div className="copys">
        <div><span style={{color:"grey"}}>© Copyright Reserved to </span><span style={{color:"red"}}>CDIX Innovations Pvt.Ltd.</span></div>
        <div className="icons">
        <i className="icon" class="fa-brands fa-facebook"></i>
        <i className="icon" class="fa-brands fa-linkedin"></i>
        <i className="icon" class="fa-brands fa-square-whatsapp"></i>
        </div>

        </div>
      </div>
    </div>
  );
}

export default Btn;
