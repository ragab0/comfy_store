require("dotenv").config();
const { CURRENT_HOST } = process.env;

const images = [
  CURRENT_HOST + "/api/public/images/previews/extra-product-1.jpeg",
  CURRENT_HOST + "/api/public/images/previews/extra-product-2.jpeg",
  CURRENT_HOST + "/api/public/images/previews/extra-product-3.jpeg",
  CURRENT_HOST + "/api/public/images/previews/extra-product-4.jpeg",
];


module.exports = [
  {
    id: "1",
    name: "accent chair",
    price: 25999,
    image: CURRENT_HOST + "/api/public/images/product-1.jpeg",
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    shipping: true,
    images, 
  },
  {
    id: "2",
    name: "albany sectional",
    price: 109999,
    image: CURRENT_HOST + "/api/public/images/product-2.jpeg",
    colors: ["#000", "#ffb900"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    images, 
  },
  {
    id: "3",
    name: "albany table",
    price: 309999,
    image: CURRENT_HOST + "/api/public/images/product-3.jpeg",
    colors: ["#ffb900", "#0000ff"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "kitchen",
    images, 
  },
  {
    id: "4",
    name: "armchair",
    price: 12599,
    image: CURRENT_HOST + "/api/public/images/product-4.jpeg",
    colors: ["#000", "#00ff00", "#0000ff"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "bedroom",
    shipping: true,
    images, 
  },
  {
    id: "5",
    name: "dining table",
    price: 42999,
    image: CURRENT_HOST + "/api/public/images/product-5.jpeg",
    colors: ["#00ff00", "#0000ff", "#ff0000"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "dining",
    shipping: true,
    images, 
  },
  {
    id: "6",
    name: "emperor bed",
    price: 23999,
    image: CURRENT_HOST + "/api/public/images/product-6.jpeg",
    colors: ["#0000ff", "#000"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "bedroom",
    shipping: true,
    images, 
  },
  {
    id: "7",
    name: "entertainment center",
    price: 59999,
    image: CURRENT_HOST + "/api/public/images/product-7.jpeg",
    featured: true,
    colors: ["#000", "#ff0000"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    shipping: true,
    images, 
  },
  {
    id: "8",
    name: "high-back bench",
    price: 39999,
    image: CURRENT_HOST + "/api/public/images/product-8.jpeg",
    featured: true,
    colors: ["#000", "#00ff00"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    shipping: true,
    images, 
  },
  {
    id: "9",
    name: "leather chair",
    price: 20099,
    image: CURRENT_HOST + "/api/public/images/product-9.jpeg",
    colors: ["#ff0000", "#ffb900", "#00ff00"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "bedroom",
    images, 
  },
  {
    id: "10",
    name: "leather sofa",
    price: 99999,
    image: CURRENT_HOST + "/api/public/images/product-10.jpeg",
    colors: ["#00ff00", "#0000ff"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    images, 
  },
  {
    id: "11",
    name: "modern bookshelf",
    price: 31999,
    image: CURRENT_HOST + "/api/public/images/product-11.jpeg",
    featured: true,
    colors: ["#ffb900", "#ff0000", "#00ff00"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "kids",
    images, 
  },
  {
    id: "12",
    name: "modern poster",
    price: 3099,
    image: CURRENT_HOST + "/api/public/images/product-12.jpeg",
    colors: ["#000"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    shipping: true,
    images, 
  },
  {
    id: "13",
    name: "shelf",
    price: 30999,
    image: CURRENT_HOST + "/api/public/images/product-13.jpeg",
    colors: ["#00ff00"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    images, 
  },
  {
    id: "14",
    name: "simple chair",
    price: 109999,
    image: CURRENT_HOST + "/api/public/images/product-14.jpeg",
    colors: ["#0000ff"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    shipping: true,
    images, 
  },
  {
    id: "15",
    name: "sofa set",
    price: 129999,
    image: CURRENT_HOST + "/api/public/images/product-15.jpeg",
    colors: ["#00ff00", "#ffb900"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    shipping: true,
    images, 
  },
  {
    id: "16",
    name: "suede armchair",
    price: 15999,
    image: CURRENT_HOST + "/api/public/images/product-16.jpeg",
    colors: ["#ffb900"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    images, 
  },
  {
    id: "17",
    name: "utopia sofa",
    price: 79999,
    image: CURRENT_HOST + "/api/public/images/product-17.jpeg",
    featured: true,
    colors: ["#ff0000", "#00ff00"],
    company: "liddy",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "living room",
    images, 
  },
  {
    id: "18",
    name: "vase table",
    price: 120999,
    image: CURRENT_HOST + "/api/public/images/product-18.jpeg",
    featured: true,
    colors: ["#ff0000"],
    company: "marcos",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    images, 
  },
  {
    id: "19",
    name: "wooden bed",
    price: 250099,
    image: CURRENT_HOST + "/api/public/images/product-19.jpeg",
    colors: ["#000", "#ffb900"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "bedroom",
    images, 
  },
  {
    id: "20",
    name: "wooden desk",
    price: 150999,
    image: CURRENT_HOST + "/api/public/images/product-20.jpeg",
    colors: ["#000"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    shipping: true,
    images, 
  },
  {
    id: "21",
    name: "wooden desk",
    price: 40099,
    image: CURRENT_HOST + "/api/public/images/product-21.jpeg",
    colors: ["#0000ff", "#00ff00"],
    company: "ikea",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "office",
    images, 
  },
  {
    id: "22",
    name: "wooden table",
    price: 234999,
    image: CURRENT_HOST + "/api/public/images/product-22.jpeg",
    featured: true,
    colors: ["#ffb900", "#ff0000"],
    company: "caressa",
    description:
      "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    category: "kitchen",
    shipping: true,
    images, 
  },
];
