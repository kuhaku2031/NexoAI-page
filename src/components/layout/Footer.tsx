import { Brain, LineChart, Github, Twitter, Linkedin, Youtube, } from "lucide-react"

const Footer = () => {
  const footerSections = [
    {
      title: "Producto",
      links: [
        { label: "Características", href: "#caracteristicas" },
        { label: "Precios", href: "#precios" },
        { label: "Demo", href: "#demo" },
        { label: "Roadmap", href: "#" },
        { label: "Changelog", href: "#" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Documentación", href: "#" },
        { label: "Guías", href: "#" },
        { label: "API Docs", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Ayuda", href: "#" },
      ],
    },
    {
      title: "Compañía",
      links: [
        { label: "Sobre nosotros", href: "#" },
        { label: "Contacto", href: "#" },
        { label: "Prensa", href: "#" },
        { label: "Términos", href: "#" },
        { label: "Privacidad", href: "#" },
      ],
    },
    {
      title: "Descargar",
      links: [
        { label: "Android APK", href: "#" },
        { label: "iOS (PWA)", href: "#" },
        { label: "Web App", href: "#" },
        { label: "Desktop (próximamente)", href: "#", disabled: true },
      ],
    },
  ]

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
              </ul>
            </div>
          ))}
        </div>

        {/* Open Source Badge */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm">Open Source</span>
          </a>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg">
            <span className="text-sm">⭐ 1.2k+ stars en GitHub</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg">
            <span className="text-sm">📱 Disponible en Android/iOS</span>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo and tagline */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <Brain className="w-8 h-8 text-[#2584b7]" />
                <LineChart className="w-4 h-4 text-[#48cae4] absolute -bottom-1 -right-1" />
              </div>
              <div>
                <div className="text-lg font-bold">NexoAI</div>
                <div className="text-xs text-gray-400">Gestión inteligente de negocios</div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-right">
              © 2025 NexoAI. Hecho con ❤️ en Latinoamérica
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer