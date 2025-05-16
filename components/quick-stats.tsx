import { Card, CardContent } from "@/components/ui/card"

export function QuickStats() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <Card className="bg-white border-gray-300 shadow-sm">
        <CardContent className="p-4">
          <h3 className="text-sm text-gray-400">Next Bonus</h3>
          <p className="text-xl font-medium text-[#FF5722]">3 days</p>
          <div className="w-full bg-gray-300 h-1.5 rounded-full mt-2">
            <div className="bg-[#FF5722] h-1.5 rounded-full" style={{ width: "70%" }}></div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-gray-300 shadow-sm">
        <CardContent className="p-4">
          <h3 className="text-sm text-gray-400">Your Rank</h3>
          <p className="text-xl font-medium">#4</p>
          <div className="flex items-center mt-2">
            <div className="w-6 h-6 rounded-full bg-[#FF5722] flex items-center justify-center mr-2">
              <span className="text-xs font-bold">30</span>
            </div>
            <span className="text-xs text-gray-400">points</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

