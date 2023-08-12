import appe1 from "../assets/MenuImages/a_crabartichoke.png";
import appe2 from "../assets/MenuImages/a_spinachballs.png";
import appe3 from "../assets/MenuImages/a_vegannachos.png";
import main1 from "../assets/MenuImages/m_couscous.png";
import main2 from "../assets/MenuImages/m_mezze.png";
import main3 from "../assets/MenuImages/m_paella.png";
import main4 from "../assets/MenuImages/m_ratatouille.png";
import main5 from "../assets/MenuImages/m_risotto.png";
import main6 from "../assets/MenuImages/m_shakshuka.png";
import des1 from "../assets/MenuImages/d_crema_catalana.png";
import des2 from "../assets/MenuImages/d_galaktoboureko.png";
import des3 from "../assets/MenuImages/d_namoura.png";

const menu = [
  {
    type: "appetizer",
    name: "Crab Artichoke",
    image: appe1,
    price: "$9.99",
  },
  {
    type: "appetizer",
    name: "Spinach Balls",
    image: appe2,
    price: "$5.99",
  },
  {
    type: "appetizer",
    name: "Vegan Nachos",
    image: appe3,
    price: "$7.99",
  },
  {
    type: "main",
    name: "Couscous",
    image: main1,
    price: "$10.99",
  },
  {
    type: "main",
    name: "Mezze",
    image: main2,
    price: "$10.99",
  },
  {
    type: "main",
    name: "Paella",
    image: main3,
    price: "$14.99",
  },
  {
    type: "main",
    name: "Ratatouille",
    image: main4,
    price: "$11.99",
  },
  {
    type: "main",
    name: "Risotto",
    image: main5,
    price: "$12.99",
  },
  {
    type: "main",
    name: "Shakshuka",
    image: main6,
    price: "$12.99",
  },
  {
    type: "dessert",
    name: "Crema Catalana",
    image: des1,
    price: "$4.99",
  },
  {
    type: "dessert",
    name: "Galaktoboureko",
    image: des2,
    price: "$5.99",
  },
  {
    type: "dessert",
    name: "Namoura",
    image: des3,
    price: "$4.99",
  },
  {
    type: "special",
    id: 1,
    title: "Greek salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    image:
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-main.jpg",
    price: "$12.99",
  },
  {
    type: "special",
    id: 2,
    title: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/bruschetta-index-645d03e6f174d.jpg?crop=0.8890414878397711xw:1xh;center,top&resize=1200:*",
    price: "$ 5.99",
  },
  {
    type: "special",
    id: 3,
    title: "Lemon Dessert",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image:
      "https://www.southernliving.com/thmb/z706skTv8rLcnFwyTEnMzr_H5zQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living_27364_SR_Lemon-Lush_13190-fd96c709fc2946a7aeb5c869f9ad470e.jpg",
    price: "$ 5.00",
  },
];

export default menu;