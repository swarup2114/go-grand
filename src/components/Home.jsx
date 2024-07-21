import React from "react";
import { foodItems, ourServiceList } from "../FoodData/foodList";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import "../stylesComponents/home.css";
import { useNavigate } from "react-router-dom";
import eat from "../Assests/eat1.avif"
import friends from "../Assests/friends.jpeg"


const Home = () => {
  const usenav = useNavigate();

  const handleScroll = (direction) => {
    const gallery = document.getElementById("chainGallery");
    const scrollAmount = 500;

    if (direction === "left") {
      gallery.scrollTo({
        left: gallery.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    } else if (direction === "right") {
      gallery.scrollTo({
        left: gallery.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="home">
        <div>
          <h2>Welcome to Village Restaurant</h2>
          <p>
            Enjoy the best food in town! We offer a variety of delicious dishes
            made with fresh ingredients.
          </p>
          <button className="reserve-button" onClick={() => usenav("/contact")}>Reserve a Table</button>
          <button className="reserve-button" onClick={() => usenav("/menu")}>
            Our Menu
          </button>
        </div>
      </div>

      <div className="card-cont">
        {ourServiceList.map((item, id) => {
          return (
            <div key={id} className="card-item" onClick={()=>usenav("/menu")}>
              <p className="card-icon">{item.icon}</p>
              <p>{item.title}</p>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
      <div className="food-search">
        <h3>Search by Food</h3>
        <div className="btnSection">
          <button onClick={() => handleScroll("left")} className="btnIcons">
            <FaArrowLeft />
          </button>
          <button onClick={() => handleScroll("right")} className="btnIcons">
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="food-menu" id="chainGallery">
        {foodItems.map((food) => (
          <div key={food.id} className="food-item">
            <img src={food.image} alt={food.name} />
            <h3>{food.name}</h3>
          </div>
        ))}
      </div>
     
        <div className="eat-section">
          <div className="eat-text">
            <h2>Eat</h2>
            <h6>Breakfast, Lunch, and Artisanal Pastries</h6>
            <p>
              Experience the finest culinary delights at Village Restaurant. Our
              menu features a wide variety of breakfast, lunch, and artisanal
              pastries made from the freshest ingredients. Whether you're
              starting your day with a hearty breakfast, enjoying a leisurely
              lunch, or indulging in our exquisite pastries, we have something
              for everyone.
            </p>
          </div>
          <div className="eat-image">
            <img src={eat} alt="Eat" />
          </div>
      
      </div>
      <div className="eat-section">
      <div className="eat-image">
            <img src={friends} alt="Eat" />
          </div>
         
  <div className="eat-text">
    <h2>Enjoy.</h2>
    <h6>Make Yourself at Home</h6>
    <p>
      At Village Restaurant, we believe in making you feel right at home. Our culinary team crafts a variety of dishes that are not only delicious but also made with love and the freshest ingredients. Start your day with a delightful breakfast, savor our lunch specials, or treat yourself to our artisanal pastries. No matter the time of day, we promise a warm and welcoming dining experience that feels just like home.
    </p>
  </div>
 
</div>

         
      
  
    </div>
  );
};

export default Home;
