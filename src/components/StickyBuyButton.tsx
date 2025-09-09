import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function StickyBuyButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 100vh
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-black via-black/95 to-transparent backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-gray-900/90 to-gray-800/90 p-4 rounded-2xl border border-gray-700 backdrop-blur-sm">
          {/* Product info */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">NX</span>
            </div>
            <div>
              <div className="text-white font-bold">Nexus Watch</div>
              <div className="text-gray-400 text-sm">Limited time: $299 (Save $100)</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>30-day guarantee</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Free shipping</span>
              </div>
            </div>
            
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-full hover:from-cyan-400 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 whitespace-nowrap">
              Buy Now - $299
            </button>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="mt-3 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 rounded-full border border-red-500/30">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-red-400 text-xs font-medium">
              247 units left at this price
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default StickyBuyButton;