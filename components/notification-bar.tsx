"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface NotificationBarProps {
  message: string
  type: "success" | "warning" | "info"
}

export function NotificationBar({ message, type }: NotificationBarProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  const bgColor = {
    success: "bg-[#4CAF50]",
    warning: "bg-[#FF9800]",
    info: "bg-[#2196F3]",
  }

  return (
    <div className={`${bgColor[type]} text-white p-3 rounded-lg mt-4 flex justify-between items-center`}>
      <p className="text-sm">{message}</p>
      <button onClick={() => setIsVisible(false)} className="text-white hover:text-gray-200">
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}

