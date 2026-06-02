"use client"

import { Zap, MessageCircle, LineChart, QrCode, Users, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Você nos conta sobre o negócio",
    description: "A gente entende seu público, seus serviços e o que faz o seu negócio ser especial. Sem formulários complicados — uma conversa no WhatsApp já basta.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Criamos e publicamos tudo por você",
    description: "Em até 72 horas sua página está no ar, com domínio, hospedagem e integração com WhatsApp. Você aprova, a gente ajusta.",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Você acompanha os resultados",
    description: "Todo mês você recebe um relatório com acessos, interações e novos contatos gerados. Sua presença digital trabalhando 24h por dia.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0F1E] relative overflow-hidden">
      {/* Subtle Mesh Background Glow at the bottom edge, matching clients-carousel top edge */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[300px] bg-[#2B4BF2]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-[#00C2FF] uppercase tracking-wider mb-2">
            Como funciona
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-balance tracking-tight">
            Do papo inicial à página no ar
          </h2>
          <p className="mt-4 text-lg text-[#6B7FA3] max-w-2xl mx-auto text-pretty font-medium">
            Em 3 passos simples, seu negócio começa a ser encontrado online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#2B4BF2]/60 via-[#00C2FF]/20 to-transparent" />
              )}

              {/* Step number badge */}
              <div className="absolute -top-4 left-8 px-4 py-1.5 bg-[#2B4BF2] text-white text-xs font-black rounded-full shadow-lg shadow-[#2B4BF2]/30 tracking-widest z-10 pointer-events-none">
                {step.number}
              </div>

              <div className="relative glass-card glass-card-hover rounded-[2rem] p-8 shadow-sm transition-all duration-300 overflow-hidden border border-[#2B4BF2]/10">
                {/* Decorative border highlight inside card */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00C2FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#2B4BF2]/10 border border-[#2B4BF2]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#00C2FF]/60 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-[#00C2FF] filter drop-shadow-[0_0_8px_rgba(43,75,242,0.4)]" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-[#6B7FA3] leading-relaxed text-sm font-medium">
                  {step.description}
                </p>

                {/* Arrow indicator on mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-6">
                    <ArrowRight className="w-6 h-6 text-[#00C2FF] rotate-90" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
