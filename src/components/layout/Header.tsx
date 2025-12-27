"use client"

import { useState } from "react"
import { Menu, X, Brain, LineChart } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { Button } from "../ui/button"


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Brain className="w-8 h-8 text-[#023e8a] group-hover:scale-110 transition-transform" />
              <LineChart className="w-4 h-4 text-[#48cae4] absolute -bottom-1 -right-1" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#002a52]">NexoAI</span>
              <span className="px-2 py-0.5 text-xs font-semibold bg-gradient-to-r from-[#023e8a] to-[#2584b7] text-white rounded-full">
                BETA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-[#006283] hover:text-[#023e8a] transition-colors">
              Inicio
            </Link>
            <Link to="/" className="text-[#006283] hover:text-[#023e8a] transition-colors">
              Características
            </Link>
            <Link to="/" className="text-[#006283] hover:text-[#023e8a] transition-colors">
              Precios
            </Link>
            <Link to="/" className="text-[#006283] hover:text-[#023e8a] transition-colors">
              Docs
            </Link>
            <Link to="/" className="text-[#006283] hover:text-[#023e8a] transition-colors">
              Demo
            </Link>
          </div>

          {/* Desktop CTAs - CHANGE: Updated links */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-300 text-[#006283] hover:bg-gray-50 bg-transparent"
              >
                Iniciar Sesión
              </Button>
            </Link>
            <Link to="/">
              <Button
                size="sm"
                className="bg-gradient-to-r from-[#023e8a] to-[#2584b7] hover:from-[#002a52] hover:to-[#006283] text-white shadow-lg"
              >
                Acceder Beta Gratis
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
     {mobileMenuOpen && (
        // <div className="md:hidden bg-white border-t border-gray-200">
        //   <div className="px-4 py-4 space-y-3">
        //     <Link href="#inicio" className="block py-2 text-[#006283] hover:text-[#023e8a]">
        //       Inicio
        //     </Link>
        //     <Link href="#caracteristicas" className="block py-2 text-[#006283] hover:text-[#023e8a]">
        //       Características
        //     </Link>
        //     <Link href="#precios" className="block py-2 text-[#006283] hover:text-[#023e8a]">
        //       Precios
        //     </Link>
        //     <Link href="#docs" className="block py-2 text-[#006283] hover:text-[#023e8a]">
        //       Docs
        //     </Link>
        //     <Link href="#demo" className="block py-2 text-[#006283] hover:text-[#023e8a]">
        //       Demo
        //     </Link>
        //     {/* CHANGE: Updated mobile links */}
        //     <div className="pt-4 space-y-2">
        //       <Link href="/auth" className="block">
        //         <Button variant="outline" className="w-full bg-transparent">
        //           Iniciar Sesión
        //         </Button>
        //       </Link>
        //       <Link href="/get-app" className="block">
        //         <Button className="w-full bg-gradient-to-r from-[#023e8a] to-[#2584b7] text-white">
        //           Acceder Beta Gratis
        //         </Button>
        //       </Link>
        //     </div>
        //   </div>
        // </div>
        <div></div>
      )}
    </nav>
  )
}
export default Header
