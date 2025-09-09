import { motion } from "framer-motion";

function Features() {
  const features = [
    {
      icon: "⚡",
      title: "7-Day Battery Life",
      description: "Advanced power management keeps you connected for a full week on a single charge.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: "💧",
      title: "Waterproof Design",
      description: "IP68 rating ensures your watch survives any adventure, from swimming to extreme weather.",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: "❤️",
      title: "Advanced Health Tracking",
      description: "Monitor heart rate, blood oxygen, sleep patterns, and stress levels with medical-grade precision.",
      gradient: "from-red-400 to-pink-500"
    },
    {
      icon: "🏃",
      title: "100+ Workout Modes",
      description: "Track every activity with precision GPS and advanced motion sensors.",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      icon: "📱",
      title: "Smart Connectivity",
      description: "Seamlessly sync with your devices. Answer calls, reply to messages, and control your music.",
      gradient: "from-purple-400 to-indigo-500"
    },
    {
      icon: "🧠",
      title: "AI-Powered Insights",
      description: "Machine learning algorithms provide personalized health recommendations and predictions.",
      gradient: "from-cyan-400 to-purple-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the perfect fusion of cutting-edge technology and premium design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 backdrop-blur-sm h-full">
                {/* Glowing effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`text-4xl mb-4 p-4 rounded-full bg-gradient-to-r ${feature.gradient} w-16 h-16 flex items-center justify-center`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-20 blur-sm`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "50M+", label: "Users Worldwide" },
            { number: "99.9%", label: "Uptime" },
            { number: "24/7", label: "Health Monitoring" },
            { number: "5★", label: "Average Rating" }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;