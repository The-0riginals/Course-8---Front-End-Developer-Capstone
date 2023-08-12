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
];
console.log(menu);
export default menu;