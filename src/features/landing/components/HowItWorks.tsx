import { Smartphone, Store, Rocket } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Smartphone,
      title: "Descarga la app",
      description: "Disponible para Android, iOS y web. Sin tarjeta de crédito.",
    },
    {
      number: "02",
      icon: Store,
      title: "Configura tu negocio",
      description: "Agrega tus productos, usuarios y punto de venta en minutos.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Comienza a vender",
      description: "Usa el POS, consulta a la IA y recibe insights automáticos.",
    },
  ]

  return (
    <section className="py-20 bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#002a52] mb-4">Empieza en 3 pasos simples</h2>
          <p className="text-lg text-[#006283] max-w-2xl mx-auto">Estar listo para vender nunca fue tan fácil</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-1 bg-linear-to-r from-[#023e8a]/20 via-[#2584b7]/30 to-[#48cae4]/20" />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Number badge */}
                  <div className="mb-6 relative">
                    <div className="w-32 h-32 rounded-full bg-linear-to-br from-[#023e8a] via-[#2584b7] to-[#48cae4] flex items-center justify-center shadow-xl relative z-10">
                      <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
                        <Icon className="w-12 h-12 text-[#002a52]" />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#023e8a] rounded-full flex items-center justify-center text-white font-bold shadow-lg z-20">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#002a52] mb-2">{step.title}</h3>
                  <p className="text-[#006283] leading-relaxed max-w-sm">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
