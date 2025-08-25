'use client';

import { useState, useEffect, use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CheckCircle, Zap, Eye, Wrench } from "lucide-react";
import { partnerProducts } from "@/lib/data";

// Accept both imported images and string URLs
type ImageType = string | StaticImageData;

interface Product {
  id: string | number;
  name: string;
  description: string;
  image: ImageType;
  width: number | string;
  height: number | string;
  keyFeatures: string[];
  specifications?: Record<string, string>;
}

interface Partner {
  name: string;
  description: string;
  logo: ImageType;
  products: Product[];
}

interface Params {
  slug: string;
}

export default function ProductSlugPage({ params }: { params: Promise<Params> }) {
  const [isLoading, setIsLoading] = useState(true);
  const [partner, setPartner] = useState<Partner | null>(null);

  // Unwrap the params Promise using React.use()
  const resolvedParams = use(params);

  useEffect(() => {
    const timer = setTimeout(() => {
      const partnerData = partnerProducts[resolvedParams.slug as keyof typeof partnerProducts] ?? null;
      setPartner(partnerData as Partner | null);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [resolvedParams.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-main border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-lg font-medium"
          >
            Loading product information...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  if (!partner) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-drakGray mt-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-96 md:h-[500px] overflow-hidden"
      >

        <Image
          id="cover image"
          src={partner.logo}
          alt={partner.name}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-6 left-6 z-30">
          <Link
            href="/products"
            className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
          >
            <ArrowLeft className="w-10 h-10 p-2 border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm" />
          </Link>
        </div>
        

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl"
            >
              {partner.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
            >
              {partner.description}
            </motion.p>
          </div>
        </div>
      </motion.div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="space-y-16">
          {partner.products.map((product: Product, index: number) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.2 }}
              className="group"
            >
              <Card className="overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Product Image */}
                  <div className="relative h-80 lg:h-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      // width={product.width}
                      // height={product.height}
                      className="absolute md:left-16 md:top-4 lg:top-24 lg:left-16 rounded-md"
                    />
                  </div>

                  {/* Product Details */}
                  <div id={product.name} className="p-8 lg:p-12 mt-24">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-3xl font-bold text-white mb-4 transition-colors">
                        {product.name}
                      </CardTitle>
                      <p className="text-slate-300 text-lg leading-relaxed">{product.description}</p>
                    </CardHeader>

                    <CardContent className="px-0 space-y-8">

                      <div>
                        <div className="flex items-center mb-4">
                          <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                          <h3 className="text-xl font-semibold text-white">Key Features</h3>
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                          {product.keyFeatures.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1 + index * 0.2 + idx * 0.1 }}
                              className="flex items-center text-slate-300"
                            >
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <Separator className="bg-white/20" />

                      {/* Action Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 + index * 0.2 }}
                        className="flex flex-col md:flex-row gap-4 pt-4 justify-center items-center"
                      >
                        <Link href="/about#contact">
                          <Button className="bg-black hover:bg-main text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                            <Eye className="w-5 h-5 mr-2" />
                            Request Demo
                          </Button>
                        </Link>
                        <Link href="/sign-in">
                          <Button
                            variant="outline"
                            className="border-white/30 text-black hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all duration-300"
                          >
                            <Wrench className="w-5 h-5 mr-2" />
                            Technical Support
                          </Button>
                        </Link>
                      </motion.div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}