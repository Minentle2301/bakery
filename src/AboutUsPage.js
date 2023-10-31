// AboutPage.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1 className="header">About Our Bakery</h1>
      <p className="about">
        Welcome to Mini Loves Baking, where our passion for baking began
        over three decades ago. Our journey started in a small kitchen, where
        our founders perfected recipes passed down through generations.
      </p>
      <p className="about">
        Today, Mini Loves Baking is a beloved local institution known for
        its commitment to quality and taste. Our mission is to bring smiles to
        our customers' faces with every bite.
      </p>
      <Carousel showThumbs={false} showStatus={false}>
        <div>
          <img
            src="https://joyfoodsunshine.com/wp-content/uploads/2019/03/best-banana-bread-recipe-1x1-2-500x375.jpg"
            alt="bananaloaf"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_1000/73528_marble-crunch-cake.jpeg"
            alt="cake"
            className="carousel-image"
          />
        </div>
       
        <div>
          <img
            src="https://preppykitchen.com/wp-content/uploads/2021/10/chocolate-Chip-Cake-Recipe.jpg"
            alt="chocolate-chip"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSWyBIzTUbAFREt1dwpFpAWathsTTqiE-evw&usqp=CAU"
            alt="biscuits"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="https://www.chewoutloud.com/wp-content/uploads/2013/08/cookies-and-cream-in-white-bowl.jpg"
            alt="cookies-cream"
            className="carousel-image"
          />
        </div>
          <div>
          <img
            src="https://www.southernliving.com/thmb/UtEkfp8kgcz_KjX1FEDA0wYzgCk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2645701_Blueberry_Lemon_Layer_Cake_with_Blueberry_Lemon_Frosting_054_preview-3a71e7d36e2c4a359fb379e3f8076836.jpg"
            alt="blueberry cake"
            className="carousel-image"
          />
        </div>
        {/* Add more images as needed */}
      </Carousel>
    </div>
  );
};

export default AboutPage;


