"use client"

import { Button } from "@/src/components/ui/button"
import { Link } from "@tanstack/react-router"
import { Sparkles, Download, Play, DollarSign, BarChart3, Brain, Package, Star } from "lucide-react"

const HeroSection = () => {
  
  return (

    

    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-sky-light via-mist to-wave"
    >


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-primary to-secondary text-pearl backdrop-blur-sm rounded-full shadow-lg animate-pulse">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Beta Disponible | 1 Mes Gratis</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Gestiona tu negocio con{" "}
              <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">
                Inteligencia Artificial
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-reef leading-relaxed max-w-2xl">
              NexoAI combina POS, inventario y análisis inteligente en una sola plataforma. Sé de los primeros en usar
              nuestra plataforma y obtén <span className="font-bold text-ocean">acceso gratuito durante 1 mes</span>
              .
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/" >
                <Button
                  size="lg"
                  className="bg-linear-to-r from-primary to-secondary hover:from-abyss hover:to-reef  shadow-xl hover:shadow-2xl transition-all text-base relative overflow-hidden group duration-300 hover:-translate-y-1 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    <Download className="w-5 h-5 mr-2" />
                    Acceder a la Beta Gratis
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-sky to-wave opacity-0 group-hover:opacity-100"/>
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="flex items-center justify-center text-accent bg-background hover:bg-linear-to-r hover:from-primary hover:to-secondary hover:border-transparent hover:text-input shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 "
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-abyss">150+</span>
                <span className="text-sm text-reef">beta testers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-[#002a52]">4.9</span>
                <span className="text-sm text-[#006283]">rating beta</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#006283]">Disponible en</span>
                <span className="text-lg">🇲🇽 🇨🇴 🇦🇷</span>
              </div>
            </div>

            {/* Urgency Message */}
            <div className="inline-flex items-center bg-background rounded-lg">
            <div className="gap-2 px-4 bg-warning/5 py-2 border border-warning rounded-lg">
              <span className="text-sm text-warning">
                ⚡ Solo <span className="font-bold">50 espacios</span> disponibles para acceso anticipado
              </span>
            </div>
            </div>
          </div>

          {/* Right: Visual/Mockup */}
          <div className="relative">
            {/* Phone Mockup Container */}
            <div className="relative mx-auto w-70 sm:w-[320px] h-140 sm:h-160">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl p-3">
                <div className="bg-white rounded-[2.5rem] h-full overflow-hidden">
                  {/* Mockup Content */}
                  <div className="h-full bg-linear-to-br from-gray-50 to-white p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-[#002a52]">Dashboard</div>
                      <div className="w-8 h-8 bg-[#023e8a] rounded-full flex items-center justify-center">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-linear-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                        <DollarSign className="w-6 h-6 text-green-600 mb-2" />
                        <div className="text-xs text-green-700">Ventas Hoy</div>
                        <div className="text-lg font-bold text-green-900">$2,450</div>
                      </div>
                      <div className="bg-linear-to-br from-[#e4f5fb] to-[#90e0ef] p-4 rounded-xl border border-[#2584b7]/30">
                        <BarChart3 className="w-6 h-6 text-[#023e8a] mb-2" />
                        <div className="text-xs text-[#006283]">Productos</div>
                        <div className="text-lg font-bold text-[#002a52]">145</div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                      <div className="text-xs font-semibold text-gray-600 mb-3">Ventas Semanales</div>
                      <div className="flex items-end gap-1 h-24">
                        {[40, 60, 45, 75, 55, 85, 65].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-linear-to-t from-[#023e8a] to-[#2584b7] rounded-t"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="bg-linear-to-r from-[#023e8a] to-[#2584b7] rounded-xl p-4 text-white">
                      <Brain className="w-6 h-6 mb-2" />
                      <div className="text-xs opacity-90 mb-1">Insight de IA</div>
                      <div className="text-sm font-medium">Tus ventas aumentaron 23% esta semana</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -right-4 top-20 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg animate-float">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
              <div className="absolute -left-4 top-40 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg animate-float delay-300">
                <BarChart3 className="w-6 h-6 text-chart-1" />
              </div>
              <div className="absolute -right-8 bottom-32 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg animate-float delay-700">
                <Brain className="w-6 h-6 text-chart-2" />
              </div>
              <div className="absolute -left-8 bottom-48 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg animate-float delay-500">
                <Package className="w-6 h-6 text-chart-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroSection