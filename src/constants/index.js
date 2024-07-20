export const swiggy_api_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3856088&lng=78.4863827&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"



export const IMG_CDN_URL  =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
export const FETCH_MENU_URL =
  "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=";
export const FETCH_ALL_RESTAURANTS =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";
export const SHIMMER_IMAGE_URL=
  "https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png";
export const NO_IMAGE_AVAILABLE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvHdRZDerGbZ57-ps_PwHdfI90X4p1sr8I4w&usqp=CAU";





import { people01, people02 ,loveboy,charan, people03, facebook, instagram, linkedin,
  hamburger,
  diet,
  delivery,
  twitter   } from "@assets";

export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id:"aboutus",
    title:"Apidata"
  },
  {
    id: "body",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    key:"kfgbrsebt",
    icon: hamburger,
    title: "Fastest Food Delivery",
    content:
      "We Deliver The Fastest Food and Make Sure to reach upto your Expectations",
  },
  {
    id: "feature-2",
    key:"etaebbt",
    icon:  diet,
    title: "100% Best Service",
    content:
      "We take proactive steps to make sure your Experince Upto The Mark",
  },
  {
    id: "feature-3",
    key:"dtsydtft",
    icon: delivery,
    title: "Pay On Delivery",
    content:
      "You Can Pay the Food Amout After We Deliver The Food At Yor Door Step.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
   
    "I had the pleasure of dining at GoodFoods last nigh , the ambiance was just perfect. and it was an unforgettable experience. ",
    name: "Manoj",
    title: "Python Developer",
    img: loveboy,
  },
  {
    id: "feedback-2",
    content:
      "The food was exceptional,the service was outstanding I would highly recommend this restaurant to anyone looking for a fine dining experience.",
    name:  "Emilia",
    title: "ML Engineer",
    img:people01,
  },
  {
    id: "feedback-3",
    content:
      "The quality of the food and service is consistently top-notch, and I always leave feeling satisfied and happy.",
    name: "Charan Teja",
    title: "Senior Professior",
    img: charan,
  },
];

