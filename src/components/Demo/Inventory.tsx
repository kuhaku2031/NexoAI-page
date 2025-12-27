"use client"

import { Package, AlertCircle, TrendingUp, Search } from "lucide-react"
import { Card } from "@/src/components/ui/card"

export function InventoryDemo() {
  const inventory = [
    { id: 1, name: "Café Premium", sku: "CAF-001", stock: 120, min: 50, status: "good", trend: "+12%" },
    { id: 2, name: "Croissant", sku: "PAN-002", stock: 15, min: 30, status: "low", trend: "-5%" },
    { id: 3, name: "Jugo Natural", sku: "BEB-003", stock: 78, min: 40, status: "good", trend: "+8%" },
    { id: 4, name: "Sandwich Club", sku: "ALI-004", stock: 8, min: 20, status: "critical", trend: "-15%" },
  ]

  return (
    <div className="w-full h-full bg-linear-to-br from-green-50 to-white p-6 space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 border border-green-100">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <Package className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-xs text-gray-600">Total Productos</p>
              <p className="text-xl font-bold text-gray-900">1,243</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 border border-orange-100">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-xs text-gray-600">Stock Bajo</p>
              <p className="text-xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-600">Valor Total</p>
              <p className="text-xl font-bold text-gray-900">$45.2K</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar en inventario..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-green-100 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Inventory Table */}
      <Card className="border border-green-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Producto</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">SKU</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Stock</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Mínimo</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Tendencia</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {inventory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-linear-to-br from-green-100 to-blue-100" />
                      <span className="text-sm font-medium text-gray-900">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{item.sku}</td>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-900">{item.stock}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{item.min}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-sm font-medium ${
                        item.trend.startsWith("+") ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {item.trend}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === "good"
                          ? "bg-green-100 text-green-700"
                          : item.status === "low"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status === "good" ? "OK" : item.status === "low" ? "Bajo" : "Crítico"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
