'use client'

import { Mail, Phone, MapPin, Globe, MessageCircle, Download, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

interface SalesRepresentative {
  slug?: string
  name: string
  title: string
  company: string
  email: string
  phone: string
  whatsapp?: string
  address?: string
  website?: string
  linkedin?: string
  bio?: string
  photo_url?: string
}

export default function ContactCard({ rep }: { rep: SalesRepresentative }) {
  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${rep.name}
ORG:${rep.company}
TITLE:${rep.title}
TEL;TYPE=WORK:${rep.phone}
EMAIL:${rep.email}
${rep.address ? `ADR;TYPE=WORK:;;${rep.address}` : ''}
${rep.website ? `URL:${rep.website}` : ''}
END:VCARD`

    const blob = new Blob([vcard], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${rep.name.replace(/\s+/g, '_')}.vcf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${rep.name} - ${rep.title}`,
          text: `Contact ${rep.name} from ${rep.company}`,
          url: window.location.href
        })
      } catch {
        console.log('Share cancelled')
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="min-h-screen bg-darkGray p-4 py-8">
      <div className="max-w-2xl mx-auto">
        <Card className="overflow-hidden shadow-xl border-0">
          <div className="h-32 bg-main"></div>

          <CardContent className="relative px-6 pb-6">
            <div className="flex flex-col items-center -mt-16 mb-6">
              <div className="w-32 h-32 rounded-full bg-white p-2 shadow-lg">
                {rep.photo_url ? (
                  <Image
                    src={rep.photo_url}
                    alt={rep.name}
                    width={128}
                    height={128}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-main flex items-center justify-center text-white text-4xl font-bold">
                    {rep.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                )}
              </div>

              <h1 className="text-3xl font-bold text-slate-900 mt-4 text-center">
                {rep.name}
              </h1>
              <p className="text-lg text-blue-600 font-medium">{rep.title}</p>
              <p className="text-slate-600">{rep.company}</p>
            </div>

            {rep.bio && (
              <div className="mb-6 p-4 bg-slate-50 rounded-lg">
                <p className="text-slate-700 text-center leading-relaxed">{rep.bio}</p>
              </div>
            )}

            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${rep.email}`}
                className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 font-medium">Email</p>
                  <p className="text-slate-900 font-medium">{rep.email}</p>
                </div>
              </a>

              <a
                href={`tel:${rep.phone}`}
                className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 font-medium">Phone</p>
                  <p className="text-slate-900 font-medium">{rep.phone}</p>
                </div>
              </a>

              {rep.whatsapp && (
                <a
                  href={`https://wa.me/${rep.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                    <MessageCircle className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-500 font-medium">WhatsApp</p>
                    <p className="text-slate-900 font-medium">{rep.whatsapp}</p>
                  </div>
                </a>
              )}

              {rep.address && (
                <a href='https://maps.app.goo.gl/W6H3LEPfaC3ffmAbA'
                target="_blank"
                rel="noopener noreferrer">
                <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-500 font-medium">Address</p>
                    <p className="text-slate-900">{rep.address}</p>
                  </div>
                </div>
                </a>
              )}

              {rep.website && (
                <a
                  href={rep.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                    <Globe className="w-5 h-5 text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-slate-500 font-medium">Website</p>
                    <p className="text-slate-900 font-medium truncate">{rep.website}</p>
                  </div>
                </a>
              )}
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleSaveContact}
                className="flex-1 h-12 bg-main hover:bg-[#F65A57] text-white font-medium"
              >
                <Download className="w-4 h-4 mr-2" />
                Save Contact
              </Button>
              <Button
                onClick={handleShare}
                variant="outline"
                className="h-12 px-6 border-slate-300 hover:bg-main hover:text-white"
              >
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

       
      </div>
    </div>
  )
}
