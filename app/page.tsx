import PartnerHighlites from '@/app/component/homepage/Partnerhightlite'
import HeaderSlide from './component/homepage/Homeprofileslide'
import Image from 'next/image'
import ClientList from './component/homepage/clients'
import { Quote } from "lucide-react";


function Homepage() {
  const isLoaded = true
  return (
    <div className=''>
      <HeaderSlide />
      <PartnerHighlites />
      <ClientList />
      <section className={`py-20 bg-drakGray mt-4 ${isLoaded ? 'animate-fade-in animate-delay-400' : 'opacity-0'}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-white text-3xl font-bold text-center mb-12"><span className="text-main">M</span>essage From CEO</h2>
      <div className=" md:flex-col justify-between items-center align-items-middle py-8">
        <Quote className="w-8 h-8 text-white" />
        <div className='flex w-1/2 justify-end'>
        <Image src="/user.png" alt='Ceo image' width={100} height={100}/>
        </div>
        <div className='p-4 py-8'>
          <p className='text-white font-serif flex relative'>
         At SHENZOR, we are proud to be at the forefront of advancing underground infrastructure inspection and maintenance in Saudi Arabia.
          With deep roots in the region and strong partnerships with global industry leaders, we bring world-class technology and expertise to 
          every project we undertake.<br/><br/>
        Our mission is simple: to empower municipalities, utility companies, and contractors with reliable, high-performance inspection systems 
        and services that improve decision-making, extend asset life, and ensure public safety.<br/><br/>
        We don’t just supply equipment—we stand by our clients with end-to-end support. From consultation and system integration to hands-on 
        training and after-sales service, our team is committed to your success. With a growing technical workforce and dedicated service
        facilities in Riyadh, and more to come across the Kingdom, we are well-positioned to support projects of any scale.<br/><br/>
        As we look to the future, we’re investing in innovation—developing integrated solutions tailored to local needs and assembling
        systems that combine the best technologies from across the world. Whether you are looking for a complete CCTV inspection unit,
         advanced combined cleaning and jetting trucks, cutting and rehabilitation unit, or tailored training programs, SHENZOR is your
          trusted partner.<br/><br/>
        Thank you, and we look forward to being a part of your success story.
        <span className='flex absolute right-52 top-[450px] italic'>Warm regards,</span>
        <span className='flex flex-col absolute right-12 top-[480px] italic'>
        <span className=''>- Eng. Abdulrahman S. Alweheid.</span>
        <span>Chief Executive Officer.</span>
         
        </span>
           </p>
      </div>
      </div>
    </div>
  </section>

    </div>
  )
}

export default Homepage
