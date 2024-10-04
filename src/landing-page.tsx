import {
  Building,
  FileText,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen " dir="rtl">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b sticky top-0 z-50 bg-white ">
        <nav className="flex items-center justify-between w-full max-w-7xl mx-auto ">
          <div className="flex items-center space-x-4 ">
            <img src="./lg.svg" alt="logo" className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">
              شركة الأعمال المتميزة
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              className="text-sm font-medium hover:text-blue-600 transition-colors mx-4"
              href="#services"
            >
              خدماتنا
            </a>
            <a
              className="text-sm font-medium hover:text-blue-600 transition-colors mx-4"
              href="#about"
            >
              من نحن
            </a>
            <a
              className="text-sm font-medium hover:text-blue-600 transition-colors mx-4"
              href="#contact"
            >
              اتصل بنا
            </a>
          </div>
          <button className="hidden md:inline-flex py-2 px-3">ابدأ الآن</button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48  text-white">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none max-w-3xl">
                إنشاء شركتك بسهولة وسرعة وثقة
              </h1>
              <p className="mx-auto max-w-[700px] text-xl text-blue-100 md:text-2xl/relaxed lg:text-base/relaxed xl:text-2xl/relaxed">
                نساعدك في تأسيس شركتك والحصول على سجل تجاري موثق بكل يسر وفعالية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="bg-white text-blue-600 hover:bg-blue-50 py-2 px-3">
                  ابدأ الآن
                </button>
                <button className="bg-transparent py-2 px-3 border-white text-white hover:bg-white/10">
                  تعرف على المزيد
                </button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              خدماتنا المتميزة
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="card bg-blue-50 border-blue-100">
                <div>
                  <Building className="w-12 h-12 text-blue-600 mb-4" />
                  <div className="text-xl font-bold">تأسيس الشركات</div>
                </div>
                <div>
                  <p className="text-gray-600">
                    نساعدك في اختيار نوع الشركة المناسب وإتمام جميع الإجراءات
                    القانونية لتأسيسها بسرعة وكفاءة
                  </p>
                </div>
              </div>
              <div className="card bg-blue-50 border-blue-100">
                <div>
                  <FileText className="w-12 h-12 text-blue-600 mb-4" />
                  <div className="text-xl font-bold">إصدار السجل التجاري</div>
                </div>
                <div>
                  <p className="text-gray-600">
                    نتولى عملية إصدار السجل التجاري الموثق لشركتك بسرعة وكفاءة،
                    مع ضمان الامتثال لجميع المتطلبات القانونية
                  </p>
                </div>
              </div>
              <div className="card bg-blue-50 border-blue-100">
                <div>
                  <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
                  <div className="text-xl font-bold">
                    متابعة الإجراءات الحكومية
                  </div>
                </div>
                <div>
                  <p className="text-gray-600">
                    نقوم بمتابعة جميع الإجراءات الحكومية اللازمة لبدء نشاطك
                    التجاري، مما يوفر عليك الوقت والجهد
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">من نحن</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  نحن شركة متخصصة في مساعدة رواد الأعمال والشركات على تأسيس
                  أعمالهم بسهولة وسرعة. مع فريقنا من الخبراء القانونيين
                  والإداريين، نضمن لك تجربة سلسة وفعالة في إنشاء شركتك والحصول
                  على جميع الوثائق اللازمة.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" />
                    <span>أكثر من 10 سنوات من الخبرة</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" />
                    <span>فريق من الخبراء القانونيين والإداريين</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" />
                    <span>خدمة عملاء متميزة على مدار الساعة</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="./team.svg"
                  alt="فريق العمل"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white"
        >
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-12">اتصل بنا</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">معلومات الاتصال</h3>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6" />
                  <span>+966 5568 5 6789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6" />
                  <span>info@drt-serv.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6" />
                  <span>شارع الملك فهد، الرياض، المملكة العربية السعودية</span>
                </div>
              </div>
              <form className="space-y-4 group">
                <input
                  type="text"
                  placeholder="الاسم"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <input
                  type="text"
                  placeholder="رقم الهاتف"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />

                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 hover:bg-blue-50"
                >
                  إرسال
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p className="read-the-docs text-center px-5">
          جميع الحقوق محفوظة لدى شركة الاعمال المميزة 2025©
        </p>
      </footer>
    </div>
  );
}
