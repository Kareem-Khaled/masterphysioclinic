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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">من نحن</h1>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto">
            ملتزمون بتحويل الحياة من خلال خدمات علاج طبيعي وتأهيل متميزة
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">من نحن</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                في عيادتنا، تتمثل رسالتنا في دعم صحة وحركة الأسرة في كل مراحل الحياة.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                نقدّم رعاية متخصصة لحديثي الولادة والأطفال الذين يعانون من تأخر التطور الحركي، تعديل المشي، الحالات العصبية، والتشوهات الخلقية مثل القدم الحنفاء وتمارين النمو الحركي.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                للنساء، نوفر رعاية الحمل، إعادة التأهيل بعد الولادة، علاج انفصال عضلات البطن، وعلاج ضعف قاع الحوض.
              </p>
              <p className="text-gray-600 leading-relaxed">
                للبالغين وكبار السن، نتخصص في الحالات العضلية والعصبية، الآلام المزمنة وإعادة تأهيل الإصابات. فريقنا مؤهل وعلى أعلى مستوى، ويقدم علاجًا آمنًا قائمًا على الأدلة العلمية مع متابعة دقيقة للتقدّم العلاجي.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div
                className="h-64 rounded-2xl bg-cover bg-center shadow-lg"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}Clinic/83eda45ff120b981026552dcb61ea8b3.jpg)` }}
              />
              <div
                className="h-64 rounded-2xl bg-cover bg-center shadow-lg mt-8"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}Clinic/ac9acaba6c811aced0896e70ea96bf9d.jpg)` }}
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">رسالتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                دعم صحة وحركة الأسرة في كل مراحل الحياة من خلال تقديم رعاية علاج طبيعي متخصصة وقائمة على الأدلة العلمية.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Eye size={36} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">رؤيتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                أن نكون العيادة الرائدة في تقديم خدمات علاج طبيعي عالية الجودة باستخدام أحدث التقنيات وخطط علاجية مخصصة لكل حالة.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart size={36} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">قيمنا</h3>
              <p className="text-gray-600 leading-relaxed">
                الجودة، الاحترافية، والتميز في كل ما نقوم به. نعامل كل مريض برعاية فائقة واهتمام شخصي.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ما يميزنا</h2>
            <p className="text-xl text-gray-600">الفرق الذي نصنعه</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'أخصائيون مرخّصون وذوو خبرة',
                description: 'فريقنا من المتخصصين المؤهلين تأهيلاً عالياً في تأهيل الأطفال، صحة المرأة، والعلاج العصبي والعضلي الهيكلي.',
              },
              {
                title: 'تجهيزات حديثة وغرف علاج خاصة',
                description: 'معدات متطورة وأحدث التقنيات في علاج طبيعي مريح وخاص.',
              },
              {
                title: 'اختصاصيون في علاج وتأهيل الأطفال',
                description: 'خبرة واسعة في تأهيل الأطفال باستخدام أحدث الأساليب العلاجية مثل NDT وDMI وCME.',
              },
              {
                title: 'رعاية ما قبل وبعد الولادة',
                description: 'برامج متخصصة للنساء في جميع مراحل الحمل والولادة والتعافي.',
              },
              {
                title: 'خطط علاجية فردية',
                description: 'كل خطة علاجية مصممة خصيصاً بناءً على حالة المريض وأهدافه الشخصية.',
              },
              {
                title: 'معالجات إناث متاحات',
                description: 'نوفر معالجات إناث متخصصات لضمان راحة جميع المرضى.',
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">منشأتنا</h2>
            <p className="text-xl text-gray-600">حديثة ومريحة ومصممة للشفاء</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="h-80 rounded-2xl bg-cover bg-center shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundImage: `url(${import.meta.env.BASE_URL}Clinic/e4707b1b1edfb8bda538f7dda1f4ac25.jpg)` }}
            />
            <div
              className="h-80 rounded-2xl bg-cover bg-center shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundImage: `url(${import.meta.env.BASE_URL}Clinic/012650ccaa08a1c7974cf6f7159a31f6.jpg)` }}
            />
            <div
              className="h-80 rounded-2xl bg-cover bg-center shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundImage: `url(${import.meta.env.BASE_URL}Clinic/273da6d5120e98bcec27f06a9b71e25c.jpg)` }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
