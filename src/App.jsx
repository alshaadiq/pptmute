import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title Slide (Matching reference image 9)
    {
      title: "Title",
      bgColor: "bg-gradient-to-r from-yellow-50 via-yellow-100 to-orange-100",
      content: (
        <div className="h-full flex flex-col justify-center px-20 py-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-red-600 text-3xl font-semibold mb-4">Strategic Business Case:</h2>
              <h1 className="text-black text-6xl font-bold leading-tight">
                <span className="text-black">SMG's Opportunity in</span><br />
                <span className="text-black">Indonesia's <span className="text-red-600">Dairy Industry</span></span>
              </h1>
            </div>
            <div className="h-1 w-96 bg-gray-400"></div>
            <p className="text-gray-800 text-xl">BOOST Business Day 2025 | Mutia Hendriani Putri</p>
          </div>
        </div>
      )
    },

    // Slide 2: Strategic Question (Matching reference image 10)
    {
      title: "Strategic Question",
      bgColor: "bg-white",
      content: (
        <div className="h-full flex items-center justify-center px-20 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="border-4 border-yellow-400 rounded-3xl p-16 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-5xl font-bold text-center leading-snug">
                <span className="text-black">Should </span>
                <span className="text-red-600">SMG</span>
                <span className="text-black"> expand its business</span><br />
                <span className="text-black">in </span>
                <span className="text-yellow-500">dairy industry</span>
                <span className="text-black">?</span>
              </h2>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3: Market Conditions Split View (Matching reference image 11)
    {
      title: "Indonesian Market 2014-2018",
      bgColor: "bg-white",
      content: (
        <div className="h-full grid grid-cols-2">
          {/* Left side - Orange */}
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-12 flex flex-col justify-between">
            <h2 className="text-black text-3xl font-bold mb-8">Indonesian Economy 2014–2018</h2>
            
            <div className="space-y-6 flex-1">
              <div className="bg-white rounded-2xl p-6 border-4 border-black hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-lg mb-3">POPULATION</h3>
                <p className="text-base font-semibold mb-2">235 → 263 mio</p>
                <p className="text-gray-700 text-sm">Population Growth → Increased Consumers</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border-4 border-black hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-lg mb-3">GDP (Gross Domestic Product)</h3>
                <p className="text-base font-semibold mb-2">USD 890 B → 1,042 B</p>
                <p className="text-gray-700 text-sm">Economic Growth → Increased Spending</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border-4 border-black hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-lg mb-3">CPI (Consumer Price Index)</h3>
                <p className="text-base font-semibold mb-2">226 → 267</p>
                <p className="text-gray-700 text-sm">General Inflation → Reasonable Increase in Prices</p>
              </div>
            </div>

            <p className="text-xs text-black mt-4">Source: BOOST Business Case Document</p>
          </div>

          {/* Right side - White with data */}
          <div className="bg-white p-8 flex flex-col">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Indonesian Dairy Market Size 2014 - 2018</h2>
            
            <div className="mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-yellow-400 to-orange-400">
                    <th className="border-2 border-gray-400 p-3 text-left font-bold text-sm"></th>
                    <th className="border-2 border-gray-400 p-3 text-center font-bold text-sm">CAGR by Volume</th>
                    <th className="border-2 border-gray-400 p-3 text-center font-bold text-sm">CAGR by Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-orange-50 transition-colors">
                    <td className="border-2 border-gray-400 p-3 font-bold bg-orange-400 text-sm">Milk</td>
                    <td className="border-2 border-gray-400 p-3 text-center font-bold text-sm">7.08%</td>
                    <td className="border-2 border-gray-400 p-3 text-center font-bold text-sm">12.28%</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border-2 border-gray-400 p-3 font-bold bg-orange-400 text-sm">Ice Cream</td>
                    <td className="border-2 border-gray-400 p-3 text-center font-bold text-sm">11.14%</td>
                    <td className="border-2 border-gray-400 p-3 text-center font-bold text-sm">13.63%</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border-2 border-gray-400 p-3 font-bold bg-orange-400 text-sm">Yogurt</td>
                    <td className="border-2 border-gray-400 p-3 text-center font-bold text-sm">12.19%</td>
                    <td className="border-2 border-gray-400 p-3 text-center font-bold text-sm">16.13%</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex items-center justify-end gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <div className="font-bold text-sm">Big Market</div>
                  </div>
                  <div className="w-8 h-6 border-r-4 border-t-4 border-gray-800"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-4 border-r-4 border-b-4 border-gray-800"></div>
                  <div className="text-left">
                    <div className="font-bold text-sm">Fast Growth &</div>
                    <div className="font-bold text-sm">Medium Market</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 border-2 border-gray-400 rounded-2xl p-4 text-center mb-4">
              <p className="text-sm font-semibold">Volume <span className="text-lg">&lt;</span> Value <span className="text-lg">=</span> Positive Indication of Profitability</p>
            </div>

            <h3 className="text-xl font-bold text-center text-gray-800 mb-3">Indonesian Dairy Market Size Prediction</h3>
            <p className="text-xs text-center text-gray-600 mb-4">Source: the-shiv.com/indonesia-dairy-market/</p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gray-200 border-2 border-gray-400 rounded-2xl p-4 text-center">
                <p className="text-sm font-bold">Predicted US$27.6B in 2025</p>
              </div>
              <div className="bg-gray-200 border-2 border-gray-400 rounded-2xl p-4 text-center">
                <p className="text-sm font-bold">Predicted Growing 6.56% CAGR 2025 - 2023</p>
              </div>
            </div>

            <p className="text-center text-sm font-bold">
              Dairy demand is increasing and consumers are spending more<br />
              <span className="text-red-600">– making the category attractive to enter !</span>
            </p>
          </div>
        </div>
      )
    },

    // Slide 6: Competitor's Focus & SMG's Branding (was Slide 4)
    {
      title: "Competitor's Focus & SMG's Branding",
      bgColor: "bg-white",
      content: (
        <div className="h-full flex flex-col p-12">
          {/* Top Section - Competitor's Focus */}
          <div className="mb-6 pb-6">
            <h2 className="text-3xl font-bold mb-2">Competitor's Focus</h2>
            <p className="text-sm text-gray-600 mb-4 italic">Top 3 UHT Company in Indonesia</p>
            <p className="text-sm text-gray-600 mb-4 italic">Source: UHT Annual Report 2024</p>

            <div className="space-y-3">
              <p className="text-sm">
                <span className="font-bold">Ultrajaya</span> – Strongest in white & flavoured UHT for the mass segment
              </p>
              <p className="text-sm">
                <span className="font-bold">FrieslandCampina</span> – Family Segment, Primarily white liquid milk.
              </p>
              <p className="text-sm">
                <span className="font-bold">Indofood CBP (Indomilk)</span> – Kids Segment, Especially flavoured UHT
              </p>
            </div>
          </div>

          <div className="border-t-4 border-red-600 mb-6 pb-6"></div>

          {/* Middle Section - SMG's Branding */}
          <div className="mb-6 pb-6">
            <h2 className="text-3xl font-bold mb-2">SMG's Branding</h2>
            <p className="text-sm text-gray-600 italic mb-4">Source: sarimuni.co.id</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-4 text-center">
                <p className="font-bold text-black">High Quality & Varied Flavours</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-4 text-center">
                <p className="font-bold text-black">Extensive Distribution Network</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-4 text-center">
                <p className="font-bold text-black">Lower Middle Market</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-4 text-center">
                <p className="font-bold text-black">Market Support</p>
              </div>
            </div>
          </div>

          <div className="border-t-4 border-yellow-400 mb-6 pb-6"></div>

          {/* Bottom Section - Target Market */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Target Market</h2>
            <ul className="space-y-2">
              <li className="text-sm">• Demography: <span className="font-bold">Children, Younger, Family</span></li>
              <li className="text-sm">• Geography: <span className="font-bold">Urban–Semi urban (GT focus)</span></li>
              <li className="text-sm">• Behaviour: <span className="font-bold">Affordable Buyers, High-frequency Buyers</span></li>
            </ul>
          </div>
        </div>
      )
    },

    // Slide 4: Competition Landscape (was Slide 5)
    {
      title: "Competition Landscape",
      bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
      content: (
        <div className="h-full flex flex-col p-8">
          <h2 className="text-white text-3xl font-bold mb-4">
            Indonesian Beverages Market - Competition Landscape 2017-2018
          </h2>

          <div className="bg-white rounded-2xl p-6 flex-1 flex flex-col">
            <div className="grid grid-cols-3 gap-6 mb-3">
              <div className="text-center">
                <h3 className="text-base font-bold mb-1">CR3 by Value</h3>
                <p className="text-xs">(Top 3 Market Holders)</p>
              </div>
              <div className="text-center">
                <h3 className="text-base font-bold mb-1">Value vs Volume</h3>
                <p className="text-xs">Share Comparison</p>
              </div>
              <div className="text-center">
                <h3 className="text-base font-bold mb-1">Key Points</h3>
              </div>
            </div>

            <hr className="border-gray-300 mb-3" />

            {/* Milk Row */}
            <div className="grid grid-cols-3 gap-4 mb-2 hover:bg-gray-50 p-3 rounded-lg transition-colors">
              <div>
                <h4 className="text-sm font-bold mb-1">Milk <span className="text-xs font-normal">Medium Intensity</span></h4>
                <div className="text-3xl font-bold text-red-600 mb-1">55%</div>
                <div className="text-xs space-y-0.5">
                  <p>PT Ultrajaya Milk</p>
                  <p>Royal Frieslandcampina</p>
                  <p>PT Indofood</p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs mb-1">% Volume {'>'} % Value</p>
                <p className="text-xs">(most)</p>
              </div>
              <div className="flex flex-col justify-center">
                <ul className="text-xs space-y-0.5 list-disc list-inside">
                  <li>Market dispersed</li>
                  <li>Strong value segment</li>
                </ul>
              </div>
            </div>

            {/* Yoghurt Row */}
            <div className="grid grid-cols-3 gap-4 mb-2 hover:bg-gray-50 p-3 rounded-lg transition-colors">
              <div>
                <h4 className="text-sm font-bold mb-1">Yoghurt <span className="text-xs font-normal">High Intensity</span></h4>
                <div className="text-3xl font-bold text-red-600 mb-1">81%</div>
                <div className="text-xs space-y-0.5">
                  <p>Yakult <span className="italic">(Dominant)</span></p>
                  <p>Macro Group</p>
                  <p>PT Nutrifood</p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs mb-0.5">Vol 75% {'>'} Val 58%</p>
                <p className="text-xs mb-0.5">Vol 9% {'<'} Val 14%</p>
                <p className="text-xs">Vol 8% = Val 8%</p>
              </div>
              <div className="flex flex-col justify-center">
                <ul className="text-xs space-y-0.5 list-disc list-inside">
                  <li>Dominated by major players</li>
                </ul>
              </div>
            </div>

            {/* Ice Cream Row */}
            <div className="grid grid-cols-3 gap-4 hover:bg-gray-50 p-3 rounded-lg transition-colors">
              <div>
                <h4 className="text-sm font-bold mb-1">Ice Cream <span className="text-xs font-normal">High Intensity</span></h4>
                <div className="text-3xl font-bold text-red-600 mb-1">87%</div>
                <div className="text-xs space-y-0.5">
                  <p>Unilever <span className="italic">(Dominant)</span></p>
                  <p>PT. Campina</p>
                  <p>Ezaki Glico</p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs mb-0.5">Vol 63% {'<'} Val 70%</p>
                <p className="text-xs mb-0.5">Vol 12% {'<'} Val 13%</p>
                <p className="text-xs">Vol 4% = Val 4%</p>
              </div>
              <div className="flex flex-col justify-center">
                <ul className="text-xs space-y-0.5 list-disc list-inside">
                  <li>Large value segment</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-3 bg-orange-600 text-white p-3 rounded-lg flex items-center justify-center gap-2">
            <p className="text-sm font-bold">
              <span className="text-yellow-300">Milk</span> open, <span className="text-yellow-300">Yoghurt</span> concentrated, <span className="text-yellow-300">Ice Cream</span> concentrated with high value
            </p>
          </div>

          <p className="text-xs text-white/80 mt-2">Source: BOOST Business Case Document</p>
        </div>
      )
    },

    // Slide 7: Expansion Strategy (was Slide 6)
    {
      title: "Expansion Strategy",
      bgColor: "bg-white",
      content: (
        <div className="h-full grid grid-cols-2">
          {/* Left side - Orange */}
          <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 p-8 flex flex-col justify-between">
            <h2 className="text-5xl font-bold mb-4">Expansion</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-white text-3xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-0.5">Milk</h3>
                  <div className="text-xs space-y-0.5">
                    <p>Largest, open market</p>
                    <p>Stable growth (CAGR)</p>
                    <p>CR3 = 55%</p>
                  </div>
                </div>
              </div>

              <div className="pl-4">
                <div className="text-xl mb-1">↓</div>
                <p className="text-xs font-semibold">Step by Step</p>
              </div>

              <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-orange-600 text-3xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-0.5">Yoghurt</h3>
                  <div className="text-xs space-y-0.5">
                    <p>Fast Growth (CAGR)</p>
                    <p>CR3 = 81%</p>
                  </div>
                </div>
              </div>

              <div className="pl-4">
                <div className="text-xl mb-1">↓</div>
              </div>

              <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-orange-600 text-3xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-0.5">Ice Cream</h3>
                  <div className="text-xs space-y-0.5">
                    <p>High Value</p>
                    <p>CR3 = 87%</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-white/70">Source: BOOST Business Case Document</p>
          </div>

          {/* Right side - White */}
          <div className="bg-white p-8 flex flex-col">
            <div className="mb-3">
              <h3 className="text-lg font-bold mb-2">
                Why <span className="text-red-600">Milk</span> is<br />
                <span className="underline">top priority</span>?
              </h3>
            </div>

            <div className="space-y-2 mb-4 text-sm">
              <p className="text-gray-700">• Build distribution scale faster</p>
              <p className="text-gray-700">• Strengthen brand through high-rotation products</p>
              <p className="text-gray-700">• Establish foundation before entering competitive categories</p>
            </div>

            <div className="mb-2">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-1 text-left text-xs"></th>
                    <th className="border border-gray-300 p-1 text-center font-bold">2017</th>
                    <th className="border border-gray-300 p-1 text-center font-bold">2018</th>
                    <th className="border border-gray-300 p-1 text-center font-bold">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 p-1 font-semibold text-xs">Flavoured</td>
                    <td className="border border-gray-300 p-1 text-right">706</td>
                    <td className="border border-gray-300 p-1 text-right">752</td>
                    <td className="border border-gray-300 p-1 text-right">6.52%</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 p-1 font-semibold text-xs">White Liquid</td>
                    <td className="border border-gray-300 p-1 text-right">300</td>
                    <td className="border border-gray-300 p-1 text-right">315</td>
                    <td className="border border-gray-300 p-1 text-right">5.00%</td>
                  </tr>
                  <tr className="bg-orange-100 font-bold text-xs">
                    <td className="border border-gray-300 p-1">Total</td>
                    <td className="border border-gray-300 p-1 text-right">1047</td>
                    <td className="border border-gray-300 p-1 text-right">1108</td>
                    <td className="border border-gray-300 p-1 text-right">5.8%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-1 mb-2">
              <div className="border-2 border-orange-400 rounded-lg p-2 text-center hover:scale-105 transition-transform">
                <p className="text-sm font-bold text-orange-600">UHT</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="border-2 border-orange-400 rounded-lg p-2 text-center hover:scale-105 transition-transform">
                  <p className="text-xs font-bold text-orange-600">Flavoured</p>
                </div>
                <div className="border-2 border-orange-400 rounded-lg p-2 text-center hover:scale-105 transition-transform">
                  <p className="text-xs font-bold text-orange-600">White Liquid</p>
                </div>
              </div>
            </div>

            <div className="space-y-1 text-xs">
              <p>✓ Long shelf life → safer</p>
              <p>✓ Flexible product variations</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7: Market & Operational Feasibility
    {
      title: "Market & Operational Feasibility",
      bgColor: "bg-white",
      content: (
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 px-12 py-4 flex justify-between items-center border-b-4 border-gray-400">
            <h2 className="text-2xl font-bold text-black">Market Feasibility</h2>
            <h2 className="text-2xl font-bold text-black">Operational Feasibility</h2>
          </div>

          {/* Content */}
          <div className="flex-1 grid grid-cols-2 gap-8 p-8 overflow-y-auto">
            {/* Left side - Market Feasibility */}
            <div className="flex flex-col">
              <div className="flex gap-6 items-start">
                {/* Concentric circles with labels */}
                <div className="relative w-56 h-56 flex-shrink-0">
                  {/* Outer circle - 12.330 Mio USD */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 flex items-start justify-center pt-4 shadow-lg">
                    <p className="text-white font-bold text-sm">12.330 Mio USD</p>
                  </div>
                  
                  {/* Middle circle - 748 Mio USD */}
                  <div className="absolute inset-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-start justify-center pt-3 shadow-md">
                    <p className="text-white font-bold text-sm">748 Mio USD</p>
                  </div>
                  
                  {/* Inner circle - 8.98 Mio USD */}
                  <div className="absolute inset-28 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-sm">
                    <p className="text-white font-bold text-sm">8.98 Mio USD</p>
                  </div>
                </div>

                {/* Labels with connecting lines */}
                <div className="space-y-10 pl-2 flex flex-col justify-start pt-0">
                  {/* Label 1 - points to outer circle */}
                  <div className="relative h-10 flex items-start">
                    <div className="absolute -left-2 top-1 w-4 h-px bg-gray-600"></div>
                    <div className="ml-4">
                      <p className="font-bold text-sm">Total Milk Market in Indonesia</p>
                      <p className="text-xs text-gray-600">Source: Statista</p>
                    </div>
                  </div>

                  {/* Label 2 - points to middle circle */}
                  <div className="relative h-10 flex items-start">
                    <div className="absolute -left-2 top-1 w-4 h-px bg-gray-600"></div>
                    <div className="ml-4">
                      <p className="font-bold text-sm">Total UHT Milk Market in Indonesia</p>
                      <p className="text-xs">ULTJ 324 Mio USD (77% Rev);</p>
                      <p className="text-xs">Covers 32% Market Share</p>
                      <p className="text-xs text-gray-600">Source: ultrajaya.co.id</p>
                    </div>
                  </div>

                  {/* Label 3 - points to inner circle */}
                  <div className="relative h-10 flex items-start">
                    <div className="absolute -left-2 top-1 w-4 h-px bg-gray-600"></div>
                    <div className="ml-4">
                      <p className="font-bold text-sm">UHT Markets Accessible to SMG</p>
                      <p className="text-xs">SAM x GT 60% x 2%</p>
                      <p className="text-xs italic text-orange-600">Assumption: SMG Dominant in GT;</p>
                      <p className="text-xs italic text-orange-600">Realistic 2% market capture</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom statement */}
              <div className="mt-auto pt-4">
                <p className="font-bold text-base">SMG could potentially capture up to <span className="text-red-600">1.2%</span> of the Indonesian UHT market in the first year</p>
                <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-300 mt-2"></div>
              </div>
            </div>

            {/* Right side - Operational Feasibility */}
            <div className="flex flex-col">
              <p className="text-sm italic text-orange-600 font-semibold mb-4">Assumption: Using Max Capacity of OEM</p>

              {/* Input boxes */}
              <div className="flex gap-4 mb-6">
                <div className="border-2 border-gray-800 rounded px-4 py-2 flex-1 text-center">
                  <p className="font-bold text-sm">OEM Raw Milk</p>
                  <p className="text-xs text-gray-600 mt-1">BOOST Business Case Document</p>
                </div>
                <div className="text-2xl font-bold text-gray-400">+</div>
                <div className="border-2 border-gray-800 rounded px-4 py-2 flex-1 text-center">
                  <p className="font-bold text-sm">OEM UHT Milk</p>
                  <p className="text-xs text-orange-600 mt-1">Additional Assumption</p>
                </div>
              </div>

              {/* Flow diagram */}
              <div className="space-y-3 text-xs">
                {/* Step 1 */}
                <div className="text-center">
                  <p className="font-bold">6.8M L/year Raw Milk</p>
                  <p className="text-gray-600">(10% loss)</p>
                </div>

                <div className="text-center text-gray-400 text-lg">↓</div>

                {/* Step 2 - Two columns */}
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="border-l-2 border-gray-400 pl-3">
                    <p className="font-bold">Standard <u>UHT Machine</u> → 5.000 L/hour = 12.5 L/year → no bottleneck</p>
                  </div>
                  <div className="border-l-2 border-gray-400 pl-3">
                    <p className="font-bold"><u>Packaging Machine</u> → 12.000 packs/hour = <span className="text-orange-600 font-bold">30 Mio packs/year</span></p>
                    <p className="text-xs text-gray-600">source: chimene.in-made-in-china</p>
                  </div>
                </div>

                <div className="text-center text-gray-400 text-lg">↓</div>

                {/* Step 3 */}
                <div className="text-center bg-gray-100 p-2 rounded">
                  <p className="font-bold">6.8 L/year :</p>
                  <p>Mini pack (60%): <span className="font-bold">23.3 M pack/year</span> +</p>
                  <p>Big pack (40%): <span className="font-bold">3.6 M pack/year</span></p>
                  <p className="font-bold mt-1">= <span className="text-orange-600">27 M packs/year</span></p>
                </div>

                <div className="text-center text-gray-400 text-lg">↓</div>

                {/* Step 4 */}
                <div className="text-center text-xs">
                  <p>Max Filling Machine Capacity = 30M packs/year</p>
                  <p>SMG Max Requirement = 27Mpacks/year</p>
                </div>

                <div className="text-center text-gray-400 text-lg mt-2">↓</div>

                {/* Feasible */}
                <div className="text-center">
                  <p className="text-base font-bold text-green-600">Feasible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 9: Product Concept & Channel (was Slide 8)
    {
      title: "Product Concept & Channel",
      bgColor: "bg-white",
      content: (
        <div className="h-full grid grid-cols-2">
          {/* Left side */}
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-6">Product Concept</h2>
            <p className="text-red-600 font-semibold mb-8">Start simple → high rotation & easy scale</p>
            
            <div className="mb-8">
              <p className="font-semibold mb-2">UHT - White Liquid</p>
              <p className="font-semibold mb-4">UHT - Flavoured → Chocolate, Strawberry, Vanilla, Banana</p>
              
              <div className="h-px bg-gray-300 my-6"></div>
              
              <p className="mb-4">Mini Pack: 150 mL & 200 mL → children & younger<br />Big Pack: 750 mL → family & older</p>
              
              <div className="flex gap-4 my-6">
                <div className="w-16 h-24 bg-gradient-to-b from-white to-gray-200 rounded shadow hover:scale-110 transition-transform"></div>
                <div className="w-24 h-32 bg-gradient-to-b from-white to-gray-200 rounded shadow flex items-center justify-center hover:scale-110 transition-transform">
                  <div className="text-xs text-center">Retail &<br />wholesale</div>
                </div>
                <div className="w-20 h-28 bg-gradient-to-b from-white to-gray-200 rounded shadow hover:scale-110 transition-transform"></div>
                <div className="w-12 h-36 bg-gradient-to-b from-white to-gray-200 rounded shadow hover:scale-110 transition-transform"></div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Value Positioning</h2>
              <p className="text-red-600 text-xl font-bold">Kualitas Tinggi, Harga Terjangkau</p>
            </div>
          </div>

          {/* Right side */}
          <div className="p-12 bg-gray-50">
            <h2 className="text-3xl font-bold mb-6">Channel</h2>
            <p className="text-red-600 font-semibold mb-8">Utilising SMG Existing Networks</p>
            
            <div className="mb-8">
              <p className="font-semibold mb-4">Focus : <span className="font-bold">General Trade</span> → rapid scaling through high volume<br />Modern Trade → brand visibility and credibility</p>
              
              <div className="flex gap-4 mb-8">
                <div className="flex-1 border-2 border-gray-300 rounded-xl p-4 text-center hover:bg-orange-100 hover:border-orange-400 transition-all">
                  <p className="font-bold">150 sub Distributor</p>
                </div>
                <div className="flex-1 border-2 border-gray-300 rounded-xl p-4 text-center hover:bg-orange-100 hover:border-orange-400 transition-all">
                  <p className="font-bold">34 Provinces</p>
                </div>
                <div className="flex-1 border-2 border-gray-300 rounded-xl p-4 text-center hover:bg-orange-100 hover:border-orange-400 transition-all">
                  <p className="font-bold">30k+ Outlets</p>
                </div>
              </div>

              <p className="text-sm mb-4">Start from Jakarta & Surabaya, then expand nationwide.</p>
              <p className="text-sm mb-6">Expansion: Export</p>
            </div>

            <div className="mb-8">
              <p className="font-semibold mb-4">Pricing → eceran & dus</p>
              <p className="font-bold mb-2">Value Positioning →</p>
            </div>

            <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
              <p className="text-sm mb-2">berkualitas tinggi, harga terjangkau, mudah digapai (?) karna dia menengah bawah</p>
              <p className="text-xs italic mb-4">*based on SMG branding*</p>
              <p className="font-bold">Branding <span className="italic">"Jajanan Sehat"</span></p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 10: Project Feasibility (was Slide 9)
    {
      title: "Project Feasibility",
      bgColor: "bg-white",
      content: (
        <div className="h-full grid grid-cols-2">
          {/* Left side - Orange */}
          <div className="bg-gradient-to-br from-yellow-400 to-orange-400 p-8 flex flex-col">
            <h2 className="text-4xl font-bold mb-4">Financial Feasibility</h2>
            
            <p className="text-sm italic text-gray-700 mb-4">Assumption: Using Max Capacity of OEM</p>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-bold">Raw Milk Cost = 40%-60% × Price to Channel</p>
                <p className="text-gray-700">40% x 20.000 (Fresh Milk GT)</p>
                <p className="font-bold">8.000/L</p>
              </div>

              <div>
                <p className="font-bold mb-1">3 Size: 150 mL, 200 mL, 750 mL</p>
              </div>

              <div>
                <p className="font-bold">Revenue</p>
                <p className="text-gray-700 text-xs mb-1">=(23.3M pack/year × avg mini IDR 4,000)+(3.6M pack/year × big IDR 10,000)</p>
                <p className="font-bold">= IDR 129.5 Bio / Year</p>
              </div>

              <div>
                <p className="font-bold">COGS → Raw Milk, Packaging, Others</p>
                <p className="text-orange-600 text-xs mb-1">Assumption: Mini Pack → 80% selling price → 3.200;</p>
                <p className="text-orange-600 text-xs mb-1">Big Pack → 70% selling price → 7.000</p>
                <p className="text-gray-700 text-xs mb-1">=(23.3M pack/year x IDR 3.200) + (3.6M pack/year x IDR 7.000)</p>
                <p className="font-bold">= IDR 100 B/year</p>
              </div>

              <div>
                <p className="font-bold">GP</p>
                <p className="font-bold text-lg">= IDR 29.5 B/year = <span className="text-2xl">23%</span></p>
              </div>
            </div>
          </div>

          {/* Right side - White */}
          <div className="bg-white p-8 flex flex-col">
            <div className="mb-2 pb-2 border-b-4 border-orange-400">
              <h2 className="text-4xl font-bold">Expansion</h2>
            </div>

            <div className="space-y-6 flex-1">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white text-3xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">OEM (Year 0-1)</h3>
                  <p className="text-sm text-gray-700">Brand Awareness & Validate Demand</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white text-3xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Scale Up (Year 1-3)</h3>
                  <p className="text-sm text-gray-700">Expand Flavour Varieties & Distribution<br />Start Investing in Technology</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white text-3xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">New Category (Year 3-5)</h3>
                  <p className="text-sm text-gray-700">Yoghurt Expansion</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white text-3xl font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Dairy (Year 5-8)</h3>
                  <p className="text-sm text-gray-700">Ice Cream Expansion<br />Dominate the Dairy Market<br />Market Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 11: Thank You (was Slide 10)
    {
      title: "Thank You",
      bgColor: "bg-gradient-to-r from-white via-yellow-50 to-yellow-300",
      content: (
        <div className="h-full flex items-center px-20">
          <div className="space-y-6">
            <h1 className="text-7xl font-bold text-black">Thank You</h1>
            <div className="w-96 h-1 bg-red-600"></div>
            <p className="text-2xl text-black">BOOST Business Day 2025 | Mutia Hendriani Putri</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Home') setCurrentSlide(0);
      if (e.key === 'End') setCurrentSlide(slides.length - 1);
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  return (
    <div className="w-full h-screen flex flex-col bg-gray-900">
      {/* Main slide area */}
      <div className={`flex-1 transition-all duration-500 ${slides[currentSlide].bgColor}`}>
        {slides[currentSlide].content}
      </div>

      {/* Navigation controls */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
              currentSlide === 0
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-4">
            <div className="text-white text-center px-6">
              <p className="text-sm text-gray-400">Slide</p>
              <p className="text-2xl font-bold">{currentSlide + 1} / {slides.length}</p>
              <p className="text-xs text-gray-400 mt-1">{slides[currentSlide].title}</p>
            </div>
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
              currentSlide === slides.length - 1
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg'
            }`}
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="bg-gray-900 px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-1">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg'
                    : index < currentSlide
                    ? 'bg-green-500'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                title={`Go to slide ${index + 1}: ${slide.title}`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Start</span>
            <span>Use ← → arrow keys to navigate</span>
            <span>End</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
