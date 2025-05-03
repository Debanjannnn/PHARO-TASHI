"use client"

import { motion } from "framer-motion"
import { ClipboardCopy, GitBranch, BarChart3, Settings, ChevronRight, Zap } from "lucide-react"
import { useState } from "react"

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(0)

  const items = [
    {
      title: "AI-Powered Yield Optimization",
      description:
        "Machine learning models analyze historical staking rewards to predict real-time APR and choose the best pools.",
      icon: <ClipboardCopy className="w-5 h-5" />,
      stats: [
        { label: "Average APY", value: "12.5%" },
        { label: "Prediction Accuracy", value: "94.2%" },
      ],
    },
    {
      title: "Multi-Pool Staking System",
      description:
        "Support for multiple staking pools with different tokens. Each pool can have unique APY rates and configurations.",
      icon: <GitBranch className="w-5 h-5" />,
      stats: [
        { label: "Supported Pools", value: "12" },
        { label: "Token Types", value: "28+" },
      ],
    },
    {
      title: "Auto-Rebalancing",
      description:
        "Automatically shifts liquidity when APR drops, using real-time oracle data from Chainlink and The Graph.",
      icon: <BarChart3 className="w-5 h-5" />,
      stats: [
        { label: "Rebalance Time", value: "<2 min" },
        { label: "Efficiency Gain", value: "18.3%" },
      ],
    },
    {
      title: "User Customization",
      description: "Choose between Conservative, Aggressive, or Custom modes to match your investment strategy.",
      icon: <Settings className="w-5 h-5" />,
      stats: [
        { label: "Strategy Options", value: "3+" },
        { label: "Custom Parameters", value: "12" },
      ],
    },
  ]

  return (
    <div className="bg-gradient-to-b from-blue-700 to-blue-600 p-6 md:p-12 w-full">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-blue-800/30 px-4 py-1 rounded-full text-blue-100 text-sm font-medium mb-4">
            POWERFUL FEATURES
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why Choose{" "}
            <span className="relative">
              <span className="relative z-10">Pharo Tashi</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-400/30 -z-0"></span>
            </span>
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mt-4">
            Stake your assets, multiply your power, and reign over DeFi—because the future doesn't wait, and neither
            should you.
          </p>
        </motion.div>

        {/* Feature tabs */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 mb-8 flex justify-between overflow-x-auto">
          {items.map((item, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`px-4 py-3 rounded-lg flex items-center whitespace-nowrap ${
                activeTab === index ? "bg-white text-blue-700 shadow-lg" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div className={`mr-2 ${activeTab === index ? "text-blue-600" : "text-blue-300"}`}>{item.icon}</div>
              <span className="font-medium">{item.title.split(" ")[0]}</span>
            </motion.button>
          ))}
        </div>

        {/* Active feature content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Feature description */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-3xl p-6 h-full shadow-xl">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-blue-600">{items[activeTab].icon}</div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{items[activeTab].title}</h3>
              <p className="text-gray-600 mb-6">{items[activeTab].description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {items[activeTab].stats.map((stat, idx) => (
                  <div key={idx} className="bg-blue-50 rounded-xl p-3">
                    <p className="text-xs text-gray-500">{stat.label}</p>
                    <p className="text-lg font-bold text-blue-700">{stat.value}</p>
                  </div>
                ))}
              </div>

              <button className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Feature visualization */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-3xl p-6 h-full shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-semibold text-gray-800">Performance Overview</h4>
                <div className="flex items-center text-sm text-blue-600 font-medium">
                  <Zap className="w-4 h-4 mr-1" /> Live Data
                </div>
              </div>

              {/* Feature-specific visualization */}
              <div className="h-64 bg-gradient-to-br from-blue-50 to-white rounded-xl flex items-center justify-center p-6">
                {activeTab === 0 && <FeatureVisualization1 />}
                {activeTab === 1 && <FeatureVisualization2 />}
                {activeTab === 2 && <FeatureVisualization3 />}
                {activeTab === 3 && <FeatureVisualization4 />}
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500 mb-1">Total Value Locked</p>
                  <p className="text-xl font-bold text-blue-700">$24.8M</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500 mb-1">Active Users</p>
                  <p className="text-xl font-bold text-blue-700">5,280+</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-xs text-gray-500 mb-1">Daily Volume</p>
                  <p className="text-xl font-bold text-blue-700">$1.2M</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
       
      </div>
    </div>
  )
}

// Feature visualizations
function FeatureVisualization1() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-center mb-4">
        <span className="text-sm font-medium text-gray-500">AI Yield Optimization</span>
      </div>
      <div className="flex-1 relative">
        <div className="absolute inset-0 flex items-end">
          <div className="w-1/5 bg-blue-200 h-[30%] rounded-t-md"></div>
          <div className="w-1/5 bg-blue-300 h-[45%] rounded-t-md"></div>
          <div className="w-1/5 bg-blue-400 h-[60%] rounded-t-md"></div>
          <div className="w-1/5 bg-blue-500 h-[75%] rounded-t-md"></div>
          <div className="w-1/5 bg-blue-600 h-[90%] rounded-t-md"></div>
        </div>
        <div className="absolute top-0 left-0 w-full flex justify-between px-2 text-xs text-gray-500">
          <span>Standard</span>
          <span>Optimized</span>
        </div>
        <div className="absolute bottom-0 left-0 w-full flex justify-between px-2 text-xs text-gray-500">
          <span>5%</span>
          <span>12.5%</span>
        </div>
      </div>
    </div>
  )
}

function FeatureVisualization2() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="grid grid-cols-3 gap-4 w-full">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div
            key={i}
            className={`rounded-lg p-3 flex items-center justify-center ${
              i % 3 === 0
                ? "bg-blue-500 text-white"
                : i % 3 === 1
                  ? "bg-blue-200 text-blue-800"
                  : "bg-blue-100 text-blue-600"
            }`}
          >
            <div className="text-center">
              <div className="font-bold">Pool {i}</div>
              <div className="text-xs">{5 + i}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FeatureVisualization3() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-full h-full">
        <svg viewBox="0 0 100 50" className="w-full h-full">
          <path
            d="M0,40 C10,35 20,45 30,35 C40,25 50,40 60,30 C70,20 80,25 90,15 L90,50 L0,50 Z"
            fill="rgba(59, 130, 246, 0.2)"
          />
          <path
            d="M0,40 C10,35 20,45 30,35 C40,25 50,40 60,30 C70,20 80,25 90,15"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
          />
          <circle cx="30" cy="35" r="3" fill="#3b82f6" />
          <circle cx="60" cy="30" r="3" fill="#3b82f6" />
          <circle cx="90" cy="15" r="3" fill="#3b82f6" />

          <path d="M30,35 L60,15" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,2" />
          <circle cx="60" cy="15" r="3" fill="#ef4444" />
          <text x="62" y="12" fontSize="3" fill="#ef4444">
            Rebalanced
          </text>
        </svg>

        <div className="absolute bottom-0 left-0 w-full flex justify-between px-2 text-xs text-gray-500">
          <span>Day 1</span>
          <span>Day 15</span>
          <span>Day 30</span>
        </div>
      </div>
    </div>
  )
}

function FeatureVisualization4() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="grid grid-cols-3 gap-8 w-full">
        <div className="bg-blue-100 rounded-xl p-4 text-center">
          <div className="text-blue-800 font-medium mb-2">Conservative</div>
          <div className="flex justify-center mb-2">
            <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-blue-300 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">
                  5%
                </div>
              </div>
            </div>
          </div>
          <div className="text-xs text-blue-600">Low Risk</div>
        </div>

        <div className="bg-blue-200 rounded-xl p-4 text-center">
          <div className="text-blue-800 font-medium mb-2">Balanced</div>
          <div className="flex justify-center mb-2">
            <div className="w-16 h-16 rounded-full bg-blue-300 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  8%
                </div>
              </div>
            </div>
          </div>
          <div className="text-xs text-blue-600">Medium Risk</div>
        </div>

        <div className="bg-blue-300 rounded-xl p-4 text-center">
          <div className="text-blue-800 font-medium mb-2">Aggressive</div>
          <div className="flex justify-center mb-2">
            <div className="w-16 h-16 rounded-full bg-blue-400 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  12%
                </div>
              </div>
            </div>
          </div>
          <div className="text-xs text-blue-600">High Risk</div>
        </div>
      </div>
    </div>
  )
}