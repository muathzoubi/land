'use client'

import { useState } from 'react'
import './reg.css'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, push } from 'firebase/database'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPtI0KgL01TA_TKJtj2V8ryIlPvrPapVg",
  authDomain: "compajn.firebaseapp.com",
  projectId: "compajn",
  storageBucket: "compajn.appspot.com",
  messagingSenderId: "533578029706",
  appId: "1:533578029706:web:b9d73a4663b015fe39ab73",
  measurementId: "G-L08L9REDW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    experience: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleNext = () => {
    setStep(prevStep => prevStep + 1)
  }

  const handlePrevious = () => {
    setStep(prevStep => prevStep - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {

      const formRef = ref(database, 'forms')
    console.log('try:', formData,formRef)

      await push(formRef, formData)
      alert('تم تقديم الطلب بنجاح!')
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        experience: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
      })
      setStep(1)
    } catch (error) {
      console.error('Error submitting form:', error)
   //   setSubmitMessage('حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.')
    } finally {
  //    setIsSubmitting(false)
    }
  }
    console.log('تم إرسال النموذج:', formData)
    // هنا يمكنك إضافة منطق إرسال البيانات إلى الخادم
  

  return (
    <div className="app min-h-screen bg-gray-100 flex items-center justify-center p-4" dir="rtl">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            {step === 1 && 'المعلومات الشخصية'}
            {step === 2 && 'معلومات العمل'}
            {step === 3 && 'تأكيد الطلب'}
          </h2>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">الاسم</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="أدخل اسمك"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="أدخل بريدك الإلكتروني"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="أدخل رقم هاتفك"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">اسم الشركة</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="أدخل اسم الشركة"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">المنصب</label>
                  <input
                    id="position"
                    name="position"
                    type="text"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    placeholder="أدخل منصبك"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">الخبرة</label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    placeholder="اشرح خبرتك"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                  ></textarea>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-4">
              <h3>لتأكيد الطلب يرجى الضغط على تأكيد ثم سوف يتواصل معك فريقنا </h3>
              </div>
            )}
          </form>
        </div>
        <div className="px-6 py-4 bg-gray-50 flex justify-between">
          {step < 3 ? (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              التالي
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              إرسال
            </button>
          )}
          {step > 1 && (
            <button
              onClick={handlePrevious}
              className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              السابق
            </button>
          )}
        </div>
      </div>
    </div>
  )
}