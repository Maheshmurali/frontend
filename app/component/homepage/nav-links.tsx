import Link from "next/link";
import { usePathname } from 'next/navigation'

interface NavLinksProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;   // 🔑 add setter function
}

export default function NavLinks({ isOpen, setIsOpen }: NavLinksProps) {
  const path = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
  ]

  return (
    <nav>
      <div
        className={`absolute top-0 ${
          isOpen ? "left-0" : "-left-full"
        } min-h-[30vh] w-full lg:w-auto bg-gray-800/80 backdrop-blur-sm 
        flex items-center justify-center overflow-hidden transition-all duration-300 lg:static lg:min-h-fit lg:bg-transparent`}
      >
        <ul className="flex gap-8 md:gap-16 flex-col items-center lg:flex-row mt-8 md:mt-0">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={
                  path.startsWith(href)
                    ? "text-main text-lg underline"
                    : "text-white"
                }
                onClick={() => setIsOpen(false)}  
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
