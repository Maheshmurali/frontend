"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
const products = [
  {
    name: "iPEK",
    title:"Rovion",
    image: "/partners/Rovion.jpg",
    link:'/iPEK',
    description:
      "ROVION is built with flexibility in mind. Fully scalable and with 100% compatible components, it’s tailored to fit your inspection needs, allowing for precise evaluations of pipe diameters ranging from DN100 to DN2000 .",
  },
  {
    name: "WinCan",
    title: "WinCanVX",
    image: "/partners/WinCanVX.png",
    link:'/wincan',
    description:
      "WinCan was the first sewer inspection software ever developed and remains the most trusted brand in the market. Commitment to innovation has helped us revolutionize the way you gain insight from inspection data—insight that helps you plan maintenance, improve performance and achieve compliance",
 },
  {
    name: "DietmarKaiser",
    title: "DYNA Combi",
    image: "/partners/DYNA Combi.jpg",
    link:'/dietmarkiser',
    description:
      "The proven combination of pumps, components and assemblies from our own production make the DYNA Combi unique.This means that individual customer wishes and requirements can be optimally implemented.",
  },
  {
    name: "enz",
    title :"eBulldog",
    image: "/partners/eBulldog.jpg",
    link:'/enz',
    description:
      "The enz® Camera Nozzle adds a new dimension to the enz® nozzle product range! The modular design allows universal use with all nozzle types, such as the eBomb, the eBulldog or the eScraper, and thus guarantees streak-free, all-around cleaning in every application.",
    },
  {
    name: "IMS Robotics",
    title :"DRIVEpluse",
    image: "/partners/ims.jpg",
    link:'/ims',
    description:
      "The DRIVEplus CLEANER enables fast and reliable removal of deposits. concrete other materials using ultra high pressure water up to 2,500 bar. The ultraater pressure adaptation is versatile and suitable for main sewers with diame1rom DN 200 to DN 600. The rotary swivel drive (DSA), which can be rotated.",
  },
    {
    name: "Sortimo",
    title :"SR5-The Next Generation",
    image: "/partners/sortimosr5.jpg",
    link:'/sortimo',
    description:
      "Sortimo have developed the fifth generation of van racking - it is an intelligent mobility system which offers the user maximum efficiency in day-to-day working. SR5 embodies more than 50 years of experience, passion and expertise in a single unit. ",
  },
     {
    name: "Envirobot",
    title :"VIPER®",
    image: "/partners/envirobot.jpg",
    link:'/envirobot',
    description:
      "VIPER individually to your area of ​​application we offer different variants that fit perfectly to your needs - from the power pack with a particularly large range to the VIPER light, our portable compact solution. ",
  },
];

function PartnerHighlites() {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [isReversing, setIsReversing] = useState(false);

  useEffect(() => {
    const productTimer = setInterval(() => {
      setCurrentProduct((prev) => {
        if (!isReversing) {
          if (prev + 1 === products.length) {
            setIsReversing(true);
            return prev - 1;
          }
          return prev + 1;
        } else {
          if (prev === 0) {
            setIsReversing(false);
            return prev + 1;
          }
          return prev - 1;
        }
      });
    }, 7000);

    return () => {
      clearInterval(productTimer);
    };
  }, [isReversing]);

  const scrollNavigation = (direction : string) => {
    const container = document.getElementById('product-nav-container');
    if (container) {
      const scrollAmount = 120;
      container.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="min-h-screen bg-drakGray">
      <div className="mx-auto px-4 sm:px-8 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            <span className="text-main text-4xl">O</span>ur Featured Products
          </h2>
          

          <div className="hidden lg:flex justify-center gap-8 mb-12">
            {products.map((product, index) => (
              <button
                key={index}
                className={`text-lg font-semibold pb-2 border-b-2 transition-all ${
                  index === currentProduct
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent text-white hover:text-gray-300"
                }`}
                onClick={() => setCurrentProduct(index)}
              >
                {product.name}
              </button>
            ))}
          </div>


          <div className="lg:hidden mb-8 relative">
            <div className="flex items-center justify-center">
              <button
                onClick={() => scrollNavigation('left')}
                className="absolute left-0 z-10 bg-gray-800 hover:bg-gray-700 rounded-full p-2 shadow-lg transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              
              <div 
                id="product-nav-container"
                className="flex gap-2 overflow-x-auto scrollbar-hide mx-8 py-2"
                style={{ scrollBehavior: 'smooth' }}
              >
                {products.map((product, index) => (
                  <button
                    key={index}
                    className={`text-sm font-semibold pb-2 border-b-2 transition-all whitespace-nowrap px-3 flex-shrink-0 ${
                      index === currentProduct
                        ? "border-blue-500 text-blue-500"
                        : "border-transparent text-white hover:text-gray-300"
                    }`}
                    onClick={() => setCurrentProduct(index)}
                  >
                    {product.name}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => scrollNavigation('right')}
                className="absolute right-0 z-10 bg-gray-800 hover:bg-gray-700 rounded-full p-2 shadow-lg transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="transition-transform duration-500 ease-in-out flex"
            style={{ transform: `translateX(-${currentProduct * 100}%)` }}
          >
            {products.map((product, index) => (
              <div key={index} className="w-full flex-shrink-0 flex-col">
                <div className="w-full flex-shrink-0 flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="w-full md:w-1/2">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={520}
                      height={520}
                      className="w-full h-[250px] md:h-[400px] object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <Link href={`/products/${product.link}`}>  
                      <button className="bg-blue-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:bg-blue-600 
                        transition-colors w-fit font-semibold">
                        View Details
                      </button>
                    </Link>
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerHighlites;