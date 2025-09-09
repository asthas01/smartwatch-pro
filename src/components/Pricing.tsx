import { motion } from "framer-motion";

function Pricing() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Premium technology at an unbeatable price. No subscriptions, no hidden fees.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main pricing card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
            
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 md:p-12 rounded-3xl border-2 border-gray-700 backdrop-blur-sm">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-bold text-sm mb-4">
                  LAUNCH SPECIAL - LIMITED TIME
                </div>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-4xl md:text-6xl font-bold text-white">$299</span>
                  <div className="text-left">
                    <div className="text-gray-400 line-through text-xl">$399</div>
                    <div className="text-green-400 font-bold">Save $100</div>
                  </div>
                </div>
                <p className="text-gray-300 text-lg">
                  One-time payment. No monthly fees. Lifetime updates included.
                </p>
              </div>

              {/* Features included */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">What's Included:</h3>
                  {[
                    "Nexus Watch with premium band",
                    "Wireless charging dock",
                    "Premium gift box packaging",
                    "Quick start guide & warranty card"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Guarantees:</h3>
                  {[
                    "30-day money-back guarantee",
                    "2-year manufacturer warranty",
                    "Free shipping worldwide",
                    "24/7 customer support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-full hover:from-cyan-400 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 mb-4">
                  Order Now - $299
                </button>
                <div className="text-gray-400 text-sm">
                  ✅ Secure checkout • 🚚 Ships within 24 hours • 🔒 SSL encrypted
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-4">Flexible Payment Options</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
                  <span className="text-gray-300">💳 Credit Card</span>
                </div>
                <div className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
                  <span className="text-gray-300">📱 Apple Pay</span>
                </div>
                <div className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
                  <span className="text-gray-300">🅿️ PayPal</span>
                </div>
                <div className="px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
                  <span className="text-gray-300">💰 4 interest-free payments</span>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>256-bit SSL Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>PCI DSS Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Money-Back Guarantee</span>
              </div>
            </div>
          </motion.div>

          {/* Urgency indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full border border-red-500/30">
              <span className="text-red-400 font-bold">⚡ Limited Time: Only 247 units left at this price</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;