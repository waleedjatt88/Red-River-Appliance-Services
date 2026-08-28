import React from 'react';
import { motion } from 'framer-motion';

export default function Loader({ fullScreen = false }) {
  // Animation variants for the columns (bars)
  const barVariants = {
    initial: { height: 12 },
    animate: { 
      height: 48,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const loaderContent = (
    <div className="flex items-center justify-center gap-1.5 h-16">
      <motion.div 
        variants={barVariants} 
        initial="initial" 
        animate="animate" 
        className="w-2.5 bg-[#D31820] rounded-full" 
      />
      <motion.div 
        variants={barVariants} 
        initial="initial" 
        animate="animate" 
        transition={{ delay: 0.15 }}
        className="w-2.5 bg-[#D31820] rounded-full" 
      />
      <motion.div 
        variants={barVariants} 
        initial="initial" 
        animate="animate" 
        transition={{ delay: 0.3 }}
        className="w-2.5 bg-[#D31820] rounded-full" 
      />
      <motion.div 
        variants={barVariants} 
        initial="initial" 
        animate="animate" 
        transition={{ delay: 0.45 }}
        className="w-2.5 bg-[#D31820] rounded-full" 
      />
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden">
        
        {/* Animated glowing orb in the background */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#D31820]/15 rounded-full blur-[70px] pointer-events-none" 
        />
        
        <div className="relative z-10 flex flex-col items-center">
          {loaderContent}
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-col items-center gap-1.5"
          >
            <span className="text-[13px] font-black text-white tracking-[0.15em] uppercase">
              Red River Appliance
            </span>
            <span className="text-[10px] font-bold text-[#D31820] uppercase tracking-widest">
              Loading Experience...
            </span>
          </motion.div>
        </div>

      </div>
    );
  }

  return loaderContent;
}
