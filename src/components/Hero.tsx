import { motion } from "framer-motion";

function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent leading-tight">
            Redefining Smart Living –<br />
            The Next Gen Smartwatch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Track fitness, stay connected, and look stylish – all in one device.
          </p>
        </motion.div>

        {/* Product mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12 relative"
        >
          <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
            {/* Glowing ring effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-20 blur-xl animate-pulse"></div>
            
            {/* Watch mockup */}
            <div className="relative z-10 w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-full border-4 border-gray-700 shadow-2xl flex items-center justify-center">
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-black rounded-full border-2 border-gray-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-32 md:w-56 md:h-36 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-black font-bold text-xl md:text-2xl">12:34</span>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-700"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button 
            onClick={() => scrollToSection('pricing')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-full hover:from-cyan-400 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 text-lg"
          >
            Buy Now
          </button>
          <button 
            onClick={() => scrollToSection('demo')}
            className="px-8 py-4 border-2 border-gray-600 text-white font-bold rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-lg"
          >
            Watch Demo
          </button>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>30-Day Money Back</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span>Free Shipping</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span>2-Year Warranty</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;