import { Target, Eye, Heart, Award, Users, Briefcase, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      <section className="relative py-20 bg-gradient-to-br from-teal-600 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About PhysioLife</h1>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto">
            Dedicated to transforming lives through exceptional physiotherapy and rehabilitation services
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded with a vision to provide world-class physiotherapy services, PhysioLife has grown to become a trusted name in rehabilitation and wellness. Our journey began with a simple belief: that every person deserves access to expert care that addresses their unique needs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Today, we serve hundreds of patients across all age groups, from infants with developmental delays to elite athletes recovering from injuries, and seniors maintaining their independence. Our multidisciplinary team combines clinical excellence with genuine compassion.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We continually invest in advanced training, cutting-edge equipment, and evidence-based techniques to ensure our patients receive the highest standard of care possible.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="h-64 rounded-2xl bg-cover bg-center shadow-lg"
                style={{ backgroundImage: 'url(https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg?auto=compress&cs=tinysrgb&w=600)' }}
              />
              <div
                className="h-64 rounded-2xl bg-cover bg-center shadow-lg mt-8"
                style={{ backgroundImage: 'url(https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=600)' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target size={36} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower individuals of all ages to achieve optimal physical function and quality of life through personalized, evidence-based physiotherapy care delivered with compassion and excellence.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Eye size={36} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading physiotherapy clinic recognized for transforming lives, advancing the field through innovation, and setting new standards in patient care and rehabilitation outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart size={36} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Integrity, compassion, excellence, and continuous improvement guide everything we do. We treat every patient as a valued partner in their healing journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Us Unique</h2>
            <p className="text-xl text-gray-600">The PhysioLife difference</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Specialized Expertise',
                description: 'Our team includes specialists in pediatrics, women\'s health, neurology, orthopedics, and sports medicine, ensuring expert care for every condition.',
              },
              {
                title: 'Holistic Approach',
                description: 'We address not just symptoms but root causes, considering physical, emotional, and lifestyle factors in your treatment plan.',
              },
              {
                title: 'Advanced Technology',
                description: 'State-of-the-art equipment including electrotherapy, ultrasound, and modern rehabilitation tools for optimal results.',
              },
              {
                title: 'Family-Centered Care',
                description: 'We involve families in the treatment process, providing education and support for long-term success.',
              },
              {
                title: 'Flexible Scheduling',
                description: 'Extended hours and same-day appointments available to accommodate your busy lifestyle.',
              },
              {
                title: 'Proven Results',
                description: 'Thousands of successful patient outcomes backed by evidence-based protocols and continuous outcome tracking.',
              },
            ].map((item, index) => (
              <div key={index} className="flex space-x-4 p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <CheckCircle size={24} className="text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Credentials & Certifications</h2>
            <p className="text-xl text-gray-600">Accredited excellence you can trust</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'ISO Certified', subtitle: 'Quality Management' },
              { icon: Briefcase, title: 'Licensed Practitioners', subtitle: 'Board Certified' },
              { icon: Users, title: 'Member APTA', subtitle: 'Professional Association' },
              { icon: CheckCircle, title: 'Insurance Approved', subtitle: 'Major Providers' },
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <cert.icon size={48} className="text-teal-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Facility</h2>
            <p className="text-xl text-gray-600">Modern, comfortable, and designed for healing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="h-80 rounded-2xl bg-cover bg-center shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/7659579/pexels-photo-7659579.jpeg?auto=compress&cs=tinysrgb&w=800)' }}
            />
            <div
              className="h-80 rounded-2xl bg-cover bg-center shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/4506270/pexels-photo-4506270.jpeg?auto=compress&cs=tinysrgb&w=800)' }}
            />
            <div
              className="h-80 rounded-2xl bg-cover bg-center shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/7659587/pexels-photo-7659587.jpeg?auto=compress&cs=tinysrgb&w=800)' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
