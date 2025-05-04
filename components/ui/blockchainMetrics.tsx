import React from "react";
import { cn } from "@/lib/utils";

export default function BlockchainMetrics() {
  return (
    <div className="w-full p-6 md:p-12 lg:p-16 ">
      {/* Header */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          WHY CHOOSE <span className="text-black drop-shadow-[0_4px_1.5px_rgba(1,8,255,1)]">PHAROS?</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Stake your assets, multiply your power, and reign over DeFi—because the future doesn't wait, and neither should you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Left panel with scalability info */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
          <div className="mb-8 flex justify-center">
            <img
              src="https://cdn.prod.website-files.com/67dcd1631de3a405ce797864/67dcd1631de3a405ce797897_Scalability%20image.webp"
              alt="Blockchain scalability visualization"
              className="object-contain w-full max-w-[300px]"
            />
          </div>

          <div className="mt-auto">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Scalability</h3>
            <p className="text-gray-700 leading-relaxed">
              Pharos offers full <span className="font-semibold">Ethereum dApp compatibility</span> for EVM developers
              using favorite toolchains, saves <span className="font-semibold">80%</span> on storage and scales to{" "}
              <span className="font-semibold">billion-level</span> accounts with{" "}
              <span className="font-semibold">global</span> deployment and fair access. Pharos delivers{" "}
              <span className="font-semibold">100x</span> faster transactions and lower costs for end users, ensuring
              unparalleled experiences.
            </p>
          </div>
        </div>

        {/* Right side content */}
        <div className="flex flex-col gap-8">
          {/* Top metrics panel */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <MetricCard title="Transaction per second (TPS)" value="50,000" />
              <MetricCard title="Gigagas per second" value="2 Gigagas" />
              <MetricCard title="Block time" value="Less than 1 second" />
              <MetricCard title="Scalability" value="1 Billion" />
            </div>
          </div>

          {/* Bottom panels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Extensibility panel */}
            <FeatureCard 
              title="Extensibility"
              description="Pharos exemplifies dynamic extensibility with modular and real-time SPN networks, leveraging geographical decentralization alongside heterogeneous software and hardware support. Pharos embraces WASM to cater to a broad spectrum of developers and ensures VM interoperability, sparking on-chain innovations"
              imageUrl="https://cdn.prod.website-files.com/67dcd1631de3a405ce797864/67dcd1631de3a405ce797897_Scalability%20image.webp"
            />

            {/* Security panel */}
            <FeatureCard 
              title="Security"
              description="Pharos natively supports light client protocol on PB-level data volumes, while leveraging fundamental security technologies such as optimal Byzantine-fault tolerance in consensus, auditability and formal verification in execution, and authenticated storage in store, to provide robust security guarantees at all levels."
              imageUrl="https://cdn.prod.website-files.com/67dcd1631de3a405ce797864/67dcd1631de3a405ce797897_Scalability%20image.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for the metric cards
function MetricCard({ title, value, className }: { title: string; value: string; className?: string }) {
  return (
    <div className={cn("p-6 bg-blue-50 border border-blue-100/30", className)}>
      <p className="text-gray-500 text-sm mb-1 font-medium">{title}</p>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{value}</h2>
    </div>
  );
}

// Helper component for the feature cards
function FeatureCard({ title, description, imageUrl }: { title: string; description: string; imageUrl: string }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="mb-4 flex justify-center">
        <img
          src={imageUrl}
          alt={`${title} visualization`}
          className="object-contain w-full max-w-[120px]"
        />
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}