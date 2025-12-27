"use client"

import { Search, ShoppingCart, Plus, Minus } from "lucide-react"
import { Card } from "@/src/components/ui/card"

export function PosDemo() {
  const products = [
    { id: 1, name: "Café Premium", price: 45.0, category: "Bebidas", stock: 120 },
    { id: 2, name: "Croissant", price: 35.0, category: "Panadería", stock: 45 },
    { id: 3, name: "Jugo Natural", price: 40.0, category: "Bebidas", stock: 78 },
    { id: 4, name: "Sandwich Club", price: 85.0, category: "Alimentos", stock: 32 },
  ]

  const cart = [
    { id: 1, name: "Café Premium", price: 45.0, qty: 2 },
    { id: 2, name: "Croissant", price: 35.0, qty: 1 },
  ]

  return (
    <div className="w-full h-full bg-linear-to-br from-cyan-50 to-white">
      <div className="grid lg:grid-cols-3 h-full">
        {/* Products List */}
        <div className="lg:col-span-2 p-6 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-blue-100 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-3">
            {products.map((product) => (
              <Card
                key={product.id}
                className="p-4 border border-blue-100 hover:border-primary transition-colors cursor-pointer"
              >
                <div className="space-y-2">
                  <div className="w-full h-20 bg-linear-to-br from-blue-100 to-cyan-100 rounded-lg" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{product.name}</h4>
                    <p className="text-xs text-gray-500">{product.category}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">${product.price}</span>
                    <button className="w-8 h-8 rounded-lg bg-primary hover:bg-blue-700 flex items-center justify-center transition-colors">
                      <Plus className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Cart */}
        <div className="bg-white border-l border-blue-100 p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <ShoppingCart className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-gray-900">Orden Actual</h3>
          </div>

          <div className="flex-1 space-y-3">
            {cart.map((item) => (
              <Card key={item.id} className="p-3 border border-gray-100">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-xs text-gray-500">${item.price} c/u</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button className="w-6 h-6 rounded bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-medium w-8 text-center">{item.qty}</span>
                    <button className="w-6 h-6 rounded bg-primary hover:bg-blue-700 flex items-center justify-center">
                      <Plus className="w-3 h-3 text-white" />
                    </button>
                  </div>
                  <span className="text-sm font-bold text-gray-900">${(item.price * item.qty).toFixed(2)}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-3 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">$125.00</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">IVA (16%)</span>
              <span className="font-semibold">$20.00</span>
            </div>
            <div className="flex items-center justify-between text-lg pt-2 border-t border-gray-200">
              <span className="font-bold text-gray-900">Total</span>
              <span className="font-bold text-primary">$145.00</span>
            </div>
            <button className="w-full py-3 rounded-lg bg-linear-to-r from-primary to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity">
              Procesar Pago
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
