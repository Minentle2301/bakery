import React from 'react';

function AboutUsPage() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
      <img
          src="products.jpg"
          alt="Products"
          className="about-us-image"
        />
        
        <h1 className='header'>THE HOME OF HEAVENLY DELIGHTS</h1>
        <p className='homepage'>
          Welcome to Sweet Delights Bakery, where passion for baking meets
          exceptional taste. We are a family-owned bakery with a rich history
          of creating delectable treats that have delighted our customers for
          generations.
        </p>
        <img
          src="outside-bakery.jpg"
          alt="Outside Bakery"
          className="about-us-image"
        />
        <p className='homepage'>
          Our journey began in a small kitchen, where our founder perfected
          recipes passed down through the years. Today, we continue to uphold
          those traditions, using only the finest ingredients to craft
          mouthwatering brownies, cookies, cakes, bread, eclairs, cinnamon rolls,
          and more.
        </p>
        <img
          src="kneading.jpg"
          alt="kneading"
          className="about-us-image"
        />
        <p className='homepage'>
          At Sweet Delights Bakery, we believe that every bite should be a
          moment of pure joy. That's why we pour our hearts and souls into
          every creation, ensuring that each treat is a masterpiece of flavor
          and freshness.
        </p>
        <img
          src="donutstack.jpg"
          alt="donuts"
          className="about-us-image"
        />
        <p className='homepage'>
          Come visit our bakery and experience the magic for yourself. Whether
          you're celebrating a special occasion or simply craving a sweet
          indulgence, our bakery is the perfect place to satisfy your
          cravings.
        </p>
        <img
          src="letters.jpg"
          alt="bakery-letters"
          className="about-us-image"
        />
      </div>
    </div>
  );
}

export default AboutUsPage;

