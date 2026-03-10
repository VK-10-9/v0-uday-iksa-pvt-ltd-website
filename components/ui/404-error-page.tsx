"use client"

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Sun, ArrowLeft, Lightbulb, Zap } from 'lucide-react';
import Link from 'next/link';

interface RetroTvErrorProps extends React.HTMLAttributes<HTMLDivElement> {
    errorCode?: string;
    errorMessage?: string;
}

const RetroTvError = React.forwardRef<HTMLDivElement, RetroTvErrorProps>(
    (
        {
            className,
            errorCode = '404',
            errorMessage = 'SIGNAL LOST',
            ...props
        },
        ref
    ) => {
        const errorCodeDigits = errorCode.split('');

        return (
            <div
                ref={ref}
                className={cn(
                    'flex flex-col items-center justify-center min-h-[70vh] w-full py-20 px-6',
                    className
                )}
                {...props}
            >
                <div className="relative mb-20">
                    <div className="main_tv_wrapper relative scale-75 md:scale-100">
                        <div className="antenna">
                            <div className="antenna_shadow"></div>
                            <div className="a1"></div>
                            <div className="a1d"></div>
                            <div className="a2"></div>
                            <div className="a2d"></div>
                            <div className="a_base"></div>
                        </div>
                        <div className="tv border-4 border-brand-orange-500/30 shadow-2xl shadow-brand-orange-500/20">
                            <div className="cruve">
                                <svg
                                    viewBox="0 0 189.929 189.929"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="curve_svg fill-brand-orange-500/10"
                                >
                                    <path d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z" />
                                </svg>
                            </div>
                            <div className="display_div">
                                <div className="screen_out">
                                    <div className="screen_out1">
                                        <div className="screen flex items-center justify-center bg-slate-900 overflow-hidden relative">
                                            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale" />
                                            <div className="static-noise absolute inset-0 opacity-10 pointer-events-none" />
                                            <span className="notfound_text font-black text-white tracking-[0.3em] uppercase relative z-10 text-center px-4">
                                                {errorMessage}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lines">
                                <div className="line1"></div>
                                <div className="line2"></div>
                                <div className="line3"></div>
                            </div>
                            <div className="buttons_div">
                                <div className="b1 border border-white/10">
                                    <div className="bg-brand-orange-500"></div>
                                </div>
                                <div className="b2 border border-white/10"></div>
                                <div className="speakers">
                                    <div className="g1">
                                        <div className="g11"></div>
                                        <div className="g12"></div>
                                        <div className="g13"></div>
                                    </div>
                                    <div className="g"></div>
                                    <div className="g"></div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="base1"></div>
                            <div className="base2"></div>
                            <div className="base3"></div>
                        </div>
                    </div>

                    <div className="text_404 absolute -bottom-10 -right-10 md:-right-20 pointer-events-none">
                        {errorCodeDigits.map((digit, index) => (
                            <div key={index} className={`text_404${index + 1} text-brand-orange-500 font-black italic`}>
                                {digit}
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="text-center space-y-8 max-w-2xl mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="flex justify-center gap-6 mb-8 transform -rotate-2">
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 brand-glow">
                            <Sun className="h-8 w-8 text-brand-orange-500 animate-pulse" />
                        </div>
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 brand-glow">
                            <Zap className="h-8 w-8 text-brand-amber-500" />
                        </div>
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 brand-glow">
                            <Lightbulb className="h-8 w-8 text-brand-yellow-500" />
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                        Sunlight <span className="brand-gradient-text">Interrupted</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-brand-orange-500 pl-6 py-2">
                        "We've optimized our systems to find the sun, but we can't seem to find this page. The connection has been lost in the transmission."
                    </p>

                    <div className="pt-8">
                        <Link href="/">
                            <button className="bg-brand-orange-500 text-white hover:bg-white hover:text-black rounded-2xl px-12 py-6 text-sm font-black uppercase tracking-widest transition-all duration-500 shadow-2xl shadow-brand-orange-500/30 flex items-center gap-4 group mx-auto">
                                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-2 transition-transform" />
                                Restore System Connection
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        );
    }
);

RetroTvError.displayName = 'RetroTvError';

export { RetroTvError };
