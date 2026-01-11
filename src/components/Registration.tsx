import { useEffect, useMemo } from 'react';

// Import ticket images from assets folder
import ticket1 from '../assets/image1.png';
import ticket2 from '../assets/image2.png';
import ticket3 from '../assets/image3.png';
import ticket4 from '../assets/image4.png';

interface Ticket {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  day?: string; // For sorting Day 1 before Day 2
  sortPriority?: number; // For custom sorting
}

const Registration = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('#registration [data-scroll-reveal]');
    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  const handleBuyPass = () => {
    window.open('https://www.kitudhayam.in/public/passes', '_blank');
  };

  // Ticket data with sort priority
  const ticketsData: Ticket[] = [
    {
      id: 1,
      name: 'Heroic Pass',
      description: 'Access to all technical and non-technical events, workshops, and activities for both days. Includes priority seating and exclusive perks.',
      price: 500,
      image: ticket1,
      sortPriority: 1,
    },
    {
      id: 2,
      name: 'Silver Pass (Day 2 – Non-Technical)',
      description: 'Access to all non-technical events, workshops, and activities on Day 2. Perfect for students interested in business and cultural events.',
      price: 200,
      image: ticket2,
      day: 'Day 2',
      sortPriority: 4,
    },
    {
      id: 3,
      name: 'Silver Pass (Day 1 – Technical)',
      description: 'Access to all technical events, workshops, and activities on Day 1. Ideal for students passionate about technology and innovation.',
      price: 200,
      image: ticket3,
      day: 'Day 1',
      sortPriority: 3,
    },
    {
      id: 4,
      name: 'Golden Pass',
      description: 'Access to all events, workshops, and activities for both days. Includes special sessions and networking opportunities.',
      price: 300,
      image: ticket4,
      sortPriority: 2,
    },
  ];

  // Sort tickets: by price descending, then by sortPriority for equal prices
  const sortedTickets = useMemo(() => {
    return [...ticketsData].sort((a, b) => {
      // First sort by price (descending)
      if (b.price !== a.price) {
        return b.price - a.price;
      }
      // If prices are equal, sort by sortPriority (ascending - Day 1 comes before Day 2)
      return (a.sortPriority || 0) - (b.sortPriority || 0);
    });
  }, []);

  return (
    <section id="registration" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-cyan-900/10 to-gray-900"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 px-4"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              textShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
            }}
          >
            Get Your Pass
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Choose your pass and join UDHAYAM 2026. Limited passes available!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {sortedTickets.map((ticket, index) => (
            <div
              key={ticket.id}
              data-scroll-reveal
              className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-300 opacity-0 flex flex-col"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                boxShadow: '0 0 0 1px rgba(6, 182, 212, 0.1)'
              }}
            >
              {/* Ticket Image */}
              <div className="relative overflow-hidden bg-gray-800">
                <img
                  src={ticket.image}
                  alt={ticket.name}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Ticket Details */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Description Heading */}
                <h4
                  className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Description
                </h4>
                
                {/* Description Text */}
                <p 
                  className="text-gray-300 text-sm mb-4 flex-1"
                  style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}
                >
                  {ticket.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-4"></div>

                {/* Price Heading */}
                <h4
                  className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Price
                </h4>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-bold text-cyan-400" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    ₹{ticket.price}
                  </span>
                </div>

                {/* Buy Pass Button */}
                <button
                  onClick={handleBuyPass}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Buy Pass
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            Registration closes on February 20, 2026. Register early to secure your spot!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
