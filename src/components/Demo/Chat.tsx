"use client"

import { Send, Sparkles } from "lucide-react"
import { Card } from "@/src/components/ui/card"

export function ChatDemo() {
  const messages = [
    {
      role: "user",
      content: "¿Cuáles fueron mis productos más vendidos esta semana?",
      time: "10:30 AM",
    },
    {
      role: "ai",
      content:
        "Tus productos más vendidos esta semana son:\n\n1. Café Premium - 145 unidades\n2. Croissant - 98 unidades\n3. Jugo Natural - 87 unidades\n\nEl café premium ha tenido un incremento del 23% vs la semana pasada.",
      time: "10:30 AM",
    },
    {
      role: "user",
      content: "¿Debería aumentar el inventario de café?",
      time: "10:32 AM",
    },
    {
      role: "ai",
      content:
        "Sí, te recomiendo aumentar el stock de café. Basado en las tendencias, se proyecta que vendas 180-200 unidades la próxima semana. Tu stock actual es de 45 unidades.",
      time: "10:32 AM",
    },
  ]

  return (
    <div className="w-full h-full bg-linear-to-br from-purple-50 to-white flex flex-col">
      {/* Header */}
      <div className="border-b border-purple-100 p-4 bg-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-primary to-purple-600 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Asistente IA</h3>
            <p className="text-xs text-gray-500">Siempre disponible</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, i) => (
          <div key={i} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] space-y-1`}>
              <Card
                className={`p-3 ${
                  message.role === "user"
                    ? "bg-linear-to-br from-primary to-blue-600 text-white border-0"
                    : "bg-white border border-purple-100"
                }`}
              >
                <p
                  className={`text-sm whitespace-pre-line ${message.role === "user" ? "text-white" : "text-gray-900"}`}
                >
                  {message.content}
                </p>
              </Card>
              <p className={`text-xs text-gray-500 px-2 ${message.role === "user" ? "text-right" : "text-left"}`}>
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-purple-100 p-4 bg-white">
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2">
            <p className="text-sm text-gray-500">Pregunta sobre tu negocio...</p>
          </div>
          <button className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-blue-600 flex items-center justify-center hover:opacity-90 transition-opacity">
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
