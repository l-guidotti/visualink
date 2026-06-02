"use client"

import { Users, MessageCircle, Zap, Smartphone, Shield, Search, Clock } from "lucide-react"

const benefits = [
  {
    icon: Search,
    title: "Invisível no Google",
    description: "Quem não te encontra online, encontra o concorrente.",
  },
  {
    icon: MessageCircle,
    title: "Link direto para WhatsApp",
    description: "Clientes clicam e já abrem uma conversa direta com você. Sem fricção, sem barreiras.",
  },
  {
    icon: Zap,
    title: "Página rápida e profissional",
    description: "Design moderno e carregamento instantâneo. Primeira impressão que converte.",
  },
  {
    icon: Smartphone,
    title: "Funciona no celular",
    description: "100% responsiva e otimizada para mobile, onde a maioria dos seus clientes está.",
  },
  {
    icon: Shield,
    title: "Seguro e confiável",
    description: "Hospedagem segura com SSL. Seus dados e dos seus clientes sempre protegidos.",
  },
  {
    icon: Clock,
    title: "Pronto em até 72h",
    description: "Seu negocio online em até 3 dias. Rápido, sem burocracia e sem complicação.",
  },
]

export function Benefits() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0F1E] relative overflow-hidden">
      {/* Background Orbes and Noise */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#2B4BF2]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-[#00C2FF] uppercase tracking-wider mb-2">
            O problema que resolvemos
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-balance tracking-tight">
            Seu concorrente já aparece quando alguém pesquisa no celular. E você?
          </h2>
          <p className="mt-4 text-lg text-[#6B7FA3] max-w-2xl mx-auto text-pretty font-medium">
            A maioria dos negócios locais ainda depende só de indicação e redes sociais. Isso deixa clientes pra trás todo dia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative glass-card glass-card-hover rounded-2xl p-6 lg:p-8 shadow-sm transition-all duration-300 overflow-hidden border border-[#2B4BF2]/10"
            >
              {/* Top hover gradient line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00C2FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-[#2B4BF2]/10 border border-[#2B4BF2]/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#00C2FF]/60 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-[#00C2FF] filter drop-shadow-[0_0_8px_rgba(43,75,242,0.4)]" />
              </div>

              <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                {benefit.title}
              </h3>

              <p className="text-[#6B7FA3] leading-relaxed text-sm font-medium">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
