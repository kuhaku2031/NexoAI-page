"use client"

import { TrendingUp, ShoppingCart, Package, DollarSign } from "lucide-react"
import { Card } from "@/src/components/ui/card"

export function DashboardDemo() {
  return (
    <div className="w-full h-full bg-linear-to-br from-blue-50 to-white p-6 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4 border border-blue-100">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Ventas Hoy</p>
              <p className="text-2xl font-bold text-gray-900">$12,450</p>
              <p className="text-xs text-green-600 mt-1">+18.2%</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-4 border border-blue-100">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Órdenes</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
              <p className="text-xs text-green-600 mt-1">+12.5%</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-4 border border-blue-100">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Productos</p>
              <p className="text-2xl font-bold text-gray-900">1,243</p>
              <p className="text-xs text-orange-600 mt-1">8 bajo stock</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
              <Package className="w-5 h-5 text-orange-600" />
            </div>
          </div>
        </Card>

        <Card className="p-4 border border-blue-100">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Crecimiento</p>
              <p className="text-2xl font-bold text-gray-900">24.3%</p>
              <p className="text-xs text-green-600 mt-1">vs mes anterior</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Chart Area */}
      <Card className="p-6 border border-blue-100">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Ventas de la semana</h3>
        <div className="h-40 flex items-end justify-between gap-2">
          {[65, 45, 80, 55, 90, 70, 85].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div
                className="w-full bg-linear-to-t from-primary to-blue-400 rounded-t-lg transition-all hover:opacity-80"
                style={{ height: `${height}%` }}
              />
              <span className="text-xs text-gray-500">{["L", "M", "X", "J", "V", "S", "D"][i]}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-4 border border-blue-100">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Actividad reciente</h3>
        <div className="space-y-2">
          {[
            { name: "Venta #1234", time: "Hace 2 min", amount: "$125.00" },
            { name: "Venta #1233", time: "Hace 5 min", amount: "$89.50" },
            { name: "Venta #1232", time: "Hace 8 min", amount: "$256.00" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-gray-900">{item.amount}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
