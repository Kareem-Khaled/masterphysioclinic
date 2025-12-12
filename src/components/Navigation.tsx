import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentPath, navigate } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/team', label: 'Our Team' },
    { path: '/techniques', label: 'Techniques' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-white/95 backdrop-blur-sm py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div
            onClick={() => handleNavigate('/')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              PhysioLife
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigate(link.path)}
                className={`text-sm font-medium transition-colors relative group ${
                  currentPath === link.path
                    ? 'text-teal-600'
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-teal-600 transform origin-left transition-transform ${
                    currentPath === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            ))}
            <button
              onClick={() => handleNavigate('/contact')}
              className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all flex items-center space-x-2"
            >
              <Phone size={18} />
              <span>Book Now</span>
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-teal-600 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-6 pb-4 space-y-4 animate-fadeIn">
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigate(link.path)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPath === link.path
                    ? 'bg-teal-50 text-teal-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigate('/contact')}
              className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              <Phone size={18} />
              <span>Book Now</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
