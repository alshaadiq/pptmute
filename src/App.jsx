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
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-12 flex flex-col justify-center">
            <h2 className="text-white text-4xl font-bold mb-12">Kondisi Indonesia 2014 - 2018</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-xl mb-3">POPULATION</h3>
                <p className="text-lg font-semibold">235 → 263 mio</p>
                <p className="text-gray-600 mt-2">population growth → increased consumers</p>
              </div>

              <div className="bg-white rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-xl mb-3">GDP (Gross Domestic Product)</h3>
                <p className="text-lg font-semibold">USD 890 B → 1,042 B</p>
                <p className="text-gray-600 mt-2">economic growth → increased spending</p>
              </div>

              <div className="bg-white rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-xl mb-3">CPI (Consumer Price Index)</h3>
                <p className="text-lg font-semibold">226 → 267</p>
                <p className="text-gray-600 mt-2">general inflation → reasonable increase in prices</p>
              </div>
            </div>

            <p className="text-xs text-white/70 mt-8">Source: BOOST Business Case Document</p>
          </div>

          {/* Right side - White with data */}
          <div className="bg-white p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-8">Indonesian Dairy Market Size (2014 - 2018)</h2>
            
            <div className="mb-12">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-yellow-400 to-orange-400">
                    <th className="border-2 border-gray-300 p-3 text-left"></th>
                    <th className="border-2 border-gray-300 p-3 text-center font-bold">CAGR by Volume</th>
                    <th className="border-2 border-gray-300 p-3 text-center font-bold">CAGR by Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-orange-100 hover:bg-orange-200 transition-colors">
                    <td className="border-2 border-gray-300 p-3 font-bold bg-orange-300">Milk</td>
                    <td className="border-2 border-gray-300 p-3 text-center font-bold">7.08%</td>
                    <td className="border-2 border-gray-300 p-3 text-center font-bold">12.28%</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors">
                    <td className="border-2 border-gray-300 p-3 font-bold bg-orange-300">Ice Cream</td>
                    <td className="border-2 border-gray-300 p-3 text-center font-bold">11.14%</td>
                    <td className="border-2 border-gray-300 p-3 text-center font-bold">13.63%</td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors">
                    <td className="border-2 border-gray-300 p-3 font-bold bg-orange-300">Yogurt</td>
                    <td className="border-2 border-gray-300 p-3 text-center font-bold">12.19%</td>
                    <td className="border-2 border-gray-300 p-3 text-center font-bold">16.13%</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex items-end justify-end gap-4 mt-4">
                <div className="text-right">
                  <div className="font-bold text-sm">Market Besar</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">Pertumbuhan cepat &</div>
                  <div className="font-bold text-sm">Market Sedang</div>
                </div>
              </div>
            </div>

            <div className="bg-orange-500 text-white p-6 rounded-xl text-center hover:bg-orange-600 transition-colors">
              <p className="text-xl font-bold">
                Dairy demand is increasing and consumers are spending more — making the category <span className="underline">attractive</span> to enter !
              </p>
            </div>

            <p className="text-xs text-gray-500 mt-4">Asumsi: Data tahun tersebut dapat digunakan sebagai argumen</p>
          </div>
        </div>
      )
    },

    // Slide 4: Category Breakdown (Matching reference image 1)
    {
      title: "Category Breakdown",
      bgColor: "bg-white",
      content: (
        <div className="h-full p-12">
          <div className="mb-6">
            <h3 className="text-gray-700 text-lg mb-2">
              <span className="font-bold">Diversity category</span> helps penetration
            </h3>
            <p className="text-gray-600">
              Choices based on community demand upon seen from the<br />
              growth of the dairy industry in 2017-2018
            </p>
          </div>

          <div className="flex justify-between items-start gap-8 mb-6">
            <h2 className="text-5xl font-bold text-right flex-1">
              Indonesian Beverages Market<br />
              <span className="text-3xl">Category 2017 - 2018</span>
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Milk Column */}
            <div className="space-y-4 hover:scale-105 transition-transform duration-300">
              <h3 className="text-4xl font-bold">Milk</h3>
              
              <div className="space-y-3">
                <div className="text-orange-500 font-semibold">
                  <div>Flavoured</div>
                  <div>White Liquid</div>
                  <div>White - Powdered</div>
                </div>
                
                <div className="space-y-1 text-sm">
                  <p>Volume: 1047 → 1108 (+61 mio L)</p>
                  <p className="font-bold">Value: 25038 → 27091 (+2065 bio IDR)</p>
                </div>

                <div className="text-orange-500 font-semibold mt-6">
                  <div>UHT</div>
                  <div>Fresh</div>
                </div>
                
                <div className="space-y-1 text-sm">
                  <p>Volume: 300 → 315 (+15 mio L)</p>
                  <p className="font-bold">Value: 6672 → 7188 (+516 bio IDR)</p>
                </div>
              </div>

              <div className="border-2 border-gray-800 rounded-2xl p-3 mt-6">
                <p className="text-center text-sm font-semibold">Lagre, Stable, High Revenue</p>
              </div>
            </div>

            {/* Yoghurt Column */}
            <div className="space-y-4 hover:scale-105 transition-transform duration-300">
              <h3 className="text-4xl font-bold">Yoghurt</h3>
              
              <div className="space-y-3">
                <div className="text-orange-500 font-semibold">
                  <div>Drinking/Cultured Yoghurt</div>
                  <div>Spoonable</div>
                </div>
                
                <div className="space-y-1 text-sm">
                  <p>Volume: 212 → 237 (+251 mio L)</p>
                  <p className="font-bold">Value: 7050 → 8086 (+1036 bio IDR)</p>
                </div>

                <div className="text-orange-500 font-semibold mt-6">
                  <div>Flavoured</div>
                  <div>Natural</div>
                </div>
                
                <div className="space-y-1 text-sm">
                  <p>Volume: 14 → 15 (+1 mio L)</p>
                  <p className="font-bold">Value: 1109 → 1246 (+137 bio IDR)</p>
                </div>
              </div>

              <div className="border-2 border-gray-800 rounded-2xl p-3 mt-6">
                <p className="text-center text-sm font-semibold">Small, but Fast Growing</p>
              </div>
            </div>

            {/* Ice Cream Column */}
            <div className="space-y-4 hover:scale-105 transition-transform duration-300">
              <h3 className="text-4xl font-bold">Ice Cream</h3>
              
              <div className="space-y-3">
                <div className="text-orange-500 font-semibold">
                  <div>Individually Wrapped</div>
                  <div>Famili Packs</div>
                </div>
                
                <div className="space-y-1 text-sm">
                  <p>Volume: 189 → 212 (+23 mio L)</p>
                  <p className="font-bold">Value: 10442 → 11822 (+1380 bio IDR)</p>
                </div>
              </div>

              <div className="border-2 border-gray-800 rounded-2xl p-3 mt-24">
                <p className="text-center text-sm font-semibold">High-Value Growth Category</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: Competition Landscape (Matching reference image 2)
    {
      title: "Competition Landscape",
      bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
      content: (
        <div className="h-full p-12">
          <h2 className="text-white text-4xl font-bold mb-8">
            Indonesian Beverages Market<br />
            Competition Landscape 2017 - 2018
          </h2>

          <div className="bg-white rounded-3xl p-8">
            <div className="grid grid-cols-3 gap-8 mb-6">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">CR3 by Value</h3>
                <p className="text-sm">(Top 3 Market Holders )</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Value vs Volume</h3>
                <p className="text-sm">Share Comparison</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Key Points</h3>
              </div>
            </div>

            <hr className="border-gray-300 mb-6" />

            {/* Milk Row */}
            <div className="grid grid-cols-3 gap-8 mb-8 hover:bg-gray-50 p-4 rounded-xl transition-colors">
              <div>
                <h4 className="text-2xl font-bold mb-2">Milk <span className="text-sm font-normal">Medium Intensity</span></h4>
                <div className="text-6xl font-bold text-red-600 mb-4">55%</div>
                <div className="text-sm space-y-1">
                  <p>PT Ultrajaya Milk Industry Tbk</p>
                  <p>Royal Frieslandcampina</p>
                  <p>PT Indofood Sukses Makmur</p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm mb-2">% Volume {'>'} % Value</p>
                <p className="text-sm">(most of them)</p>
              </div>
              <div className="flex flex-col justify-center">
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Market relatively dispersed</li>
                  <li>Strong value segment (low price per liter)</li>
                </ul>
              </div>
            </div>

            {/* Yoghurt Row */}
            <div className="grid grid-cols-3 gap-8 mb-8 hover:bg-gray-50 p-4 rounded-xl transition-colors">
              <div>
                <h4 className="text-2xl font-bold mb-2">Yoghurt <span className="text-sm font-normal">High Intensity</span></h4>
                <div className="text-6xl font-bold text-red-600 mb-4">81%</div>
                <div className="text-sm space-y-1">
                  <p>Yakult Honsha Co., Ltd <span className="italic">(Dominant)</span></p>
                  <p>Macro Group</p>
                  <p>PT Nutrifood Indonesia</p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm mb-1">Volume 75% {'>'} Value 58%</p>
                <p className="text-sm mb-1">Volume 9% {'<'} Value 14%</p>
                <p className="text-sm">Volume 8% = Value 8%</p>
              </div>
              <div className="flex flex-col justify-center">
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Largely dominated by major players with low price-per-liter offerings</li>
                </ul>
              </div>
            </div>

            {/* Ice Cream Row */}
            <div className="grid grid-cols-3 gap-8 hover:bg-gray-50 p-4 rounded-xl transition-colors">
              <div>
                <h4 className="text-2xl font-bold mb-2">Ice Cream <span className="text-sm font-normal">High Intensity</span></h4>
                <div className="text-6xl font-bold text-red-600 mb-4">87%</div>
                <div className="text-sm space-y-1">
                  <p>Unilever PLC <span className="italic">(Dominant)</span></p>
                  <p>PT. Campina Ice Cream Industry</p>
                  <p>Ezaki Glico Co., Ltd.</p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm mb-1">Volume 63% {'<'} Value 70%</p>
                <p className="text-sm mb-1">Volume 12 % {'<'} Value 13 %</p>
                <p className="text-sm">Volume 4% = Value 4%</p>
              </div>
              <div className="flex flex-col justify-center">
                <ul className="text-sm space-y-1 list-disc list-inside">
                  <li>Large value segment, high unit price</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-orange-600 text-white p-4 rounded-xl flex items-center justify-end gap-4">
            <p className="text-xl font-bold">
              <span className="text-yellow-300">Milk</span> remains relatively open and dispersed, while{' '}
              <span className="text-yellow-300">Yoghurt</span> is highly concentrated around a dominant player and{' '}
              <span className="text-yellow-300">Ice Cream</span> is concentrated with large value segment
            </p>
          </div>

          <p className="text-xs text-white/80 mt-4">Source: BOOST Business Case Document</p>
        </div>
      )
    },

    // Slide 6: Expansion Strategy (Matching reference image 3)
    {
      title: "Expansion Strategy",
      bgColor: "bg-white",
      content: (
        <div className="h-full grid grid-cols-2">
          {/* Left side - Orange */}
          <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 p-12 flex flex-col justify-center">
            <h2 className="text-7xl font-bold mb-12">Expansion</h2>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 hover:scale-105 transition-transform duration-300">
                <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                  <span className="text-white text-5xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-5xl font-bold mb-2">Milk</h3>
                  <div className="text-sm space-y-1">
                    <p>Largest and still-open market</p>
                    <p>Stable growth (CAGR)</p>
                    <p>CR3 = 55%</p>
                    <p>Fast to scale</p>
                  </div>
                </div>
              </div>

              <div className="pl-12">
                <div className="text-4xl mb-4">↓</div>
                <p className="text-sm font-semibold">Step by Step</p>
              </div>

              <div className="flex items-center gap-6 hover:scale-105 transition-transform duration-300">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <span className="text-orange-600 text-5xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-5xl font-bold mb-2">Yoghurt</h3>
                  <div className="text-sm space-y-1">
                    <p>Fast Growth (CAGR)</p>
                    <p>CR3 = 81%</p>
                  </div>
                </div>
              </div>

              <div className="pl-12">
                <div className="text-4xl mb-4">↓</div>
              </div>

              <div className="flex items-center gap-6 hover:scale-105 transition-transform duration-300">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <span className="text-orange-600 text-5xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-5xl font-bold mb-2">Ice Cream</h3>
                  <div className="text-sm space-y-1">
                    <p>HIgh Value</p>
                    <p>CR3 = 87%</p>
                    <p>Intense Competition</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-white/70 mt-12">Source: BOOST Business Case Document</p>
          </div>

          {/* Right side - White */}
          <div className="bg-white p-12 flex flex-col overflow-y-auto">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4">
                Why is <span className="text-red-600">Milk</span>, with<br />
                its large, open<br />
                market and rapid<br />
                scale, a <span className="underline">top<br />
                priority</span> ?
              </h3>
            </div>

            <div className="space-y-6 mb-8">
              <p className="text-gray-700">Build distribution scale faster</p>
              <p className="text-gray-700">Strengthen the brand through high-rotation products</p>
              <p className="text-gray-700">Establish a foundation before entering more competitive dairy categories</p>
            </div>

            <div className="flex-1 flex items-center justify-center mb-8">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 text-left"></th>
                    <th className="border border-gray-300 p-2 text-center font-bold" colSpan="2">By Volume (mio liters)</th>
                    <th className="border border-gray-300 p-2 text-center font-bold">Growth<br />(%)</th>
                    <th className="border border-gray-300 p-2 text-center font-bold" colSpan="2">By Value (bio IDR)</th>
                    <th className="border border-gray-300 p-2 text-center font-bold">Growth<br />(%)</th>
                  </tr>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-1"></th>
                    <th className="border border-gray-300 p-1 text-center text-xs">2017</th>
                    <th className="border border-gray-300 p-1 text-center text-xs">2018</th>
                    <th className="border border-gray-300 p-1"></th>
                    <th className="border border-gray-300 p-1 text-center text-xs">2017</th>
                    <th className="border border-gray-300 p-1 text-center text-xs">2018</th>
                    <th className="border border-gray-300 p-1"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 p-2 font-semibold">Flavoured</td>
                    <td className="border border-gray-300 p-2 text-right">706</td>
                    <td className="border border-gray-300 p-2 text-right">752</td>
                    <td className="border border-gray-300 p-2 text-right">6.52%</td>
                    <td className="border border-gray-300 p-2 text-right">17700</td>
                    <td className="border border-gray-300 p-2 text-right">19203</td>
                    <td className="border border-gray-300 p-2 text-right">8.49%</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 p-2 font-semibold">White Liquid</td>
                    <td className="border border-gray-300 p-2 text-right">300</td>
                    <td className="border border-gray-300 p-2 text-right">315</td>
                    <td className="border border-gray-300 p-2 text-right">5.00%</td>
                    <td className="border border-gray-300 p-2 text-right">6672</td>
                    <td className="border border-gray-300 p-2 text-right">7188</td>
                    <td className="border border-gray-300 p-2 text-right">7.73%</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 p-2 font-semibold text-xs">White -<br />Powdered</td>
                    <td className="border border-gray-300 p-2 text-right">41</td>
                    <td className="border border-gray-300 p-2 text-right">41</td>
                    <td className="border border-gray-300 p-2 text-right">0.00%</td>
                    <td className="border border-gray-300 p-2 text-right">665</td>
                    <td className="border border-gray-300 p-2 text-right">699</td>
                    <td className="border border-gray-300 p-2 text-right">5.11%</td>
                  </tr>
                  <tr className="bg-orange-100 font-bold">
                    <td className="border border-gray-300 p-2">Total</td>
                    <td className="border border-gray-300 p-2 text-right">1047</td>
                    <td className="border border-gray-300 p-2 text-right">1108</td>
                    <td className="border border-gray-300 p-2 text-right">11.52%</td>
                    <td className="border border-gray-300 p-2 text-right">25037</td>
                    <td className="border border-gray-300 p-2 text-right">27090</td>
                    <td className="border border-gray-300 p-2 text-right">21.34%</td>
                  </tr>
                  <tr className="bg-orange-200 font-bold">
                    <td className="border border-gray-300 p-2">UHT</td>
                    <td className="border border-gray-300 p-2 text-right">234</td>
                    <td className="border border-gray-300 p-2 text-right">247</td>
                    <td className="border border-gray-300 p-2 text-right">5.56%</td>
                    <td className="border border-gray-300 p-2 text-right">4902</td>
                    <td className="border border-gray-300 p-2 text-right">5338</td>
                    <td className="border border-gray-300 p-2 text-right">8.89%</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 p-2 font-semibold">Fresh</td>
                    <td className="border border-gray-300 p-2 text-right">66</td>
                    <td className="border border-gray-300 p-2 text-right">68</td>
                    <td className="border border-gray-300 p-2 text-right">3.03%</td>
                    <td className="border border-gray-300 p-2 text-right">1770</td>
                    <td className="border border-gray-300 p-2 text-right">1851</td>
                    <td className="border border-gray-300 p-2 text-right">4.58%</td>
                  </tr>
                  <tr className="bg-orange-100 font-bold">
                    <td className="border border-gray-300 p-2">Total</td>
                    <td className="border border-gray-300 p-2 text-right">300</td>
                    <td className="border border-gray-300 p-2 text-right">315</td>
                    <td className="border border-gray-300 p-2 text-right">8.59%</td>
                    <td className="border border-gray-300 p-2 text-right">6672</td>
                    <td className="border border-gray-300 p-2 text-right">7189</td>
                    <td className="border border-gray-300 p-2 text-right">13.47%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4">
              <div className="border-4 border-orange-400 rounded-2xl p-4 mb-4 text-center hover:scale-105 transition-transform">
                <p className="text-2xl font-bold text-orange-600">UHT</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-4 border-orange-400 rounded-2xl p-4 text-center hover:scale-105 transition-transform">
                  <p className="text-xl font-bold text-orange-600">Flavoured</p>
                </div>
                <div className="border-4 border-orange-400 rounded-2xl p-4 text-center hover:scale-105 transition-transform">
                  <p className="text-xl font-bold text-orange-600">White Liquid</p>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span>+</span>
                  <span>Long shelf life → safer for distributors</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>+</span>
                  <span>Flexible product variations and easy to develop</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-6">Indonesian Milk Market Segmentation 2017 - 2018</p>
          </div>
        </div>
      )
    },

    // Slide 7: SMG Entry Size (Matching reference image 4)
    {
      title: "SMG's Entry Size",
      bgColor: "bg-white",
      content: (
        <div className="h-full grid grid-cols-2">
          {/* Left side */}
          <div className="p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-8">SMG's Entry Size into the Segment</h2>
            
            <div className="relative flex items-center justify-center mb-12">
              {/* Concentric circles */}
              <div className="relative w-96 h-96">
                {/* Outer circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center hover:scale-105 transition-transform duration-500">
                  <div className="text-center text-white">
                    <p className="text-2xl font-bold">12.330 Mio USD</p>
                  </div>
                </div>
                
                {/* Middle circle */}
                <div className="absolute inset-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center hover:scale-105 transition-transform duration-500">
                  <div className="text-center text-white">
                    <p className="text-xl font-bold">748 Mio USD</p>
                  </div>
                </div>
                
                {/* Inner circle */}
                <div className="absolute inset-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center hover:scale-105 transition-transform duration-500">
                  <div className="text-center text-white">
                    <p className="text-lg font-bold">8.98 Mio USD</p>
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute -right-8 top-0">
                <div className="bg-white p-2 rounded shadow-lg hover:shadow-xl transition-shadow">
                  <p className="text-sm font-bold">Total Milk Market in Indonesia</p>
                  <p className="text-xs text-gray-600">Source: Statista</p>
                </div>
              </div>

              <div className="absolute -right-8 top-1/3">
                <div className="bg-white p-2 rounded shadow-lg max-w-xs hover:shadow-xl transition-shadow">
                  <p className="text-sm font-bold">Total UHT Milk Market in Indonesia</p>
                  <p className="text-xs">ULTJ 324 Mio USD (77% Rev);</p>
                  <p className="text-xs">Covers 32% Market Share</p>
                  <p className="text-xs text-gray-600">Source: ultrajaya.co.id</p>
                </div>
              </div>

              <div className="absolute -right-8 bottom-0">
                <div className="bg-white p-2 rounded shadow-lg max-w-xs hover:shadow-xl transition-shadow">
                  <p className="text-sm font-bold">UHT Markets Accessible to SMG</p>
                  <p className="text-xs">SAM x GT 60% x 2%</p>
                  <p className="text-xs italic">Assumption: SMG Dominant in GT;</p>
                  <p className="text-xs italic">Realistic 2% market capture</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl hover:bg-gray-200 transition-colors">
              <p className="text-sm text-gray-700 leading-relaxed">
                Dengan ukuran pasar UHT yang besar (SAM US$748M), peluang realistis SMG mencapai SOM ±US$9M, risiko produksi rendah, dan kekuatan SMG di GT, ekspansi ke UHT milk adalah bisnis yang sangat layak dan berpotensi menjadi growth engine baru.
              </p>
            </div>

            <p className="text-xs text-gray-500 mt-4">Buat dalam persentase</p>
          </div>

          {/* Right side */}
          <div className="p-12 flex flex-col justify-center bg-gray-50">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Competitor Gap:</h3>
              <p className="text-lg font-semibold mb-2">Top 3 UHT Company in Indonesia: (Source: PT Ultrajaya Milk Industry & Trading Company Tbk)</p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="bg-white p-4 rounded-lg hover:scale-105 transition-transform shadow">
                <p className="font-bold mb-2">1. PT Ultrajaya Milk Industry</p>
                <p className="text-sm text-gray-700">leader UHT (~37% share), Focus on white & flavoured UHT mass market</p>
              </div>

              <div className="bg-white p-4 rounded-lg hover:scale-105 transition-transform shadow">
                <p className="font-bold mb-2">1. FrieslandCampina</p>
                <p className="text-sm text-gray-700">Family Segment (white liquid)</p>
              </div>

              <div className="bg-white p-4 rounded-lg hover:scale-105 transition-transform shadow">
                <p className="font-bold mb-2">1. Indofood CBP (Indomilk)</p>
                <p className="text-sm text-gray-700">Kids Segment (flavoured)</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Segmentation:</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Demography: Family, Students</li>
                <li>Geography: urban–semi urban (GT focus)</li>
                <li>Behaviour: affordable buyers, high-frequency buyers</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Targeting (inti):</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Lower-middle GT consumers</li>
                <li>School children (small pack flavored UHT)</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8: Product Concept (Matching reference image 5)
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

    // Slide 9: Project Feasibility
    {
      title: "Project Feasibility",
      bgColor: "bg-white",
      content: (
        <div className="h-full flex items-center justify-center p-20">
          <h1 className="text-9xl font-normal text-gray-900 hover:scale-110 transition-transform duration-300">Project feasibility</h1>
        </div>
      )
    },

    // Slide 10: Thank You
    {
      title: "Thank You",
      bgColor: "bg-white",
      content: (
        <div className="h-full flex items-center justify-center p-20">
          <h1 className="text-9xl font-normal text-gray-900 hover:scale-110 transition-transform duration-300">Thank You</h1>
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
