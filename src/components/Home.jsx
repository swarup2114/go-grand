import React from "react";
import { foodItems,ourServiceList,cheflist } from "../FoodData/foodList";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import "../stylesComponents/home.css";



const Home = () => {
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
          <h2>Welcome to Go Grand</h2>
          <p>
            Enjoy the best food in town! We offer a variety of delicious dishes
            made with fresh ingredients.
          </p>
          <button className="reserve-button">Reserve a Table</button>
          <button className="reserve-button">Our Menu</button>
        </div>
      
      </div>
     
      <div className="card-cont">
      {ourServiceList.map((item, id) => {    
        return (
          <div key={id} className="card-item">
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
      <div className="card-cont">
      {cheflist.map((item, id) => {    
        return (
          <div key={id} className="card-item">
          
            <img src={item.img} alt="chef"/>
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
    
   
    </div>
  );
};

export default Home;
