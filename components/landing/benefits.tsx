"use client"

import { Users, MessageCircle, Zap, Smartphone, Shield, Clock } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Mais clientes sem esforço",
    description: "Sua página trabalha 24/7, gerando leads enquanto você foca no que importa: atender seus clientes.",
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
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#7ACFE5] uppercase tracking-wider mb-2">
            Vantagens exclusivas
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Por que escolher a Visualink?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tudo o que você precisa para transformar visitantes em clientes fiéis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#7ACFE5]/30"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0A2540] to-[#0D3251] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-[#7ACFE5]" />
              </div>

              <h3 className="text-lg font-bold text-card-foreground mb-2">
                {benefit.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
