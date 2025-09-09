import { motion } from "framer-motion";
import { useState } from "react";

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does the battery really last?",
      answer: "The Nexus Watch delivers a genuine 7-day battery life with typical use, including health monitoring, notifications, and workout tracking. Heavy GPS usage may reduce this to 5-6 days, which is still industry-leading."
    },
    {
      question: "Is it really waterproof for swimming?",
      answer: "Yes! With IP68 rating and 50-meter water resistance, the Nexus Watch is perfect for swimming, showering, and water sports. The waterproofing is tested to exceed industry standards."
    },
    {
      question: "How accurate is the health monitoring?",
      answer: "Our health sensors are medical-grade accurate, validated against clinical devices. Heart rate accuracy is ±2 BPM, blood oxygen ±2%, and sleep tracking uses advanced algorithms for 95%+ accuracy."
    },
    {
      question: "What phones does it work with?",
      answer: "The Nexus Watch is compatible with iPhone (iOS 12+) and Android (8.0+). Our companion app provides seamless syncing and advanced analytics for both platforms."
    },
    {
      question: "What's included in the warranty?",
      answer: "Every Nexus Watch comes with a comprehensive 2-year warranty covering manufacturing defects, battery issues, and hardware failures. We also offer free repairs for accidental damage in the first 6 months."
    },
    {
      question: "Can I return it if I don't like it?",
      answer: "Absolutely! We offer a 30-day money-back guarantee, no questions asked. If you're not completely satisfied, return it for a full refund including shipping costs."
    },
    {
      question: "How fast is shipping?",
      answer: "We ship within 24 hours of order confirmation. Standard shipping takes 3-5 business days, and express shipping takes 1-2 business days. All shipping is free worldwide."
    },
    {
      question: "Are there any monthly fees?",
      answer: "No monthly fees ever! Your one-time purchase includes lifetime access to all features, free software updates, and our companion app. No subscriptions required."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about the Nexus Watch
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 overflow-hidden backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-cyan-400 flex items-center justify-center transition-transform duration-300 ${
                  openFAQ === index ? 'rotate-45 bg-cyan-400' : ''
                }`}>
                  <span className={`text-sm font-bold ${
                    openFAQ === index ? 'text-black' : 'text-cyan-400'
                  }`}>
                    +
                  </span>
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openFAQ === index ? "auto" : 0,
                  opacity: openFAQ === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-gradient-to-r from-cyan-400/30 to-purple-400/30 mb-4"></div>
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our customer support team is available 24/7 to help you make the right decision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-full hover:from-cyan-400 hover:to-purple-500 transition-all duration-300">
                Live Chat Support
              </button>
              <button className="px-6 py-3 border-2 border-gray-600 text-white font-bold rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                Email Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;