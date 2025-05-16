"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Send, TrendingUp, Wallet, Trophy, MessageSquare } from "lucide-react"
import { useState } from "react"

export default function Chat() {
  const [message, setMessage] = useState("")

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#333333]">
      {/* Header */}
      <header className="flex items-center p-4 border-b border-gray-300">
        <Link href="/" className="mr-4">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold">Chat</h1>
        <span className="text-sm ml-2 text-gray-400">Obrolan</span>
      </header>

      <main className="container mx-auto px-4 py-6 max-w-md pb-20">
        <Card className="bg-white border-gray-300 shadow-sm">
          <CardContent className="p-4">
            <div className="space-y-4 h-[calc(100vh-240px)] overflow-y-auto">
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
                  <p className="text-white">Tip: SOL yield is up 2% this week. Good time to increase your savings!</p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="bg-[#EEEEEE] p-3 rounded-lg self-start max-w-[80%]">
                  <p className="text-xs text-gray-500 mb-1">Dedi</p>
                  <p className="text-[#333333]">I just increased my weekly deposit to 0.2 SOL!</p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="bg-[#FF5722] p-3 rounded-lg self-end max-w-[80%]">
                  <p className="text-xs text-white/70 mb-1">You</p>
                  <p className="text-white">Nice! I'll try to match that next week.</p>
                </div>
              </div>
            </div>

            <div className="flex mt-4">
              <Input
                placeholder="Type a message..."
                className="bg-white border-gray-300 text-[#333333]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button className="ml-2 bg-[#FF5722] hover:bg-[#E64A19] text-white" onClick={() => setMessage("")}>
                <Send className="w-4 h-4" />
              </Button>
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
          <Link href="/deposit" className="flex flex-col items-center text-gray-500 hover:text-[#333333]">
            <Wallet className="w-6 h-6" />
            <span className="text-xs mt-1">Deposit</span>
          </Link>
          <Link href="/leaderboard" className="flex flex-col items-center text-gray-500 hover:text-[#333333]">
            <Trophy className="w-6 h-6" />
            <span className="text-xs mt-1">Rank</span>
          </Link>
          <Link href="/chat" className="flex flex-col items-center text-[#FF5722]">
            <MessageSquare className="w-6 h-6" />
            <span className="text-xs mt-1">Chat</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

