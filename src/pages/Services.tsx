import { Baby, Heart, Activity, Brain, ArrowRight } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export default function Services() {
  const { navigate } = useRouter();

  const services = [
    {
      icon: Baby,
      title: 'Pediatric Physiotherapy',
      color: 'from-pink-500 to-rose-500',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Specialized care for children from infancy through adolescence, addressing developmental and movement disorders.',
      conditions: [
        'Developmental motor delays',
        'Cerebral palsy management',
        'Clubfoot treatment and correction',
        'Gait abnormalities and walking issues',
        'Torticollis (neck muscle tightness)',
        'Toe walking correction',
        'Coordination and balance disorders',
        'Postural problems',
      ],
    },
    {
      icon: Heart,
      title: "Women's Health Physiotherapy",
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/3997986/pexels-photo-3997986.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive support for women through all life stages, from pregnancy to postpartum and beyond.',
      conditions: [
        'Postpartum rehabilitation',
        'Pelvic floor therapy and strengthening',
        'Diastasis recti repair',
        'Pregnancy-related pain management',
        'Posture correction during and after pregnancy',
        'Incontinence treatment',
        'Pre and post C-section recovery',
        'Return to fitness programs',
      ],
    },
    {
      icon: Activity,
      title: 'Adult Physiotherapy',
      color: 'from-teal-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/7659567/pexels-photo-7659567.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Expert treatment for acute injuries, chronic pain, and post-surgical rehabilitation for adults of all ages.',
      conditions: [
        'Back and neck pain relief',
        'ACL and sports injury rehabilitation',
        'Disc herniation treatment',
        'Joint pain and arthritis management',
        'Post-fracture recovery',
        'Shoulder and rotator cuff injuries',
        'Knee and hip replacement rehab',
        'Chronic pain management',
      ],
    },
    {
      icon: Brain,
      title: 'Neurological Rehabilitation',
      color: 'from-blue-500 to-indigo-500',
      image: 'https://images.pexels.com/photos/7659580/pexels-photo-7659580.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Specialized programs for patients recovering from neurological conditions and injuries.',
      conditions: [
        'Stroke recovery and rehabilitation',
        'Multiple sclerosis (MS) management',
        'Spinal cord injury rehabilitation',
        'Peripheral nerve injury treatment',
        'Balance and coordination training',
        'Functional mobility restoration',
        'Parkinson\'s disease management',
        'Traumatic brain injury recovery',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="relative py-20 bg-gradient-to-br from-teal-600 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto">
            Comprehensive physiotherapy solutions tailored to your unique needs and goals
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <service.icon size={32} className="text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>

                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">We Treat:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.conditions.map((condition, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <span className="text-gray-700">{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => navigate('/contact')}
                    className={`mt-8 bg-gradient-to-r ${service.color} text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center space-x-2`}
                  >
                    <span>Book Now</span>
                    <ArrowRight size={18} />
                  </button>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div
                    className="h-96 lg:h-[500px] rounded-3xl shadow-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Not Sure Which Service You Need?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our expert team will assess your condition and recommend the most appropriate treatment plan for you.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
