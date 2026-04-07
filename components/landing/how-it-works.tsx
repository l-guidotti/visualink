"use client"

import { FileText, QrCode, Users, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Criamos sua página",
    description: "Desenvolvemos uma landing page profissional e otimizada para conversão, personalizada para o seu negócio.",
  },
  {
    number: "02",
    icon: QrCode,
    title: "Geramos seu QR Code",
    description: "Criamos um QR Code exclusivo que direciona seus clientes diretamente para sua página e WhatsApp.",
  },
  {
    number: "03",
    icon: Users,
    title: "Você recebe clientes",
    description: "Seus clientes entram em contato diretamente pelo WhatsApp ou serão redirecionados para o seu app de vendas.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#7ACFE5] uppercase tracking-wider mb-2">
            Simples e eficiente
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Como funciona
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Em apenas 3 passos simples, seu negócio começa a receber clientes diretamente no WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#7ACFE5]/50 to-transparent" />
              )}

              <div className="relative bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                {/* Step number badge */}
                <div className="absolute -top-4 left-8 px-3 py-1 bg-[#0A2540] text-white text-sm font-bold rounded-full">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7ACFE5]/20 to-[#2C8CA5]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-[#7ACFE5]" />
                </div>

                <h3 className="text-xl font-bold text-card-foreground mb-3">
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow indicator on mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-6">
                    <ArrowRight className="w-6 h-6 text-[#7ACFE5] rotate-90" />
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
