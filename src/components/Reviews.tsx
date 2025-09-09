import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: "Sarah Chen",
      role: "Fitness Enthusiast",
      avatar: "👩‍💼",
      rating: 5,
      text: "The Nexus Watch has completely transformed my fitness routine. The accuracy of health tracking is incredible, and the battery life is exactly as advertised. Best tech purchase I've made this year!",
      highlight: "Battery life is exactly as advertised"
    },
    {
      name: "Marcus Rodriguez",
      role: "Tech Reviewer",
      avatar: "👨‍💻",
      rating: 5,
      text: "As someone who reviews tech for a living, I'm impressed by the build quality and attention to detail. The AI insights are genuinely helpful, not just marketing fluff. This is the future of wearables.",
      highlight: "This is the future of wearables"
    },
    {
      name: "Dr. Emily Watson",
      role: "Cardiologist",
      avatar: "👩‍⚕️",
      rating: 5,
      text: "I recommend the Nexus Watch to my patients. The health monitoring capabilities are medical-grade accurate, and the stress tracking has helped many of my patients better manage their wellbeing.",
      highlight: "Medical-grade accurate"
    },
    {
      name: "Jake Thompson",
      role: "Marathon Runner",
      avatar: "🏃‍♂️",
      rating: 5,
      text: "Survived my last three marathons without missing a beat. The GPS tracking is spot-on, and I love how it automatically detects my workout intensity. The waterproofing is no joke either!",
      highlight: "Survived my last three marathons"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the community of users who've transformed their lives with Nexus Watch
          </p>
        </motion.div>

        {/* Main Review Slider */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 md:p-12 border border-gray-700 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-3xl mb-4">
                    {reviews[currentReview].avatar}
                  </div>
                  <div className="flex justify-center">
                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
                    "{reviews[currentReview].text}"
                  </blockquote>
                  <div className="mb-4">
                    <div className="text-cyan-400 font-bold text-lg">
                      {reviews[currentReview].name}
                    </div>
                    <div className="text-gray-400">
                      {reviews[currentReview].role}
                    </div>
                  </div>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30">
                    <span className="text-cyan-400 text-sm font-medium">
                      "{reviews[currentReview].highlight}"
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700">
            <div className="text-3xl mb-3">🏆</div>
            <div className="text-2xl font-bold text-cyan-400 mb-2">4.9/5</div>
            <div className="text-gray-300">Average Rating</div>
            <div className="text-gray-400 text-sm mt-1">Based on 50,000+ reviews</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700">
            <div className="text-3xl mb-3">✅</div>
            <div className="text-2xl font-bold text-green-400 mb-2">98%</div>
            <div className="text-gray-300">Satisfaction Rate</div>
            <div className="text-gray-400 text-sm mt-1">Would recommend to friends</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700">
            <div className="text-3xl mb-3">🔄</div>
            <div className="text-2xl font-bold text-purple-400 mb-2">&lt;2%</div>
            <div className="text-gray-300">Return Rate</div>
            <div className="text-gray-400 text-sm mt-1">Industry leading quality</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Reviews;