import { useState, useEffect } from 'react';
import { ChevronDown, Users, Phone, Code2, Zap, Briefcase, Sparkles } from 'lucide-react';

interface EventCoordinator {
  name: string;
  phone: string;
}

interface SubCoordinator {
  name: string;
  year: string;
}

interface Event {
  id: string;
  title: string;
  description: string;
  details: string[];
  coordinators: EventCoordinator[];
  subCoordinators: SubCoordinator[];
  icon: React.ReactNode;
  registrationLink: string;
}

const Events = () => {
  const [openEvent, setOpenEvent] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'technical' | 'non-technical'>('technical');

  const technicalEvents: Event[] = [
    {
      id: 'paper-presentation',
      title: 'Paper Presentation',
      description: 'A platform for students to present research on current trends and technologies in Computer Science and Business Management.',
      details: [
        'Team Size: Maximum 3 members',
        'Paper submission (e-copy)',
        'Shortlisting of best papers',
        'Presentation duration: 7-10 minutes',
        'Evaluation by 3 judges based on:',
        '  • Content quality',
        '  • Presentation clarity',
        '  • Visual appeal',
        '  • Q&A handling'
      ],
      coordinators: [
        { name: 'DEVANYA.N', phone: '+91 90427 41849' },
        { name: 'VIGNESH KUMAR ', phone: '+91 77082 25919' }
      ],
      subCoordinators: [
        { name: 'GLACXY N', year: 'II CSBS' },
        { name: 'SINEKA S', year: 'II CSBS' },
        { name: 'TAMILVANAN M', year: 'II CSBS' },
        { name: 'KAVIN KUMAR S', year: 'II CSBS' }
      ],
      icon: <Code2 size={24} className="text-cyan-400" />,
      registrationLink: 'https://www.kitudhayam.in/public/events/106'
    },
    {
      id: 'thinknflow',
      title: 'ThinkNFlow',
      description: 'A three-round coding competition testing your programming skills, debugging abilities, and blind coding expertise.',
      details: [
        'Round 1: Coding Quiz',
        '  • 30 MCQs - 25 minutes',
        '  • Easy / Medium / Hard levels',
        '  • No negative marking',
        '',
        'Round 2: Debugging Challenge',
        '  • Syntax, logical & complex errors',
        '  • No running code',
        '  • Top teams qualify',
        '',
        'Round 3: Blind Coding',
        '  • Languages: C, C++, Java',
        '  • No internet or IDE help',
        '  • Cash prize + certificates'
      ],
      coordinators: [
        { name: 'RAGAVI A', phone: '+91 70920 30036' },
        { name: 'PRADEEPA P', phone: '+91 80152 07594' }
      ],
      subCoordinators: [
        { name: 'SHANDHINI R', year: 'II CSBS' },
        { name: 'LEKHAMOL V', year: 'II CSBS' },
        { name: 'VEERENDRAKUMAR K', year: 'II CSBS' },
        { name: 'MOHAMMED RIYAS S', year: 'II CSBS' }
      ],
      icon: <Zap size={24} className="text-blue-400" />,
      registrationLink: 'https://www.kitudhayam.in/public/events/107'
    },
    {
      id: 'project-expo',
      title: 'Project Expo',
      description: 'Software & hardware project showcase focusing on innovation and real-world problem solving.',
      details: [
        'Format:',
        '  • Offline presentation',
        '  • Live demo required',
        '  • 5-7 minutes + Q&A',
        '',
        'Categories:',
        '  • Web / Mobile apps',
        '  • AI / ML',
        '  • Data analytics',
        '  • Cloud & cybersecurity',
        '  • IoT & hardware systems'
      ],
      coordinators: [
        { name: 'MOHAMMED SYFUDEEN S', phone: '+91 90426 49307' },
        { name: 'INBATAMIZH ', phone: '+91 63796 56457' }
      ],
      subCoordinators: [
        { name: 'PRIYANKA', year: 'II CSBS' },
        { name: 'DHEYSHEEMA S', year: 'III CSBS' },
        { name: 'VIJAYARAGAVAN R', year: 'II CSBS' },
        { name: 'ATHITH R', year: 'II CSBS' }
      ],
      icon: <Sparkles size={24} className="text-purple-400" />,
      registrationLink: 'https://www.kitudhayam.in/public/events/108'
    }
  ];

  const nonTechnicalEvents: Event[] = [
    {
      id: 'biznxt',
      title: 'BizNxt - Business Wars',
      description: 'Test your business acumen and strategic thinking through three challenging rounds.',
      details: [
        'Team Size: Maximum 2 members',
        '',
        '3 Rounds:',
        '  • Market Pulse',
        '  • Brand Shock',
        '  • Pitch Under Pressure',
        '',
        'Rules:',
        '  • Negative marking for wrong answers',
        '  • Final decision by quizmaster',
        '  • Business knowledge essential'
      ],
      coordinators: [
        { name: 'RUDRESH.M', phone: '+91 88258 50175' },
        { name: 'RAJA.S', phone: '+91 88705 90708' }
      ],
      subCoordinators: [
        { name: 'VIDHUNA V', year: 'II CSBS' },
        { name: 'THULASI', year: 'II CSBS' },
        { name: 'YAZHVIZHI', year: 'II CSBS' },
        { name: 'Sub Coordinator 4', year: 'II CSBS' }
      ],
      icon: <Briefcase size={24} className="text-amber-400" />,
      registrationLink: 'https://www.kitudhayam.in/public/events/109'
    },
    {
      id: 'come-play-confuse',
      title: 'Come Play Confuse',
      description: 'A fun and engaging stage activity where you pick random task cards and complete challenges.',
      details: [
        'Format:',
        '  • Stage participation',
        '  • Random task cards',
        '',
        'Task Types:',
        '  • Act It',
        '  • Say It',
        '  • Do It',
        '  • Think It',
        '  • Twist It',
        '',
        'Rules:',
        '  • Complete 3 tasks to qualify',
        '  • Fastest completion wins',
        '  • Pure fun & fair play'
      ],
      coordinators: [
        { name: 'HARISH S', phone: '+91 93426 89636' },
        { name: 'JEGAN S', phone: '+91 79046 40725' }
      ],
      subCoordinators: [
        { name: 'KAVIYA S', year: 'II CSBS' },
        { name: 'JYOSHITHA T', year: 'II CSBS' },
        { name: 'NAVAYUGAN A S', year: 'II CSBS' },
        { name: 'AJAY A', year: 'II CSBS' }
      ],
      icon: <Sparkles size={24} className="text-pink-400" />,
      registrationLink: 'https://www.kitudhayam.in/public/events/110'
    }
  ];

  const currentEvents = activeTab === 'technical' ? technicalEvents : nonTechnicalEvents;

  const toggleEvent = (eventId: string) => {
    setOpenEvent(openEvent === eventId ? null : eventId);
  };

  const handleTabChange = (tab: 'technical' | 'non-technical') => {
    setActiveTab(tab);
    setOpenEvent(null);
  };

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

    // Reset and observe elements after tab change
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('#events [data-scroll-reveal]');
      elements.forEach((element) => {
        element.classList.remove('animate-fade-in');
        // Force reflow to ensure animation triggers
        (element as HTMLElement).offsetHeight;
        observer.observe(element);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      const elements = document.querySelectorAll('#events [data-scroll-reveal]');
      elements.forEach(element => observer.unobserve(element));
    };
  }, [activeTab, currentEvents]);

  return (
    <section id="events" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900"></div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 px-4"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              textShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
            }}
          >
            Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex justify-center mb-8 sm:mb-12 px-4">
          <div className="inline-flex bg-gray-900/50 backdrop-blur-lg border border-cyan-500/20 rounded-full p-1">
            <button
              onClick={() => handleTabChange('technical')}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeTab === 'technical'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'text-gray-400 hover:text-cyan-400'
              }`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Technical Events
            </button>
            <button
              onClick={() => handleTabChange('non-technical')}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeTab === 'non-technical'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'text-gray-400 hover:text-cyan-400'
              }`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Non-Technical Events
            </button>
          </div>
        </div>

        <div 
          key={activeTab} 
          className="space-y-6 animate-fade-in-tab"
        >
          {currentEvents.map((event, index) => (
            <div
              key={event.id}
              data-scroll-reveal
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300 opacity-0"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <button
                onClick={() => toggleEvent(event.id)}
                className="w-full px-4 sm:px-6 py-4 sm:py-6 flex items-start justify-between text-left hover:bg-cyan-500/5 transition-all duration-300"
              >
                <div className="flex gap-3 sm:gap-4 items-start flex-1 min-w-0">
                  <div className="flex-shrink-0 mt-1">
                    {event.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3
                      className="text-xl sm:text-2xl font-bold text-cyan-400 mb-2"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {event.description}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`text-cyan-400 transition-transform duration-300 flex-shrink-0 ml-2 sm:ml-4 ${
                    openEvent === event.id ? 'rotate-180' : ''
                  }`}
                  size={20}
                />
              </button>

              {openEvent === event.id && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-cyan-500/20">
                  <div className="pt-4 sm:pt-6 space-y-4 sm:space-y-6">
                    <div>
                      <h4
                        className="text-base sm:text-lg font-semibold text-blue-400 mb-2 sm:mb-3"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        Event Details
                      </h4>
                      <div className="space-y-2">
                        {event.details.map((detail, index) => (
                          <p
                            key={index}
                            className="text-gray-300 text-sm sm:text-base"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                          <Users className="text-cyan-400" size={18} />
                          <h4
                            className="text-base sm:text-lg font-semibold text-cyan-400"
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                          >
                            Event Coordinators
                          </h4>
                        </div>
                        <div className="space-y-2">
                          {event.coordinators.map((coordinator, index) => (
                            <div key={index} className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                              <Phone size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                              <span style={{ fontFamily: 'Inter, sans-serif', wordBreak: 'break-word' }}>
                                {coordinator.name}: {coordinator.phone}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                          <Users className="text-blue-400" size={18} />
                          <h4
                            className="text-base sm:text-lg font-semibold text-blue-400"
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                          >
                            Sub-Coordinators
                          </h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {event.subCoordinators.map((subCoordinator, index) => (
                            <div key={index} className="text-gray-300 text-sm">
                              <span style={{ fontFamily: 'Inter, sans-serif' }}>
                                {subCoordinator.name}
                              </span>
                              <span className="text-gray-500 text-xs block">
                                {subCoordinator.year}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Register Button */}
                    <div className="pt-3 sm:pt-4">
                      <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:shadow-md hover:shadow-cyan-500/30 transition-all duration-300 text-sm"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        Register
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
