import React from "react";
import "../App.css";
import order1 from "../assets/order-1.png";
import order2 from "../assets/order-2.png";
import order3 from "../assets/order-3.png";

const Order = () => {
  return (
    <section className="section__container order__container" id="menu">
      <h3>ALWAYS TASTEY SNACKS</h3>
      <h2 className="section__header">CHOOSE & ENJOY</h2>
      <p className="section__description">
        Whether you crave classic flavors or daring combinations, this is where
        your culinary journey begins. Indulge your cravings and savor every bite
        as you create your personalized experience with Kurinji.
      </p>
      <div className="order__grid">
        <div className="order__card">
          <img src={order2} alt="order" />
          <h4>Ulundu Vada</h4>
          {/* <p>
            Sink your teeth into the timeless perfection of our Chicken Burger,
            an experience that never goes out of style.
          </p> */}
          {/* <button className="btn">ORDER NOW</button> */}
        </div>
        <div className="order__card">
          <img src={order1} alt="order" />
          <h4>Samosa</h4>
          {/* <p>
            Embrace the vibrant flavors of our Veggie Delight Burger, a
            celebration of freshness and wholesome goodness.
          </p> */}
          {/* <button className="btn">ORDER NOW</button> */}
        </div>
        <div className="order__card">
          <img src={order3} alt="order" />
          <h4>Paruppu Vada</h4>
          {/* <p>
            Indulge in a symphony of smoky, savory flavors with our BBQ Bacon
            Burger, grilled and topped with crispy bacon.
          </p> */}
          {/* <button className="btn">ORDER NOW</button> */}
        </div>
      </div>
    </section>
  );
};

export default Order;
