// This file holds the detailed information for each destination.
// In a real-world application, this data would likely come from a CMS or a database.

export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  img: string;
  description: string;
  icon: 'Boat' | 'Monastery' | 'Nature' | 'Temple' | 'City' | 'Building' | 'Castle' | 'Mountain';
  gallery: string[];
  highlights: string[];
  bestTimeToVisit: string;
  idealDuration: string;
  category: string;
}

// This type is used by page components to structure related tour data.
export interface RelatedTour {
    slug: string;
    title: string;
    duration: string;
    destination: string;
    price: number;
}

export const destinationsData: Destination[] = [
  {
    "name": "Thailand",
    "slug": "Thailand",
    "img": "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070",
    "tagline": "The Land of Smiles",
    "description": "From bustling city streets in Bangkok to serene temples in Chiang Mai and pristine beaches in Phuket, Thailand offers a rich tapestry of culture, cuisine, and natural beauty.",
    "icon": "Temple",
    "gallery": [
      "https://images.unsplash.com/photo-1563492065599-3520f775ee05?q=80&w=1974",
      "https://images.unsplash.com/photo-1543731176-a215c0e1262b?q=80&w=2070",
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=2070"
    ],
    "highlights": ["Grand Palace in Bangkok", "Island Hopping in Krabi", "Floating Markets near Bangkok", "Elephant Sanctuaries in Chiang Mai"],
    "bestTimeToVisit": "November to April",
    "idealDuration": "10-14 Days",
    "category": "Beach & Culture"
  },
  {
    "name": "Vietnam",
    "slug": "Vietnam",
    "img": "https://images.unsplash.com/photo-1534271362705-a33d45547414?q=80&w=1974",
    "tagline": "The Ascending Dragon",
    "description": "A country of breathtaking natural beauty and rich cultural heritage. Explore the limestone karsts of Ha Long Bay, the historic streets of Hoi An, and the vibrant chaos of Ho Chi Minh City.",
    "icon": "Boat",
    "gallery": [
      "https://images.unsplash.com/photo-1526065584519-783353523537?q=80&w=2070",
      "https://images.unsplash.com/photo-1596493639819-335b71415e8c?q=80&w=2070",
      "https://images.unsplash.com/photo-1555940552-69681b452848?q=80&w=2070"
    ],
    "highlights": ["Cruise in Ha Long Bay", "Explore the Old Quarter in Hanoi", "Walk through Hoi An Ancient Town", "Mekong Delta Tour"],
    "bestTimeToVisit": "September to December & March to April",
    "idealDuration": "12-15 Days",
    "category": "Culture & Scenic"
  },
  {
    "name": "Singapore",
    "slug": "Singapore",
    "img": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1974",
    "tagline": "The Lion City",
    "description": "A futuristic city-state where gleaming skyscrapers coexist with lush green spaces. Discover world-class attractions, multicultural neighborhoods, and a culinary scene that is second to none.",
    "icon": "City",
    "gallery": [
      "https://images.unsplash.com/photo-1549466633-5cb391e0a25b?q=80&w=2070",
      "https://images.unsplash.com/photo-1496898310931-b8561c28f11f?q=80&w=2070",
      "https://images.unsplash.com/photo-1588891824364-54992524a87a?q=80&w=2070"
    ],
    "highlights": ["Gardens by the Bay", "Marina Bay Sands Skypark", "Sentosa Island", "Explore multicultural neighborhoods"],
    "bestTimeToVisit": "Year-round (drier from February to April)",
    "idealDuration": "3-5 Days",
    "category": "Modern & Urban"
  },
  {
    "name": "Bali",
    "slug": "Bali",
    "img": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938",
    "tagline": "The Island of the Gods",
    "description": "An Indonesian paradise that is a feast for the senses. Bali blends stunning natural beauty, from volcanic hillsides to pristine beaches, with a deeply spiritual and vibrant culture.",
    "icon": "Temple",
    "gallery": [
      "https://images.unsplash.com/photo-1573988979237-97277bacedf6?q=80&w=1964",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070",
      "https://images.unsplash.com/photo-1546484456-224522989131?q=80&w=2070"
    ],
    "highlights": ["Ubud's Rice Terraces & Monkey Forest", "Surfing in Kuta or Canggu", "Spiritual experience at Uluwatu Temple", "Explore the Nusa Islands"],
    "bestTimeToVisit": "April to October",
    "idealDuration": "7-10 Days",
    "category": "Spiritual & Beach"
  },
  {
    "name": "Dubai",
    "slug": "Dubai",
    "img": "https://images.unsplash.com/photo-1512453979798-5ea266e877a4?q=80&w=2070",
    "tagline": "The City of Gold",
    "description": "A dazzling metropolis in the Arabian Desert, Dubai is a city of superlatives. Experience ultramodern architecture, luxury shopping, desert adventures, and a vibrant blend of cultures.",
    "icon": "Building",
    "gallery": [
      "https://images.unsplash.com/photo-1551202878-c3938555a01a?q=80&w=1932",
      "https://images.unsplash.com/photo-1596701062353-838636b1a287?q=80&w=2069",
      "https://images.unsplash.com/photo-1523957728636-629d84319322?q=80&w=2070"
    ],
    "highlights": ["Burj Khalifa Observation Deck", "Shopping at The Dubai Mall", "Desert Safari Adventure", "Explore the Gold and Spice Souks"],
    "bestTimeToVisit": "November to March",
    "idealDuration": "4-6 Days",
    "category": "Luxury & Modern"
  },
  {
    "name": "North East India",
    "slug": "North-East",
    "img": "https://images.unsplash.com/photo-1586523126127-425251436853?q=80&w=2070",
    "tagline": "The Unexplored Paradise",
    "description": "Discover the hidden gems of India, from the living root bridges of Meghalaya to the serene monasteries of Arunachal Pradesh. The North East is a blend of breathtaking landscapes, diverse cultures, and pristine nature.",
    "icon": "Nature",
    "gallery": [
      "https://images.unsplash.com/photo-1544253119-142b1a86c673?q=80&w=1936",
      "https://images.unsplash.com/photo-1617282559335-55636b7588b4?q=80&w=2070",
      "https://images.unsplash.com/photo-1594732311394-0518778f9f0d?q=80&w=1974"
    ],
    "highlights": ["Living Root Bridges in Meghalaya", "Kaziranga National Park in Assam", "Tawang Monastery in Arunachal Pradesh", "Hornbill Festival in Nagaland"],
    "bestTimeToVisit": "October to April",
    "idealDuration": "10-15 Days",
    "category": "Nature & Adventure"
  },
  {
    "name": "Rajasthan",
    "slug": "Rajasthan",
    "img": "https://travelwebappp.blob.core.windows.net/brontofly-travelwebapp/images/pexels-sbsoneji-3581364.jpg",
    "tagline": "The Land of Kings",
    "description": "Explore majestic forts, vibrant markets, and the vast Thar Desert in this princely state. Rajasthan is a land of vibrant culture, royal heritage, and epic tales of valor that echo through its ancient architecture.",
    "icon": "Castle",
    "gallery": [
      "https://images.unsplash.com/photo-1547293513-2457452b254a?q=80&w=2070",
      "https://images.unsplash.com/photo-1603292929896-3905d802d09c?q=80&w=2070",
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1974"
    ],
    "highlights": ["Amber Fort in Jaipur", "Mehrangarh Fort in Jodhpur", "Camel Safari in Jaisalmer", "City Palace of Udaipur"],
    "bestTimeToVisit": "October to March",
    "idealDuration": "7-10 Days",
    "category": "Cultural & Heritage"
  },
  {
    "name": "Himachal Pradesh",
    "slug": "Himachal",
    "img": "https://images.unsplash.com/photo-1586377319717-08779650090b?q=80&w=2070",
    "tagline": "The Land of the Gods",
    "description": "Nestled in the western Himalayas, Himachal Pradesh is a paradise for adventurers, nature lovers, and spiritual seekers. From the bustling hill stations of Shimla and Manali to the serene valleys of Spiti, it offers a refreshing escape.",
    "icon": "Mountain",
    "gallery": [
      "https://images.unsplash.com/photo-1605649487212-47bdab0624e5?q=80&w=2070",
      "https://images.unsplash.com/photo-1597087669863-71a7217a8f8e?q=80&w=1974",
      "https://images.unsplash.com/photo-1622395420377-aa8739199347?q=80&w=2070"
    ],
    "highlights": ["Adventure Sports in Manali", "Trekking in Spiti Valley", "Shimla's Colonial Charm", "Dharamshala & McLeod Ganj"],
    "bestTimeToVisit": "March to June & October to February",
    "idealDuration": "6-9 Days",
    "category": "Adventure & Scenic"
  },
  {
    "name": "Ladakh",
    "slug": "Ladakh",
    "img": "https://images.unsplash.com/photo-1581561633129-ddd0399114d2?q=80&w=2070",
    "tagline": "The Land of High Passes",
    "description": "A high-altitude desert renowned for its stark, breathtaking landscapes, crystal-clear skies, and ancient Buddhist monasteries. Ladakh is an adventure in itself, with thrilling roads, serene lakes, and a unique Tibetan culture.",
    "icon": "Monastery",
    "gallery": [
      "https://images.unsplash.com/photo-1590374661853-e9a4a7a84dea?q=80&w=2070",
      "https://images.unsplash.com/photo-1609259781855-442843a8731d?q=80&w=2070",
      "https://images.unsplash.com/photo-1549247701-a83783457835?q=80&w=2070"
    ],
    "highlights": ["Pangong Tso Lake", "Khardung La Pass", "Nubra Valley", "Monasteries of Hemis & Thiksey"],
    "bestTimeToVisit": "June to September",
    "idealDuration": "7-12 Days",
    "category": "Adventure & Spiritual"
  },
  {
    "name": "Kashmir",
    "slug": "Kashmir",
    "img": "https://images.unsplash.com/photo-1595822368291-84039a814144?q=80&w=1932",
    "tagline": "Paradise on Earth",
    "description": "Famed for its unparalleled natural beauty, Kashmir captivates with its lush green valleys, snow-capped mountains, and serene lakes. Enjoy a Shikara ride on Dal Lake, wander through Mughal gardens, and experience the warmth of its culture.",
    "icon": "Boat",
    "gallery": [
      "https://images.unsplash.com/photo-1579896095314-b04b4377926b?q=80&w=2070",
      "https://images.unsplash.com/photo-1602881919374-33b1a8d01174?q=80&w=1964",
      "https://images.unsplash.com/photo-1562235077-a87f8979104b?q=80&w=2070"
    ],
    "highlights": ["Shikara Ride on Dal Lake", "Gondola Ride in Gulmarg", "Mughal Gardens in Srinagar", "Betaab Valley in Pahalgam"],
    "bestTimeToVisit": "March to October",
    "idealDuration": "5-8 Days",
    "category": "Nature & Romance"
  }
];


// Function to fetch all destination data
export const getDestinations = () => {
  return destinationsData;
};

// Function to fetch a single destination by its slug
export const getDestinationBySlug = (slug: string) => {
  return destinationsData.find((dest) => dest.slug === slug);
};

// Function to fetch all destination data




 export const relatedToursData: RelatedTour[] = [
        { slug: 'rajasthan-royal-tour', title: 'Royal Rajasthan', duration: '10 Days', price: 95000, destination: 'Jaipur' },
        { slug: 'jaipur-express-getaway', title: 'Jaipur Express Getaway', duration: '4 Days', price: 35000, destination: 'Jaipur' },
    ];


export const getRelatedTours = () => {
  return relatedToursData;
};