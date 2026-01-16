'use client'
import PartnerHighlites from '@/app/component/homepage/Partnerhightlite';
import HeaderSlide from './component/homepage/Homeprofileslide';
import Image from 'next/image';
import ClientList from './component/homepage/clients';
import { Quote } from 'lucide-react';
import ExhibitionPopup from './component/homepage/popUps';
import { useState } from 'react';

function Homepage() {
   const [showPopup, setShowPopup] = useState(true);
  const isLoaded = true;


  return (
    <div>
      {showPopup && <ExhibitionPopup onClose={() => setShowPopup(false)} />}
      <HeaderSlide />
      <PartnerHighlites />
      <ClientList />


      <section
        className={`py-16 bg-drakGray mt-6 ${
          isLoaded ? 'animate-fade-in animate-delay-400' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 max-w-4xl">

          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            <span className="text-main">M</span>essage From CEO
          </h2>


          <div className="flex justify-center mb-6">
            <Image
              src="/ceo.jpg"
              alt="CEO image"
              width={180}
              height={200}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>

          <div className="bg-opacity-10 rounded-lg relative">

            <div className="flex justify-end mb-4">
              <Quote className="w-8 h-8 text-white" />
            </div>

            <div className="text-white font-serif text-base sm:text-sm leading-relaxed text-justify">
              <p>
                At <strong>SHENZOR</strong>, we are proud to be at the forefront of advancing
                underground infrastructure inspection and maintenance in Saudi Arabia. With deep
                roots in the region and strong partnerships with global industry leaders, we bring
                world-class technology and expertise to every project we undertake.
              </p>
              <br />
              <p>
                Our mission is simple: to empower municipalities, utility companies, and
                contractors with reliable, high-performance inspection systems and services that
                improve decision-making, extend asset life, and ensure public safety.
              </p>
              <br />
              <p>
                We don’t just supply equipment—we stand by our clients with end-to-end support.
                From consultation and system integration to hands-on training and after-sales
                service, our team is committed to your success. With a growing technical workforce
                and dedicated service facilities in Riyadh, and more to come across the Kingdom, we
                are well-positioned to support projects of any scale.
              </p>
              <br />
              <p>
                As we look to the future, we’re investing in innovation—developing integrated
                solutions tailored to local needs and assembling systems that combine the best
                technologies from across the world. Whether you are looking for a complete CCTV
                inspection unit, advanced combined cleaning and jetting trucks, cutting and
                rehabilitation unit, or tailored training programs, SHENZOR is your trusted
                partner.
              </p>
              <br />
              <p>Thank you, and we look forward to being a part of your success story.</p>
            </div>


            <div className="mt-8 text-white italic text-right">
              <p>Warm regards,</p>
              <p className="font-semibold">- Eng. Abdulrahman S. Alweheid</p>
              <p className="text-sm">Chief Executive Officer</p>
              <div className='w-full flex justify-end py-1'>
                <Image src="/logo.png" alt='logo' width={75} height={50} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
