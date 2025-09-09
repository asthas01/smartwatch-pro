  import { motion } from "framer-motion";
import { useState } from "react";

function InteractiveDemo() {
  const [activeDemo, setActiveDemo] = useState("health");

  const demos = {
    health: {
      title: "Health Monitoring",
      description: "Real-time health metrics with AI-powered insights",
      display: (
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-red-500/20 rounded-lg border border-red-500/30">
            <span className="text-red-400">Heart Rate</span>
            <span className="text-2xl font-bold text-red-400">72 BPM</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
            <span className="text-blue-400">Blood Oxygen</span>
            <span className="text-2xl font-bold text-blue-400">98%</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-purple-500/20 rounded-lg border border-purple-500/30">
            <span className="text-purple-400">Sleep Score</span>
            <span className="text-2xl font-bold text-purple-400">85/100</span>
          </div>
        </div>
      )
    },
    fitness: {
      title: "Fitness Tracking",
      description: "Comprehensive workout analysis and performance metrics",
      display: (
        <div className="space-y-4">
          <div className="p-4 bg-green-500/20 rounded-lg border border-green-500/30">
            <div className="flex justify-between items-center mb-2">
              <span className="text-green-400">Today's Steps</span>
              <span className="text-2xl font-bold text-green-400">8,547</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full" style={{width: '85%'}}></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-orange-500/20 rounded-lg border border-orange-500/30 text-center">
              <div className="text-orange-400 text-sm">Calories</div>
              <div className="text-xl font-bold text-orange-400">342</div>
            </div>
            <div className="p-3 bg-cyan-500/20 rounded-lg border border-cyan-500/30 text-center">
              <div className="text-cyan-400 text-sm">Distance</div>
              <div className="text-xl font-bold text-cyan-400">6.2km</div>
            </div>
          </div>
        </div>
      )
    },
    smart: {
      title: "Smart Features",
      description: "Stay connected with intelligent notifications and controls",
      display: (
        <div className="space-y-4">
          <div className="p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs">📱</div>
              <span className="text-blue-400">Incoming Call</span>
            </div>
            <div className="text-white font-semibold">John Doe</div>
            <div className="flex gap-2 mt-3">
              <button className="px-3 py-1 bg-green-500 rounded-full text-xs">Accept</button>
              <button className="px-3 py-1 bg-red-500 rounded-full text-xs">Decline</button>
            </div>
          </div>
          <div className="p-4 bg-purple-500/20 rounded-lg border border-purple-500/30">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-xs">🎵</div>
              <span className="text-purple-400">Now Playing</span>
            </div>
            <div className="text-white font-semibold">Synthwave Dreams</div>
            <div className="text-gray-400 text-sm">Electronic Vibes</div>
          </div>
        </div>
      )
    }
  };

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interact with our smartwatch interface and discover what makes it extraordinary
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Controls */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 mb-8">
              {Object.entries(demos).map(([key, demo]) => (
                <button
                  key={key}
                  onClick={() => setActiveDemo(key)}
                  className={`w-full p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                    activeDemo === key
                      ? 'border-cyan-400 bg-cyan-400/10'
                      : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                  }`}
                >
                  <h3 className={`text-xl font-bold mb-2 ${
                    activeDemo === key ? 'text-cyan-400' : 'text-white'
                  }`}>
                    {demo.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {demo.description}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Demo Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-80">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
              
              {/* Watch frame */}
              <div className="relative z-10 w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-full border-4 border-gray-700 shadow-2xl flex items-center justify-center">
                <div className="w-64 h-64 bg-black rounded-full border-2 border-gray-600 p-6 overflow-hidden">
                  <motion.div
                    key={activeDemo}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="h-full"
                  >
                    {demos[activeDemo as keyof typeof demos].display}
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full opacity-60 blur-sm"
            ></motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-60 blur-sm"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default InteractiveDemo;