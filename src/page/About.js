import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aboutcard from '../component/Aboutcard'; // Assuming you have an Aboutcard component

const data = [
  {
    heading: "Why Tasty Treats?",
    description: "Tasty Treats - Your one-stop destination for delicious dairy treats, morning breakfasts, evening snacks, and refreshing beverages. Enjoy Tasty Treats's finest products and a diverse menu throughout the day. Join us for the taste of rich heritage, right at your doorstep."
  },
  {
    heading: "Quality support",
    description: "We source the freshest local ingredients, prepare every dish with care, and offer a menu that's as diverse as it is delicious. But that's just the beginning. We're also here to support your academic journey with flexible hours, study-friendly spaces, and a welcoming community where you can refuel, recharge, and connect. So come savor the difference – the Campus Parlour is your one-stop shop for a quality campus experience, inside and out."
  },
  {
    heading: "Order from any location",
    description: "Cravings got you down? Fear not, fellow foodies! Tasty Treats is now your partner in flavor, no matter where your campus adventures take you. From juicy burgers to vibrant salads, we've got your fix, delivered fresh via awesome apps. Just open the app, browse our drool-worthy menu, customize your order, and track that culinary masterpiece to your doorstep. Payment's a breeze, and with new delivery partners joining the party, campus hunger never wins! So ditch the bland and unleash the flavor – TastyTreats is just a tap away!"
  },{
    heading: "Why Tasty Treats?",
    description: "Tasty Treats - Your one-stop destination for delicious dairy treats, morning breakfasts, evening snacks, and refreshing beverages. Enjoy Tasty Treats's finest products and a diverse menu throughout the day. Join us for the taste of rich heritage, right at your doorstep."
  },
  {
    heading: "Quality support",
    description: "We source the freshest local ingredients, prepare every dish with care, and offer a menu that's as diverse as it is delicious. But that's just the beginning. We're also here to support your academic journey with flexible hours, study-friendly spaces, and a welcoming community where you can refuel, recharge, and connect. So come savor the difference – the Campus Parlour is your one-stop shop for a quality campus experience, inside and out."
  },
  {
    heading: "Order from any location",
    description: "Cravings got you down? Fear not, fellow foodies! Tasty Treats is now your partner in flavor, no matter where your campus adventures take you. From juicy burgers to vibrant salads, we've got your fix, delivered fresh via awesome apps. Just open the app, browse our drool-worthy menu, customize your order, and track that culinary masterpiece to your doorstep. Payment's a breeze, and with new delivery partners joining the party, campus hunger never wins! So ditch the bland and unleash the flavor – TastyTreats is just a tap away!"
  }
];

function About() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className='flex flex-col md:flex-row items-center mx-4 '>
      <div className="w-full md:w-1/2 p-8">
        <img 
          src="https://tasty-treat-ayushi2003.vercel.app/static/media/location.c2a808618ecbf53c92bc.png" 
          alt="why-tasty-treat" 
          className="img-fluid w-100" 
        />
      </div>
      <div className='text-white p-4 md:p-16 w-full md:w-1/2 '>
        <Slider {...settings}>
          {data.map((val, index) => (
            <div key={index}>
              <Aboutcard heading={val.heading} description={val.description} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default About;
