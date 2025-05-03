"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Shield,
  Rocket,
  RefreshCw,
  TrendingUp,
  Target,
  ArrowUpRight,
  ChevronDown,
  Clock,
  Scale,
  Sparkles,
  ArrowRight,
  BarChart4,
} from "lucide-react"
import { cn } from "@/lib/utils"

const YieldCalculator = () => {
  const [selectedStrategy, setSelectedStrategy] = useState("balanced")
  const [btcAmount, setBtcAmount] = useState("1.0")
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Simulate refresh action
  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 1000)
  }

  return (
    <div className="w-full h-full max-w-5xl max-h-5xl mx-auto p-4 bg-white rounded-xl">
      {/* Glass Background Effect */}
      <div className="relative top-0 left-0 right-0  bg-gradient-to-b from-[#2432C5]/20 to-transparent -z-10 blur-3xl opacity-50" />

      {/* Main Card with enhanced styling */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-3 h-full bg-white rounded-2xl border border-[#2432C5]/20 overflow-hidden shadow-xl shadow-[#2432C5]/10"
      >
        {/* Left Section (2/3) */}
        <div className="md:col-span-2 backdrop-blur-sm">
          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#2432C5]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#2432C5]/10 rounded-full blur-3xl" />

          {/* Header Section */}
          <div className="p-4 border-b border-gray-200 relative">
            <div className="flex justify-between items-center mb-3">
              <motion.h2
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#2432C5] to-[#2432C5]"
              >
                BTC Yield Router
              </motion.h2>
              <div className="flex gap-2">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-700 flex items-center border border-green-500/30"
                >
                  <span className="h-1.5 w-1.5 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                  Live
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xs px-2 py-0.5 rounded-full bg-[#2432C5]/20 text-[#2432C5] flex items-center border border-[#2432C5]/30"
                >
                  <Sparkles className="h-3 w-3 mr-1" />
                  AI Active
                </motion.span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3 mb-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-50 rounded-xl p-3 border border-gray-200 hover:border-[#2432C5]/30 transition-all duration-300 hover:bg-gray-100/70"
              >
                <p className="text-gray-500 text-xs">Total Value Locked</p>
                <p className="text-xl font-medium text-gray-800 flex items-center">
                  <span>1,246.5</span>
                  <span className="text-gray-500 ml-1">BTC</span>
                </p>
                <div className="flex items-center mt-1 text-green-600 text-xs">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +0.8% from yesterday
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gray-50 rounded-xl p-3 border border-gray-200 hover:border-[#2432C5]/30 transition-all duration-300 hover:bg-gray-100/70"
              >
                <p className="text-gray-500 text-xs">Current APR</p>
                <p className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#2432C5] to-[#3a4ad9]">
                  8.74%
                </p>
                <div className="flex items-center mt-1 text-green-600 text-xs">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  +0.3% from last week
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-2"
            >
              <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden backdrop-blur-sm">
                <div className="h-1.5 bg-gradient-to-r from-[#2432C5] to-[#3a4ad9] rounded-full w-[64%]"></div>
              </div>
            </motion.div>

            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="hover:text-[#2432C5] cursor-pointer transition-colors flex items-center"
              >
                <span className="h-2 w-2 bg-[#2432C5] rounded-full mr-1"></span>
                CoreDAO: 64%
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="hover:text-[#2432C5] cursor-pointer transition-colors flex items-center"
              >
                <span className="h-2 w-2 bg-[#3a4ad9] rounded-full mr-1"></span>
                Uniswap: 25%
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="hover:text-[#2432C5] cursor-pointer transition-colors flex items-center"
              >
                <span className="h-2 w-2 bg-[#4f5de6] rounded-full mr-1"></span>
                Aave: 11%
              </motion.span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500 flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                Last updated: <span className="ml-1 text-gray-700">Just now</span>
              </span>
              <button
                onClick={handleRefresh}
                className="text-xs px-3 py-1 bg-[#2432C5]/10 text-[#2432C5] rounded-full hover:bg-[#2432C5]/20 transition-colors flex items-center border border-[#2432C5]/30"
              >
                <RefreshCw className={`h-3 w-3 mr-1 ${isRefreshing ? "animate-spin" : ""}`} />
                Refresh
              </button>
            </div>
          </div>

          {/* BTC Input Section */}
          <div className="p-4 border-b border-gray-200 bg-gray-50 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-gray-800 text-sm font-medium">Your BTC Amount</h3>
              <div className="relative">
                <button className="text-xs px-3 py-1 bg-[#2432C5]/10 text-[#2432C5] rounded-full hover:bg-[#2432C5]/20 transition-colors flex items-center border border-[#2432C5]/30 group">
                  Timeframe: 1 Year
                  <ChevronDown className="h-3 w-3 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                </button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center bg-white rounded-xl p-3 border border-gray-200 mb-3 focus-within:border-[#2432C5]/50 transition-colors"
            >
              <input
                type="text"
                value={btcAmount}
                onChange={(e) => setBtcAmount(e.target.value)}
                className="bg-transparent text-gray-800 text-xl w-full focus:outline-none px-2"
              />
              <div className="text-[#2432C5] font-medium px-2 bg-[#2432C5]/10 py-1 rounded-lg border border-[#2432C5]/20">
                BTC
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-white rounded-xl p-3 border border-gray-200 hover:border-[#2432C5]/30 transition-all duration-300 hover:bg-gray-50"
              >
                <p className="text-gray-500 text-xs mb-1">Estimated Yield</p>
                <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#2432C5] to-[#3a4ad9]">
                  0.0874 BTC
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-white rounded-xl p-3 border border-gray-200 hover:border-[#2432C5]/30 transition-all duration-300 hover:bg-gray-50"
              >
                <p className="text-gray-500 text-xs mb-1">Total Value</p>
                <p className="text-lg font-medium text-gray-800">1.0874 BTC</p>
              </motion.div>
            </div>
          </div>

          {/* Strategy Selection */}
          <div className="p-4 border-b border-gray-200 md:border-b-0 backdrop-blur-sm">
            <h3 className="text-gray-800 text-sm font-medium mb-3">Select Strategy</h3>

            <div className="grid grid-cols-3 gap-3 mb-3">
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className={cn(
                  "flex flex-col items-center justify-center p-3 rounded-xl transition-all h-20 border",
                  selectedStrategy === "conservative"
                    ? "bg-gray-100 border-gray-300 text-gray-800 shadow-inner"
                    : "bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300",
                )}
                onClick={() => setSelectedStrategy("conservative")}
              >
                <Shield className={`h-5 w-5 mb-2 ${selectedStrategy === "conservative" ? "text-blue-500" : ""}`} />
                <span className="text-xs">Conservative</span>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className={cn(
                  "flex flex-col items-center justify-center p-3 rounded-xl transition-all h-20 border",
                  selectedStrategy === "balanced"
                    ? "bg-gradient-to-b from-[#2432C5]/30 to-[#2432C5]/10 border-[#2432C5]/40 text-[#2432C5] shadow-inner"
                    : "bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300",
                )}
                onClick={() => setSelectedStrategy("balanced")}
              >
                <Scale className={`h-5 w-5 mb-2 ${selectedStrategy === "balanced" ? "text-[#2432C5]" : ""}`} />
                <span className="text-xs">Balanced</span>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className={cn(
                  "flex flex-col items-center justify-center p-3 rounded-xl transition-all h-20 border",
                  selectedStrategy === "aggressive"
                    ? "bg-gray-100 border-gray-300 text-gray-800 shadow-inner"
                    : "bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300",
                )}
                onClick={() => setSelectedStrategy("aggressive")}
              >
                <Rocket className={`h-5 w-5 mb-2 ${selectedStrategy === "aggressive" ? "text-red-500" : ""}`} />
                <span className="text-xs">Aggressive</span>
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="bg-white rounded-xl p-3 border border-gray-200 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#2432C5] to-[#3a4ad9]"></div>
              {selectedStrategy === "conservative" && (
                <p className="text-gray-600 text-xs">Lower risk strategy with stable returns around 5-6% APR.</p>
              )}
              {selectedStrategy === "balanced" && (
                <p className="text-gray-600 text-xs">Moderate risk strategy with balanced returns around 8-9% APR.</p>
              )}
              {selectedStrategy === "aggressive" && (
                <p className="text-gray-600 text-xs">Higher risk strategy with potential returns above 12% APR.</p>
              )}
            </motion.div>
          </div>
        </div>

        {/* Right Section - AI Prediction (1/3) */}
        <div className="md:border-l border-gray-200 bg-gradient-to-br from-gray-50 to-white backdrop-blur-sm">
          <div className="p-4">
            <div className="flex items-center mb-3">
              <Target className="h-4 w-4 mr-2 text-[#2432C5]" />
              <h3 className="text-gray-800 text-sm font-medium">AI Prediction</h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-2 mb-4"
            >
              <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200 hover:border-[#2432C5]/30 transition-colors hover:transform hover:translate-x-1 duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2432C5]/30 to-[#2432C5]/20 flex items-center justify-center border border-[#2432C5]/20">
                    <div className="text-[#2432C5] text-xs font-bold">C</div>
                  </div>
                  <span className="text-xs text-gray-800">CoreDAO</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-green-600 text-xs flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +0.26%
                  </span>
                  <span className="text-[#2432C5] text-xs">9.12% APR</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200 hover:border-[#2432C5]/30 transition-colors hover:transform hover:translate-x-1 duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2432C5]/30 to-[#2432C5]/20 flex items-center justify-center border border-[#2432C5]/20">
                    <div className="text-[#2432C5] text-xs font-bold">U</div>
                  </div>
                  <span className="text-xs text-gray-800">Uniswap</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-green-600 text-xs flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +0.18%
                  </span>
                  <span className="text-[#2432C5] text-xs">7.45% APR</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200 hover:border-[#2432C5]/30 transition-colors hover:transform hover:translate-x-1 duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2432C5]/30 to-[#2432C5]/20 flex items-center justify-center border border-[#2432C5]/20">
                    <div className="text-[#2432C5] text-xs font-bold">A</div>
                  </div>
                  <span className="text-xs text-gray-800">Aave</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-green-600 text-xs flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +0.31%
                  </span>
                  <span className="text-[#2432C5] text-xs">5.86% APR</span>
                </div>
              </div>
            </motion.div>

            <div className="rounded-xl bg-gray-50 p-2 mb-4 border border-gray-200">
              <div className="flex items-center mb-2">
                <BarChart4 className="h-3 w-3 text-[#2432C5] mr-1" />
                <span className="text-xs text-gray-500">Performance Metrics</span>
              </div>
              <div className="h-20 w-full flex items-end">
                <div className="h-[40%] w-1/3 bg-gradient-to-t from-[#2432C5]/80 to-[#2432C5]/20 rounded-t-sm mx-0.5"></div>
                <div className="h-[70%] w-1/3 bg-gradient-to-t from-[#2432C5]/80 to-[#2432C5]/20 rounded-t-sm mx-0.5"></div>
                <div className="h-[30%] w-1/3 bg-gradient-to-t from-[#2432C5]/80 to-[#2432C5]/20 rounded-t-sm mx-0.5"></div>
              </div>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-2.5 bg-gradient-to-r from-[#2432C5] to-[#3a4ad9] hover:from-[#1e2aa6] hover:to-[#2432C5] text-white rounded-xl transition-all duration-300 text-sm font-medium flex items-center justify-center group"
            >
              Apply Optimal Strategy
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default YieldCalculator
