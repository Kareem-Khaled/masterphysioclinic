import { Award, GraduationCap, Heart } from 'lucide-react';

export default function Team() {
  const doctors = [
    {
      name: 'Dr. Abd-Elrahman',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialization: ['Pediatrics', 'Neurology', 'Orthopedics'],
      bio: 'With over 10 years of experience in pediatric physiotherapy, Dr. Abd-Elrahman specializes in developmental disorders and neurological conditions in children. His patient-centered approach and expertise in early intervention have helped hundreds of families achieve remarkable outcomes.',
      education: 'PhD in Pediatric Physiotherapy',
      certifications: ['Board Certified Pediatric Specialist', 'NDT Certified'],
    },
    {
      name: 'Dr. Abd-Allah',
      image: 'https://images.pexels.com/photos/5215093/pexels-photo-5215093.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialization: ['Pediatrics', 'Neurology', 'Orthopedics'],
      bio: 'Dr. Abd-Allah brings extensive experience in treating complex neurological and orthopedic conditions in both children and adults. His holistic approach integrates manual therapy with advanced rehabilitation techniques for comprehensive care.',
      education: 'Master in Neurological Rehabilitation',
      certifications: ['Certified Manual Therapist', 'Orthopedic Clinical Specialist'],
    },
    {
      name: 'Dr. Abd-Alaziz',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialization: ['Neurology', 'Orthopedics'],
      bio: 'Specializing in neurological rehabilitation and orthopedic recovery, Dr. Abd-Alaziz has successfully treated patients recovering from stroke, spinal injuries, and complex orthopedic surgeries. His evidence-based practice ensures optimal functional outcomes.',
      education: 'Master in Orthopedic Physiotherapy',
      certifications: ['Certified Stroke Rehabilitation Specialist', 'Advanced Orthopedic Manual Therapist'],
    },
    {
      name: 'Dr. Rakan',
      image: 'https://images.pexels.com/photos/5215028/pexels-photo-5215028.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialization: ['Pediatrics', 'Neurology', 'Orthopedics'],
      bio: "Dr. Rakan's multidisciplinary expertise spans pediatric care, neurological rehabilitation, and orthopedic therapy. Known for his compassionate approach, he excels at building rapport with patients of all ages and creating effective treatment programs.",
      education: 'Master in Physiotherapy',
      certifications: ['Pediatric Developmental Specialist', 'Sports Injury Certified'],
    },
    {
      name: 'Dr. Ahlam',
      image: 'https://images.pexels.com/photos/5207236/pexels-photo-5207236.jpeg?auto=compress&cs=tinysrgb&w=600',
      specialization: ["Women's Health", 'Neurology', 'Orthopedics'],
      bio: 'Dr. Ahlam is our leading specialist in women\'s health physiotherapy, with particular expertise in postpartum recovery, pelvic floor rehabilitation, and pregnancy-related conditions. Her sensitive and personalized approach has made her a trusted advocate for women\'s wellness.',
      education: "Master in Women's Health Physiotherapy",
      certifications: ['Pelvic Floor Rehabilitation Specialist', 'Pre/Postnatal Exercise Specialist'],
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto">
            Expert physiotherapists dedicated to your recovery and wellbeing
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team consists of highly qualified specialists who are passionate about helping you achieve your health goals. Each member brings unique expertise and a commitment to excellence.
            </p>
          </div>

          <div className="space-y-16">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div
                    className="h-96 lg:h-[500px] rounded-3xl shadow-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${doctor.image})` }}
                  >
                    <div className="h-full w-full bg-gradient-to-t from-gray-900/60 to-transparent rounded-3xl flex items-end p-8">
                      <div className="text-white">
                        <h2 className="text-4xl font-bold mb-2">{doctor.name}</h2>
                        <div className="flex flex-wrap gap-2">
                          {doctor.specialization.map((spec, i) => (
                            <span
                              key={i}
                              className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="space-y-6">
                    <p className="text-gray-600 text-lg leading-relaxed">{doctor.bio}</p>

                    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 space-y-4">
                      <div className="flex items-start space-x-3">
                        <GraduationCap size={24} className="text-teal-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Education</h4>
                          <p className="text-gray-700">{doctor.education}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Award size={24} className="text-teal-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Certifications</h4>
                          <ul className="space-y-1">
                            {doctor.certifications.map((cert, i) => (
                              <li key={i} className="text-gray-700 flex items-start">
                                <span className="text-teal-600 mr-2">•</span>
                                {cert}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Heart size={24} className="text-teal-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">Specializations</h4>
                          <p className="text-gray-700">{doctor.specialization.join(', ')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Growing Family of Satisfied Patients</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience personalized care from our expert team. Book your consultation today and start your journey to better health.
            </p>
            <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all">
              Book an Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
