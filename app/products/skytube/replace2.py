import os
import re

# Update nanosun-false-ceiling/page.jsx
fp_false_ceiling = r'd:\v0-uday-iksa-pvt-ltd-website-main\app\products\nanosun-false-ceiling\page.jsx'
with open(fp_false_ceiling, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('''        {
            step: "01",
            title: "Dome Captures Daylight",
            subtitle: "On Your Roof",
            description: "An optical dome on your roof captures ambient daylight — even on overcast days. Same proven technology used across all NANOSUN products.",
            icon: Sun,
        },''', '''        {
            step: "01",
            title: "Dome Captures Daylight",
            subtitle: "On Your Roof",
            description: "An optical dome on your roof captures ambient daylight — even on overcast days. Same proven technology used across all NANOSUN products.",
            icon: Sun,
            image: "/images/products/nanosun/PEB MODEL.png",
        },''')

content = content.replace('''        {
            step: "02",
            title: "Extended Reflector Pipe",
            subtitle: "Through the Cavity",
            description: "The reflector pipe extends through the false ceiling cavity — the gap between your RCC slab and the POP/gypsum false ceiling below. Uses 45° and 90° bends to navigate around obstacles.",
            icon: Layers,
        },''', '''        {
            step: "02",
            title: "Extended Reflector Pipe",
            subtitle: "Through the Cavity",
            description: "The reflector pipe extends through the false ceiling cavity — the gap between your RCC slab and the POP/gypsum false ceiling below. Uses 45° and 90° bends to navigate around obstacles.",
            icon: Layers,
            image: "/images/products/nanosun/Skypipe installation at Tata Motors Lucknow.jpg",
        },''')

content = content.replace('''        {
            step: "03",
            title: "Flush Diffuser Panel",
            subtitle: "At False Ceiling Level",
            description: "A clean, round frosted diffuser sits flush with your false ceiling. During the day, it glows softly with natural light — exactly like a premium recessed light fitting, but powered entirely by the sun.",
            icon: CircleDot,
        },''', '''        {
            step: "03",
            title: "Flush Diffuser Panel",
            subtitle: "At False Ceiling Level",
            description: "A clean, round frosted diffuser sits flush with your false ceiling. During the day, it glows softly with natural light — exactly like a premium recessed light fitting, but powered entirely by the sun.",
            icon: CircleDot,
            image: "/images/gallery/nanosun/Gujarat Berger Paints India Ltd.6.jpeg",
        },''')

target3_jsx = '''                                className="bg-white/[0.03] border border-white/5 p-12 rounded-[60px] hover:bg-white/[0.05] transition-all group relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="absolute top-8 right-8 text-[80px] font-black text-white/[0.03] leading-none">{step.step}</div>
                                <div className="bg-brand-orange-500/10 w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-brand-orange-500 group-hover:rotate-6 transition-all duration-500">
                                    <step.icon className="h-10 w-10 text-brand-orange-500 group-hover:text-white" />
                                </div>
                                <h3 className="text-[10px] font-black text-brand-orange-500 uppercase tracking-widest mb-4 leading-none">Step {step.step} — {step.subtitle}</h3>
                                <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 leading-none">{step.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed font-medium">{step.description}</p>
                            </motion.div>'''
                            
replacement3_jsx = '''                                className="bg-white/[0.02] border border-white/5 rounded-[40px] hover:border-brand-orange-500/20 transition-all group relative overflow-hidden flex flex-col shadow-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="relative h-64 w-full bg-slate-900 border-b border-white/5 overflow-hidden">
                                    <Image 
                                        src={step.image} 
                                        alt={step.title}
                                        fill
                                        className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale-[0.3] group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                                    <div className="absolute top-6 right-6 text-6xl font-black text-white/50 leading-none uppercase z-10">{step.step}</div>
                                    <div className="absolute top-6 left-6 bg-brand-orange-500 w-16 h-16 rounded-[16px] flex items-center justify-center shadow-lg shadow-brand-orange-500/20 z-10">
                                        <step.icon className="h-8 w-8 text-white" />
                                    </div>
                                </div>

                                <div className="p-10 flex-1 flex flex-col pb-12">
                                    <h3 className="text-[10px] font-black text-brand-orange-500 uppercase tracking-widest mb-4 leading-none">Step {step.step} — {step.subtitle}</h3>
                                    <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-5 border-l-2 border-brand-orange-500 pl-4 leading-none">{step.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed font-medium flex-1">{step.description}</p>
                                </div>
                            </motion.div>'''

content = content.replace(target3_jsx, replacement3_jsx)

with open(fp_false_ceiling, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated false ceiling")
