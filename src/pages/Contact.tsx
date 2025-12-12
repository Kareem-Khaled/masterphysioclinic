import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { supabase } from '../lib/supabase';

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

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          phone: formData.phone,
          service_interest: formData.service,
          message: formData.message,
        },
      ]);

      if (error) throw error;

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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-teal-50 max-w-3xl mx-auto">
            Ready to start your journey to better health? Contact us today
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="pediatric">Pediatric Physiotherapy</option>
                    <option value="womens">Women's Health</option>
                    <option value="adult">Adult Physiotherapy</option>
                    <option value="neuro">Neurological Rehabilitation</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your condition or what you'd like to discuss..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3 text-green-800">
                    <CheckCircle size={24} className="flex-shrink-0" />
                    <p className="font-medium">Thank you! We'll contact you within 24 hours.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800">
                    <p className="font-medium">Something went wrong. Please try again or call us directly.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  We're here to answer any questions you may have about our services.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-teal-600 mt-2">Mon-Fri: 8AM - 8PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">info@physiolife.com</p>
                      <p className="text-sm text-purple-600 mt-2">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">123 Healthcare Boulevard</p>
                      <p className="text-gray-600">Medical District, City 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Working Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                        <p>Saturday: 9:00 AM - 5:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-8 text-white">
                <MessageSquare size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-3">WhatsApp Us</h3>
                <p className="mb-6 text-teal-50">
                  Get instant responses to your questions via WhatsApp
                </p>
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all inline-block"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">Conveniently located in the Medical District</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-96">
            <div
              className="w-full h-full bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin size={64} className="text-teal-600 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  Map integration placeholder
                  <br />
                  <span className="text-sm">123 Healthcare Boulevard, Medical District</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
