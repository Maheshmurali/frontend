import reps from '@/lib/representatives.json'
import ContactCard from '@/app/contactcard/ContactCard'

export default function Page({ params }: { params: { slug: string } }) {
  const rep = reps.find((r) => r.slug === params.slug)

  if (!rep) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-darkGray">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-red-600 mb-2">Contact Not Found</h1>
          <p className="text-slate-600"></p>
        </div>
      </div>
    )
  }

  return <ContactCard rep={rep} />
}
