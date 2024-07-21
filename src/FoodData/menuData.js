import soup from "../Assests/soup.jpg";
import meals from "../Assests/meals.jpg";
import seafoood from "../Assests/seafood.jpeg";
import nonveg from "../Assests/nonveg.jpg";
import biriyani from "../Assests/biriyani.jpeg";
import vegcurries from "../Assests/vegcurries.jpeg";
import vegstarater from "../Assests/vegstarater.jpg";
import salads from "../Assests/salads.jpg";
import drinks from "../Assests/drinks.webp";
import breads from "../Assests/bread.jpeg"
import combo from "../Assests/combo (2).jpeg"
import banner from  "../Assests/banner.jpeg"
import nonvegsoups from "../Assests/nonvegsoups.jpeg"
import nonvegmeals from "../Assests/nonvegmeals.jpeg"
import nonvegcurries from "../Assests/nonvegcurries.jpeg"
export const vegMenuItems = [
    {
      title: 'Soups',
      image: soup,
      items: [
        { name: 'Veg Corn Soup', price: '₹100' },
        { name: 'Lemon Coriander Soup', price: '₹120' }
      ]
    },
    {
      title: 'Veg Starters',
      image: vegstarater,
      items: [
        { name: 'Veg Bullets', price: '₹160' },
        { name: 'Veg Cutlet', price: '₹160' },
        { name: 'Veg Manchurian', price: '₹130' },
        { name: 'Paneer Pakoda/Chilli/Pepper', price: '₹160' },
        { name: 'Mushroom Chilli/Pepper', price: '₹150' },
        { name: 'Baby Corn Pakoda/Pepper', price: '₹140' },
        { name: 'Baby Corn Crispy', price: '₹130' },
        { name: 'Gobi Chilli/Pepper/Manchurian', price: '₹100' }
      ]
    },
    {
      title: 'Veg Curries',
      image: vegcurries,
      items: [
        { name: 'Veg Chatpat', price: '₹160' },
        { name: 'Paneer Butter Masala', price: '₹180' },
        { name: 'Palak Paneer', price: '₹170' },
        { name: 'Mix Veg Curry', price: '₹130' },
        { name: 'Paneer Chatpat', price: '₹180' },
        { name: 'Kaju Paneer Masala', price: '₹200' },
        { name: 'Methi Chaman', price: '₹180' },
        { name: 'Mushroom Mutter Mukka Wala', price: '₹170' },
        { name: 'Mushroom Curry', price: '₹150' },
        { name: 'Matar Panner Curry', price: '₹180' }
      ]
    },
    {
      title: 'Meals',
      image: meals,
      items: [
        { name: 'Veg Meals', price: '₹100' },
        { name: 'Veg Meals Parcel', price: '₹130' },
    
        { name: 'Veg Fried Rice', price: '₹80' },
        { name: 'Jeera Rice', price: '₹80' },
        { name: 'Ghee Rice', price: '₹80' },
        { name: 'Curd Rice', price: '₹70' }
      ]
    },
    {
        title: 'Veg Biriyanis',
        image: biriyani,
        items: [
        
          { name: 'Veg Biryanis Aavakaya Biryani', price: '₹150' },
          { name: 'Ulavacharu Biryani', price: '₹180' },
          { name: 'Gongura Biryani', price: '₹150' },
          { name: 'Paneer Biryani', price: '₹160' },
          { name: 'Mushroom Biryani', price: '₹150' },
          { name: 'Veg Biryani', price: '₹130' },
         
        ]
      },
    {
      title: 'Breads',
      image: breads,
      items: [
        { name: 'Pulka/ghee', price: '₹12/15' },
        { name: 'Chapathi', price: '₹25' }
      ]
    },
    {
      title: 'Soft Drinks',
      image: drinks,
      items: [
        { name: 'Lemon Soda', price: '₹30' },
        { name: 'Pudeena Lemon', price: '₹30' },
        { name: 'Butter Milk', price: '₹30' },
        { name: 'Lassi', price: '₹50' }
      ]
    }
  ];
  
  export const nonVegMenuItems = [
    {
        title: 'Nonveg Soups',
        image: nonvegsoups,
        items: [
          { name: 'Chicken Hot & Sour', price: '₹120' },
          { name: 'Chicken Lemon Coriander Soup', price: '₹120' }
        ]
      },

    {
      title: 'Nonveg Starters',
      image: nonveg,
      items: [
        { name: 'Village Spl Chicken', price: '₹200' },
        { name: 'Andhra Chicken Fry', price: '₹180' },
        { name: 'Chicken Pakodi', price: '₹180' },
        { name: 'Rayalaseema Chicken', price: '₹180' },
        { name: 'Guntur Chicken', price: '₹180' },
        { name: 'Chilli Chicken', price: '₹180' },
        { name: 'Miriyala Kodivepudu', price: '₹180' },
        { name: 'Chicken Ghee Roast', price: '₹200' },
        { name: 'Chicken Lollipop', price: '₹200' },
        { name: 'Chicken Kabab', price: '₹160' },
        { name: 'Pudina Chicken', price: '₹160' },
        { name: 'Lemon Chicken', price: '₹180' },
        { name: 'Ginger Chicken', price: '₹180' },
        { name: 'Kaju Chicken', price: '₹200' },
        { name: 'Mutton Rajadhani', price: '₹250' },
        { name: 'Mutton Fry', price: '₹240' }
      ]
    },
    {
      title: 'Sea Food & Egg Items',
      image: seafoood,
      items: [
        { name: 'Chilli Fish', price: '₹220' },
        { name: 'Fish Fry (1 piece)', price: '₹70' },
        { name: 'Fish Fry (2 pieces)', price: '₹120' },
        { name: 'Pepper Fish', price: '₹220' },
        { name: 'Prawns Chilli', price: '₹259' },
        { name: 'Loose Prawns', price: '₹249' },
        { name: 'Egg Chilli', price: '₹130' },
        { name: 'Egg Omlette', price: '₹50' },
        { name: 'Boiled Egg', price: '₹10' },
        { name: 'Egg Burji', price: '₹70' }
      ]
    },
    {
      title: 'Combo Items',
      image: combo,
      items: [
        { name: 'Chicken Kabab + Chicken Biriyani', price: '₹250' },
        { name: 'Chicken Fry + Chicken Biriyani', price: '₹250' },
        { name: 'Fish Fry + Chicken Biriyani', price: '₹250' },
        { name: 'Chicken Kabab + Mutton Biriyani', price: '₹300' }
      ]
    },
    {
        title: 'Special Rice Items',
        image: biriyani,
        items: [
          { name: ' Chicken Fried Rice', price: '₹130' },
          { name: ' Egg Fried Rice', price: '₹100' },
        ]
      },
      {
        title: 'NonVeg Meals',
        image: nonvegmeals,
        items: [
          { name: 'Non-Veg Meals', price: '₹199' },
          { name: 'Ragi Mudda', price: '₹40' },
          { name: 'Mudda + Chicken Curry', price: '₹150' },
          { name: 'Mudda + Boti', price: '₹150' },
          { name: 'Mudda Mutton Curry', price: '₹200' }
        ]
      },
    {
      title: 'NonVeg Curries',
      image: nonvegcurries,
      items: [
        { name: 'Gongura Chicken', price: '₹180' },
        { name: 'Andhra Chicken Curry', price: '₹180' },
        { name: 'Chicken Chatpat', price: '₹200' },
        { name: 'Village Spl Chicken Curry', price: '₹200' },
        { name: 'Chicken Kadai', price: '₹200' },
        { name: 'Punjabi Chicken', price: '₹200' },
        { name: 'Butter Chicken', price: '₹200' },
        { name: 'Chicken Chettinad', price: '₹200' },
        { name: 'Mutton Curry', price: '₹249' },
        { name: 'Prawns Curry', price: '₹259' },
        { name: 'Nellore Chepala Pulusu', price: '₹200' },
        { name: 'Nati Kodi Curry', price: '₹259' }
      ]
    },
    {
      title: 'NonVeg Biriyanis',
      image: banner,
      items: [
        { name: 'Dum Chicken Biryani', price: '₹180' },
        { name: 'Gongura Chicken Biriyani', price: '₹200' },
        { name: 'Ulavacharu Chicken Biryani', price: '₹220' },
        { name: 'V-spl Biryani', price: '₹220' },
        { name: 'Fry Chicken Biryani', price: '₹220' },
        { name: 'Lollypop Biryani', price: '₹220' },
        { name: 'Nati Kodi Biryani', price: '₹230' },
        { name: 'Mughalai Biryani', price: '₹220' },
        { name: 'Mutton Biryani', price: '₹260' },
        { name: 'Gongura Mutton Biryani', price: '₹260' },
        { name: 'Prawns Biryani', price: '₹240' },
        { name: 'Fish Fry Biryani', price: '₹240' },
        { name: 'Biriyani Rice', price: '₹120' }
      ]
    },
    {
      title: 'Village Specials',
      image: salads,
      items: [
        { name: 'Kaja Chicken Fry', price: '₹230' },
        { name: 'VR Chicken', price: '₹240' },
        { name: 'Star Chicken', price: '₹240' },
        { name: 'Egg PM', price: '₹150' },
        { name: 'Marani Chicken Curry', price: '₹230' },
        { name: 'Noorani Chicken Curry', price: '₹230' }
      ]
    }
  ];
  
