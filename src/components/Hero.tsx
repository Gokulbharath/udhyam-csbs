import { useState, useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date('2026-02-27T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-0 sm:pt-0 md:pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 sm:left-1/3 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-4 sm:mb-6 text-gray-400 text-[10px] xs:text-xs tracking-wider sm:tracking-widest px-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          KIT – KALAIGNARKARUNANIDHI INSTITUTE OF TECHNOLOGY - COIMBATORE
        </div>
        <div className="mb-4 sm:mb-6 text-gray-400 text-[10px] xs:text-xs tracking-wider sm:tracking-widest px-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          DEPARTMENT OF COMPUTER SCIENCE AND BUSINESS SYSTEMS
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
          style={{
            fontFamily: 'Orbitron, sans-serif',
            textShadow: '0 0 40px rgba(6, 182, 212, 0.5), 0 0 80px rgba(6, 182, 212, 0.3)',
            letterSpacing: '0.05em'
          }}
        >
          UDHAYAM  26
        </h1>

        <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
          Where Innovation Meets Excellence
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
            <Calendar className="text-cyan-400" size={14} />
            <span className="text-xs sm:text-sm text-gray-200" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              February 27–28, 2026
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
            <MapPin className="text-cyan-400" size={14} />
            <span className="text-xs sm:text-sm text-gray-200" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              On-Campus
            </span>
          </div>
        </div>

        <div className="mb-8 sm:mb-12">
          <div className="text-gray-500 text-[10px] xs:text-xs mb-2 sm:mb-3 tracking-wider sm:tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            EVENT STARTS IN
          </div>
          <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 px-2">
            {[
              { value: timeLeft.days, label: 'D' },
              { value: timeLeft.hours, label: 'H' },
              { value: timeLeft.minutes, label: 'M' },
              { value: timeLeft.seconds, label: 'S' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md border border-cyan-500/30 rounded-lg p-2 sm:p-3 min-w-[60px] sm:min-w-[70px]"
                style={{ boxShadow: '0 4px 12px rgba(6, 182, 212, 0.1)' }}
              >
                <div
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-1"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {String(item.value).padStart(2, '0')}
                </div>
                <div
                  className="text-[10px] xs:text-xs text-gray-400 tracking-wider"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <button
            onClick={() => scrollToSection('registration')}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm sm:text-base font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:from-cyan-400 hover:to-blue-400"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Register Now
          </button>
          <button
            onClick={() => scrollToSection('events')}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-cyan-500 text-cyan-400 text-sm sm:text-base font-bold rounded-full hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:border-cyan-300"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            View Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
