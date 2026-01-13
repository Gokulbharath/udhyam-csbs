import { Sparkles, Target, Users, TrendingUp } from 'lucide-react';
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);

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

    const cards = document.querySelectorAll('#about [data-scroll-reveal]');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="about" className="relative py-28 px-4 overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/10 to-gray-900"></div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 px-4"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              textShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
            }}
          >
            About UDHAYAM
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: About the Fest */}
          <div
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-4 sm:p-6 flex flex-col h-full hover:border-cyan-500/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 opacity-0"
            data-scroll-reveal="true"
            style={{
              transitionProperty: 'all',
              transitionDuration: '600ms',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 0 0 1px rgba(6, 182, 212, 0.1)'
            }}
          >
            <div className="mb-4 sm:mb-5 flex justify-center">
              <div 
                className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500/30 to-cyan-500/10 rounded-2xl flex items-center justify-center"
                style={{
                  boxShadow: '0 4px 16px rgba(6, 182, 212, 0.2)'
                }}
              >
                <Sparkles className="text-cyan-400" size={32} />
              </div>
            </div>
            <h3
              className="text-xl font-bold text-cyan-400 mb-5 text-center"
              style={{ fontFamily: 'Space Grotesk, sans-serif', wordSpacing: 'normal' }}
            >
              About the Fest
            </h3>
            <div className="flex-1 flex flex-col">
              <p 
                className="text-gray-300 text-left mb-3 text-sm" 
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  lineHeight: '1.7', 
                  wordSpacing: 'normal'
                }}
              >
                UDHAYAM 26 is the flagship technical and cultural fest organized  KIT - Coimbatore.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.65' }}>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Showcases innovation and technical excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Features competitions and workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Brings together brilliant minds</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: About CSBS */}
          <div
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-4 sm:p-6 flex flex-col h-full hover:border-blue-500/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 opacity-0"
            data-scroll-reveal="true"
            style={{
              transitionProperty: 'all',
              transitionDuration: '600ms',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '100ms',
              boxShadow: '0 0 0 1px rgba(59, 130, 246, 0.1)'
            }}
          >
            <div className="mb-4 sm:mb-5 flex justify-center">
              <div 
                className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500/30 to-blue-500/10 rounded-2xl flex items-center justify-center"
                style={{
                  boxShadow: '0 4px 16px rgba(59, 130, 246, 0.2)'
                }}
              >
                <Users className="text-blue-400" size={32} />
              </div>
            </div>
            <h3
              className="text-xl font-bold text-blue-400 mb-5 text-center"
              style={{ fontFamily: 'Space Grotesk, sans-serif', wordSpacing: 'normal' }}
            >
              About CSBS
            </h3>
            <div className="flex-1 flex flex-col">
              <p 
                className="text-gray-300 text-left mb-3 text-sm" 
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  lineHeight: '1.7', 
                  wordSpacing: 'normal'
                }}
              >
                The Computer Science and Business Systems department uniquely blends technology with business acumen.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.65' }}>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Industry-aligned curriculum</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Prepares tech entrepreneurs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Practical learning experiences</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Vision & Objective */}
          <div
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-4 sm:p-6 flex flex-col h-full hover:border-purple-500/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 opacity-0"
            data-scroll-reveal="true"
            style={{
              transitionProperty: 'all',
              transitionDuration: '600ms',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '200ms',
              boxShadow: '0 0 0 1px rgba(168, 85, 247, 0.1)'
            }}
          >
            <div className="mb-4 sm:mb-5 flex justify-center">
              <div 
                className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500/30 to-purple-500/10 rounded-2xl flex items-center justify-center"
                style={{
                  boxShadow: '0 4px 16px rgba(168, 85, 247, 0.2)'
                }}
              >
                <Target className="text-purple-400" size={32} />
              </div>
            </div>
            <h3
              className="text-xl font-bold text-purple-400 mb-5 text-center"
              style={{ fontFamily: 'Space Grotesk, sans-serif', wordSpacing: 'normal' }}
            >
              Vision & Objective
            </h3>
            <div className="flex-1 flex flex-col">
              <p 
                className="text-gray-300 text-left mb-3 text-sm" 
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  lineHeight: '1.7', 
                  wordSpacing: 'normal'
                }}
              >
                To create a platform for students to explore emerging technologies and foster innovation.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.65' }}>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Enhance technical skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Promote collaborative learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Build professional networks</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 4: Impact & Growth */}
          <div
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-4 sm:p-6 flex flex-col h-full hover:border-cyan-500/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 opacity-0"
            data-scroll-reveal="true"
            style={{
              transitionProperty: 'all',
              transitionDuration: '600ms',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '300ms',
              boxShadow: '0 0 0 1px rgba(6, 182, 212, 0.1)'
            }}
          >
            <div className="mb-4 sm:mb-5 flex justify-center">
              <div 
                className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500/30 to-blue-500/10 rounded-2xl flex items-center justify-center"
                style={{
                  boxShadow: '0 4px 16px rgba(6, 182, 212, 0.2)'
                }}
              >
                <TrendingUp className="text-cyan-400" size={32} />
              </div>
            </div>
            <h3
              className="text-xl font-bold text-cyan-400 mb-5 text-center"
              style={{ fontFamily: 'Space Grotesk, sans-serif', wordSpacing: 'normal' }}
            >
              Impact & Growth
            </h3>
            <div className="flex-1 flex flex-col">
              <p 
                className="text-gray-300 text-left mb-3 text-sm" 
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  lineHeight: '1.7', 
                  wordSpacing: 'normal'
                }}
              >
                UDHAYAM has grown to become one of the most anticipated tech fests in the region.
              </p>
              <ul className="space-y-2 text-gray-300 text-sm" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.65' }}>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Network with industry experts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Showcase talents on prestigious platform</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Learn from leading professionals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
