import { PiHamburgerFill } from "react-icons/pi";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import soup  from "../Assests/soup.jpg"
import meals  from "../Assests/meals.jpg"
import seafoood  from "../Assests/seafood.jpeg"
import nonveg  from "../Assests/nonveg.jpg"
import biriyani  from "../Assests/biriyani.jpeg"
import vegcurries  from "../Assests/vegcurries.jpeg"
import vegstarater  from "../Assests/vegstarater.jpg"
import salads  from "../Assests/salads.jpg"
import drinks  from "../Assests/drinks.webp"
import fish from "../Assests/fish.jpeg"
import tiffins from "../Assests/tiffins.jpg"
 export const foodItems = [
    {
      id: 1,
      name: "Soups",
      image: soup
    },
    {
      id: 2,
      name: "Meals",
      image: meals
    },
    {
      id: 3,
      name: "Sea Food",
         image: seafoood
    },
    {
      id: 4,

      name: "Biriyani",
      image: biriyani
     
    },
    {
      id: 5,
      name: "NonVeg Curries",
      image: nonveg 
    
    },
    {
      id: 6,
      name: "Veg Curries",
   image:vegcurries
    },
    {
      id: 7,
      name: "Veg Starater",
         image:vegstarater
    },
    {
      id: 8,
      name: "Fish Items",
         image:fish
    },
  
  
    {
      id: 9,
      name: "Salads",
        image:salads
    },
    {
      id: 10,
      name: "Soft Drinks",
       image:drinks
    },
    {
      id: 11,
      name: "Tiffins",
      image: tiffins
    },
  
   
  
  ];
  export const ourServiceList=[
    {
      icon: <PiHamburgerFill />,
      title: "Starters",
      content: "Kick off your meal with our delicious starters, crafted to tantalize your taste buds."
    },
    {
      icon: <FaBowlFood />,
      title: "Food",
      content: "Indulge in our diverse menu of exquisite dishes, made with the finest ingredients."
    },
    {
      icon: <MdEmojiFoodBeverage />,
      title: "Beverages",
      content: "Refresh yourself with our extensive selection of beverages, from classic drinks to unique creations."
    }
  ]
  export const cheflist=[
    {img:"https://themewagon.github.io/burgerking/img/team-1.jpg",name:"chrish keter"},
    {img:"https://themewagon.github.io/burgerking/img/team-2.jpg",name:"mark stonis"},
    {img:"https://themewagon.github.io/burgerking/img/team-3.jpg",name:"david warner"},

  ]