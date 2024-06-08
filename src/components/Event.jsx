import React from "react";
import "../App.css";
import event from "../assets/event.png";

const Event = () => {
  return (
    <section className="section__container event__container" id="event">
      <div className="event__content">
        <div className="event__image">
          <img src={event} alt="event" />
        </div>
        <div className="event__details">
          <h3>Discover</h3>
          <h2 className="section__header">KARUPATTI COFFEE</h2>
          <p className="section__description">
            Karupatti coffee is a delightful South Indian specialty that
            combines the rich, earthy flavor of karupatti (palm jaggery) with
            the comforting warmth of coffee. This unique beverage offers a
            perfect balance of sweetness and bold coffee notes, creating a drink
            that is both invigorating and heartwarming. With each sip, you'll
            experience a fusion of traditional flavors that truly melt the
            heart.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Event;
