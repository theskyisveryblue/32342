import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const ITEMS = [
    { url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000', label: 'Prague Autumn' },
    { url: 'https://images.unsplash.com/photo-1520624337583-f81857999793?q=80&w=1000', label: 'Central Plaza' },
    { url: 'https://images.unsplash.com/photo-1541849546-216549ae206d?q=80&w=1000', label: 'Midnight Clock' },
    { url: 'https://images.unsplash.com/photo-1533221216134-c5a473b64cd9?q=80&w=1000', label: 'Old Bridge' },
    { url: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1000', label: 'Velvet Street' },
]

export default function App() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-[#0a0a0a] overflow-hidden">
            <div className="relative flex w-full max-w-[90vw] items-center justify-center py-20">
                <div className="flex gap-4 px-[20vw]">
                    {ITEMS.map((item, i) => (
                        <div key={i} className="relative group shrink-0">
                            <motion.div
                                whileHover={{ scale: 1.05, rotateY: 0 }}
                                style={{ perspective: 1000 }}
                                initial={{ rotateY: i % 2 === 0 ? 35 : -35 }}
                                className="w-[300px] h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500"
                            >
                                <img 
                                    src={item.url} 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    alt={item.label}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                                    <p className="text-white font-black tracking-tighter text-xl uppercase italic serif">{i + 1} — {item.label}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="fixed bottom-10 left-10 pointer-events-none z-[100] space-y-2">
                <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em]">Interactive Stage</p>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white opacity-40"></span>
                    <p className="text-xs font-bold text-white uppercase italic">3D Coverflow Engine Active</p>
                </div>
            </div>
        </div>
    )
}