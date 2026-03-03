import { useState, FormEvent } from 'react';
import { Search, FileText, User, Calendar, CreditCard, Receipt, Loader2 } from 'lucide-react';

interface InvoiceDetails {
  name: string;
  serviceType: string;
  invoiceDate: string;
  amountPaid: string;
  remaining: string;
  table: string[][];
}

export default function InvoiceSearch() {
  const [idNumber, setIdNumber] = useState('');
  const [invoices, setInvoices] = useState<string[]>([]);
  const [selectedInvoice, setSelectedInvoice] = useState('');
  const [invoiceDetails, setInvoiceDetails] = useState<InvoiceDetails | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState<'search' | 'select' | 'details'>('search');

  // Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxJJSVB_yXfJ6wn0b2FsApYfuFOAqEtU3WORY_YacWnlTrr23BF9C5pLIi0rybam5UF/exec';

  const handleSearchById = async (e: FormEvent) => {
    e.preventDefault();
    if (!idNumber.trim()) return;

    setIsSearching(true);
    setError('');
    setInvoices([]);
    setSelectedInvoice('');
    setInvoiceDetails(null);

    try {
      const params = new URLSearchParams({
        action: 'searchInvoices',
        idNumber: idNumber.trim(),
      });

      const response = await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`);
      const data = await response.json();

      if (data.status === 'success' && data.invoices && data.invoices.length > 0) {
        setInvoices(data.invoices);
        setStep('select');
      } else {
        setError('لم يتم العثور على فواتير لرقم الهوية المدخل');
      }
    } catch (err) {
      console.error('Error searching invoices:', err);
      setError('حدث خطأ أثناء البحث. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSearching(false);
    }
  };

  const handleGetInvoiceDetails = async () => {
    if (!selectedInvoice) return;

    setIsLoadingDetails(true);
    setError('');

    try {
      const params = new URLSearchParams({
        action: 'getInvoiceDetails',
        invoiceNumber: selectedInvoice,
      });

      const response = await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`);
      const data = await response.json();

      if (data.status === 'success') {
        setInvoiceDetails(data.details);
        setStep('details');
      } else {
        setError('حدث خطأ في جلب تفاصيل الفاتورة');
      }
    } catch (err) {
      console.error('Error fetching invoice details:', err);
      setError('حدث خطأ أثناء جلب التفاصيل. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsLoadingDetails(false);
    }
  };

  const handleReset = () => {
    setIdNumber('');
    setInvoices([]);
    setSelectedInvoice('');
    setInvoiceDetails(null);
    setError('');
    setStep('search');
  };

  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      {/* Header */}
      <section className="relative py-16 bg-gradient-to-br from-teal-600 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">استعلام عن الجلسات</h1>
          <p className="text-xl text-teal-50">للمرضى المسجلين - ابحث عن جلساتك باستخدام رقم الهوية</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step 1: Search by ID */}
          {step === 'search' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                أدخل رقم الهوية
              </h2>
              <form onSubmit={handleSearchById} className="space-y-6">
                <div>
                  <label htmlFor="idNumber" className="block text-sm font-semibold text-gray-900 mb-2">
                    رقم الهوية *
                  </label>
                  <input
                    type="text"
                    id="idNumber"
                    required
                    value={idNumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all text-right"
                    placeholder="أدخل رقم الهوية"
                    dir="rtl"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800">
                    <p className="font-medium">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSearching}
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSearching ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>جاري البحث...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      <span>بحث</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

          {/* Step 2: Select Invoice */}
          {step === 'select' && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                اختر رقم الفاتورة
              </h2>
              <p className="text-gray-600 mb-6 text-center">
                تم العثور على {invoices.length} فاتورة لرقم الهوية: {idNumber}
              </p>

              <div className="space-y-3 mb-6">
                {invoices.map((invoice, index) => (
                  <label
                    key={index}
                    className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedInvoice === invoice
                        ? 'border-teal-600 bg-teal-50'
                        : 'border-gray-200 hover:border-teal-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="invoice"
                      value={invoice}
                      checked={selectedInvoice === invoice}
                      onChange={(e) => setSelectedInvoice(e.target.value)}
                      className="w-5 h-5 text-teal-600 focus:ring-teal-500"
                    />
                    <span className="mr-3 font-medium text-gray-900 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-teal-600" />
                      فاتورة رقم: {invoice}
                    </span>
                  </label>
                ))}
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800 mb-6">
                  <p className="font-medium">{error}</p>
                </div>
              )}

              <div className="flex gap-4">
                <button
                  onClick={handleReset}
                  className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all"
                >
                  رجوع
                </button>
                <button
                  onClick={handleGetInvoiceDetails}
                  disabled={!selectedInvoice || isLoadingDetails}
                  className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isLoadingDetails ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>جاري التحميل...</span>
                    </>
                  ) : (
                    <span>عرض التفاصيل</span>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Invoice Details */}
          {step === 'details' && invoiceDetails && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  تفاصيل الفاتورة
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <User className="w-5 h-5 text-teal-600" />
                      <span className="text-sm text-gray-500">الاسم</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-lg">{invoiceDetails.name}</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="w-5 h-5 text-teal-600" />
                      <span className="text-sm text-gray-500">نوع الخدمة</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-lg">{invoiceDetails.serviceType}</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-teal-600" />
                      <span className="text-sm text-gray-500">تاريخ الفاتورة</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-lg">{invoiceDetails.invoiceDate}</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Receipt className="w-5 h-5 text-teal-600" />
                      <span className="text-sm text-gray-500">رقم الفاتورة</span>
                    </div>
                    <p className="font-semibold text-gray-900 text-lg">{selectedInvoice}</p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <CreditCard className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-gray-500">تم دفع</span>
                    </div>
                    <p className="font-semibold text-green-700 text-lg">{invoiceDetails.amountPaid} ريال</p>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <CreditCard className="w-5 h-5 text-orange-600" />
                      <span className="text-sm text-gray-500">المتبقي</span>
                    </div>
                    <p className="font-semibold text-orange-700 text-lg">{invoiceDetails.remaining} ريال</p>
                  </div>
                </div>

                {/* Sessions Table */}
                {invoiceDetails.table && invoiceDetails.table.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">تفاصيل الجلسات</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-teal-600 text-white">
                            <th className="px-4 py-3 text-right">الجلسة</th>
                            <th className="px-4 py-3 text-right">التاريخ</th>
                            <th className="px-4 py-3 text-right">التوقيت</th>
                            <th className="px-4 py-3 text-right">اسم الدكتور</th>
                            <th className="px-4 py-3 text-right">حضر؟</th>
                          </tr>
                        </thead>
                        <tbody>
                          {invoiceDetails.table.map((row, index) => (
                            row.some(cell => cell && cell.toString().trim() !== '') && (
                              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                <td className="px-4 py-3 border-b border-gray-200 font-semibold text-teal-700">
                                  الجلسة #{index + 1}
                                </td>
                                {row.map((cell, cellIndex) => (
                                  <td key={cellIndex} className="px-4 py-3 border-b border-gray-200">
                                    {cell || '-'}
                                  </td>
                                ))}
                              </tr>
                            )
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <button
                    onClick={handleReset}
                    className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all"
                  >
                    بحث جديد
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
