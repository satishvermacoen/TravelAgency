"use client";

import { useState, useEffect, useRef } from 'react';
// Added new icons for the timeline
import { Compass, Target, Eye, Linkedin, Twitter, Heart, Globe, Star, Rocket, MonitorSmartphone, Sparkles } from 'lucide-react';
import { motion, useInView, useAnimation, useScroll, useTransform, animate } from 'framer-motion';

// --- Reusable & Enhanced Components ---

// Section Component for consistent styling
const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-20 md:py-28 ${className}`}>
    <div className="container mx-auto px-6">
      {children}
    </div>
  </section>
);

// Animated Counter for Stats Section
const AnimatedCounter = ({ to }: { to: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, to, {
                duration: 3,
                onUpdate: (value: number) => setCount(Math.floor(value)),
            });
            return () => controls.stop();
        }
    }, [isInView, to]);

    return <span ref={ref}>{count.toLocaleString()}</span>;
};



// Team Member Card with Gradient Hover
const TeamMember = ({ name, role, imageUrl, social }: { name: string, role: string, imageUrl: string, social: { linkedin: string, twitter: string } }) => (
  <motion.div 
    className="relative text-center bg-white rounded-lg shadow-xl overflow-hidden group"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    <img src={imageUrl} alt={name} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-blue-300 font-medium mb-4">{role}</p>
      <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a href={social.linkedin} aria-label={`${name}'s LinkedIn`} className="hover:text-blue-400"><Linkedin /></a>
        <a href={social.twitter} aria-label={`${name}'s Twitter`} className="hover:text-sky-400"><Twitter /></a>
      </div>
    </div>
  </motion.div>
);

// --- NEW: Impressive Timeline Component ---
const TimelineItem = ({ data, isLeft }: { data: { year: string, title: string, description: string, icon: React.ElementType }, isLeft: boolean }) => {
    const { year, title, description, icon: Icon } = data;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <div ref={ref} className={`flex items-center w-full mb-8 justify-between ${isLeft ? 'flex-row-reverse' : ''}`}>
            {/* The content card */}
            <motion.div 
                className="w-full md:w-5/12 bg-white rounded-lg shadow-xl p-6"
                initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <p className="text-blue-600 font-semibold text-lg mb-1">{year}</p>
                <h3 className="font-bold text-gray-900 text-xl mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </motion.div>

            {/* The icon on the timeline */}
            <motion.div 
                className="z-10 bg-white p-3 rounded-full shadow-lg border-2 border-blue-600"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Icon className="text-blue-600" size={24} />
            </motion.div>

            {/* Empty div for spacing on the other side */}
            <div className="hidden md:block w-5/12"></div>
        </div>
    );
};


// --- Main About Us Page Component ---

