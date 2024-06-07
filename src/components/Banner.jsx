import React from "react";
import "../App.css";

const Banner = () => {
  return (
    <section className="section__container banner__container" id="special">
      <div className="banner__card">
        <p>TRY IT OUT TODAY</p>
        <h4>MOST POPULAR BURGER</h4>
      </div>
      <div className="banner__card">
        <p>TRY IT OUT TODAY</p>
        <h4>
          MORE FUN
          <br />
          MORE TASTE
        </h4>
      </div>
      <div className="banner__card">
        <p>TRY IT OUT TODAY</p>
        <h4>FRESH & CHILI</h4>
      </div>
    </section>
  );
};

export default Banner;
