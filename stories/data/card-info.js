import img1 from '../assets/branding.jpg'
import img2 from '../assets/spending.jpeg'
import img3 from '../assets/auto.jpg'
import img4 from '../assets/fans.png'
import img5 from '../assets/rogers.jpg'
import img6 from '../assets/telus.jpg'
import img7 from '../assets/census.jpeg'
import img8 from '../assets/custom.jpg'
import img9 from '../assets/finance.jpg'
import img10 from '../assets/household.jpg'
import img11 from '../assets/persona.jpg'
import img12 from '../assets/retail.jpg'
import img13 from '../assets/telco.jpg'
import img14 from '../assets/costco.jpeg'
import img15 from '../assets/loblaws.jpeg'
import img16 from '../assets/Footwear.jpg'
import img17 from '../assets/tim_hortons.jpg'
import img18 from '../assets/housing.jpg'
import img19 from '../assets/jewelry.jpeg'


const subsData = [
  {
    title: 'you are currently subscribing',
    main: '6 products',
    sub: '3 segments - 2 layers - 1 bundle'
  },
  {
    title: 'you are paying',
    main: '$5,000',
    sub: 'per month'
  },
  {
    title: 'The next billing date is',
    main: 'Aug 1st, 2020',
    sub: '13 days left'
  }
]
const categoriesData = [
  {
    category:'Retail',
    image: img12,
    inventory: 56
  },
  {
    category:'Automotive',
    image: img3,
    inventory: 37
  },
  {
    category:'Brand loyalty',
    image: img1,
    inventory: 11
  },
  {
    category:'Consumer spending',
    image: img2,
    inventory: 64
  },
  {
    category:'Household',
    image: img10,
    inventory: 23
  },
  {
    category:'Finance',
    image: img9,
    inventory: 12
  },
  {
    category:'Telecom',
    image: img13,
    inventory: 77
  },
  {
    category:'EQ personas',
    image: img11,
    inventory: 24
  },
  {
    category:'Census',
    image: img7,
    inventory: 56
  },
  {
    category:'Custom',
    image: img8,
    inventory: 96
  }
]
const bundlesData = [
  {
    name: 'Branding',
    description:
      'Consumer spending behaviour for various brands including Facebook, Nike, McDonald\'s and etc.',
    type: 'Bundle',
    price: '$250',
    category: 'Loyalty',
    image: img1
  },
  {
    name: 'Mortgage Demographics',
    description:
      'Number of Mortgages held by owners across all buildings by PC',
    type: 'Bundle',
    price: '$500',
    category: 'Finance',
    image: img2
  },
  {
    name: 'Auto Intenders',
    description: 'Understand in-market auto buyers and car aficionados',
    type: 'Bundle',
    price: '$500',
    category: 'Automotive',
    image: img3
  },
  {
    name: 'Sport Fanatics',
    description:
      'Avid sports fan that are attending professional hockey, basketball, soccer and baseball games',
    type: 'Bundle',
    price: '$250',
    category: 'Persona',
    image: img4
  },
  {
    name: 'Rogers',
    description:
      'Rogers Communication\'s consumer mobile and web usage behaviour',
    type: 'Bundle',
    price: '$250',
    category: 'Telecom',
    image: img5
  },
  {
    name: 'Telus',
    description:
      'Telus Communication\'s consumer mobile and web usage behaviour',
    type: 'Bundle',
    price: '$250',
    category: 'Telecom',
    image: img6
  }
]

const layersData = [
  {
    name: 'Grocery Chain: Costco',
    description:
      'Consumer spending behaviour for various brands including Facebook, Nike, McDonald\'s and etc.',
    type: 'Layer',
    price: '$250',
    category: 'Retail',
    image: img14
  },
  {
    name: 'Grocery Chain: Loblaws',
    description:
      'Number of Mortgages held by owners across all buildings by PC',
    type: 'Layer',
    price: '$500',
    category: 'Retail',
    image: img15
  },
  {
    name: 'Footwear: DA',
    description: 'Understand in-market auto buyers and car aficionados',
    type: 'Layer',
    price: '$500',
    category: 'Consumer spending',
    image: img16
  },
  {
    name: 'Tim Hortons',
    description:
      'Avid sports fan that are attending professional hockey, basketball, soccer and baseball games',
    type: 'Layer',
    price: '$250',
    category: 'Custom',
    image: img17
  },
  {
    name: 'Housing: DA',
    description:
      'Rogers Communication\'s consumer mobile and web usage behaviour',
    type: 'Layer',
    price: '$1500',
    category: 'Consumer spending',
    image: img18
  },
  {
    name: 'Accessories: DA',
    description:
      'Telus Communication\'s consumer mobile and web usage behaviour',
    type: 'Layer',
    price: '$350',
    category: 'Consumer spending',
    image: img19
  }
]

export { subsData, categoriesData, bundlesData, layersData }
