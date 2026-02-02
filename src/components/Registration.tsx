import { useEffect, useMemo } from 'react';

// Import ticket images
import ticket2 from '../assets/image2.png';
import ticket3 from '../assets/image3.png';
import ticket4 from '../assets/image4.png';

interface Ticket {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  sortPriority: number;
}

const Registration = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll(
      '#registration [data-scroll-reveal]'
    );
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  const handleBuyPass = () => {
    window.open('https://www.kitudhayam.in/public/passes', '_blank');
  };

  // Ticket data (Heroic Pass removed)
  const ticketsData: Ticket[] = [
    {
      id: 1,
      name: 'Golden Pass',
      description:
        'Access to all events, workshops, and activities for both days. Includes special sessions and networking opportunities.',
      price: 300,
      image: ticket4,
      sortPriority: 1
    },
    {
      id: 2,
      name: 'Silver Pass (Day 1 – Technical)',
      description:
        'Access to all technical events, workshops, and activities on Day 1. Ideal for students passionate about technology and innovation.',
      price: 200,
      image: ticket3,
      sortPriority: 2
    },
    {
      id: 3,
      name: 'Silver Pass (Day 2 – Non-Technical)',
      description:
        'Access to all non-technical events, workshops, and activities on Day 2. Perfect for students interested in business and cultural events.',
      price: 200,
      image: ticket2,
      sortPriority: 3
    }
  ];

  // Sort tickets by priority
  const sortedTickets = useMemo(() => {
    return [...ticketsData].sort(
      (a, b) => a.sortPriority - b.sortPriority
    );
  }, []);

  return (
    <section id="registration" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-cyan-900/10 to-gray-900" />

      <div className="relative z-10 container mx-auto max-w-6xl">
        {/* ===== Header ===== */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Get Your Pass
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Choose your pass and join UDHAYAM 2026. Limited passes available!
          </p>
        </div>

        {/* ===== Tickets Grid (Centered) ===== */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
            {sortedTickets.map((ticket, index) => (
              <div
                key={ticket.id}
                data-scroll-reveal
                className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-300 opacity-0 flex flex-col"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Image */}
                <div className="bg-gray-800 overflow-hidden">
                  <img
                    src={ticket.image}
                    alt={ticket.name}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-sm font-semibold text-cyan-400 uppercase mb-2">
                    Description
                  </h4>

                  <p className="text-gray-300 text-sm mb-4 flex-1 leading-relaxed">
                    {ticket.description}
                  </p>

                  <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-4" />

                  <h4 className="text-sm font-semibold text-cyan-400 uppercase mb-2">
                    Price
                  </h4>

                  <span className="text-3xl font-bold text-cyan-400 mb-6">
                    ₹{ticket.price}
                  </span>

                  <button
                    onClick={handleBuyPass}
                    className="mt-auto w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 transition"
                  >
                    Buy Pass
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Footer Note ===== */}
        <div className="mt-14 text-center">
          <p className="text-gray-400 text-sm">
            Registration closes on February 20, 2026. Register early to secure your spot!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
