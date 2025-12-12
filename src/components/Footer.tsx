import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export default function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <img src={process.env.PUBLIC_URL + '/logo-white.png'} alt="شعار" className="h-28 w-auto rounded-lg" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              خدمات علاج طبيعي وتأهيل متخصصة للأطفال والنساء والبالغين. رحلتك إلى صحة أفضل تبدأ من هنا.
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
            <h3 className="text-lg font-bold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {['الرئيسية', 'من نحن', 'خدماتنا', 'فريقنا', 'التقنيات', 'اتصل بنا'].map((item, index) => (
                <li key={item}>
                  <button
                    onClick={() => navigate(['/', '/about', '/services', '/ourteam', '/techniques', '/contact'][index])}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">خدماتنا</h3>
            <ul className="space-y-3 text-gray-400">
              <li>علاج طبيعي للأطفال</li>
              <li>صحة المرأة</li>
              <li>علاج طبيعي للبالغين</li>
              <li>التأهيل العصبي</li>
              <li>التعافي من إصابات الرياضة</li>
              <li>العلاج اليدوي</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">معلومات الاتصال</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-teal-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">شارع الرعاية الصحية 123، الحي الطبي</span>
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
                  <p>الإثنين - الجمعة: 8:00 ص - 8:00 م</p>
                  <p>السبت: 9:00 ص - 5:00 م</p>
                  <p>الأحد: مغلق</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} عيادة العلاج الطبيعي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
