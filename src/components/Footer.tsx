import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-8 px-4 border-t border-cyan-500/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      <div className="relative z-10 container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm sm:text-base">
            <span style={{ fontFamily: 'Inter, sans-serif' }}>Made with</span>
            <Heart className="text-cyan-400 fill-cyan-400" size={16} />
            <span style={{ fontFamily: 'Inter, sans-serif' }}>by Gokul Bharath</span>
          </div>

          <div
            className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            UDHAYAM 2026
          </div>

          <div className="text-gray-400 text-xs sm:text-sm px-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Department of Computer Science and Business Systems
          </div>

          <div className="text-gray-500 text-xs sm:text-sm px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Kalaignarkarunanidhi Institute of Technology, Coimbatore
          </div>

          <div className="pt-4 text-gray-500 text-[10px] xs:text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2026 UDHAYAM-CSBS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
