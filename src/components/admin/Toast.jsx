import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAdmin } from '../../context/AdminContext';

export default function Toast() {
  const { toast } = useAdmin();

  return (
    <AnimatePresence>
      {toast.visible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-xl border border-slate-700/80 pointer-events-none"
        >
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span class="material-symbols-outlined text-emerald-400 text-[20px]">check_circle</span>
          <span class="text-xs font-semibold">{toast.message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
