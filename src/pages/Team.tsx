import { Award, GraduationCap, Heart } from 'lucide-react';

export default function Team() {
  const doctors = [
    {
      name: 'د/ راكان فهد المطيري',
      image: `${import.meta.env.BASE_URL}Doctors/1.jpg`,
      specialization: ['طب الأطفال', 'العلاج الطبيعي المتقدم'],
      bio: 'متخصص في تقييم وعلاج الأطفال باستخدام أحدث الأساليب العلمية. يستخدم البروتوكولات الحركية المكثفة وتمارين التحكم العضلي للحد من التشنج.',
      education: 'بكالوريوس العلاج الطبيعى',
      certifications: [
        'ممارس معتمد في الإبر الجافة',
        'ممارس معتمد للتشخيص والعلاج بطريقة GMFM',
      ],
      expertise: [
        'تقييم الأطفال بمعيار GMFM المعتمد',
        'العلاج بطريقة NDT المتقدمة للأطفال',
        'تأهيل قبل ومابعد العمليات الجراحية للاطفال',
        'تأهيل المشاكل العضلية والهيكلية لدى الأطفال',
        'تأهيل حالات الشلل الدماغي والتأخر الحركي',
      ],
    },
    {
      name: 'د/ عبدالرحمن الجهمي',
      image: `${import.meta.env.BASE_URL}Doctors/2.jpg`,
      specialization: ['طب الأطفال', 'الأعصاب', 'العلاج اليدوي'],
      bio: 'خبير في تأهيل الأطفال والحالات العصبية. متخصص في تشخيص وعلاج اضطرابات الاتزان والدوار الناتج عن اضطرابات الأذن.',
      education: 'بكالوريوس العلاج الطبيعى',
      certifications: [
        'ممارس معتمد في الإبر الجافة',
        'ممارس معتمد للتشخيص والعلاج بطريقة GMFM',
        'ممارس معتمد للتشخيص وعلاج اضطرابات الاتزان',
        'ممارس معتمد في العلاج اليدوي',
      ],
      expertise: [
        'تقييم الأطفال بمعيار GMFM',
        'العلاج بطريقة NDT المتقدمة للاطفال',
        'تأهيل قبل ومابعد العمليات الجراحية للاطفال',
        'تأهيل مشاكل الاتزان والدوار',
        'تأهيل مرضى الأعصاب (الجلطات - التصلب اللويحي)',
      ],
    },
    {
      name: 'د/ عبدالله الشنقيطي',
      image: `${import.meta.env.BASE_URL}Doctors/3.jpg`,
      specialization: ['طب الأطفال', 'العلاج العصبي', 'العظام'],
      bio: 'متخصص في استخدام الأساليب العلمية الحديثة للحد من التشنج والبروتوكولات الحركية المكثفة وتمارين التحكم العضلي.',
      education: 'بكالوريوس العلاج الطبيعى',
      certifications: [
        'ممارس معتمد في الإبر الجافة',
      ],
      expertise: [
        'العلاج بطريقة NDT المتقدمة للأطفال',
        'البروتوكولات الحركية المكثفة للحد من التشنج',
        'تأهيل قبل ومابعد العمليات الجراحية للاطفال',
        'تأهيل حالات الشلل الدماغي والتأخر الحركي',
        'تأهيل مشاكل الجهاز العضلي الهيكلي',
      ],
    },
    {
      name: 'د/ عبدالعزيز اسامه',
      image: `${import.meta.env.BASE_URL}Doctors/4.jpg`,
      specialization: ['الإصابات الرياضية', 'العظام', 'الأعصاب'],
      bio: 'خبير في تأهيل الإصابات الرياضية والعمليات الجراحية. متخصص في علاج الوذمة اللمفاوية على نهج المدرسة التشيكية واليابانية.',
      education: 'بكالوريوس العلاج طبيعى',
      certifications: [
        'ممارس معتمد في الإبر الجافة',
        'ممارس معتمد في تأهيل الإصابات الرياضية',
        'ممارس معتمد في تقويم العمود الفقري',
        'ممارس معتمد في علاج الوذمة اللمفاوية',
      ],
      expertise: [
        'الإصابات الرياضية (تمزق العضلات - التواء الكاحل)',
        'تأهيل قبل ومابعد العمليات الجراحية',
        'تأهيل المشاكل العضلية والهيكلية',
        'تأهيل ما بعد الإصابات العصبية',
        'علاج الوذمة اللمفاوية',
      ],
    },
    {
      name: 'د/ أحلام الحربي',
      image: `${import.meta.env.BASE_URL}Doctors/5.jpg`,
      specialization: ['صحة المرأة', 'العلاج الحركي', 'التأهيل الوظيفي'],
      bio: 'متخصصة في صحة المرأة والتأهيل قبل وبعد الولادة. خبيرة في تأهيل وتقوية عضلات قاع الحوض والكور.',
      education: 'بكالوريوس العلاج الطبيعى',
      certifications: [
        'ممارس معتمد في الشريط اللاصق العلاجي',
        'ممارس معتمد في تحرير نقاط الضغط العضلية',
        'ممارس معتمد في تأهيل وتقوية عضلات الجذع',
        'ممارس معتمد في التأهيل الوظيفي والحركي',
        'ممارس معتمد في تأهيل الإصابات الرياضية',
        'ممارس معتمد في إدارة الألم بالعلاج الحركي',
        'ممارس معتمد في التقييم السريري والعلاج المبني على الدليل العلمي',
      ],
      expertise: [
        'تأهيل ما قبل وبعد العمليات الجراحية',
        'علاج وتأهيل المشاكل العضلية والهيكلية',
        'تأهيل الحالات العصبية للأطفال والكبار',
        'علاج وتأهيل مشاكل قاع الحوض',
        'تحسين وظيفة اليد والمهارات الحركية الدقيقة',
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">تعرف على فريقنا</h1>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto">
            معالجون طبيعيون متخصصون مكرسون لتعافيك ورفاهيتك
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              يتكون فريقنا من متخصصين مؤهلين بدرجة عالية ومتحمسين لمساعدتك في تحقيق أهدافك الصحية. كل عضو يقدم خبرة فريدة والتزاماً بالتميز.
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
                          <h4 className="font-bold text-gray-900 mb-1">التعليم</h4>
                          <p className="text-gray-700">{doctor.education}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Award size={24} className="text-teal-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">الشهادات</h4>
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
                          <h4 className="font-bold text-gray-900 mb-1">التخصصات</h4>
                          <p className="text-gray-700">{doctor.specialization.join(', ')}</p>
                        </div>
                      </div>

                      {doctor.expertise && (
                        <div className="flex items-start space-x-3">
                          <Heart size={24} className="text-teal-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-gray-900 mb-1">متخصص في</h4>
                            <ul className="space-y-1">
                              {doctor.expertise.map((exp, i) => (
                                <li key={i} className="text-gray-700 flex items-start text-sm">
                                  <span className="text-teal-600 mr-2">•</span>
                                  {exp}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">انضم إلى عائلتنا المتنامية من المرضى الراضين</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              جرب الرعاية المخصصة من فريقنا المتخصص. احجز استشارتك اليوم وابدأ رحلتك نحو صحة أفضل.
            </p>
            <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all">
              احجز موعد
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
