import { Mountain, Palmtree, Castle, Landmark } from 'lucide-react';

// --- Helper function to create a URL-friendly slug ---
const createSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-');
};

export const destinationsData = [
    {
        slug: 'rajasthan',
        name: 'Rajasthan',
        tagline: 'The Land of Kings',
        imageUrl: 'https://images.unsplash.com/photo-1599661046223-e06587261427?q=80&w=2070',
        description: 'Explore majestic forts, vibrant markets, and the vast Thar Desert in this princely state. Rajasthan is a land of vibrant culture, royal heritage, and epic tales of valor.',
        icon: 'Castle',
        gallery: [
            'https://images.unsplash.com/photo-1547293513-2457452b254a?q=80&w=2070',
            'https://images.unsplash.com/photo-1603292929896-3905d802d09c?q=80&w=2070',
            'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1974',
        ],
        highlights: ['Amber Fort in Jaipur', 'Mehrangarh Fort in Jodhpur', 'Camel Safari in Jaisalmer', 'City Palace of Udaipur'],
    },
    {
        slug: 'kerala',
        name: 'Kerala',
        tagline: 'God\'s Own Country',
        imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1935',
        description: 'Cruise through serene backwaters on a traditional houseboat, relax on pristine beaches, and wander through lush, aromatic tea plantations in this tropical paradise.',
        icon: 'Palmtree',
        gallery: [
            'https://images.unsplash.com/photo-1593693397640-03078a647185?q=80&w=2069',
            'https://images.unsplash.com/photo-1588467221524-35855ac7a25a?q=80&w=2070',
            'https://images.unsplash.com/photo-1623736443547-a8a2b183590f?q=80&w=1974',
        ],
        highlights: ['Alleppey Backwaters', 'Munnar Tea Gardens', 'Varkala Beach', 'Periyar National Park'],
    },
    {
        slug: 'himachal-pradesh',
        name: 'Himachal Pradesh',
        tagline: 'The Himalayan Abode',
        imageUrl: 'https://images.unsplash.com/photo-1616388969582-37d883773f75?q=80&w=2070',
        description: 'Discover snow-capped peaks, picturesque valleys, and charming hill stations. A haven for trekkers, adventurers, and those seeking tranquility in the lap of the Himalayas.',
        icon: 'Mountain',
        gallery: [
            'https://images.unsplash.com/photo-1597922134653-c15a113a130f?q=80&w=2070',
            'https://images.unsplash.com/photo-1605649487212-47bdab06245d?q=80&w=2070',
            'https://images.unsplash.com/photo-1581552097961-e7462657a448?q=80&w=2070',
        ],
        highlights: ['Shimla & Manali', 'Dharamshala & McLeod Ganj', 'Spiti Valley', 'Trekking in Parvati Valley'],
    },
    // ... add other destinations here
];

export const getDestinationBySlug = (slug: string) => {
    return destinationsData.find(dest => dest.slug === slug);
};
