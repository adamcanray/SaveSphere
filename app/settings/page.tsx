import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Unlink, Shield, Info, TrendingUp, Wallet, Trophy, MessageSquare } from "lucide-react"

export default function Settings() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#333333]">
      {/* Header */}
      <header className="flex items-center p-4 border-b border-gray-300">
        <Link href="/" className="mr-4">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold">Settings</h1>
        <span className="text-sm ml-2 text-gray-400">Pengaturan</span>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-md pb-20">
        <div className="space-y-6">
          {/* Wallet Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Wallet</h2>
            <div className="flex justify-between items-center p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
              <div>
                <p className="text-sm text-gray-400">Connected</p>
                <p className="font-mono">0x123...abc</p>
              </div>
              <Button variant="ghost" size="sm" className="text-red-500">
                <Unlink className="w-4 h-4 mr-2" />
                Unlink
              </Button>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Preferences</h2>

            <div className="space-y-4 p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Language</label>
                <Select defaultValue="id">
                  <SelectTrigger className="bg-[#F5F5F5] border-gray-300 text-[#333333]">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-300 text-[#333333]">
                    <SelectItem value="id">Bahasa Indonesia</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="jv">Javanese</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Risk Level</label>
                <div className="pt-2">
                  <Slider defaultValue={[50]} max={100} step={1} className="[&>span]:bg-[#FF5722]" />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Low</span>
                    <span>Medium</span>
                    <span>High</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400">Affects AI yield recommendations</p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p>Alerts</p>
                  <p className="text-xs text-gray-400">Receive notifications</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">Security</h2>

            <div className="space-y-4 p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p>Biometrics</p>
                  <p className="text-xs text-gray-400">Use Face ID/Touch ID</p>
                </div>
                <Switch />
              </div>

              <Button variant="outline" className="w-full border-gray-300">
                <Shield className="w-4 h-4 mr-2" />
                Export Seed
              </Button>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium">About</h2>

            <div className="space-y-4 p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
              <div className="flex justify-between items-center">
                <p>Version</p>
                <p className="text-gray-400">1.0.0</p>
              </div>

              <Button variant="ghost" className="w-full text-[#FF5722]">
                <Info className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
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

