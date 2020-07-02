import img1 from '../../src/assets/branding.jpg'
import img2 from '../../src/assets/spending.jpeg'
import img3 from '../../src/assets/auto.jpg'
import img4 from '../../src/assets/fans.png'
import img5 from '../../src/assets/rogers.jpg'
import img6 from '../../src/assets/telus.jpg'

const data = [
  {
    name: "Branding",
    description: "Consumer spending behaviour for various brands including Facebook, Nike, McDonald's and etc.",
    type: "Layer",
    price: "$250",
    category: "Loyalty",
    image: img1,
  },
  {
    name: "Mortgage Demographics",
    description: "Number of Mortgages held by owners across all buildings by PC",
    type: "Segment",
    price: "$500",
    category: "Finance",
    image: img2,
  },
  {
    name: "Auto Intenders",
    description: "Understand in-market auto buyers and car aficionados",
    type: "Segment",
    price: "$500",
    category: "Automotive",
    image: img3,
  
  },
  {
    name: "Sport Fanatics",
    description: "Avid sports fan that are attending professional hockey, basketball, soccer and baseball games",
    type: "Layer",
    price: "$250",
    category: "Persona",
    image: img4,
  
  },
  {
    name: "Rogers",
    description: "Rogers Communication's consumer mobile and web usage behaviour",
    type: "Layer",
    price: "$250",
    category: "Telecom",
    image: img5,
  },
  {
    name: "Telus",
    description: "Telus Communication's consumer mobile and web usage behaviour",
    type: "Layer",
    price: "$250",
    category: "Telecom",
    image: img6,
  },
];

export default data