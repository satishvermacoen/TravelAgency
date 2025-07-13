// This file acts as a mock database for all tour packages.
// In a real-world application, this data would likely come from a CMS or a database.

export interface ItineraryItem {
  day: number;
  title: string;
  details: string;
}

export interface Package {
  id: number;
  slug: string;
  title: string;
  location: string;
  price: number;
  duration: number;
  rating: number;
  type: 'Cultural' | 'Adventure' | 'Beach' | 'Nature';
  imageUrl: string;
  description: string;
  itinerary: ItineraryItem[];
  inclusions: string[];
  exclusions: string[];
  gallery: string[];
}

export const allPackages: Package[] = [
    { 
        id: 1, 
        slug: 'golden-triangle-tour',
        title: 'Golden Triangle Tour', 
        location: 'Delhi, Agra, Jaipur', 
        price: 45000, 
        duration: 6, 
        rating: 5, 
        type: 'Cultural', 
        imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776',
        description: "Experience the classic introduction to India's rich history and culture. This tour covers the three most iconic cities: Delhi's bustling markets, Agra's timeless Taj Mahal, and Jaipur's royal palaces.",
        itinerary: [
            { day: 1, title: 'Arrival in Delhi', details: 'Explore the capital city, visiting India Gate and Humayun\'s Tomb.' },
            { day: 2, title: 'Journey to Agra', details: 'Witness the breathtaking beauty of the Taj Mahal at sunrise and explore Agra Fort.' },
            { day: 3, title: 'The Pink City of Jaipur', details: 'Travel to Jaipur and visit the magnificent Amber Fort.' },
            { day: 4, title: 'Jaipur Sightseeing', details: 'Discover the City Palace, Jantar Mantar, and the iconic Hawa Mahal.'},
            { day: 5, title: 'Explore Local Markets', details: 'Shop for traditional crafts and textiles in Jaipur\'s vibrant bazaars.'},
            { day: 6, title: 'Return to Delhi', details: 'Enjoy a final breakfast before your departure from Delhi.'},
        ],
        inclusions: ['5 nights accommodation', 'Daily breakfast', 'Private AC vehicle', 'Professional guide', 'Monument entrance fees'],
        exclusions: ['International airfare', 'Lunches and dinners', 'Tips and personal expenses'],
        gallery: [
            'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070',
            'https://images.unsplash.com/photo-1599661046223-e06587261427?q=80&w=2070',
            'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1974',
        ]
    },
    { 
        id: 2, 
        slug: 'kerala-backwater-bliss',
        title: 'Kerala Backwater Bliss', 
        location: 'Alleppey, Munnar, Thekkady', 
        price: 60000, 
        duration: 8, 
        rating: 5, 
        type: 'Nature', 
        imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1935',
        description: "Cruise through serene backwaters on a traditional houseboat, wander through lush tea plantations, and discover the vibrant wildlife of 'God's Own Country'.",
        itinerary: [
            { day: 1, title: 'Arrival in Cochin', details: 'Explore the historic Fort Kochi area.' },
            { day: 2, title: 'Munnar Tea Gardens', details: 'Journey to the rolling hills of Munnar, famous for its tea plantations.' },
            { day: 3, title: 'Thekkady Wildlife', details: 'Visit Periyar National Park to spot elephants, tigers, and various bird species.' },
            { day: 4, title: 'Alleppey Houseboat', details: 'Board a traditional Kettuvallam (houseboat) for an overnight journey through the backwaters.'},
        ],
        inclusions: ['7 nights accommodation (1 night on houseboat)', 'All meals on houseboat', 'Transportation', 'Sightseeing as per itinerary'],
        exclusions: ['Airfare', 'Personal expenses'],
        gallery: [
            'https://images.unsplash.com/photo-1593693397640-03078a647185?q=80&w=2069',
            'https://images.unsplash.com/photo-1588467221524-35855ac7a25a?q=80&w=2070',
            'https://images.unsplash.com/photo-1623736443547-a8a2b183590f?q=80&w=1974',
        ]
    },
    // Add more Indian packages here...
    { 
        id: 3, 
        slug: 'golden-triangle-tour2',
        title: 'Golden Triangle Tour', 
        location: 'Delhi, Agra, Jaipur', 
        price: 45000, 
        duration: 6, 
        rating: 5, 
        type: 'Cultural', 
        imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776',
        description: "Experience the classic introduction to India's rich history and culture. This tour covers the three most iconic cities: Delhi's bustling markets, Agra's timeless Taj Mahal, and Jaipur's royal palaces.",
        itinerary: [
            { day: 1, title: 'Arrival in Delhi', details: 'Explore the capital city, visiting India Gate and Humayun\'s Tomb.' },
            { day: 2, title: 'Journey to Agra', details: 'Witness the breathtaking beauty of the Taj Mahal at sunrise and explore Agra Fort.' },
            { day: 3, title: 'The Pink City of Jaipur', details: 'Travel to Jaipur and visit the magnificent Amber Fort.' },
            { day: 4, title: 'Jaipur Sightseeing', details: 'Discover the City Palace, Jantar Mantar, and the iconic Hawa Mahal.'},
            { day: 5, title: 'Explore Local Markets', details: 'Shop for traditional crafts and textiles in Jaipur\'s vibrant bazaars.'},
            { day: 6, title: 'Return to Delhi', details: 'Enjoy a final breakfast before your departure from Delhi.'},
        ],
        inclusions: ['5 nights accommodation', 'Daily breakfast', 'Private AC vehicle', 'Professional guide', 'Monument entrance fees'],
        exclusions: ['International airfare', 'Lunches and dinners', 'Tips and personal expenses'],
        gallery: [
            'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070',
            'https://images.unsplash.com/photo-1599661046223-e06587261427?q=80&w=2070',
            'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1974',
        ]
    },
    { 
        id: 4, 
        slug: 'kerala-backwater-bliss2',
        title: 'Kerala Backwater Bliss', 
        location: 'Alleppey, Munnar, Thekkady', 
        price: 60000, 
        duration: 8, 
        rating: 5, 
        type: 'Nature', 
        imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1935',
        description: "Cruise through serene backwaters on a traditional houseboat, wander through lush tea plantations, and discover the vibrant wildlife of 'God's Own Country'.",
        itinerary: [
            { day: 1, title: 'Arrival in Cochin', details: 'Explore the historic Fort Kochi area.' },
            { day: 2, title: 'Munnar Tea Gardens', details: 'Journey to the rolling hills of Munnar, famous for its tea plantations.' },
            { day: 3, title: 'Thekkady Wildlife', details: 'Visit Periyar National Park to spot elephants, tigers, and various bird species.' },
            { day: 4, title: 'Alleppey Houseboat', details: 'Board a traditional Kettuvallam (houseboat) for an overnight journey through the backwaters.'},
        ],
        inclusions: ['7 nights accommodation (1 night on houseboat)', 'All meals on houseboat', 'Transportation', 'Sightseeing as per itinerary'],
        exclusions: ['Airfare', 'Personal expenses'],
        gallery: [
            'https://images.unsplash.com/photo-1593693397640-03078a647185?q=80&w=2069',
            'https://images.unsplash.com/photo-1588467221524-35855ac7a25a?q=80&w=2070',
            'https://images.unsplash.com/photo-1623736443547-a8a2b183590f?q=80&w=1974',
        ]
    },
    // Add more Indian packages here...
    { 
        id: 5, 
        slug: 'golden-triangle-tour3',
        title: 'Golden Triangle Tour', 
        location: 'Delhi, Agra, Jaipur', 
        price: 45000, 
        duration: 6, 
        rating: 5, 
        type: 'Cultural', 
        imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776',
        description: "Experience the classic introduction to India's rich history and culture. This tour covers the three most iconic cities: Delhi's bustling markets, Agra's timeless Taj Mahal, and Jaipur's royal palaces.",
        itinerary: [
            { day: 1, title: 'Arrival in Delhi', details: 'Explore the capital city, visiting India Gate and Humayun\'s Tomb.' },
            { day: 2, title: 'Journey to Agra', details: 'Witness the breathtaking beauty of the Taj Mahal at sunrise and explore Agra Fort.' },
            { day: 3, title: 'The Pink City of Jaipur', details: 'Travel to Jaipur and visit the magnificent Amber Fort.' },
            { day: 4, title: 'Jaipur Sightseeing', details: 'Discover the City Palace, Jantar Mantar, and the iconic Hawa Mahal.'},
            { day: 5, title: 'Explore Local Markets', details: 'Shop for traditional crafts and textiles in Jaipur\'s vibrant bazaars.'},
            { day: 6, title: 'Return to Delhi', details: 'Enjoy a final breakfast before your departure from Delhi.'},
        ],
        inclusions: ['5 nights accommodation', 'Daily breakfast', 'Private AC vehicle', 'Professional guide', 'Monument entrance fees'],
        exclusions: ['International airfare', 'Lunches and dinners', 'Tips and personal expenses'],
        gallery: [
            'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070',
            'https://images.unsplash.com/photo-1599661046223-e06587261427?q=80&w=2070',
            'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1974',
        ]
    },
    { 
        id: 6, 
        slug: 'kerala-backwater-bliss3',
        title: 'Kerala Backwater Bliss', 
        location: 'Alleppey, Munnar, Thekkady', 
        price: 60000, 
        duration: 8, 
        rating: 5, 
        type: 'Nature', 
        imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1935',
        description: "Cruise through serene backwaters on a traditional houseboat, wander through lush tea plantations, and discover the vibrant wildlife of 'God's Own Country'.",
        itinerary: [
            { day: 1, title: 'Arrival in Cochin', details: 'Explore the historic Fort Kochi area.' },
            { day: 2, title: 'Munnar Tea Gardens', details: 'Journey to the rolling hills of Munnar, famous for its tea plantations.' },
            { day: 3, title: 'Thekkady Wildlife', details: 'Visit Periyar National Park to spot elephants, tigers, and various bird species.' },
            { day: 4, title: 'Alleppey Houseboat', details: 'Board a traditional Kettuvallam (houseboat) for an overnight journey through the backwaters.'},
        ],
        inclusions: ['7 nights accommodation (1 night on houseboat)', 'All meals on houseboat', 'Transportation', 'Sightseeing as per itinerary'],
        exclusions: ['Airfare', 'Personal expenses'],
        gallery: [
            'https://images.unsplash.com/photo-1593693397640-03078a647185?q=80&w=2069',
            'https://images.unsplash.com/photo-1588467221524-35855ac7a25a?q=80&w=2070',
            'https://images.unsplash.com/photo-1623736443547-a8a2b183590f?q=80&w=1974',
        ]
    },
    // Add more Indian packages here...
    { 
        id: 7, 
        slug: 'golden-triangle-tour4',
        title: 'Golden Triangle Tour', 
        location: 'Delhi, Agra, Jaipur', 
        price: 45000, 
        duration: 6, 
        rating: 5, 
        type: 'Cultural', 
        imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776',
        description: "Experience the classic introduction to India's rich history and culture. This tour covers the three most iconic cities: Delhi's bustling markets, Agra's timeless Taj Mahal, and Jaipur's royal palaces.",
        itinerary: [
            { day: 1, title: 'Arrival in Delhi', details: 'Explore the capital city, visiting India Gate and Humayun\'s Tomb.' },
            { day: 2, title: 'Journey to Agra', details: 'Witness the breathtaking beauty of the Taj Mahal at sunrise and explore Agra Fort.' },
            { day: 3, title: 'The Pink City of Jaipur', details: 'Travel to Jaipur and visit the magnificent Amber Fort.' },
            { day: 4, title: 'Jaipur Sightseeing', details: 'Discover the City Palace, Jantar Mantar, and the iconic Hawa Mahal.'},
            { day: 5, title: 'Explore Local Markets', details: 'Shop for traditional crafts and textiles in Jaipur\'s vibrant bazaars.'},
            { day: 6, title: 'Return to Delhi', details: 'Enjoy a final breakfast before your departure from Delhi.'},
        ],
        inclusions: ['5 nights accommodation', 'Daily breakfast', 'Private AC vehicle', 'Professional guide', 'Monument entrance fees'],
        exclusions: ['International airfare', 'Lunches and dinners', 'Tips and personal expenses'],
        gallery: [
            'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070',
            'https://images.unsplash.com/photo-1599661046223-e06587261427?q=80&w=2070',
            'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1974',
        ]
    },
    { 
        id: 8, 
        slug: 'kerala-backwater-bliss4',
        title: 'Kerala Backwater Bliss', 
        location: 'Alleppey, Munnar, Thekkady', 
        price: 60000, 
        duration: 8, 
        rating: 5, 
        type: 'Nature', 
        imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1935',
        description: "Cruise through serene backwaters on a traditional houseboat, wander through lush tea plantations, and discover the vibrant wildlife of 'God's Own Country'.",
        itinerary: [
            { day: 1, title: 'Arrival in Cochin', details: 'Explore the historic Fort Kochi area.' },
            { day: 2, title: 'Munnar Tea Gardens', details: 'Journey to the rolling hills of Munnar, famous for its tea plantations.' },
            { day: 3, title: 'Thekkady Wildlife', details: 'Visit Periyar National Park to spot elephants, tigers, and various bird species.' },
            { day: 4, title: 'Alleppey Houseboat', details: 'Board a traditional Kettuvallam (houseboat) for an overnight journey through the backwaters.'},
        ],
        inclusions: ['7 nights accommodation (1 night on houseboat)', 'All meals on houseboat', 'Transportation', 'Sightseeing as per itinerary'],
        exclusions: ['Airfare', 'Personal expenses'],
        gallery: [
            'https://images.unsplash.com/photo-1593693397640-03078a647185?q=80&w=2069',
            'https://images.unsplash.com/photo-1588467221524-35855ac7a25a?q=80&w=2070',
            'https://images.unsplash.com/photo-1623736443547-a8a2b183590f?q=80&w=1974',
        ]
    },
    // Add more Indian packages here...
];

// Function to fetch all packages
export const getPackages = () => {
  return allPackages;
};

// Function to fetch a single package by its slug
export const getPackageBySlug = (slug: string) => {
  return allPackages.find((pkg) => pkg.slug === slug);
};
