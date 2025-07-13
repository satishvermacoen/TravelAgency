// This file holds the detailed information for each destination.
// This file acts as a mock database for destination information.
// In a real-world application, this data would likely come from a CMS or a database.

export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  img: string;
  description: string;
  icon: 'Castle' | 'Palmtree' | 'Mountain' | 'Landmark';
  gallery: string[];
  highlights: string[];
  bestTimeToVisit: string;
  idealDuration: string;
  category: string;
}

export const destinationsData: Destination[] = [
    {   
        name: 'Jaipur', 
        slug: 'jaipur', 
        img: 'https://travelwebappp.blob.core.windows.net/brontofly-travelwebapp/images/pexels-sbsoneji-3581364.jpg',
        tagline: 'The Land of Kings',
        description: 'Explore majestic forts, vibrant markets, and the vast Thar Desert in this princely state. Rajasthan is a land of vibrant culture, royal heritage, and epic tales of valor that echo through its ancient architecture.',
        icon: 'Castle',
        gallery: [
            'https://images.unsplash.com/photo-1547293513-2457452b254a?q=80&w=2070',
            'https://images.unsplash.com/photo-1603292929896-3905d802d09c?q=80&w=2070',
            'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1974',
        ],
        highlights: ['Amber Fort in Jaipur', 'Mehrangarh Fort in Jodhpur', 'Camel Safari in Jaisalmer', 'City Palace of Udaipur'],
        bestTimeToVisit: 'October to March',
        idealDuration: '7-10 Days',
        category: 'Cultural & Heritage'
    },
    {   
        name: 'Goa', 
        slug: 'goa', 
        img: 'https://travelwebappp.blob.core.windows.net/brontofly-travelwebapp/images/pexels-cottonbro-4430322.jpg', 
        tagline: 'The Land of Kings',
        description: 'Explore majestic forts, vibrant markets, and the vast Thar Desert in this princely state. Rajasthan is a land of vibrant culture, royal heritage, and epic tales of valor that echo through its ancient architecture.',
        icon: 'Castle',
        gallery: [
            'https://images.unsplash.com/photo-1547293513-2457452b254a?q=80&w=2070',
            'https://images.unsplash.com/photo-1603292929896-3905d802d09c?q=80&w=2070',
            'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1974',
        ],
        highlights: ['Amber Fort in Jaipur', 'Mehrangarh Fort in Jodhpur', 'Camel Safari in Jaisalmer', 'City Palace of Udaipur'],
        bestTimeToVisit: 'October to March',
        idealDuration: '7-10 Days',
        category: 'Cultural & Heritage'
    },
    {   name: 'Udaipur', 
        slug: 'udaipur', 
        img: 'https://travelwebappp.blob.core.windows.net/brontofly-travelwebapp/images/pexels-hemant-singh-chauhan-639506990-18526644.jpg',
        tagline: 'The Land of Kings',
        description: 'Explore majestic forts, vibrant markets, and the vast Thar Desert in this princely state. Rajasthan is a land of vibrant culture, royal heritage, and epic tales of valor that echo through its ancient architecture.',
        icon: 'Castle',
        gallery: [
            'https://images.unsplash.com/photo-1547293513-2457452b254a?q=80&w=2070',
            'https://images.unsplash.com/photo-1603292929896-3905d802d09c?q=80&w=2070',
            'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1974',
        ],
        highlights: ['Amber Fort in Jaipur', 'Mehrangarh Fort in Jodhpur', 'Camel Safari in Jaisalmer', 'City Palace of Udaipur'],
        bestTimeToVisit: 'October to March',
        idealDuration: '7-10 Days',
        category: 'Cultural & Heritage'
    },
    {
        slug: 'munnar', 
        name: 'Munnar', 
        img: 'https://travelwebappp.blob.core.windows.net/brontofly-travelwebapp/images/pexels-anil-kumar-402481747-15211517.jpg',
        tagline: "God's Own Country",
        description: 'Cruise through serene backwaters on a traditional houseboat, relax on pristine beaches, and wander through lush, aromatic tea plantations in this tropical paradise on the Malabar Coast.',
        icon: 'Palmtree',
        gallery: [
            'https://images.unsplash.com/photo-1593693397640-03078a647185?q=80&w=2069',
            'https://images.unsplash.com/photo-1588467221524-35855ac7a25a?q=80&w=2070',
            'https://images.unsplash.com/photo-1623736443547-a8a2b183590f?q=80&w=1974',
        ],
        highlights: ['Alleppey Backwaters Houseboat Cruise', 'Munnar Tea Gardens', 'Varkala Beach Cliffs', 'Periyar National Park Wildlife'],
        bestTimeToVisit: 'September to March',
        idealDuration: '6-8 Days',
        category: 'Nature & Relaxation'
    },
    {
        slug: 'darjeeling',
        name: 'Darjeeling',
        tagline: 'The Himalayan Abode',
        img: 'https://travelwebappp.blob.core.windows.net/brontofly-travelwebapp/images/pexels-soumalya-halder-2148057301-32924711.jpg',
        description: 'Discover snow-capped peaks, picturesque valleys, and charming hill stations. A haven for trekkers, adventurers, and those seeking tranquility in the lap of the Himalayas.',
        icon: 'Mountain',
        gallery: [
            'https://images.unsplash.com/photo-1597922134653-c15a113a130f?q=80&w=2070',
            'https://images.unsplash.com/photo-1605649487212-47bdab06245d?q=80&w=2070',
            'https://images.unsplash.com/photo-1581552097961-e7462657a448?q=80&w=2070',
        ],
        highlights: ['Shimla & Manali Hill Stations', 'Dharamshala & McLeod Ganj', 'Adventure sports in Solang Valley', 'Trekking in Parvati Valley'],
        bestTimeToVisit: 'April to June & September to December',
        idealDuration: '5-9 Days',
        category: 'Adventure & Mountains'
    },
    
    {
        slug: 'rishikesh',
        name: 'Rishikesh',
        tagline: 'The Spiritual Capital of India',
        img: 'https://travelwebappp.blob.core.windows.net/brontofly-travelwebapp/images/pexels-hemant-singh-chauhan-639506990-18526644.jpg',
        description: "Witness ancient rituals on the ghats of the sacred Ganges in one of the world's oldest continuously inhabited cities. Varanasi is a powerful blend of spirituality, history, and life itself.",
        icon: 'Landmark',
        gallery: [
            'https://images.unsplash.com/photo-1582221495935-5b43c26259b9?q=80&w=1974',
            'https://images.unsplash.com/photo-1581458384166-47a3c7595a5f?q=80&w=2070',
            'https://images.unsplash.com/photo-1600529683407-a3764510a2a3?q=80&w=2070',
        ],
        highlights: ['Evening Ganga Aarti Ceremony', 'Sunrise boat ride on the Ganges', 'Exploring the ancient ghats', 'Kashi Vishwanath Temple'],
        bestTimeToVisit: 'October to March',
        idealDuration: '2-3 Days',
        category: 'Spiritual & Cultural'
    },
    {
        slug: 'varanasi',
        name: 'Varanasi',
        tagline: 'The Spiritual Capital of India',
        img: 'https://images.unsplash.com/photo-1561361089-c45388e36b85?q=80&w=2071',
        description: "Witness ancient rituals on the ghats of the sacred Ganges in one of the world's oldest continuously inhabited cities. Varanasi is a powerful blend of spirituality, history, and life itself.",
        icon: 'Landmark',
        gallery: [
            'https://images.unsplash.com/photo-1582221495935-5b43c26259b9?q=80&w=1974',
            'https://images.unsplash.com/photo-1581458384166-47a3c7595a5f?q=80&w=2070',
            'https://images.unsplash.com/photo-1600529683407-a3764510a2a3?q=80&w=2070',
        ],
        highlights: ['Evening Ganga Aarti Ceremony', 'Sunrise boat ride on the Ganges', 'Exploring the ancient ghats', 'Kashi Vishwanath Temple'],
        bestTimeToVisit: 'October to March',
        idealDuration: '2-3 Days',
        category: 'Spiritual & Cultural'
    }
];
export const topDestinationsData = [
    { name: 'Jaipur', slug: 'jaipur', img: 'https://travelwebappp.blob.core.windows.net/brontofly-travelwebapp/images/pexels-sbsoneji-3581364.jpg', gridClass: 'md:col-span-1' },
    { name: 'Goa', slug: 'goa', img: 'https://travelwebappp.blob.core.windows.net/brontofly-travelwebapp/images/pexels-cottonbro-4430322.jpg', gridClass: 'md:col-span-2 md:row-span-2' },
    { name: 'Rishikesh', slug: 'rishikesh', img: 'https://travelwebappp.blob.core.windows.net/brontofly-travelwebapp/images/pexels-hrishavjha-20754957.jpg', gridClass: 'md:col-span-1' },
    { name: 'Udaipur', slug: 'udaipur', img: 'https://travelwebappp.blob.core.windows.net/brontofly-travelwebapp/images/pexels-hemant-singh-chauhan-639506990-18526644.jpg', gridClass: 'md:col-span-1' },
    { name: 'Munnar', slug: 'munnar', img: 'https://travelwebappp.blob.core.windows.net/brontofly-travelwebapp/images/pexels-anil-kumar-402481747-15211517.jpg', gridClass: 'md:col-span-1' },
    { name: 'Darjeeling', slug: 'darjeeling', img: 'https://travelwebappp.blob.core.windows.net/brontofly-travelwebapp/images/pexels-soumalya-halder-2148057301-32924711.jpg', gridClass: 'md:col-span-1' },
];
// Function to fetch all destination data
export const getDestinations = () => {
  return destinationsData;
};

// Function to fetch a single destination by its slug
export const getDestinationBySlug = (slug: string) => {
  return destinationsData.find((dest) => dest.slug === slug);
};



 export const relatedToursData = [
        { slug: 'rajasthan-royal-tour', title: 'Royal Rajasthan', duration: '10 Days', price: 95000, destination: 'Jaipur' },
        { slug: 'jaipur-express-getaway', title: 'Jaipur Express Getaway', duration: '4 Days', price: 35000, destination: 'Jaipur' },
    ];
