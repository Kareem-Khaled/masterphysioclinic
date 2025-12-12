import { Heart, Users, Award, Shield, ArrowRight, Star, Baby, Activity, Zap } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export default function Home() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Where Quality Meets Care
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Expert physiotherapy for children, women, and adults
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all animate-fadeInUp flex items-center space-x-2 mx-auto"
            style={{ animationDelay: '0.4s' }}
          >
            <span>Book Appointment</span>
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive physiotherapy solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Baby,
                title: 'Pediatric Physiotherapy',
                description: 'Specialized care for children with motor delays, cerebral palsy, and developmental concerns',
                color: 'from-pink-500 to-rose-500',
              },
              {
                icon: Heart,
                title: "Women's Health",
                description: 'Comprehensive support for postpartum recovery, pelvic floor therapy, and pregnancy-related issues',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: Activity,
                title: 'Adult Physiotherapy',
                description: 'Expert treatment for sports injuries, back pain, joint problems, and post-surgical rehabilitation',
                color: 'from-teal-500 to-cyan-500',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <button
                  onClick={() => navigate('/services')}
                  className="text-teal-600 font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Excellence in every aspect of care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Expert Team', description: 'Highly qualified specialists with years of experience' },
              { icon: Users, title: 'Patient-Centered', description: 'Personalized treatment plans for optimal results' },
              { icon: Shield, title: 'Trusted Care', description: 'Safe, evidence-based therapeutic approaches' },
              { icon: Zap, title: 'Modern Techniques', description: 'Latest equipment and rehabilitation methods' },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <feature.icon size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600">Real stories from real people</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Postpartum Recovery',
                content: 'The care I received was exceptional. Dr. Ahlam helped me recover completely after childbirth. I feel stronger than ever!',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                role: 'Sports Injury',
                content: 'After my ACL injury, I thought my athletic days were over. Thanks to the team here, I am back to playing soccer at full strength.',
                rating: 5,
              },
              {
                name: 'Emma Williams',
                role: 'Pediatric Care',
                content: 'Dr. Abd-Elrahman worked wonders with my son. His motor skills have improved dramatically. We are so grateful!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Recovery Journey?</h2>
          <p className="text-xl mb-8 text-teal-50">
            Book your appointment today and take the first step towards better health
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-white text-teal-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all"
          >
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
