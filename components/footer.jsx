import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone, Linkedin, Instagram, Facebook, Youtube, Sparkles } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-white/5 relative overflow-hidden">
      {/* Ambient Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange-500/50 to-transparent" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-red-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-32 bg-brand-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          {/* Brand Identity */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-6 group">
              <div className="relative h-20 w-20 flex-shrink-0">
                <div className="absolute inset-0 rounded-3xl bg-brand-orange-500/10 blur-2xl group-hover:bg-brand-orange-500/30 transition-all duration-700" />
                <div className="relative h-full w-full flex items-center justify-center bg-white/[0.03] border border-white/10 rounded-3xl p-3 group-hover:border-brand-orange-500/50 transition-all duration-500 overflow-hidden">
                  <Image
                    src="/images/logo.png"
                    alt="Uday IKSA"
                    width={100}
                    height={100}
                    className="object-contain scale-[1.6] group-hover:scale-[1.8] transition-transform duration-700"
                  />
                  {/* Subtle Glow behind logo */}
                  <div className="absolute inset-0 bg-brand-orange-500/5 group-hover:bg-brand-orange-500/10 transition-colors pointer-events-none" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-brand-orange-400 transition-colors">UDAY <span className="brand-gradient-text">IKSA</span></p>
                <p className="text-[7px] font-black text-gray-500 uppercase tracking-[0.4em]">Sustainability Engineering</p>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed font-medium border-l-2 border-white/5 pl-6 max-w-sm">
              India's trusted manufacturer of natural daylighting and ventilation systems. Our patented NANOSUN™ and NANOVENT® products are installed across 500+ buildings.
            </p>

            <div className="grid gap-6 pt-4">
              <div className="flex items-start gap-4 group/item cursor-pointer">
                <div className="bg-white/5 p-3 rounded-xl text-brand-orange-500 group-hover/item:bg-brand-orange-500 group-hover/item:text-white transition-all duration-300 shadow-lg shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-[7px] font-black uppercase tracking-widest mb-1.5">Headquarters</p>
                  <p className="text-gray-500 text-xs group-hover/item:text-white transition-colors leading-relaxed font-medium">#147, 4th Phase, Akshay Colony, Vidyanagar, Hubballi – 580021</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group/item cursor-pointer">
                <div className="bg-white/5 p-3 rounded-xl text-brand-orange-500 group-hover/item:bg-brand-orange-500 group-hover/item:text-white transition-all duration-300 shadow-lg shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-[7px] font-black uppercase tracking-widest mb-1.5">Factory</p>
                  <p className="text-gray-500 text-xs group-hover/item:text-white transition-colors leading-relaxed font-medium">C-391, Gokul Industrial Estate, 2nd Gate Gokul Road, Hubballi – 580030</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a href="tel:+918792182631" className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 hover:bg-brand-orange-500 hover:border-brand-orange-500 transition-all group">
                  <Phone className="h-4 w-4 text-brand-orange-500 group-hover:text-white" />
                  <span className="text-gray-400 text-[8px] group-hover:text-white transition-colors font-bold tracking-tight">+91 87921 82631</span>
                </a>

                <a href="mailto:contact@udayiksa.com" className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 hover:bg-brand-orange-500 hover:border-brand-orange-500 transition-all group">
                  <Mail className="h-4 w-4 text-brand-orange-500 group-hover:text-white" />
                  <span className="text-gray-400 text-[8px] group-hover:text-white transition-colors font-bold uppercase tracking-wider">contact@udayiksa.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:pl-8">
            <h3 className="text-[7px] font-black text-white mb-10 uppercase tracking-[0.4em] pl-4 border-l-2 border-brand-orange-500">Corporate</h3>
            <ul className="space-y-5">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Portfolio', href: '/projects' },
                { name: 'Awards', href: '/awards' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm font-black uppercase tracking-widest transition-all flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-3 text-brand-orange-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[7px] font-black text-white mb-10 uppercase tracking-[0.4em] pl-4 border-l-2 border-brand-orange-500">Core Systems</h3>
            <ul className="space-y-5">
              {[
                { name: 'NATURAL SKYLIGHT', href: '/products/nanosun' },
                { name: 'TUBULAR DAYLIGHTING', href: '/products/skytube' },
                { name: 'NATURAL VENTILATOR', href: '/products/nanovent' },
                { name: 'DESIGNER INTERIOR SKYLIGHT', href: '/products/skylight' },
                { name: 'CUSTOM ENGINEERING', href: '/products' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm font-black uppercase tracking-widest transition-all flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-3 text-brand-orange-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-4 group/india">
              <div className="relative h-8 w-12 rounded overflow-hidden shadow-2xl group-hover/india:scale-110 transition-transform">
                <div className="h-1/3 bg-[#FF9933]"></div>
                <div className="h-1/3 bg-white flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full border border-blue-900 border-t-blue-900/50 animate-spin"></div>
                </div>
                <div className="h-1/3 bg-[#138808]"></div>
              </div>
              <span className="text-[7px] font-black text-white uppercase tracking-widest">Proudly Made in India</span>
            </div>
          </div>

          {/* Social */}
          <div className="lg:pl-8">
            <h3 className="text-[7px] font-black text-white mb-10 uppercase tracking-[0.4em] pl-4 border-l-2 border-brand-orange-500">Digital Network</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/udayiksa' },
                { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@udayiksa' },
                { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/udayiksa' },
                { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/udayiksa' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-brand-orange-500 hover:border-brand-orange-500 transition-all duration-500 group shadow-lg"
                >
                  <social.icon className="h-6 w-6 text-gray-500 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <Sparkles className="h-4 w-4 text-brand-orange-500" />
            <p className="text-gray-600 text-[7px] font-black uppercase tracking-[0.4em]">
              &copy; {currentYear} Uday IKSA Pvt Ltd • Built for Impact
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {[
              { name: 'Privacy Policy', href: '/privacy' },
              { name: 'Terms of Service', href: '/terms' },
              { name: 'Corporate Governance', href: '/governance' }
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[7px] text-gray-600 hover:text-brand-orange-400 transition-colors uppercase font-black tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
