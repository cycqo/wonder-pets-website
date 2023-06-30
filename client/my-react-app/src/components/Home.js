import React from "react";
import "../styles/Home.css";
import content_img1 from "../img/content-img1.png";
import content_img2 from "../img/content-img2.png";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import twitter from "../img/twitter.png";

function Home() {
  const openMap = () => {
    window.open("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.7924808209254!2d121.03525031744384!3d14.381415300000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d0e3c7545beb%3A0x83604c4eb82fe5f9!2sBrazilia%20Heights!5e0!3m2!1sen!2sph!4v1687883180452!5m2!1sen!2sph");
  };

  return (
    <div>
      <div className="showcase">
        <h1>Wonder Pets</h1>
        <h3>a veterinary clinic</h3>
        <p> Compassion is our passion and comfort is our mission.</p>
        <button className="cta" onClick={openMap}>
          Visit Us!
        </button>
      </div>
      <div className="content-container">
        <h1 className="greeting">Welcome!</h1>
        <div className="content">
          <div className="content_item">
            <img src={content_img1} alt="Content 1" />
            <div className="info">
              <p>
                Our clinic is reliable and trustworthy. You can be sure your
                pets are safe with us.
              </p>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="content_item">
            <img src={content_img2} alt="Content 2" />
            <div className="info">
              <p>
                We also offer grooming for your pets that you're sure to love at
                affordable prices.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-logos">
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={twitter} alt="Twitter" />
        </div>
      </div>
    </div>
  );
}

export default Home;