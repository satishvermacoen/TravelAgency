// Note: We are no longer importing icon components here.
// We are using simple strings ('Sun', 'Moon') to identify them.

// Export the data array so it can be used elsewhere.
export const allPackagesData = [
    {
        id: 1,
        title: 'Parisian Dreams',
        location: 'Paris, France',
        price: 152000,
        duration: 7,
        rating: 5,
        type: 'Cultural',
        imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760c0337?q=80&w=2070',
        description: "Experience the magic of Paris, from the iconic Eiffel Tower to the charming streets of Montmartre. This package offers a deep dive into the art, culture, and culinary delights of the City of Light.",
        itinerary: [
            { day: 1, title: 'Arrival in Paris', details: 'Check into your boutique hotel and enjoy a welcome dinner cruise on the Seine.', icon: 'Sun' },
            { day: 2, title: 'Art & History', details: 'Explore the Louvre Museum and wander through the historic Marais district.', icon: 'Sun' },
            { day: 3, title: 'Eiffel Tower & Montmartre', details: 'Ascend the Eiffel Tower for panoramic views and discover the artistic soul of Montmartre.', icon: 'Sun' },
        ],
        inclusions: ['6 nights accommodation', 'Daily breakfast', 'Museum passes', 'Seine river cruise'],
        exclusions: ['International airfare', 'Lunches and dinners'],
        gallery: ['https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=1974', 'https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=2070'],
    },
    {
        id: 2,
        title: 'Alpine Adventure',
        location: 'Swiss Alps, Switzerland',
        price: 248000,
        duration: 10,
        rating: 5,
        type: 'Adventure',
        imageUrl: 'https://images.unsplash.com/photo-1540202404-1b4293T8pI?q=80&w=1974',
        description: "Embark on a breathtaking 10-day journey through the heart of the Swiss Alps. From majestic peaks and serene lakes to charming alpine villages, this adventure offers an unforgettable blend of natural beauty, thrilling activities, and authentic Swiss culture.",
        itinerary: [
            { day: 1, title: 'Arrival in Zurich & Transfer to Interlaken', details: 'Arrive at Zurich Airport (ZRH) and take a scenic train ride to Interlaken. Check into your hotel and enjoy a welcome dinner.', icon: 'Sun' },
            { day: 2, title: 'Jungfrau - Top of Europe', details: 'Ascend to the highest railway station in Europe. Witness panoramic views of the Aletsch Glacier and surrounding peaks.', icon: 'Sun' },
            { day: 3, title: 'Grindelwald First & Adventure', details: 'Experience the thrill of the First Flyer zip line and explore the stunning Bachalpsee lake.', icon: 'Sun' },
            { day: 4, title: 'Lake Brienz Cruise', details: 'Enjoy a relaxing cruise on the turquoise waters of Lake Brienz, surrounded by picturesque landscapes.', icon: 'Sun' },
            { day: 5, title: 'Travel to Zermatt', details: 'Take a scenic train to the car-free village of Zermatt, home of the iconic Matterhorn.', icon: 'Sun' },
            { day: 6, title: 'Gornergrat & Matterhorn Views', details: 'Ride the Gornergrat railway for unparalleled views of the Matterhorn and 28 other four-thousand-meter peaks.', icon: 'Sun' },
            { day: 7, title: 'Hiking in Zermatt', details: 'Choose from numerous hiking trails to explore the pristine nature around Zermatt.', icon: 'Sun' },
            { day: 8, title: 'Glacier Express to St. Moritz', details: 'Board the legendary Glacier Express for a spectacular journey through the Alps to the glamorous resort of St. Moritz.', icon: 'Sun' },
            { day: 9, title: 'Exploring St. Moritz', details: 'Discover the chic town of St. Moritz, its beautiful lake, and surrounding mountains.', icon: 'Sun' },
            { day: 10, title: 'Departure', details: 'Enjoy a final Swiss breakfast before your departure from Zurich.', icon: 'Moon' },
        ],
        inclusions: ['9 nights accommodation in 4-star hotels', 'Daily breakfast and welcome dinner', 'All train travel and mountain excursions as per itinerary', 'Professional English-speaking guide', 'Airport transfers'],
        exclusions: ['International airfare', 'Lunches and most dinners', 'Travel insurance', 'Personal expenses'],
        gallery: [
            'https://images.unsplash.com/photo-1537484994269-e3d24933d3b6?q=80&w=1965',
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070',
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070',
            'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070',
        ]
    },
    // ... other packages
];

// Keep the data-fetching logic with the data itself.
export const getPackageById = (id: number) => {
    return allPackagesData.find(pkg => pkg.id === id);
};
