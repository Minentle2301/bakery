// AboutPage.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1 className="header">About Our Bakery</h1>
      <p className="about">
        Welcome to Sweet Delights Bakery, where our passion for baking began
        over three decades ago. Our journey started in a small kitchen, where
        our founders perfected recipes passed down through generations.
      </p>
      <p className="about">
        Today, Sweet Delights Bakery is a beloved local institution known for
        its commitment to quality and taste. Our mission is to bring smiles to
        our customers' faces with every bite.
      </p>
      <Carousel showThumbs={false} showStatus={false}>
        <div>
          <img
            src="blueberryCheeseCake.jpg"
            alt="Cheesecake"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="cookies.jpg"
            alt="Cookies"
            className="carousel-image"
          />
        </div>
       
        <div>
          <img
            src="donutstack.jpg"
            alt="Donuts"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="scones.jpg.jpg"
            alt="scone"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="SwissRoll.jpg"
            alt="swiss"
            className="carousel-image"
          />
        </div>
          <div>
          <img
            src="croissant.jpg"
            alt="croissant"
            className="carousel-image"
          />
        </div>
        {/* Add more images as needed */}
      </Carousel>
    </div>
  );
};

export default AboutPage;


