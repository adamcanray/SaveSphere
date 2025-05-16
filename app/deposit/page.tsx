import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Gift, TrendingUp, Wallet, Trophy, MessageSquare } from "lucide-react"

export default function Deposit() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#333333]">
      {/* Header */}
      <header className="flex items-center p-4 border-b border-gray-300">
        <Link href="/" className="mr-4">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold">Deposit & Bonus</h1>
        <span className="text-sm ml-2 text-gray-400">Simpan & Bonus</span>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-md pb-20">
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="asset">Asset</Label>
            <Select>
              <SelectTrigger className="bg-white border-gray-300 text-[#333333]">
                <SelectValue placeholder="Select asset" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-300 text-[#333333]">
                <SelectItem value="sol">SOL</SelectItem>
                <SelectItem value="usdc">USDC</SelectItem>
                <SelectItem value="usdt">USDT</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="amount">Amount</Label>
              <span className="text-xs text-gray-400">Available: 2 SOL ($300)</span>
            </div>
            <div className="relative">
              <Input id="amount" placeholder="0.1" className="bg-white border-gray-300 text-[#333333] pr-16" />
              <Button variant="ghost" className="absolute right-0 top-0 h-full px-3 text-xs text-[#FF5722]">
                MAX
              </Button>
            </div>
          </div>

          <Button type="submit" className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white">
            Save / Simpan
          </Button>

          <p className="text-xs text-gray-400 text-center">Fee: $0.01, Time: &lt;1s</p>
        </form>

        {/* Bonus Card */}
        <Card className="bg-white border-gray-300 shadow-sm mt-8">
          <CardContent className="p-4">
            <div className="flex items-start">
              <div className="bg-[#4CAF50]/20 p-2 rounded-lg mr-4">
                <Gift className="w-6 h-6 text-[#4CAF50]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">Next Draw: Mar 20</h3>
                <p className="text-[#4CAF50]">Bonus Pot: 0.05 SOL ($7.50)</p>
                <p className="text-xs text-gray-400">Last Winner: Ani</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-md">
        <div className="flex justify-around p-3">
          <Link href="/" className="flex flex-col items-center text-gray-500 hover:text-[#333333]">
            <TrendingUp className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link href="/deposit" className="flex flex-col items-center text-[#FF5722]">
            <Wallet className="w-6 h-6" />
            <span className="text-xs mt-1">Deposit</span>
          </Link>
          <Link href="/leaderboard" className="flex flex-col items-center text-gray-500 hover:text-[#333333]">
            <Trophy className="w-6 h-6" />
            <span className="text-xs mt-1">Rank</span>
          </Link>
          <Link href="/chat" className="flex flex-col items-center text-gray-500 hover:text-[#333333]">
            <MessageSquare className="w-6 h-6" />
            <span className="text-xs mt-1">Chat</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

