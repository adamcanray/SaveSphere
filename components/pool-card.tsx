"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export function PoolCard() {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <Card
      className="bg-white border-gray-300 mt-4 cursor-pointer hover:border-[#FF5722] transition-colors shadow-sm"
      onClick={() => setShowDetails(!showDetails)}
    >
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Your Pools: 2</h2>
            <span className="text-xs text-gray-400">Tap for details</span>
          </div>
          <div className="text-base">
            Total Saved: <span className="font-medium">1.5 SOL ($225)</span>
          </div>
          <div className="text-base text-[#4CAF50]">
            Yield Earned: <span className="font-medium">0.012 SOL ($1.80)</span>
          </div>

          {/* Mini Chart */}
          <div className="h-12 mt-2">
            <div className="flex items-end h-full space-x-1">
              {[30, 45, 25, 60, 40, 75, 50].map((height, i) => (
                <div key={i} className="bg-[#FF5722] rounded-sm w-full" style={{ height: `${height}%` }}></div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>Mon</span>
              <span>Sun</span>
            </div>
          </div>

          {showDetails && (
            <div className="mt-4 pt-4 border-t border-gray-300 space-y-2">
              <div className="flex justify-between">
                <span>Family Fund</span>
                <span className="text-[#4CAF50]">0.8 SOL</span>
              </div>
              <div className="flex justify-between">
                <span>Friends Pool</span>
                <span className="text-[#4CAF50]">0.7 SOL</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

