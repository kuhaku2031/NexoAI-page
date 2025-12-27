import { CreditCard, Brain, BarChart3, Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"

export function FeaturesMain() {
  const features = [
    {
      icon: CreditCard,
      gradient: "from-green-400 to-emerald-600",
      title: "Punto de Venta Completo",
      description:
        "Procesa ventas rápido, acepta múltiples métodos de pago y genera recibos automáticos. Todo sincronizado en la nube.",
      bullets: ["Múltiples métodos de pago", "Recibos digitales", "Sincronización en tiempo real"],
    },
    {
      icon: Brain,
      gradient: "from-primary to-secondary",
      title: "Asistente Inteligente 24/7",
      description:
        "Pregunta sobre tus ventas, tendencias o inventario. Claude AI analiza tus datos y te da respuestas en segundos.",
      bullets: ["Análisis de ventas automático", "Predicciones de stock", "Respuestas en lenguaje natural"],
    },
    {
      icon: BarChart3,
      gradient: "from-accent to-secondary",
      title: "Insights en Tiempo Real",
      description:
        "Visualiza tus métricas más importantes de un vistazo. Gráficos interactivos y reportes automáticos diarios.",
      bullets: ["Métricas en tiempo real", "Reportes automáticos", "Alertas inteligentes"],
    },
  ]

  return (
    <section id="caracteristicas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Todo lo que necesitas para crecer</h2>
          <p className="text-lg text-card-foreground max-w-2xl mx-auto">
            Herramientas profesionales diseñadas para negocios modernos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="relative overflow-hidden border-2 border-gray-200 bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-4xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{feature.title}</CardTitle>
                  <CardDescription className="text-card-foreground leading-relaxed">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-card-foreground">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
