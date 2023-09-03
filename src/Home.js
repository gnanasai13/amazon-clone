import React from "react";
import "./Home.css";
import homeimg from "./images/HomePage.jpg";
import iPhone from "./images/products/iPhone.jpg";
import guitar from "./images/products/Guitar.jpg";
import headphone from "./images/products/HeadPhones.jpg";
import tv from "./images/products/SonyTV.jpg";
import camera from "./images/products/SonyCamera.jpg";
import bed from "./images/products/Bed.jpg";

import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__img" alt="home img" src={homeimg} />

        <div className="home__row">
          <Product
            id="90829332"
            title="Razer BlackShark V2 Pro - Over-Ear Wireless Gaming Headset with Mic - Rainbow Six Edition - 50mm Drivers- RZ04-03220200-R3M1"
            price={192.0}
            rating={3}
            image={headphone}
          />
          <Product
            id="3254354345"
            title="Sony Digital Vlog Camera ZV 1 (Compact, Video Eye AF, Flip Screen, in-Built Microphone, Bluetooth Shooting Grip, 4K Vlogging Camera and Content Creation) - Black"
            price={399.99}
            rating={3}
            image={camera}
          />

          
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="Apple iPhone 14 Pro (128GB) - Space Black"
            price={879.99}
            rating={5}
            image={iPhone}
          />
          <Product
            id="23445930"
            title="Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74K (Black)"
            price={999.99}
            rating={4}
            image={tv}
          />
          <Product
            id="49538094"
            title="Yamaha F280 Acoustic Rosewood Guitar (Natural, Beige)"
            price={89.0}
            rating={4}
            image={guitar}
          />

          
        </div>

        <div className="home__row">
          <Product
            id="4903858"
            title="STRATA FURNITURE Sheesham Wood King Size Bed with Box and Headboard Storage for Bedroom Home (Walnut Finish)"
            price={499.99}
            rating={4}
            image={bed}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
