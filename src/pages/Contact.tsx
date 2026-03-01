import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyLHxcTuV0HdhwU2nQAnfAgz4JAwCAaRI2x9hWhzKMe4QLeoo6Z4wH5XQOxx3mAMdFj/exec';

    try {
      // Use POST with FormData for better handling of long messages
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('service', formData.service);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('timestamp', new Date().toISOString());

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend,
      });

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="relative py-20 bg-gradient-to-br from-teal-600 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">تواصل معنا</h1>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto">
            هل أنت مستعد لبدء رحلتك نحو صحة أفضل؟ تواصل معنا اليوم
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">أرسل لنا رسالة</h2>
              <p className="text-gray-600 mb-8">
                املأ النموذج أدناه وسيتواصل معك فريقنا خلال 24 ساعة.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
                    placeholder="أحمد محمد"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    رقم الهاتف *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
                    placeholder="+966 50 123 4567"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                    الخدمة المهتم بها
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
                  >
                    <option value="">اختر خدمة</option>
                    <option value="pediatric">العلاج الطبيعي للأطفال</option>
                    <option value="womens">صحة المرأة</option>
                    <option value="adult">العلاج الطبيعي للبالغين</option>
                    <option value="neuro">التأهيل العصبي</option>
                    <option value="other">أخرى / غير متأكد</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all resize-none"
                    placeholder="أخبرنا عن حالتك أو ما تريد مناقشته..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3 text-green-800">
                    <CheckCircle size={24} className="flex-shrink-0" />
                    <p className="font-medium">شكراً لك! سنتواصل معك خلال 24 ساعة.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800">
                    <p className="font-medium">حدث خطأ ما. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>جاري الإرسال...</span>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>إرسال الرسالة</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">معلومات التواصل</h2>
                <p className="text-gray-600 mb-8">
                  نحن هنا للإجابة على أي أسئلة قد تكون لديك حول خدماتنا.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">الهاتف</h3>
                      <p className="text-gray-600" dir="ltr">+966 50 790 0310</p>
                      <p className="text-sm text-teal-600 mt-2">السبت - الخميس: 2-10 م</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">البريد الإلكتروني</h3>
                      <p className="text-gray-600">masterphysio.sa@gmail.com</p>
                      <p className="text-sm text-purple-600 mt-2">سنرد خلال 24 ساعة</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">العنوان</h3>
                      <p className="text-gray-600">8013 سلمه بنت هشام بن المغيرة</p>
                      <p className="text-gray-600">حي شظاة، المدينة المنورة</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">ساعات العمل</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>السبت - الخميس: 2:00 م - 10:00 م</p>
                        <p>الجمعة: مغلق</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-8 text-white">
                <MessageSquare size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-3">تواصل معنا عبر واتساب</h3>
                <p className="mb-6 text-teal-50">
                  احصل على إجابات فورية لأسئلتك عبر واتساب
                </p>
                <a
                  href="https://wa.me/966507900310"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all inline-block"
                >
                  دردش عبر واتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">اعثر علينا</h2>
            <p className="text-xl text-gray-600">موقع مريح في المنطقة الطبية</p>            <a
              href="https://www.google.com/maps/place/%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9+%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D9%84%D8%AC+%D8%A7%D9%84%D8%A8%D8%A7%D8%B1%D8%B9+%D9%84%D9%84%D8%B9%D9%84%D8%A7%D8%AC+%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A+Master+Physio+Clinic+for+Physical+Therapy%E2%80%AD/@24.4972378,39.657619,17z/data=!3m1!4b1!4m6!3m5!1s0x15bd9700442bf4cd:0x1b4576600992a024!8m2!3d24.4972378!4d39.657619!16s%2Fg%2F11yb399_6j"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-teal-600 hover:text-teal-700 font-semibold"
            >
              افتح في خرائط Google ←
            </a>          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.982789!2d39.6554443!3d24.4972378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bd9700442bf4cd%3A0x1b4576600992a024!2z2LnZitin2K_YqSDYp9mE2YXYudin2YTYrCDYp9mE2KjYp9ix2Lkg2YTZhNi52YTYp9isINin2YTYt9io2YrYudmK!5e0!3m2!1sar!2ssa!4v1704567890123!5m2!1sar!2ssa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع عيادة المعالج البارع"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
