import { Zap, Hand, Radio, Activity, Waves, Dumbbell } from 'lucide-react';

export default function Techniques() {
  const techniques = [
    {
      icon: Zap,
      title: 'Dry Needling',
      image: 'https://images.pexels.com/photos/7659576/pexels-photo-7659576.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Advanced technique using fine needles to release muscle tension and trigger points, promoting pain relief and improved function.',
      benefits: [
        'Reduces muscle pain and tightness',
        'Improves range of motion',
        'Accelerates healing process',
        'Treats chronic pain conditions',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Radio,
      title: 'Electrotherapy (TENS, EMS)',
      image: 'https://images.pexels.com/photos/7659566/pexels-photo-7659566.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Therapeutic use of electrical stimulation to manage pain, reduce inflammation, and strengthen muscles through TENS and EMS modalities.',
      benefits: [
        'Effective pain management',
        'Reduces swelling and inflammation',
        'Muscle re-education and strengthening',
        'Non-invasive treatment option',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Hand,
      title: 'Manual Therapy',
      image: 'https://images.pexels.com/photos/7659591/pexels-photo-7659591.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Hands-on techniques including joint mobilization, soft tissue massage, and myofascial release to restore mobility and reduce pain.',
      benefits: [
        'Improves joint mobility',
        'Relieves soft tissue restrictions',
        'Enhances circulation',
        'Reduces pain and stiffness',
      ],
      color: 'from-teal-500 to-green-500',
    },
    {
      icon: Activity,
      title: 'Manual Traction',
      image: 'https://images.pexels.com/photos/7659573/pexels-photo-7659573.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Gentle manual stretching technique to decompress spinal joints, relieve nerve pressure, and reduce pain in the neck and back.',
      benefits: [
        'Relieves nerve compression',
        'Reduces disc pressure',
        'Alleviates neck and back pain',
        'Improves spinal mobility',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Waves,
      title: 'Ultrasound Therapy',
      image: 'https://images.pexels.com/photos/7659578/pexels-photo-7659578.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Therapeutic ultrasound uses sound waves to promote tissue healing, reduce inflammation, and improve blood flow to injured areas.',
      benefits: [
        'Accelerates tissue repair',
        'Reduces inflammation',
        'Improves blood circulation',
        'Treats deep tissue injuries',
      ],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Dumbbell,
      title: 'Mobility & Strength Programs',
      image: 'https://images.pexels.com/photos/7659568/pexels-photo-7659568.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Customized exercise programs designed to restore function, build strength, improve flexibility, and prevent future injuries.',
      benefits: [
        'Increases functional strength',
        'Enhances flexibility and balance',
        'Prevents re-injury',
        'Improves overall fitness',
      ],
      color: 'from-green-500 to-teal-500',
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Treatment Techniques</h1>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto">
            Advanced, evidence-based methods for optimal recovery and rehabilitation
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine traditional manual therapy with cutting-edge technology to provide comprehensive treatment tailored to your specific condition and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {techniques.map((technique, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className="h-64 bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${technique.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${technique.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <technique.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{technique.title}</h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">{technique.description}</p>

                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Benefits:</h4>
                    <ul className="space-y-3">
                      {technique.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className={`w-6 h-6 bg-gradient-to-br ${technique.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <span className="text-white text-xs font-bold">✓</span>
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div
                className="h-80 lg:h-full bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.pexels.com/photos/7659589/pexels-photo-7659589.jpeg?auto=compress&cs=tinysrgb&w=800)' }}
              />
              <div className="p-12 flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Personalized Treatment Plans</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Every patient is unique, and so is every treatment plan. Our expert team will assess your condition and combine the most effective techniques to achieve optimal results.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We continuously monitor your progress and adjust your treatment protocol to ensure you're always on the fastest path to recovery.
                </p>
                <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all self-start">
                  Schedule Your Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">State-of-the-Art Equipment</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Our clinic is equipped with the latest technology and therapeutic tools to ensure you receive the highest quality care.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="h-72 rounded-2xl bg-cover bg-center shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/7659572/pexels-photo-7659572.jpeg?auto=compress&cs=tinysrgb&w=600)' }}
            />
            <div
              className="h-72 rounded-2xl bg-cover bg-center shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/4506270/pexels-photo-4506270.jpeg?auto=compress&cs=tinysrgb&w=600)' }}
            />
            <div
              className="h-72 rounded-2xl bg-cover bg-center shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/7659581/pexels-photo-7659581.jpeg?auto=compress&cs=tinysrgb&w=600)' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
