import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Wallet, Settings, Trophy, MessageSquare, TrendingUp } from "lucide-react"
import { PoolCard } from "@/components/pool-card"
import { QuickStats } from "@/components/quick-stats"
import { NotificationBar } from "@/components/notification-bar"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#333333]">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-300">
        <div className="flex items-center">
          <div className="bg-[#FF5722] w-10 h-10 rounded-full flex items-center justify-center mr-2">
            <span className="font-bold text-white">SS</span>
          </div>
          <h1 className="text-xl font-bold">SaveSphere</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/wallet" className="p-2 rounded-full hover:bg-gray-200">
            <Wallet className="w-6 h-6" />
          </Link>
          <Link href="/settings" className="p-2 rounded-full hover:bg-gray-200">
            <Settings className="w-6 h-6" />
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-md pb-20">
        {/* Notification Bar */}
        <NotificationBar message="Budi won this week's bonus—save more to win!" type="success" />

        {/* Active Pools Card */}
        <PoolCard />

        {/* Quick Stats */}
        <QuickStats />

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Button variant="default" className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white" asChild>
            <Link href="/join-pool">Join Pool</Link>
          </Button>
          <Button variant="outline" className="w-full border-[#FF5722] text-[#FF5722] hover:bg-[#FF5722]/10" asChild>
            <Link href="/create-pool">New Pool</Link>
          </Button>
        </div>

        {/* Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-md">
          <div className="flex justify-around p-3">
            <Link href="/" className="flex flex-col items-center text-[#FF5722]">
              <TrendingUp className="w-6 h-6" />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link href="/deposit" className="flex flex-col items-center text-gray-500 hover:text-[#333333]">
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
      </main>
    </div>
  )
}

