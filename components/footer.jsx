import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone, Linkedin, Instagram, Twitter, Facebook, Sparkles } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-white/5 relative overflow-hidden">
      {/* Ambient Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-orange-500/50 to-transparent" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-brand-red-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-12">
          {/* Brand Identity */}
          <div className="space-y-10">
            <Link href="/" className="flex items-center group">
              <div className="relative h-14 w-14 mr-5">
                <div className="absolute inset-0 rounded-2xl bg-brand-orange-500/20 blur-xl group-hover:bg-brand-orange-500/40 transition-all duration-500" />
                <div className="relative h-full w-full flex items-center justify-center bg-slate-900 border border-white/10 rounded-2xl p-2.5 group-hover:border-brand-orange-500/50 transition-colors">
                  <Image
                    src="/images/logo.png"
                    alt="Uday IKSA"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <p className="text-2xl font-black text-white uppercase tracking-tighter leading-none">UDAY <span className="brand-gradient-text">IKSA</span></p>
                <p className="text-[8px] font-black text-gray-500 uppercase tracking-[0.4em] mt-1">Sustainability Engineering</p>
              </div>
            </Link>

            <p className="text-gray-400 text-base leading-relaxed font-medium">
              India's trusted manufacturer of natural daylighting and ventilation systems. Our patented NANOSUN™ and NANOVENT® products are installed across 500+ buildings in 50+ cities.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4 group/item cursor-pointer">
                <div className="bg-white/5 p-3 rounded-xl text-brand-orange-500 group-hover/item:bg-brand-orange-500 group-hover/item:text-white transition-all duration-300 shadow-lg shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-1">Headquarters</p>
                  <p className="text-gray-500 text-xs group-hover/item:text-white transition-colors leading-tight font-medium">#147, 4th Phase, Akshay Colony, Vidyanagar, Hubballi – 580021</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group/item cursor-pointer">
                <div className="bg-white/5 p-3 rounded-xl text-brand-orange-500 group-hover/item:bg-brand-orange-500 group-hover/item:text-white transition-all duration-300 shadow-lg shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-1">Factory</p>
                  <p className="text-gray-500 text-xs group-hover/item:text-white transition-colors leading-tight font-medium">C-391, Gokul Industrial Estate, 2nd Gate Gokul Road, Hubballi – 580030</p>
                </div>
              </div>

              <a href="tel:+918792182631" className="flex items-center gap-4 group/item">
                <div className="bg-white/5 p-3 rounded-xl text-brand-orange-500 group-hover/item:bg-brand-orange-500 group-hover/item:text-white transition-all duration-300 shadow-lg shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-gray-400 text-sm group-hover/item:text-white transition-colors font-bold">+91 87921 82631</span>
              </a>

              <a href="mailto:info@udayiksa.com" className="flex items-center gap-4 group/item">
                <div className="bg-white/5 p-3 rounded-xl text-brand-orange-500 group-hover/item:bg-brand-orange-500 group-hover/item:text-white transition-all duration-300 shadow-lg shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-gray-400 text-sm group-hover/item:text-white transition-colors font-bold uppercase tracking-widest">info@udayiksa.com</span>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h3 className="text-xs font-black text-white mb-10 uppercase tracking-[0.3em] pl-4 border-l-2 border-brand-orange-500">Corporate</h3>
            <ul className="space-y-6">
              {['Home', 'About Us', 'Portfolio', 'Awards', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white text-sm font-black uppercase tracking-widest transition-all flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-3 text-brand-orange-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black text-white mb-10 uppercase tracking-[0.3em] pl-4 border-l-2 border-brand-orange-500">Core Systems</h3>
            <ul className="space-y-6">
              {[
                { name: 'NANOSUN DAYLIGHT', href: '/innovations' },
                { name: 'NANOVENT VENTILATION', href: '/innovations' },
                { name: 'SKYTUBE TUBULAR', href: '/innovations' },
                { name: 'CUSTOM ENGINEERING', href: '/innovations' },
                { name: 'OPTIMIZATION SERVICES', href: '/innovations' },
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

          {/* Newsletter / Social */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xs font-black text-white mb-10 uppercase tracking-[0.3em] pl-4 border-l-2 border-brand-orange-500">Infrastructure Updates</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium">
                Subscribe for the latest engineering breakthroughs and case studies.
              </p>

              <form className="relative group">
                <input
                  type="email"
                  placeholder="ENGINEER@FACILITY.COM"
                  className="w-full px-6 py-5 bg-white/[0.03] border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-orange-500 text-white transition-all text-[10px] font-black tracking-widest group-hover:bg-white/[0.07]"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black hover:bg-brand-orange-500 hover:text-white w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-xl"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>

            <div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-6">Digital Network</p>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Facebook, label: 'Facebook' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-brand-orange-500 hover:border-brand-orange-500 transition-all duration-500 group shadow-lg"
                  >
                    <social.icon className="h-6 w-6 text-gray-500 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <Sparkles className="h-5 w-5 text-brand-orange-500" />
            <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.4em]">
              &copy; {currentYear} Uday IKSA Pvt Ltd • Built for Impact
            </p>
          </div>

          <div className="flex gap-10">
            {['Privacy Policy', 'Terms of Service', 'Corporate Governance'].map((link) => (
              <Link
                key={link}
                href="#"
                className="text-[10px] text-gray-600 hover:text-brand-orange-400 transition-colors uppercase font-black tracking-widest"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
