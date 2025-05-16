import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  Copy,
  ExternalLink,
  RefreshCw,
  Send,
  TrendingUp,
  WalletIcon,
  Trophy,
  MessageSquare,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Wallet() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#333333]">
      {/* Header */}
      <header className="flex items-center p-4 border-b border-gray-300">
        <Link href="/" className="mr-4">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold">Wallet</h1>
        <span className="text-sm ml-2 text-gray-400">Dompet</span>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-md pb-20">
        {/* Balance Card */}
        <Card className="bg-white border-gray-300 shadow-sm">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-500">Total Balance</h2>
              <Button variant="ghost" size="sm" className="text-gray-500">
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>
            <div className="text-3xl font-bold mb-1">2.0 SOL</div>
            <div className="text-gray-500 mb-4">≈ $300.00 USD</div>

            <div className="flex gap-2 mt-4">
              <Button className="flex-1 bg-[#FF5722] hover:bg-[#E64A19] text-white">
                <Send className="w-4 h-4 mr-2" />
                Send
              </Button>
              <Button variant="outline" className="flex-1 border-gray-300">
                <ExternalLink className="w-4 h-4 mr-2" />
                Receive
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Wallet Address */}
        <div className="mt-6 bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Wallet Address</span>
            <Button variant="ghost" size="sm" className="h-8 text-[#FF5722]">
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </Button>
          </div>
          <p className="font-mono text-sm mt-1 break-all">0x123f6789abcdef123f6789abcdef123f6789abcd</p>
        </div>

        {/* Transactions */}
        <div className="mt-6">
          <Tabs defaultValue="assets" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-[#EEEEEE]">
              <TabsTrigger value="assets" className="data-[state=active]:bg-[#FF5722]">
                Assets
              </TabsTrigger>
              <TabsTrigger value="activity" className="data-[state=active]:bg-[#FF5722]">
                Activity
              </TabsTrigger>
            </TabsList>

            <TabsContent value="assets" className="mt-4">
              <Card className="bg-white border-gray-300 shadow-sm">
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-[#FF5722]/10 flex items-center justify-center mr-3">
                          <WalletIcon className="w-5 h-5 text-[#FF5722]" />
                        </div>
                        <div>
                          <p className="font-medium">SOL</p>
                          <p className="text-sm text-gray-500">Solana</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">2.0 SOL</p>
                        <p className="text-sm text-gray-500">$300.00</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <span className="text-blue-500 font-bold">U</span>
                        </div>
                        <div>
                          <p className="font-medium">USDC</p>
                          <p className="text-sm text-gray-500">USD Coin</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">25.00 USDC</p>
                        <p className="text-sm text-gray-500">$25.00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="mt-4">
              <Card className="bg-white border-gray-300 shadow-sm">
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <Send className="w-5 h-5 text-green-500 rotate-180" />
                        </div>
                        <div>
                          <p className="font-medium">Received</p>
                          <p className="text-sm text-gray-500">Mar 15, 2025</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-500">+0.5 SOL</p>
                        <p className="text-sm text-gray-500">$75.00</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                          <Send className="w-5 h-5 text-red-500" />
                        </div>
                        <div>
                          <p className="font-medium">Sent to Family Fund</p>
                          <p className="text-sm text-gray-500">Mar 12, 2025</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-red-500">-0.2 SOL</p>
                        <p className="text-sm text-gray-500">$30.00</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                          <RefreshCw className="w-5 h-5 text-purple-500" />
                        </div>
                        <div>
                          <p className="font-medium">Yield Earned</p>
                          <p className="text-sm text-gray-500">Mar 10, 2025</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-purple-500">+0.012 SOL</p>
                        <p className="text-sm text-gray-500">$1.80</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
            <WalletIcon className="w-6 h-6" />
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

