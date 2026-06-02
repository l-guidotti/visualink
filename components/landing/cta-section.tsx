"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight, CheckCircle } from "lucide-react"

const features = [
  "Suporte dedicado",
  "Entrega em até 3 dias",
  "Garantia de satisfação",
]

const words = ["encontrado", "visto", "destaque", "sucesso", "referência"]

export function CTASection() {
  const [currentWord, setCurrentWord] = useState(words[0])
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentWord((prev) => {
          const nextIndex = (words.indexOf(prev) + 1) % words.length
          return words[nextIndex]
        })
        setFade(true)
      }, 300)
    }, 2800)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden bg-[#0A0F1E]">
      {/* Background Noise and Deep Radial Gradients */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E] via-[#2B4BF2]/10 to-[#0A0F1E]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#2B4BF2]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#2B4BF2]/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2B4BF2]/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(43,75,242,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(43,75,242,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#2B4BF2]/10 border border-[#2B4BF2]/30 backdrop-blur-sm px-4 py-2 text-sm text-[#00C2FF] mb-6">
          <MessageCircle className="w-4 h-4 text-[#00C2FF]" />
          <span className="font-semibold">Comece hoje mesmo</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight text-balance tracking-tight">
          Seu negócio merece ser{" "}
          <span className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#2B4BF2] to-[#00C2FF] text-glow transition-all duration-300 ${
            fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}>
            {currentWord}
          </span>
        </h2>

        <p className="mt-6 text-lg text-[#6B7FA3] max-w-2xl mx-auto text-pretty font-medium">
          Não perca mais tempo. Fale conosco agora e descubra como podemos transformar seu negócio digital.
        </p>

        {/* Features list */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 text-zinc-200 text-sm font-semibold bg-zinc-950/40 border border-white/5 px-4 py-2 rounded-xl backdrop-blur-sm hover:border-[#00C2FF]/30 transition-colors duration-300"
            >
              <CheckCircle className="w-4 h-4 text-[#00C2FF]" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Button
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-10 py-7 text-lg rounded-2xl shadow-lg shadow-[#25D366]/25 transition-all hover:shadow-xl hover:shadow-[#25D366]/35 hover:scale-105 animate-pulse-glow"
            onClick={() => window.open("https://wa.me/5553981364363", "_blank")}>
            <MessageCircle className="mr-2 w-6 h-6 animate-bounce" style={{ animationDuration: '2s' }} />
            Falar no WhatsApp
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <p className="mt-4 text-sm text-[#6B7FA3] font-medium">
            Resposta em até 5 minutos durante horário comercial
          </p>
        </div>
      </div>
    </section>
  )
}
