import { Zap, Hand, Radio, Activity, Waves, Dumbbell, Brain, TrendingUp } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export default function Techniques() {
  const { navigate } = useRouter();
  const mainTechniques = [
    {
      icon: Zap,
      title: 'الوخز بالإبر الجاف',
      image: `${import.meta.env.BASE_URL}dry-needling.jpg`,
      description: 'تقنية متقدمة تستخدم إبراً دقيقة لتحرير شد العضلات ونقاط الزناد، مما يعزز تخفيف الألم وتحسين الوظيفة.',
      benefits: [
        'يقلل ألم وشد العضلات',
        'يحسّن مدى الحركة',
        'يسرّع عملية الشفاء',
        'يعالج حالات الألم المزمن',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Hand,
      title: 'العلاج اليدوي',
      image: `${import.meta.env.BASE_URL}Pictures/manual-therapy.jpg`,
      description: 'تقنيات يدوية تشمل تحريك المفاصل وتدليك الأنسجة الرخوة وتحرير اللفافة العضلية لاستعادة الحركة وتقليل الألم.',
      benefits: [
        'يحسّن حركة المفاصل',
        'يخفف القيود في الأنسجة الرخوة',
        'يعزز الدورة الدموية',
        'يقلل الألم والتيبس',
      ],
      color: 'from-teal-500 to-green-500',
    },
    {
      icon: Activity,
      title: 'الشد اليدوي',
      image: `${import.meta.env.BASE_URL}Pictures/manual-traction.png`,
      description: 'تقنية شد يدوي لطيفة لتخفيف الضغط عن المفاصل الفقرية وتخفيف ضغط الأعصاب وتقليل الألم في الرقبة والظهر.',
      benefits: [
        'يخفف ضغط الأعصاب',
        'يقلل الضغط على الأقراص',
        'يخفف آلام الرقبة والظهر',
        'يحسّن حركة العمود الفقري',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Waves,
      title: 'العلاج بالموجات فوق الصوتية',
      image: `${import.meta.env.BASE_URL}Pictures/ultrasound-therapy.jpg`,
      description: 'موجات صوتية لتعزيز شفاء الأنسجة وتقليل الالتهاب وتحسين تدفق الدم إلى المناطق المصابة.',
      benefits: [
        'يسرّع إصلاح الأنسجة',
        'يقلل الالتهاب',
        'يحسّن الدورة الدموية',
        'يعالج إصابات الأنسجة العميقة',
      ],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Dumbbell,
      title: 'برامج الحركة والقوة',
      image: `${import.meta.env.BASE_URL}Pictures/physical-therapy-exercise.webp`,
      description: 'برامج تمارين مخصصة لاستعادة الوظيفة وبناء القوة وتحسين المرونة والوقاية من الإصابات المستقبلية.',
      benefits: [
        'يزيد القوة الوظيفية',
        'يعزز المرونة والتوازن',
        'يمنع الإصابة المتكررة',
        'يحسّن اللياقة البدنية العامة',
      ],
      color: 'from-green-500 to-teal-500',
    },
  ];

  const electricalTherapies = [
    {
      name: 'TENS - التحفيز الكهربائي عبر الجلد',
      description: 'لتخفيف الألم الحاد والمزمن وتحفيز المسارات العصبية الحسية.',
    },
    {
      name: 'NMES / EMS - التحفيز الكهربائي العصبي العضلي',
      description: 'لتحفيز العضلات، تحسين القوة العضلية، ومنع الضمور بعد الإصابة أو الجراحة.',
    },
    {
      name: 'IFC - العلاج التداخلي',
      description: 'لتخفيف الألم العميق، تقليل الالتهاب، وتحسين الدورة الدموية.',
    },
    {
      name: 'Russian Current - التيار الروسي',
      description: 'لزيادة القوة العضلية وتحسين الأداء العضلي خاصة في حالات التأهيل الرياضي.',
    },
    {
      name: 'Faradic Current - التيار الفاراداي',
      description: 'لتحفيز العضلات السليمة وتحسين التون العضلي.',
    },
    {
      name: 'Galvanic Current - التيار الجلفاني',
      description: 'لتحفيز العضلات المصابة بإصابات الأعصاب والمساعدة في تقليل الوذمة.',
    },
    {
      name: 'HVPC - التيار النبضي عالي الجهد',
      description: 'لتقليل التورم، تسريع التئام الجروح، وتخفيف الألم.',
    },
    {
      name: 'Microcurrent Therapy (MENS)',
      description: 'لتسريع التئام الأنسجة وتقليل الألم بتيارات منخفضة جداً.',
    },
    {
      name: 'Diadynamic Currents - التيارات الديناميكية',
      description: 'لتخفيف الألم، تحسين الدورة الدموية، وتقليل التشنج العضلي.',
    },
    {
      name: 'Biofeedback Therapy - العلاج بالارتجاع البيولوجي',
      description: 'لتحسين التحكم العصبي العضلي وزيادة الوعي العضلي أثناء التأهيل.',
    },
  ];

  const pediatricTechniques = [
    {
      name: 'NDT - العلاج العصبي التطوري',
      description: 'لتحسين التحكم الحركي، التوازن، ووضعيات الجسم لدى الأطفال ذوي الاضطرابات العصبية.',
    },
    {
      name: 'DMI - التدخل الحركي الديناميكي',
      description: 'لتحفيز الحركة النشطة ضد الجاذبية وتحسين القوة، التوازن، وردود الفعل الحركية.',
    },
    {
      name: 'CME - تمارين كويفاس ميديك',
      description: 'لتطوير المهارات الحركية الكبرى من خلال تحفيز الاستجابات الحركية دون دعم مباشر.',
    },
    {
      name: 'Prolonged Stretch - الإطالة المطولة',
      description: 'لتحسين المرونة وتقليل الشد العضلي، من خلال تطبيق إطالة ثابتة لفترة زمنية مناسبة دون حركات اندفاعية.',
    },
  ];

  const additionalTherapies = [
    {
      name: 'التصريف اللمفاوي',
      description: 'تقنية علاجية لتحسين تصريف السوائل اللمفاوية، تقليل التورم، وتسريع التعافي بعد الإصابات أو العمليات.',
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">تقنيات العلاج</h1>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto">
            نستخدم مزيجاً من المهارات اليدوية والأجهزة لضمان أفضل النتائج
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ندمج العلاج اليدوي التقليدي مع التكنولوجيا الحديثة لتقديم علاج شامل مصمم خصيصاً لحالتك وأهدافك.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {mainTechniques.map((technique, index) => (
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
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">الفوائد الرئيسية:</h4>
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

      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center space-x-4">
              <Radio size={48} className="text-blue-600" />
              <span>العلاج الكهربائي</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نستخدم مجموعة واسعة من التقنيات الكهربائية العلاجية المتقدمة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {electricalTherapies.map((therapy, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{therapy.name}</h3>
                <p className="text-gray-600 text-sm">{therapy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center space-x-4">
              <Brain size={48} className="text-pink-600" />
              <span>تقنيات متخصصة للأطفال</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              أساليب علاجية متقدمة لتأهيل الأطفال ذوي الاضطرابات العصبية والنمائية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pediatricTechniques.map((technique, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{technique.name}</h3>
                <p className="text-gray-600 leading-relaxed">{technique.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center space-x-4">
              <TrendingUp size={48} className="text-teal-600" />
              <span>علاجات إضافية</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
            {additionalTherapies.map((therapy, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{therapy.name}</h3>
                <p className="text-gray-600 leading-relaxed">{therapy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div
                className="h-80 lg:h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}Clinic/7e8519ec0ec723ccfac0930596cbcabb.jpg)` }}
              />
              <div className="p-12 flex flex-col justify-center text-white">
                <h2 className="text-4xl font-bold mb-6">خطط علاج مخصصة</h2>
                <p className="leading-relaxed mb-6">
                  كل مريض فريد، وكذلك كل خطة علاج. سيقيم فريقنا المتخصص حالتك ويجمع بين التقنيات الأكثر فعالية لتحقيق نتائج مثالية.
                </p>
                <p className="leading-relaxed mb-8">
                  نراقب تقدمك باستمرار ونعدّل بروتوكول العلاج لضمان أنك دائماً على أسرع طريق للتعافي.
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all self-start"
                >
                  حدد موعد تقييمك
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">معدات حديثة</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            عيادتنا مجهزة بأحدث التقنيات والأدوات العلاجية لضمان حصولك على رعاية بأعلى جودة.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="h-72 rounded-2xl bg-cover bg-center shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundImage: `url(${import.meta.env.BASE_URL}Clinic/e4707b1b1edfb8bda538f7dda1f4ac25.jpg)` }}
            />
            <div
              className="h-72 rounded-2xl bg-cover bg-center shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundImage: `url(${import.meta.env.BASE_URL}Clinic/012650ccaa08a1c7974cf6f7159a31f6.jpg)` }}
            />
            <div
              className="h-72 rounded-2xl bg-cover bg-center shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundImage: `url(${import.meta.env.BASE_URL}Clinic/273da6d5120e98bcec27f06a9b71e25c.jpg)` }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
