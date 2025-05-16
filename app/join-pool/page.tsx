import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, QrCode, TrendingUp, Wallet, Trophy, MessageSquare } from "lucide-react"

export default function JoinPool() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#333333]">
      {/* Header */}
      <header className="flex items-center p-4 border-b border-gray-300">
        <Link href="/" className="mr-4">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold">Join Pool</h1>
        <span className="text-sm ml-2 text-gray-400">Gabung Arisan</span>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-md pb-20">
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="invite-code">Invite Code</Label>
            <Input id="invite-code" placeholder="e.g., FAM123" className="bg-white border-gray-300 text-[#333333]" />
          </div>

          <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
            <QrCode className="w-12 h-12 text-gray-400 mb-4" />
            <p className="text-gray-400 text-center">Tap to scan QR code</p>
          </div>

          <p className="text-xs text-gray-400">Minimum deposit: 0.01 SOL ($1.50)</p>

          <Button type="submit" className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white">
            Join / Gabung
          </Button>
        </form>
      </main>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-md">
        <div className="flex justify-around p-3">
          <Link href="/" className="flex flex-col items-center text-gray-500 hover:text-[#333333]">
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
    </div>
  )
}

