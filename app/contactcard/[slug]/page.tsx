'use client'

import { useParams } from 'next/navigation'
import reps from '@/lib/representatives.json'
import ContactCard from '../ContactCard'

export default function Page() {
  const params = useParams()
  const rep = reps.find((r) => r.slug === params.slug)

  if (!rep) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-red-600 mb-2">Contact Not Found</h1>
          <p className="text-slate-600">Our crawlers could not find what you are looking for.</p>
        </div>
      </div>
    )
  }

  return <ContactCard rep={rep} />
}
