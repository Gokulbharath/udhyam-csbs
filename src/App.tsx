import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import BackToTop from './components/BackToTop';

const Registration = lazy(() => import('./components/Registration'));
const Gallery = lazy(() => import('./components/Gallery'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 -z-10"></div>

      <Navbar />
      <Hero />
      <About />
      <Events />
      <Suspense fallback={null}>
        <Registration />
      </Suspense>
      <Suspense fallback={null}>
        <Gallery />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <BackToTop />
    </div>
  );
}

export default App;
