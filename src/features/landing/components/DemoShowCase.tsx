"use client"

import { useState } from "react"
import { Card } from "@/src/components/ui/card"


import { BarChart3, Brain, CreditCard, Package } from "lucide-react"
import { DashboardDemo } from "@/src/components/Demo/Dashboard"
import { ChatDemo } from "@/src/components/Demo/Chat"
import { PosDemo } from "@/src/components/Demo/POS"
import { InventoryDemo } from "@/src/components/Demo/Inventory"

export function DemoShowcase() {
  const [activeDemo, setActiveDemo] = useState(0)

  const demos = [
    {
      id: 0,
      title: "Dashboard Principal",
      description: "Visualiza todas tus métricas clave en tiempo real con gráficos interactivos y alertas automáticas",
      icon: BarChart3,
      component: DashboardDemo,
      linear: "from-[#023e8a] to-[#2584b7]",
    },
    {
      id: 1,
      title: "Chat con IA",
      description: "Consulta inteligente sobre tu negocio con respuestas instantáneas usando Claude AI",
      icon: Brain,
      component: ChatDemo,
      linear: "from-[#2584b7] to-[#48cae4]",
    },
    {
      id: 2,
      title: "Sistema POS",
      description: "Procesa ventas de manera rápida con múltiples métodos de pago y recibos digitales",
      icon: CreditCard,
      component: PosDemo,
      linear: "from-[#48cae4] to-[#90e0ef]",
    },
    {
      id: 3,
      title: "Gestión de Inventario",
      description: "Control completo de productos con alertas de stock bajo y sincronización automática",
      icon: Package,
      component: InventoryDemo,
      linear: "from-[#2584b7] to-[#023e8a]",
    },
  ]

  const ActiveComponent = demos[activeDemo].component

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002a52] mb-4">
            Una plataforma completa para tu negocio
          </h2>
          <p className="text-lg text-[#006283] max-w-2xl mx-auto">
            Todas las herramientas que necesitas en una interfaz simple e intuitiva
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 space-y-3">
            {demos.map((demo) => {
              const Icon = demo.icon
              return (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(demo.id)}
                  className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-300 ${
                    activeDemo === demo.id
                      ? "border-[#023e8a] bg-linear-to-br from-blue-50 to-cyan-50 shadow-lg"
                      : "border-gray-200 bg-white hover:border-[#2584b7] hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-linear-to-br ${demo.linear} flex items-center justify-center shrink-0 shadow-md`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-[#002a52] mb-1">{demo.title}</h3>
                      <p className="text-sm text-[#006283] leading-relaxed">{demo.description}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="lg:col-span-3">
            <Card className="border-2 border-gray-200 overflow-hidden shadow-xl bg-white">
              <div className="bg-linear-to-br from-gray-50 to-blue-50 border-b border-gray-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#002a52]">{demos[activeDemo].title}</h3>
                  <div className="flex gap-2">
                    {demos.map((demo, index) => (
                      <div
                        key={demo.id}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          activeDemo === index ? "w-8 bg-[#023e8a]" : "w-4 bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white h-125 overflow-hidden">
                <ActiveComponent />
              </div>
            </Card>

            <div className="flex lg:hidden justify-center gap-2 mt-4">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setActiveDemo(demo.id)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeDemo === demo.id ? "w-8 bg-[#023e8a]" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
