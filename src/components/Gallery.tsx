import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

// Import images from assets folder
import gallery1 from '../assets/IMG_20250301_091404.jpg';
import gallery2 from '../assets/IMG_20250301_151033.jpg';
import gallery3 from '../assets/IMG_20250301_151322.jpg';
import gallery4 from '../assets/IMG-20250301-WA0035.jpg';
import gallery5 from '../assets/IMG-20250301-WA0047.jpg';
import gallery6 from '../assets/IMG-20250302-WA0015.jpg';
import gallery7 from '../assets/IMG-20250302-WA0016.jpg';
import gallery8 from '../assets/IMG-20250303-WA0012.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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

    const elements = document.querySelectorAll('#gallery [data-scroll-reveal]');
    elements.forEach(element => observer.observe(element));

    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  // Using images from assets folder
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
  ];

  return (
    <section id="gallery" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/10 to-gray-900"></div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 px-4"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              textShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
            }}
          >
            Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Glimpses from previous editions of UDHAYAM
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              data-scroll-reveal
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1 opacity-0"
              onClick={() => setSelectedImage(index)}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter group-hover:brightness-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border-2 border-cyan-500/0 group-hover:border-cyan-500/60 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors duration-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={32} />
          </button>
          <img
            src={images[selectedImage]}
            alt={`Gallery ${selectedImage + 1}`}
            className="max-w-full max-h-full rounded-xl shadow-2xl shadow-cyan-500/30"
            onClick={(e) => e.stopPropagation()}
            loading="eager"
            decoding="async"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
