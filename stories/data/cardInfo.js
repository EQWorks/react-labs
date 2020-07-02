import img1 from "../../src/assets/branding.jpg";
import img2 from "../../src/assets/spending.jpeg";
import img3 from "../../src/assets/auto.jpg";
import img4 from "../../src/assets/fans.png";
import img5 from "../../src/assets/rogers.jpg";
import img6 from "../../src/assets/telus.jpg";
import img7 from "../../src/assets/census.jpeg";
import img8 from "../../src/assets/custom.jpg";
import img9 from "../../src/assets/finance.jpg";
import img10 from "../../src/assets/household.jpg";
import img11 from "../../src/assets/persona.jpg";
import img12 from "../../src/assets/retail.jpg";
import img13 from "../../src/assets/telco.jpg";


const data = [
  {
    title: "you are currently subscribing",
    main: "6 products",
    sub: "3 segments - 2 layers - 1 bundle",
  },
  {
    title: "you are paying",
    main: "$5,000",
    sub: "per month",
  },
  {
    title: "The next billing date is",
    main: "Aug 1st, 2020",
    sub: "13 days left",
  },
];
const data2 = [
    {
        category:'Retail',
        image: img12,
    },
    {
        category:'Automotive',
        image: img3,
    },
    {
        category:'Brand loyalty',
        image: img1,
    },
    {
        category:'Consumer spending',
        image: img2,
    },
    {
        category:'Household',
        image: img10,
    },
    {
        category:'Finance',
        image: img9,
    },
    {
        category:'Telecom',
        image: img13,
    },
    {
        category:'EQ personas',
        image: img11,
    },
    {
        category:'Census',
        image: img7,
    },
    {
        category:'Custom',
        image: img8,
    },
]
const data3 = [
  {
    name: "Branding",
    description:
      "Consumer spending behaviour for various brands including Facebook, Nike, McDonald's and etc.",
    type: "Layer",
    price: "$250",
    category: "Loyalty",
    image: img1,
  },
  {
    name: "Mortgage Demographics",
    description:
      "Number of Mortgages held by owners across all buildings by PC",
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
    description:
      "Avid sports fan that are attending professional hockey, basketball, soccer and baseball games",
    type: "Layer",
    price: "$250",
    category: "Persona",
    image: img4,
  },
  {
    name: "Rogers",
    description:
      "Rogers Communication's consumer mobile and web usage behaviour",
    type: "Layer",
    price: "$250",
    category: "Telecom",
    image: img5,
  },
  {
    name: "Telus",
    description:
      "Telus Communication's consumer mobile and web usage behaviour",
    type: "Layer",
    price: "$250",
    category: "Telecom",
    image: img6,
  },
];

export { data, data2, data3 };
