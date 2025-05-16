"use client"

import { Input } from "@/components/ui/input"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Trophy, Star, Coins, TrendingUp, Wallet, MessageSquare } from "lucide-react"

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState("leaderboard")

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#333333]">
      {/* Header */}
      <header className="flex items-center p-4 border-b border-gray-300">
        <Link href="/" className="mr-4">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold">Leaderboard & Chat</h1>
        <span className="text-sm ml-2 text-gray-400">Peringkat & Obrolan</span>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-md pb-20">
        <Tabs defaultValue="leaderboard" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-[#EEEEEE]">
            <TabsTrigger value="leaderboard" className="data-[state=active]:bg-[#FF5722]">
              Leaderboard
            </TabsTrigger>
            <TabsTrigger value="chat" className="data-[state=active]:bg-[#FF5722]">
              Chat
            </TabsTrigger>
          </TabsList>

          <TabsContent value="leaderboard" className="mt-4">
            <Card className="bg-white border-gray-300 shadow-sm">
              <CardContent className="p-4">
                <div className="space-y-4">
                  {/* Top Saver */}
                  <div className="flex items-center p-3 bg-[#EEEEEE] rounded-lg">
                    <div className="bg-[#FFD700] w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <Trophy className="w-4 h-4 text-[#2E2E2E]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium">#1 Budi</span>
                        <span>2 SOL, 50 pts</span>
                      </div>
                      <div className="flex mt-1">
                        <div className="flex items-center mr-2 text-xs bg-[#4CAF50]/20 text-[#4CAF50] px-2 py-0.5 rounded-full">
                          <Star className="w-3 h-3 mr-1" />
                          <span>Streak Star</span>
                        </div>
                        <div className="flex items-center text-xs bg-[#FF5722]/20 text-[#FF5722] px-2 py-0.5 rounded-full">
                          <Coins className="w-3 h-3 mr-1" />
                          <span>Top Saver</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Other Savers */}
                  <div className="flex items-center p-3 bg-[#EEEEEE] rounded-lg">
                    <div className="bg-[#C0C0C0] w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <span className="font-bold text-[#2E2E2E]">2</span>
                    </div>
                    <div className="flex justify-between flex-1">
                      <span>Ani</span>
                      <span>1.5 SOL, 40 pts</span>
                    </div>
                  </div>

                  <div className="flex items-center p-3 bg-[#EEEEEE] rounded-lg">
                    <div className="bg-[#CD7F32] w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <span className="font-bold text-[#2E2E2E]">3</span>
                    </div>
                    <div className="flex justify-between flex-1">
                      <span>Dedi</span>
                      <span>1.2 SOL, 35 pts</span>
                    </div>
                  </div>

                  {/* Current User */}
                  <div className="flex items-center p-3 bg-[#FF5722]/10 border border-[#FF5722] rounded-lg">
                    <div className="bg-[#3E3E3E] w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <span className="font-bold">4</span>
                    </div>
                    <div className="flex justify-between flex-1">
                      <span className="font-medium">You</span>
                      <span>1 SOL, 30 pts</span>
                    </div>
                  </div>

                  <div className="flex items-center p-3 bg-[#EEEEEE] rounded-lg">
                    <div className="bg-[#3E3E3E] w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <span className="font-bold">5</span>
                    </div>
                    <div className="flex justify-between flex-1">
                      <span>Eko</span>
                      <span>0.8 SOL, 25 pts</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full mt-4 bg-[#FF5722] hover:bg-[#E64A19] text-white">Challenge Budi - 0.1 SOL</Button>
          </TabsContent>

          <TabsContent value="chat" className="mt-4">
            <Card className="bg-white border-gray-300 shadow-sm">
              <CardContent className="p-4">
                <div className="space-y-4 h-80 overflow-y-auto">
                  <div className="flex flex-col">
                    <div className="bg-[#EEEEEE] p-3 rounded-lg self-start max-w-[80%]">
                      <p className="text-xs text-gray-500 mb-1">Budi</p>
                      <p className="text-[#333333]">Let's save more this week!</p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="bg-[#FF5722] p-3 rounded-lg self-end max-w-[80%]">
                      <p className="text-xs text-white/70 mb-1">You</p>
                      <p className="text-white">I'm in!</p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="bg-[#EEEEEE] p-3 rounded-lg self-start max-w-[80%]">
                      <p className="text-xs text-gray-500 mb-1">Ani</p>
                      <p className="text-[#333333]">Who's going to win the bonus this time? 😊</p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="bg-[#4CAF50] p-3 rounded-lg self-start max-w-[80%]">
                      <p className="text-xs text-white/70 mb-1">SaveSphere AI</p>
                      <p className="text-white">
                        Tip: SOL yield is up 2% this week. Good time to increase your savings!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex mt-4">
                  <Input placeholder="Type a message..." className="bg-white border-gray-300 text-[#333333]" />
                  <Button className="ml-2 bg-[#FF5722] hover:bg-[#E64A19]">Send</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
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
          <Link href="/leaderboard" className="flex flex-col items-center text-[#FF5722]">
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