const AboutUsPage = () => {
  const team = [
    { name: 'Jane Doe', role: 'Founder & CEO', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887', social: { linkedin: '#', twitter: '#' } },
    { name: 'John Smith', role: 'Lead Travel Guide', imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887', social: { linkedin: '#', twitter: '#' } },
    { name: 'Emily White', role: 'Customer Experience Manager', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1887', social: { linkedin: '#', twitter: '#' } },
  ];
  
  // Data for the new timeline
  const timelineData = [
    { year: "2019", title: "The Spark", description: "BTF is born from a passion for authentic travel, starting with small, curated trips for friends and family.", icon: Sparkles },
    { year: "2021", title: "Going Digital", description: "Our first website launches, opening up our unique travel experiences to the world.", icon: MonitorSmartphone },
    { year: "2023", title: "First Global Tour", description: "We hosted our first international group tour to Southeast Asia, a milestone in our growth.", icon: Globe },
    { year: "2025", title: "Looking Ahead", description: "Expanding our sustainable travel initiatives and launching new, undiscovered destinations.", icon: Rocket },
  ];

  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
      target: heroRef,
      offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const textY = useTransform(heroScroll, [0, 1], ["0%", "200%"]);
  
  // Ref and scroll progress for the timeline drawing effect
  const timelineRef = useRef(null);
  const { scrollYProgress: timelineScroll } = useScroll({
      target: timelineRef,
      offset: ["start end", "end start"]
  });


  return (
    <div className="bg-gray-50 text-gray-800">
      {/* --- Hero Section with Parallax --- */}
      <div ref={heroRef} className="relative h-[75vh] overflow-hidden text-white">
        <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1887')",
                y: backgroundY 
            }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div style={{ y: textY }} className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold">
            Our Story
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl">
            We believe travel is more than just seeing new places. It's about creating lasting memories and forging new connections.
          </p>
        </motion.div>
      </div>

      {/* --- Our Mission & Vision Section --- */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className="flex items-center space-x-4 mb-3">
                <Target className="text-blue-600" size={32} />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600">To provide exceptional, immersive travel experiences that go beyond the surface, connecting our clients with the heart and soul of each destination.</p>
            </div>
            <div>
              <div className="flex items-center space-x-4 mb-3">
                <Eye className="text-blue-600" size={32} />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600">To be the most trusted and inspiring travel company, renowned for our passion, creativity, and commitment to sustainable tourism.</p>
            </div>
          </motion.div>
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070" alt="Beautiful landscape" className="rounded-lg shadow-2xl" />
          </motion.div>
        </div>
      </Section>
      
      {/* --- By The Numbers Section --- */}
      <Section className="bg-gray-100">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Impact</h2>
            <p className="text-lg mt-2 text-gray-600">A testament to the journeys we've shared.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <Heart className="mx-auto text-red-500 mb-4" size={48} />
                <p className="text-5xl font-bold text-blue-600"><AnimatedCounter to={7500} />+</p>
                <p className="text-xl text-gray-700 mt-2">Happy Travelers</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <Globe className="mx-auto text-green-500 mb-4" size={48} />
                <p className="text-5xl font-bold text-blue-600"><AnimatedCounter to={40} />+</p>
                <p className="text-xl text-gray-700 mt-2">Destinations Explored</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <Star className="mx-auto text-yellow-500 mb-4" size={48} />
                <p className="text-5xl font-bold text-blue-600"><AnimatedCounter to={2000} />+</p>
                <p className="text-xl text-gray-700 mt-2">5-Star Reviews</p>
            </div>
        </div>
      </Section>

      {/* --- NEW: Impressive Our Journey (Timeline) Section --- */}
      <Section>
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900">Our Journey</h2>
          <p className="text-lg mt-2 text-gray-600">From a simple idea to a global community of travelers.</p>
        </div>
        <div ref={timelineRef} className="relative w-full max-w-4xl mx-auto">
          {/* The animated line that draws on scroll */}
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 origin-top"
            style={{ scaleY: timelineScroll }}
          />
          <div className="flex flex-col items-center space-y-8">
            {timelineData.map((item, index) => (
              <TimelineItem key={item.year} data={item} isLeft={index % 2 !== 0} />
            ))}
          </div>
        </div>
      </Section>

      {/* --- Meet Our Team Section --- */}
      <Section className="bg-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="text-lg mt-2 text-gray-600">The passionate experts who make your dream trips a reality.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map(member => <TeamMember key={member.name} {...member} />)}
        </div>
      </Section>

      {/* --- Join Us (CTA) Section --- */}
      <div className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070')" }}>
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <Section className="relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold">Ready for Your Next Adventure?</h2>
              <p className="mt-4 text-lg text-blue-200">Let's write the next chapter of your travel story together. Explore our curated tours or get in touch to plan a custom journey.</p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition-all duration-300 transform hover:scale-105">
                  Explore Tours
                </button>
                <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
              </div>
            </div>
        </Section>
      </div>
    </div>
  );
};

export default AboutUsPage;
