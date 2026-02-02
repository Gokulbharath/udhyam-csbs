import { Phone, Mail, MapPin, User, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { useEffect } from 'react';

const Contact = () => {
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

    const elements = document.querySelectorAll('#contact [data-scroll-reveal]');
    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <section id="contact" className="relative py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900"></div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 px-4"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              textShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
            }}
          >
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          <div 
            data-scroll-reveal
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-4 sm:p-6 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <User className="text-cyan-400" size={24} />
              </div>
              <h3
                className="text-xl font-bold text-cyan-400"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Staff Coordinator
              </h3>
            </div>
            <div className="space-y-2 text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p className="font-semibold">Mr. SURYA V</p>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-cyan-400" />
                <span>+91 88381 08746</span>
              </div>
            </div>
            <div className="space-y-2 text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              <p className="font-semibold">Mr. SURYA V</p>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-cyan-400" />
                <span>+91 88381 08746</span>
              </div>
            </div>
          </div>

          <div 
            data-scroll-reveal
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-4 sm:p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
            style={{ transitionDelay: '100ms' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <User className="text-blue-400" size={24} />
              </div>
              <h3
                className="text-xl font-bold text-blue-400"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Student Coordinator
              </h3>
            </div>
            <div className="space-y-3 text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              <div>
                <p className="font-semibold">RISHI ADHINARAYAN V</p>
                <p className="text-sm text-gray-400">III CSBS</p>
                <div className="flex items-center gap-2 mt-1">
                  <Phone size={16} className="text-blue-400" />
                  <span className="text-sm">+91 87548 73181</span>
                </div>
              </div>
            </div>
          </div>

          <div 
            data-scroll-reveal
            className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-4 sm:p-6 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <User className="text-purple-400" size={24} />
              </div>
              <h3
                className="text-xl font-bold text-purple-400"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Student Coordinator
              </h3>
            </div>
            <div className="space-y-3 text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              <div>
                <p className="font-semibold">GOKUL BHARATH V</p>
                <p className="text-sm text-gray-400">IV CSBS</p>
                <div className="flex items-center gap-2 mt-1">
                  <Phone size={16} className="text-purple-400" />
                  <span className="text-sm">+91 99446 99989</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div 
            data-scroll-reveal
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-300"
          >
            <h3
              className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4 sm:mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="text-cyan-400" size={20} />
                </div>
                <div className="text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p className="font-semibold mb-1">Department of CSBS</p>
                  <p>Kalaignarkarunanidhi Institute of Technology</p>
                  <p>Coimbatore, Tamil Nadu</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-cyan-400" size={20} />
                </div>
                <a
                  href="mailto:udhayam.csbs@gmail.com"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  udhayam.csbs@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-cyan-400" size={20} />
                </div>
                <span className="text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                  +91 87548 73181 , +91 99446 99989
                </span>
              </div>
            </div>
          </div>

          <div 
            data-scroll-reveal
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-6 sm:p-8 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
            style={{ transitionDelay: '100ms' }}
          >
            <h3
              className="text-xl sm:text-2xl font-bold text-blue-400 mb-4 sm:mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Follow Us
            </h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
              Stay updated with the latest news, announcements, and behind-the-scenes content from UDHAYAM 26.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.instagram.com/kit_csbs/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
                aria-label="Instagram"
                style={{ boxShadow: '0 2px 8px rgba(6, 182, 212, 0.08)' }}
              >
                <Instagram className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" size={22} />
              </a>
              <a
                href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fschool%2Fkit-kalaignarkarunanidhi-institute-of-technology%2Fposts%2F%3FfeedView%3Dall"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-blue-500/30 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
                aria-label="LinkedIn"
                style={{ boxShadow: '0 2px 8px rgba(59, 130, 246, 0.08)' }}
              >
                <Linkedin className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" size={22} />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=9944699989&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center border border-green-500/30 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/50 hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
                aria-label="WhatsApp"
                style={{ boxShadow: '0 2px 8px rgba(34, 197, 94, 0.08)' }}
              >
                <MessageCircle className="text-green-400 group-hover:text-green-300 transition-colors duration-300" size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
