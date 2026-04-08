"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight, CheckCircle } from "lucide-react"

const features = [
  "Suporte dedicado",
  "Entrega em até 3 dias",
  "Garantia de satisfação",
]

export function CTASection() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0D3251] to-[#0A2540]" />

      {/* Top wave */}
      <div className="absolute -top-[1px] left-0 right-0 w-full rotate-180">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 100V60C240 20 480 0 720 20C960 40 1200 80 1440 60V100H0Z" fill="var(--background)" />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#7ACFE5]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7ACFE5]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#7ACFE5]/20 backdrop-blur-sm px-4 py-2 text-sm text-[#7ACFE5] mb-6">
          <MessageCircle className="w-4 h-4" />
          <span>Comece hoje mesmo</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
          Seu negócio pode começar a receber clientes{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7ACFE5] to-[#2C8CA5]">
            hoje
          </span>
        </h2>

        <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto text-pretty">
          Não perca mais tempo. Fale conosco agora e descubra como podemos transformar seu negócio digital.
        </p>

        {/* Features list */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 text-white/80 text-sm"
            >
              <CheckCircle className="w-4 h-4 text-[#7ACFE5]" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Button
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-lg shadow-[#25D366]/25 transition-all hover:shadow-xl hover:shadow-[#25D366]/30 hover:scale-105 animate-pulse-glow"
            onClick={() => window.open("https://wa.me/5553981364363", "_blank")}>
            <MessageCircle className="mr-2 w-6 h-6" />
            Falar no WhatsApp
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <p className="mt-4 text-sm text-white/50">
            Resposta em até 5 minutos durante horário comercial
          </p>
        </div>
      </div>
    </section>
  )
}
