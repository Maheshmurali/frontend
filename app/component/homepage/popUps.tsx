'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, MapPin, Calendar } from 'lucide-react';
import Location from "../../../public/POPUP/IFAT 2026.png"
import BackgroundImg from "../../../public/POPUP/background-pattern.jpeg" 

interface ExhibitionPopupProps {
  onClose?: () => void;
}

export default function ExhibitionPopup({ onClose }: ExhibitionPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300);
  };

  if (!isVisible && !isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-500 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        
        <div className="absolute inset-0 z-0">
          <Image 
            src={BackgroundImg} 
            alt="background" 
            fill 
            className="object-cover opacity-100" 
            priority
          />
        </div>

        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-ping"></div>
                <div className="absolute inset-0 border-4 border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              </div>
              <p className="text-gray-600 font-medium animate-pulse">Loading...</p>
            </div>
          </div>
        )}

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-main shadow-lg transition-all duration-200 hover:scale-110 group"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
        </button>

        
        <div className="relative z-10 overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className=" text-white p-8 text-center">
            <div className="animate-fade-in">
              <div className="inline-block mb-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 animate-bounce">
                  <Calendar className="w-8 h-8" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 animate-slide-up">
                IFAT Saudi Arabia 2026
              </h2>
              <div className="flex items-center justify-center gap-2 text-slate-100 animate-slide-up animation-delay-200">
                <MapPin className="w-5 h-5 text-main" />
                <p className="text-lg">Riyadh Front Exhibition & Conference Center</p>
              </div>
              <p className="text-xl mt-2 font-semibold text-slate-100 animate-slide-up animation-delay-300">
                26-28 January 2026
              </p>
            </div>
          </div>

          <div className="p-8 space-y-8">
            <div className="space-y-6 animate-slide-up animation-delay-400">
              <div className="text-right" dir="rtl">
           {/**     <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-main pb-2 inline-block">
                  دعوة خاصة
                </h3>
                <p className="text-white leading-relaxed mb-4">
                  يسرّ فريق شركة شنزر دعوتكم لحضور جناحنا في معرض IFAT Saudi Arabia، والذي سيُقام خلال الفترة 26–28 يناير 2026 في مركز واجهة الرياض للمعارض والمؤتمرات.
                </p> */}

                <div className="bg-white/50 backdrop-blur-md rounded-xl p-6 my-6 border border-white/40">
                  <h4 className="text-xl font-bold text-black mb-4">لماذا شنزر SHENZOR؟</h4>
                  <ul className="space-y-3 text-gray-900">
                    <li className="flex items-start gap-3">
                      <span className="text-main text-xl mt-1">•</span>
                      <span>حلول فحص مُثبتة وموثوقة لشبكات الصرف الصحي ومياه الأمطار</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-main text-xl mt-1">•</span>
                      <span>تقنيات فحص متطورة باستخدام كاميرات الدوائر التلفزيونية المغلقة CCTV وأنظمة الروبوتات المتكاملة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-main text-xl mt-1">•</span>
                      <span>خدمات التشغيل والصيانة والتدريب المعتمدة محليًا</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-main text-xl mt-1">•</span>
                      <span>تقنيات روبوتية متقدمة لفحص وتنظيف وإعادة تأهيل شبكات الصرف الصحي ومياه الأمطار</span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-100 leading-relaxed mb-4">
                  تجارب حية للمنتجات، قارن الخيارات جنبًا إلى جنب واطرح الأسئلة المهمة التي تساعدك في اتخاذ القرار.
                </p>

                <p className="text-gray-100 font-semibold">
                  إذا كانت هذه المجالات ضمن اهتماماتك أو مرتبطة بعملك في قطاعات البيئة أو إدارة المياه في المملكة، نرجو تشريفنا بزيارتكم
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

              <div className="text-left">
             {/**   <h3 className="text-2xl font-bold text-gray-100 mb-4 border-b-2 border-main pb-2 inline-block">
                  Special Invitation
                </h3>
                <p className="text-gray-100 leading-relaxed mb-4">
                  SHENZOR team is pleased to invite you to visit our booth at IFAT Saudi Arabia, taking place from 26–28 January 2026 at the Riyadh Front Exhibition & Conference Center.
                </p> */}

                <div className="bg-white/50 backdrop-blur-md rounded-xl p-6 my-6 border border-white/40">
                  <h4 className="text-xl font-bold text-black mb-4"><span className='text-2xl'>W</span>hy SHENZOR?</h4>
                  <ul className="space-y-3 text-gray-900">
                    <li className="flex items-start gap-3">
                      <span className="text-main text-xl mt-1">•</span>
                      <span>Proven and reliable inspection solutions for sewer and stormwater networks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-main text-xl mt-1">•</span>
                      <span>Advanced inspection technologies using CCTV systems and integrated robotic systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-main text-xl mt-1">•</span>
                      <span>Locally delivered operation, maintenance, and certified training services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-main text-xl mt-1">•</span>
                      <span>Advanced robotic technologies for the inspection, cleaning, and rehabilitation of sewer and stormwater networks</span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-100 leading-relaxed mb-4">
                  Experience live product demonstrations, compare solutions side by side, and ask the critical questions that support informed decision-making.
                </p>

                <p className="text-gray-100 font-semibold">
                  If these areas align with your interests or your role within the environmental or water management sectors in the Kingdom, we would be honored to welcome you at our booth.
                </p>
              </div>
            </div>

            <div className="animate-slide-up animation-delay-600">
              <h4 className="text-xl font-bold text-gray-100 mb-4 text-center">
                <MapPin className="inline-block w-6 h-6 mr-2 text-main" />
                Booth Location (3G10)
              </h4>
              <div className="relative w-full h-64 bg-gradient-to-br from-gray-100/50 to-gray-200/50 rounded-xl overflow-hidden shadow-inner flex items-center justify-center group border border-white/40">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="text-center z-10">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  
                  <div className="text-sm text-gray-500 mt-1"><Image src={Location} alt='Location' fill className="object-contain" /></div>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-4 animate-slide-up animation-delay-700">
           <a 
            href='https://register.ifat-saudiarabia.com/DMG_Shop/IFAT26/?utm_source=direct-traffic&utm_medium=direct&utm_campaign=direct-url-entry&src=popup-opti'
                target="_blank"
                rel="noopener noreferrer">
               <button
                onClick={handleClose}
                className="px-12 py-4 bg-main text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                REGISTER NOW
              </button>
           </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animation-delay-700 {
          animation-delay: 0.7s;
          opacity: 0;
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }

        .scrollbar-thumb-gray-300::-webkit-scrollbar-thumb {
          background-color: #d1d5db;
          border-radius: 4px;
        }

        .scrollbar-track-gray-100::-webkit-scrollbar-track {
          background-color: #f3f4f6;
        }
      `}</style>
    </div>
  );
}