export const stats = [
  {
    id: "stats-1",
    key:'Knaowvt6',
    title: "Happy Customers",
    value: "9300+",
  },
  {
    id: "stats-2",
    key:'drbyntt6',
    title: "Restaurants",
    value: "230+",
  },
  {
    id: "stats-3",
    key:'sebrtt56',
    title: "Investers Funding",
    value: "230M",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",

    
    links: [
      {
        name: "Content",
        key:"hfhtrg",
        link: "https://goodfoods.vercel.app/aboutus",
      },
      {
        name: "How it Works",
        key:"sfnttrg",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        key:"umyiutrg",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        key:"ztbtbrr",
        link: "https://goodfoods.vercel.app/aboutus",
      },
      {
        name: "Terms & Services",
        key:"rtnuyum",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    key:"adtybrtuf",
    icon: instagram,
    link: "https://www.linkedin.com/in/imjubairahmed/",
  },
  {
    id: "social-media-3",
    key:"lewtbtyf",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    key:"fubtkbyildry",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

 


export const exploreData = [
  {
    id:0,
    question: "Do you offer vegetarian options?",
    answer:"Yes, we have a variety of vegetarian dishes available on our menu.",
    type: "cuisines",
  },
  {
    id: 1,
    question: "Do you offer takeout or delivery services?",
    answer: "Yes, we offer both takeout and delivery services. You can place your order online or by calling our restaurant.",
    type: "deliverys",

  },
  {
    id: 2,
    question: "What are your operating hours?",
    type: "hours",
    answer: "We are open from [opening time] to [closing time] every day of the week.",
  },
  {
    id: 3,      type: "menu",

    question: "Do you have a kids' menu?",
    answer: "Yes, we have a dedicated kids' menu with a variety of options suitable for children.",
  },
  {
    id: 4,
    type: " reqss",

    question: "Can I make special dietary requests?",
    answer: "Absolutely! We accommodate special dietary requests to the best of our abilities. Please inform our staff about your requirements when placing your order.",
  },
  {
    id: 5,
    type: "credit",
    question: "Do you accept credit cards?",
    answer: "Yes, we accept major credit cards for payment.",
  },
];





 
export const mainId = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";


// Image CDN URL for Restaurant Menu
export const ITEM_IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
 


// Swiggy API to get Restaurant data with corsanywhere
// export const swiggy_api_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.544893&lng=81.521241&page_type=DESKTOP_WEB_LISTING";
//  original=  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";



// Swiggy API to get Restaurant Menu data with corsanywhere
export const swiggy_menu_api_URL =
"https://www.swiggy.com/dapi/menu/v4/full?lat=16.544893&lng=81.521241&menuId=";
// "https://www.swiggy.com/dapi/menu/v4/full?lat=16.544893&lng=81.521241&menuId="
// "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu="
  // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.544893&lng=81.521241&restaurantId=145239



export const FoodList = [
 
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "442985",
        "name": "Suprabath Foods",
        "uuid": "8b301df4-8510-4793-b6d3-00f295db081f",
        "city": "10126",
        "area": "Somavaram",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "vwpqulyensbvjdhaqaue",
        "cuisines": [
          "Chinese",
          "Indian",
          "Biryani",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 0.5,
        "slugs": {
          "restaurant": "suprabath-foods-somavaram-somavaram",
          "city": "bhimavaram"
        },
      }
    },
    
    {
      "type": "restaurant",
              "data": {
                "type": "F",
                "id": "264227",
                "name": "Lassi Day Cafe",
                "uuid": "342dd613-fdbf-4821-93d9-604118dcd648",
                "city": "10024",
                "area": "Lawyer Pet",
                "totalRatingsString": "100+ ratings",
                "cloudinaryImageId": "lspgxvlrmxnphaw2smxr",
                "cuisines": [
                  "Desserts",
                  "Sweets",
                  "Beverages"
                ],
                "tags": [
                  
                ],
                "costForTwo": 10000,
                "costForTwoString": "₹100 FOR TWO",
                "deliveryTime": 18,
                "minDeliveryTime": 18,
                "maxDeliveryTime": 18,
                "slaString": "18 MINS",
                "lastMileTravel": 1.2999999523162842,
                "slugs": {
                  "restaurant": "lassi-day-cafe-janardhan-nagar-janardhan-nagar",
                  "city": "ongole"
                },
              }
    
    },
    
    
    {
      "type": "restaurant",
                    "data": {
                      "type": "F",
                      "id": "486426",
                      "name": "Ajantha Canteen",
                      "uuid": "d9e03275-d3fd-4bcf-b2fb-614541c36e03",
                      "city": "10126",
                      "area": "Somavaram",
                      "totalRatingsString": "100+ ratings",
                      "cloudinaryImageId": "ipq0vykg2bzsouxnjyrw",
                      "cuisines": [
                        "South Indian"
                      ],
                      "tags": [
                        
                      ],
                      "costForTwo": 15000,
                      "costForTwoString": "₹150 FOR TWO",
                      "deliveryTime": 18,
                      "minDeliveryTime": 18,
                      "maxDeliveryTime": 18,
                      "slaString": "18 MINS",
                      "lastMileTravel": 0.20000000298023224,
                      "slugs": {
                        "restaurant": "ajantha-canteen-somavaram-somavaram",
                        "city": "bhimavaram"
                      },
                    }
    
    },
    
    
    {
      "type": "restaurant",
              "data": {
                "type": "F",
                "id": "364629",
                "name": "Ramesh Noodles",
                "uuid": "e4449962-1327-43a7-a612-be3e4a16d21b",
                "city": "10024",
                "area": "Pandaripuram",
                "totalRatingsString": "100+ ratings",
                "cloudinaryImageId": "ubgmbuohkqb0rqrcikbl",
                "cuisines": [
                  "Chinese",
                  "Biryani"
                ],
                "tags": [
                  
                ],
                "costForTwo": 15000,
                "costForTwoString": "₹150 FOR TWO",
                "deliveryTime": 20,
                "minDeliveryTime": 20,
                "maxDeliveryTime": 20,
                "slaString": "20 MINS",
                "lastMileTravel": 2.0999999046325684,
                "slugs": {
                  "restaurant": "divya-kamal-sai-noodles-janardhan-nagar-janardhan-nagar",
                  "city": "ongole"
                },
              }
    }, 
    
    
    {
      "type": "restaurant",
              "data": {
                "type": "F",
                "id": "632728",
                "name": "Aaha Andhra",
                "uuid": "c6db11eb-aac7-4444-a065-551a165bd42d",
                "city": "10024",
                "area": "Gandhi road",
                "totalRatingsString": "Too Few Ratings",
                "cloudinaryImageId": "wu2n6awllq05kad52inb",
                "cuisines": [
                  "Biryani",
                  "North Indian"
                ],
                "tags": [
                  
                ],
                "costForTwo": 20000,
                "costForTwoString": "₹200 FOR TWO",
                "deliveryTime": 30,
                "minDeliveryTime": 30,
                "maxDeliveryTime": 30,
                "slaString": "30 MINS",
                "lastMileTravel": 0.800000011920929,
                "slugs": {
                  "restaurant": "aaha-andhraong-janardhan-nagar-janardhan-nagar",
                  "city": "ongole"
                },
              }
    },
    
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "600965",
          "name": "Halal Dum Biryani",
          "uuid": "cfc62a3b-2604-47c5-9133-759f3f2d7a15",
          "city": "10024",
          "area": "Janardhan Nagar",
          "totalRatingsString": "",
          "cloudinaryImageId": "osbbuyzkvrowbqg55gzc",
          "cuisines": [
            "Biryani"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 14,
          "minDeliveryTime": 14,
          "maxDeliveryTime": 14,
          "slaString": "14 MINS",
          "lastMileTravel": 0,
          "slugs": {
            "restaurant": "halal-dum-biryani-janardhan-nagar-janardhan-nagar",
            "city": "Ongole"
          },
    
        }
    },    
    
{
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "154808",
      "name": "Makers of Milkshakes",
      "uuid": "1ef39011-70cd-46bf-af9a-ec2802f67918",
      "city": "10024",
      "area": "Lawyer Pet Extension",
      "totalRatingsString": "",
      "cloudinaryImageId": "s3dxxkiu16mxkvfg4oya",
      "cuisines": [
        "Beverages",
        "Desserts",
        "Ice Cream"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 16,
      "minDeliveryTime": 16,
      "maxDeliveryTime": 16,
      "slaString": "16 MINS",
      "lastMileTravel": 0,
      "slugs": {
        "restaurant": "makers-of-milk-shake-vip-road-janardhan-nagar",
        "city": "Ongole"
      },
    }
},
    {
      "type": "restaurant",
              "data": {
                "type": "F",
                "id": "252028",
                "name": "Uncle's Kitchen",
                "uuid": "efb6ce5b-64c6-41b2-af2d-2bb6a9b9f4a9",
                "city": "13",
                "area": "Kalamassery",
                "totalRatingsString": "100+ ratings",
                "cloudinaryImageId": "hmbqzqcgadixkoyaa7uo",
                "cuisines": [
                  "Indian"
                ],
                "tags": [
                  
                ],
                "costForTwo": 25000,
                "costForTwoString": "₹250 FOR TWO",
                "deliveryTime": 31,
                "minDeliveryTime": 31,
                "maxDeliveryTime": 31,
                "slaString": "31 MINS",
                "lastMileTravel": 1.899999976158142,
                "slugs": {
                  "restaurant": "uncles-kitchen-kalamassery-kalamassery",
                  "city": "kochi"
                },
              }
    }
    

    ]


    {/*


 {
      "type": "restaurant",
              "data": {
                "type": "F",
                "id": "617819",
                "name": "Cookie Man",
                "uuid": "9a7f172f-de10-45bb-bfa9-c6e0c0422bb8",
                "city": "13",
                "area": "Edapally",
                "totalRatingsString": "Too Few Ratings",
                "cloudinaryImageId": "hba73hbgb61bpwvxtx4b",
                "cuisines": [
                  "Bakery",
                  "Snacks"
                ],
                "tags": [
                  
                ],
                "costForTwo": 30000,
                "costForTwoString": "₹300 FOR TWO",
                "deliveryTime": 32,
                "minDeliveryTime": 32,
                "maxDeliveryTime": 32,
                "slaString": "32 MINS",
                "lastMileTravel": 2.0999999046325684,
                "slugs": {
                  "restaurant": "cookie-man-edapally-edapally",
                  "city": "kochi"
             
                },
       }
    },
    
    
    {
      "type": "restaurant",
              "data": {
                "type": "F",
                "id": "349080",
                "name": "Thaal Kitchen",
                "uuid": "930c9661-05cc-4359-a54e-39848c9c6b15",
                "city": "13",
                "area": "Kalamassery",
                "totalRatingsString": "100+ ratings",
                "cloudinaryImageId": "dxpwrrsfmww25bnndgzf",
                "cuisines": [
                  "North Indian",
                  "Beverages",
                  "Biryani"
                ],
                "tags": [
                  
                ],
                "costForTwo": 20000,
                "costForTwoString": "₹200 FOR TWO",
                "deliveryTime": 20,
                "minDeliveryTime": 20,
                "maxDeliveryTime": 20,
                "slaString": "20 MINS",
                "lastMileTravel": 2.5999999046325684,
                "slugs": {
                  "restaurant": "thaal-kitchen-kalamassery-kalamassery",
                  "city": "kochi"
       
                       }         },
    },
    
    
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "395264",
        "name": "McDonald's Gourmet Burger Collection",
        "uuid": "80d81ce2-7772-4ec6-90be-f4247e852d50",
        "city": "13",
        "area": "Edapally",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "mvjct37vkyyuorucnet0",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 60000,
        "costForTwoString": "₹600 FOR TWO",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "slaString": "24 MINS",
        "lastMileTravel": 2.5999999046325684,
        "slugs": {
          "restaurant": "mcdonalds-gourmet-burger-collection-lulu-international-shopping-mal-edapally-2",
          "city": "kochi"
        },
      }
    },
    
    {
      "type": "restaurant",
              "data": {
                "type": "F",
                "id": "301174",
                "name": "PVR Cafe",
                "uuid": "f063f7f4-6591-4b62-bd3b-450f6889ec23",
                "city": "13",
                "area": "Edappally",
                "totalRatingsString": "20+ ratings",
                "cloudinaryImageId": "z1cwkgvj8n9oncknkqb2",
                "cuisines": [
                  "Snacks",
                  "Fast Food",
                  "Beverages"
                ],
                "tags": [
                  
                ],
                "costForTwo": 40000,
                "costForTwoString": "₹400 FOR TWO",
                "deliveryTime": 34,
                "minDeliveryTime": 34,
                "maxDeliveryTime": 34,
                "slaString": "34 MINS",
                "lastMileTravel": 2.5,
                "slugs": {
                  "restaurant": "pvr-pvr-lulu-kochi-lulu-mall",
                  "city": "kochi"
                },
              }
    },
    
    
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "326482",
        "name": "Starbucks Coffee",
        "uuid": "0e003ad7-4923-4edf-8947-fca84055a702",
        "city": "13",
        "area": "Edappally",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "182191ab163770437b62861a6f987709",
        "cuisines": [
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "slaString": "30 MINS",
        "lastMileTravel": 2.5999999046325684,
        "slugs": {
          "restaurant": "starbucks-coffee-edappally-junction-edapally",
          "city": "kochi"
        },
      }
    },
    
    {
      "type": "restaurant",
              "data": {
                "type": "F",
                "id": "437244",
                "name": "Haji Makaan Restaurant",
                "uuid": "0458cdd4-7ae5-4c38-b101-2bfd301ae9d5",
                "city": "13",
                "area": "Edapally",
                "totalRatingsString": "50+ ratings",
                "cloudinaryImageId": "xqk1vgtraude6uollkov",
                "cuisines": [
                  "Biryani",
                  "Indian",
                  "Chinese",
                  "Arabian"
                ],
                "tags": [
                  
                ],
                "costForTwo": 25000,
                "costForTwoString": "₹250 FOR TWO",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "slaString": "27 MINS",
                "lastMileTravel": 2.5999999046325684,
                "slugs": {
                  "restaurant": "haji-makaan-restaurant-edapally-edapally",
                  "city": "kochi"
                },
              }
    
    
    
    },



*/}






// -----------------------Small Exports ---------------------
 