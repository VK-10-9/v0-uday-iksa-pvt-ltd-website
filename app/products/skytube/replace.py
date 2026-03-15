import os
import re

# Update skytube/page.jsx
fp_skytube = r'd:\v0-uday-iksa-pvt-ltd-website-main\app\products\skytube\page.jsx'
with open(fp_skytube, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the array elements
content = content.replace('''              {
                step: "01",
                title: "Roof Panel",
                subtitle: "Light Collector",
                description: "A flat rectangular panel sits on your pitched roof — low profile, barely visible from the outside. It collects natural daylight across its entire length, not just from one point.",
                icon: Sun,
              },''', '''              {
                step: "01",
                title: "Roof Panel",
                subtitle: "Light Collector",
                description: "A flat rectangular panel sits on your pitched roof — low profile, barely visible from the outside. It collects natural daylight across its entire length, not just from one point.",
                icon: Sun,
                image: "/images/products/nanosun/PEB MODEL.png",
              },''')

content = content.replace('''              {
                step: "02",
                title: "Reflectors",
                subtitle: "Along the Length",
                description: "Inside the panel, a series of aluminium reflectors (5, 10, or 12 depending on size) are spaced evenly along the length. Each one captures and directs light downward — so the entire strip is lit, not just the centre.",
                icon: Layers,
              },''', '''              {
                step: "02",
                title: "Reflectors",
                subtitle: "Along the Length",
                description: "Inside the panel, a series of aluminium reflectors (5, 10, or 12 depending on size) are spaced evenly along the length. Each one captures and directs light downward — so the entire strip is lit, not just the centre.",
                icon: Layers,
                image: "/images/products/nanosun/Skypipe installation at Tata Motors Lucknow.jpg",
              },''')

content = content.replace('''              {
                step: "03",
                title: "Diffuser",
                subtitle: "Full-Length at Ceiling",
                description: "A continuous diffuser panel at ceiling level spreads the light softly and evenly across the floor below — like a long glowing ceiling panel, but powered entirely by the sun.",
                icon: Maximize2,
              },''', '''              {
                step: "03",
                title: "Diffuser",
                subtitle: "Full-Length at Ceiling",
                description: "A continuous diffuser panel at ceiling level spreads the light softly and evenly across the floor below — like a long glowing ceiling panel, but powered entirely by the sun.",
                icon: Maximize2,
                image: "/images/gallery/nanosun/Gujarat Berger Paints India Ltd.6.jpeg",
              },''')

# Replace the map JSX
target_jsx = '''              <motion.div
                key={idx}
                className="bg-white/[0.02] border border-white/5 p-10 rounded-[40px] hover:border-brand-orange-500/20 transition-all group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="absolute -top-3 -left-3 bg-brand-orange-500 text-white px-4 py-1.5 rounded-xl font-black text-sm shadow-lg border-2 border-slate-950 group-hover:bg-white group-hover:text-black transition-all">
                  {item.step}
                </div>
                <div className="bg-brand-orange-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange-500 transition-all duration-500">
                  <item.icon className="h-6 w-6 text-brand-orange-500 group-hover:text-white" />
                </div>
                <h3 className="text-[9px] font-black text-brand-orange-500 uppercase tracking-widest mb-3 leading-none">{item.subtitle}</h3>
                <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-6">{item.title}</h4>
                <p className="text-gray-500 text-xs font-medium leading-relaxed">{item.description}</p>
              </motion.div>'''

replacement_jsx = '''              <motion.div
                key={idx}
                className="bg-white/[0.02] border border-white/5 rounded-[40px] hover:border-brand-orange-500/20 transition-all group relative overflow-hidden flex flex-col shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="relative h-48 w-full bg-slate-900 border-b border-white/5 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale-[0.3] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute top-6 right-6 text-5xl font-black text-white/50 leading-none uppercase z-10">{item.step}</div>
                  <div className="absolute top-6 left-6 bg-brand-orange-500 w-12 h-12 rounded-[14px] flex items-center justify-center shadow-lg shadow-brand-orange-500/20 z-10">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col pb-10">
                  <h3 className="text-[9px] font-black text-brand-orange-500 uppercase tracking-widest mb-3 leading-none">Step {item.step} — {item.subtitle}</h3>
                  <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-4 border-l-2 border-brand-orange-500 pl-3 leading-none">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed font-medium flex-1">{item.description}</p>
                </div>
              </motion.div>'''
              
content = content.replace(target_jsx, replacement_jsx)

with open(fp_skytube, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated skytube")

# Update skytube-angled/page.jsx
fp_skytube_angled = r'd:\v0-uday-iksa-pvt-ltd-website-main\app\products\skytube-angled\page.jsx'
with open(fp_skytube_angled, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('''    {
      step: "01",
      title: "Roof Dome",
      subtitle: "Light Collector on Top",
      description: "An optical dome or flat panel sits on your roof — exactly like the Standard SKYTUBE. This captures ambient daylight from the sky, even on cloudy days.",
      icon: Sun,
    },''', '''    {
      step: "01",
      title: "Roof Dome",
      subtitle: "Light Collector on Top",
      description: "An optical dome or flat panel sits on your roof — exactly like the Standard SKYTUBE. This captures ambient daylight from the sky, even on cloudy days.",
      icon: Sun,
      image: "/images/products/nanosun/PEB MODEL.png",
    },''')

content = content.replace('''    {
      step: "02",
      title: "Angled Reflector Pipe",
      subtitle: "Bends Around Obstacles",
      description: "Instead of a straight vertical drop, the reflector pipe uses 45° or 90° bends to navigate around beams, ducts, walls, or structural elements. Light bounces through the highly reflective aluminium pipe with minimal loss — even through multiple bends.",
      icon: CornerDownRight,
    },''', '''    {
      step: "02",
      title: "Angled Reflector Pipe",
      subtitle: "Bends Around Obstacles",
      description: "Instead of a straight vertical drop, the reflector pipe uses 45° or 90° bends to navigate around beams, ducts, walls, or structural elements. Light bounces through the highly reflective aluminium pipe with minimal loss — even through multiple bends.",
      icon: CornerDownRight,
      image: "/images/products/nanosun/Skypipe installation at Tata Motors Lucknow.jpg",
    },''')

content = content.replace('''    {
      step: "03",
      title: "Extended Reach",
      subtitle: "Up to 7–8 Metres Deep",
      description: "The pipe can extend well beyond a single floor — reaching rooms on lower floors, side walls, or deep interior spaces that have no direct roof access. Our team designs the exact routing during the site visit.",
      icon: Maximize2,
    },''', '''    {
      step: "03",
      title: "Extended Reach",
      subtitle: "Up to 7–8 Metres Deep",
      description: "The pipe can extend well beyond a single floor — reaching rooms on lower floors, side walls, or deep interior spaces that have no direct roof access. Our team designs the exact routing during the site visit.",
      icon: Maximize2,
      image: "/images/gallery/skytube/standing seam roof sheeting 1.png",
    },''')

content = content.replace('''    {
      step: "04",
      title: "Diffuser Panel",
      subtitle: "Clean Light at Ceiling Level",
      description: "A frosted diffuser panel at the ceiling delivers soft, even natural light below — whether it's a false ceiling, exposed slab, or any finished interior. Looks like a premium light fitting, powered by the sun.",
      icon: Lightbulb,
    },''', '''    {
      step: "04",
      title: "Diffuser Panel",
      subtitle: "Clean Light at Ceiling Level",
      description: "A frosted diffuser panel at the ceiling delivers soft, even natural light below — whether it's a false ceiling, exposed slab, or any finished interior. Looks like a premium light fitting, powered by the sun.",
      icon: Lightbulb,
      image: "/images/gallery/nanosun/Gujarat Berger Paints India Ltd.6.jpeg",
    },''')


target2_jsx = '''              <motion.div
                key={idx}
                className="bg-white/[0.02] border border-white/5 p-8 rounded-[32px] hover:border-brand-orange-500/20 transition-all group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="absolute -top-3 -left-3 bg-brand-orange-500 text-white px-4 py-1.5 rounded-xl font-black text-sm shadow-lg border-2 border-slate-950 group-hover:bg-white group-hover:text-black transition-all">
                  {item.step}
                </div>
                <div className="bg-brand-orange-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange-500 transition-all duration-500">
                  <item.icon className="h-5 w-5 text-brand-orange-500 group-hover:text-white" />
                </div>
                <h3 className="text-[9px] font-black text-brand-orange-500 uppercase tracking-widest mb-2 leading-none">{item.subtitle}</h3>
                <h4 className="text-lg font-black text-white uppercase tracking-tighter mb-4">{item.title}</h4>
                <p className="text-gray-500 text-[11px] font-medium leading-relaxed">{item.description}</p>
              </motion.div>'''
              
replacement2_jsx = '''              <motion.div
                key={idx}
                className="bg-white/[0.02] border border-white/5 rounded-[32px] hover:border-brand-orange-500/20 transition-all group relative overflow-hidden flex flex-col shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="relative h-40 w-full bg-slate-900 border-b border-white/5 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale-[0.3] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute top-5 right-5 text-4xl font-black text-white/50 leading-none uppercase z-10">{item.step}</div>
                  <div className="absolute top-5 left-5 bg-brand-orange-500 w-10 h-10 rounded-[12px] flex items-center justify-center shadow-lg shadow-brand-orange-500/20 z-10">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col pb-8">
                  <h3 className="text-[9px] font-black text-brand-orange-500 uppercase tracking-widest mb-2 leading-none">Step {item.step} — {item.subtitle}</h3>
                  <h4 className="text-lg font-black text-white uppercase tracking-tighter mb-3 border-l-2 border-brand-orange-500 pl-3 leading-none">{item.title}</h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed font-medium flex-1">{item.description}</p>
                </div>
              </motion.div>'''

content = content.replace(target2_jsx, replacement2_jsx)

with open(fp_skytube_angled, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated skytube-angled")
