import React from "react";
import "../App.css";

const Banner = () => {
  return (
    <section className="section__container banner__container" id="special">
      <div className="banner__card">
        <p>Heart Melting</p>
        <h4>KARUPATTI COFFEE</h4>
      </div>
      <div className="banner__card">
        <h4>
          Sweet Bliss
          <br />
          in Every Spoon
        </h4>
      </div>
      <div className="banner__card">
        <h4>
          A Nostalgic Hug
          <br />
          On Your Plate
        </h4>
      </div>
    </section>
  );
};

export default Banner;
