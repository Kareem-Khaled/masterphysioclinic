import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export default function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold">PhysioLife</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Expert physiotherapy and rehabilitation services for children, women, and adults. Your journey to better health starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Our Team', 'Techniques', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => navigate(`/${item.toLowerCase().replace(' ', '')}`)}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Pediatric Physiotherapy</li>
              <li>Women's Health</li>
              <li>Adult Physiotherapy</li>
              <li>Neurological Rehabilitation</li>
              <li>Sports Injury Recovery</li>
              <li>Manual Therapy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-teal-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Healthcare Boulevard, Medical District</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-teal-400 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-teal-400 flex-shrink-0" />
                <span className="text-gray-400">info@physiolife.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={20} className="text-teal-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
                  <p>Sat: 9:00 AM - 5:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PhysioLife Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
