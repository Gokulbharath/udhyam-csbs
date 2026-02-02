import {
  Phone,
  Mail,
  MapPin,
  User,
  Instagram,
  Linkedin,
  MessageCircle
} from 'lucide-react';
import { useEffect } from 'react';

const Contact = () => {
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
      '#contact [data-scroll-reveal]'
    );
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section id="contact" className="relative py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900" />

      <div className="relative z-10 container mx-auto max-w-6xl">

        {/* ===== Title ===== */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* ================= STAFF COORDINATORS ================= */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-cyan-400 mb-8 text-center">
            Staff Coordinators
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Mr. SURYA V', phone: '88381 08746' },
              { name: 'Mr. TAMILARASU P', phone: '99944 83494' }
            ].map((staff, index) => (
              <div
                key={index}
                data-scroll-reveal
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <User className="text-cyan-400" />
                  </div>
                  <h4 className="text-xl font-bold text-cyan-400">
                    Staff Coordinator
                  </h4>
                </div>

                <p className="font-semibold text-gray-200">{staff.name}</p>
                <div className="flex items-center gap-2 text-gray-300 mt-2">
                  <Phone size={16} className="text-cyan-400" />
                  <span>+91 {staff.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= STUDENT COORDINATORS ================= */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-purple-400 mb-8 text-center">
            Student Coordinators
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                name: 'RISHI ADHINARAYAN V',
                year: 'III CSBS',
                phone: '87548 73181'
              },
              {
                name: 'GOKUL BHARATH V',
                year: 'IV CSBS',
                phone: '99446 99989'
              }
            ].map((student, index) => (
              <div
                key={index}
                data-scroll-reveal
                className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <User className="text-purple-400" />
                  </div>
                  <h4 className="text-xl font-bold text-purple-400">
                    Student Coordinator
                  </h4>
                </div>

                <p className="font-semibold text-gray-200">
                  {student.name}
                </p>
                <p className="text-sm text-gray-400">{student.year}</p>

                <div className="flex items-center gap-2 text-gray-300 mt-2">
                  <Phone size={16} className="text-purple-400" />
                  <span>+91 {student.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CONTACT INFO + SOCIAL ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            data-scroll-reveal
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Get in Touch
            </h3>

            <div className="space-y-4 text-gray-300">
              <div className="flex gap-3">
                <MapPin className="text-cyan-400" />
                <div>
                  <p className="font-semibold">Department of CSBS</p>
                  <p>Kalaignarkarunanidhi Institute of Technology</p>
                  <p>Coimbatore, Tamil Nadu</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="text-cyan-400" />
                <a
                  href="mailto:udhayam.csbs@gmail.com"
                  className="hover:text-cyan-400"
                >
                  udhayam.csbs@gmail.com
                </a>
              </div>

              <div className="flex gap-3">
                <Phone className="text-cyan-400" />
                <span>+91 87548 73181, +91 99446 99989</span>
              </div>
            </div>
          </div>

          <div
            data-scroll-reveal
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-6">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/kit_csbs/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-500/20 hover:scale-110 transition"
              >
                <Instagram className="text-cyan-400" />
              </a>

              <a
                href="https://www.linkedin.com/school/kit-kalaignarkarunanidhi-institute-of-technology/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-500/20 hover:scale-110 transition"
              >
                <Linkedin className="text-blue-400" />
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=9944699989"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-500/20 hover:scale-110 transition"
              >
                <MessageCircle className="text-green-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
