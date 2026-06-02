"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Smartphone, MessageCircle, Zap, Send } from "lucide-react"
import { VideoDialog } from "./video-dialog"

const words = ["visto", "encontrado", "destacado", "visitado", "valorizado", "conhecido", "recomendado"]

export function Hero() {
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
    <section className="relative min-h-screen overflow-hidden bg-[#0A0F1E] flex items-center">
      {/* Background Noise and Radial Gradients */}
      <div className="absolute inset-0 bg-noise opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E] via-transparent to-[#0A0F1E]" />

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#2B4BF2]/30 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2B4BF2]/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#2B4BF2]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(43,75,242,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(43,75,242,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#2B4BF2]/10 border border-[#2B4BF2]/30 backdrop-blur-md px-4 py-2 text-sm text-[#00C2FF] mb-6 animate-pulse-glow">
              <Zap className="w-4 h-4 text-[#00C2FF]" />
              <span className="font-semibold">Presença digital para negócios locais</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight sm:text-balance">
              Seu negócio{" "}
              <br className="sm:hidden" />
              <span className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#2B4BF2] via-[#00C2FF] to-[#F0F4FF] text-glow transition-all duration-300 ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}>
                {currentWord}
              </span>{" "}
              <br className="sm:hidden" />
              por quem está perto de você
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#6B7FA3] max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty font-medium">
              Criamos e cuidamos da sua presença na internet — página profissional, métricas reais e atendimento automatizado. Tudo isso sem você precisar entender de tecnologia.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-8 py-6 text-base rounded-2xl shadow-lg shadow-[#25D366]/25 transition-all hover:shadow-xl hover:shadow-[#25D366]/35 hover:scale-105"
                onClick={() => window.open("https://wa.me/5553981364363", "_blank")}
              >
                Quero começar
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <VideoDialog>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#2B4BF2]/30 bg-[#2B4BF2]/5 backdrop-blur-md text-white hover:bg-[#2B4BF2]/15 hover:text-white px-8 py-6 text-base rounded-2xl transition-all hover:scale-105"
                >
                  <Play className="mr-2 w-5 h-5 text-[#00C2FF]" />
                  Ver como funciona
                </Button>
              </VideoDialog>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left bg-[#12192C]/40 border border-[#2B4BF2]/10 backdrop-blur-sm px-6 py-3 rounded-2xl hover:border-[#00C2FF]/30 transition-all duration-300">
                <div className="text-3xl font-extrabold text-white">30+</div>
                <div className="text-xs text-[#6B7FA3] font-semibold uppercase tracking-wider mt-1">Projetos entregues</div>
              </div>
              <div className="text-center lg:text-left bg-[#12192C]/40 border border-[#2B4BF2]/10 backdrop-blur-sm px-6 py-3 rounded-2xl hover:border-[#00C2FF]/30 transition-all duration-300">
                <div className="text-3xl font-extrabold text-white">98%</div>
                <div className="text-xs text-[#6B7FA3] font-semibold uppercase tracking-wider mt-1">Satisfação</div>
              </div>
              <div className="text-center lg:text-left bg-[#12192C]/40 border border-[#2B4BF2]/10 backdrop-blur-sm px-6 py-3 rounded-2xl hover:border-[#00C2FF]/30 transition-all duration-300">
                <div className="text-3xl font-extrabold text-white">Até 3x</div>
                <div className="text-xs text-[#6B7FA3] font-semibold uppercase tracking-wider mt-1">Mais conversões</div>
              </div>
            </div>
          </div>

          {/* Right content - Mockup */}
          <div className="flex-1 relative w-full">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative radial glow behind mockup */}
              <div className="absolute inset-0 bg-[#2B4BF2]/20 rounded-full blur-[60px] transform scale-75 -z-10 animate-pulse" />

              {/* Phone mockup */}
              <div className="relative bg-gradient-to-b from-[#2B4BF2]/20 to-black/40 backdrop-blur-xl rounded-[3rem] p-3 shadow-2xl border border-[#2B4BF2]/20">
                <div className="bg-[#050505] rounded-[2.5rem] overflow-hidden border border-white/5">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 py-4 bg-black/40 border-b border-white/5">
                    <span className="text-[#6B7FA3] text-xs font-semibold">9:41</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-2.5 bg-white/20 rounded-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 bottom-0 w-3/4 bg-white/70" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#2B4BF2] to-[#00C2FF] flex items-center justify-center shadow-lg shadow-[#2B4BF2]/25">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">Novo cliente</div>
                        <div className="text-[#6B7FA3] text-xs font-medium">Agora mesmo</div>
                      </div>
                    </div>

                    {/* Chat bubbles */}
                    <div className="space-y-4">
                      <div className="bg-[#2B4BF2]/10 border border-[#2B4BF2]/20 rounded-2xl rounded-tl-none p-4 max-w-[85%]">
                        <p className="text-zinc-200 text-sm leading-relaxed">Olá! Vi sua página e quero saber mais sobre os serviços.</p>
                      </div>

                      <div className="bg-[#2B4BF2] rounded-2xl rounded-tr-none p-4 max-w-[85%] ml-auto shadow-lg shadow-[#2B4BF2]/15">
                        <p className="text-white text-sm leading-relaxed">Oi! Claro, vou te ajudar. Qual serviço você precisa?</p>
                      </div>

                      <div className="bg-[#2B4BF2]/10 border border-[#2B4BF2]/20 rounded-2xl rounded-tl-none p-4 max-w-[85%]">
                        <p className="text-zinc-200 text-sm leading-relaxed font-medium">Quero agendar um horário para amanhã!</p>
                      </div>
                    </div>

                    {/* Input */}
                    <div className="flex items-center gap-2 bg-white/5 rounded-full p-2 mt-6 border border-white/5">
                      <div className="flex-1 px-4 text-[#6B7FA3] text-sm font-medium">Mensagem</div>
                      <div className="w-10 h-10 rounded-full bg-[#2B4BF2] flex items-center justify-center cursor-pointer hover:bg-[#2B4BF2]/80 transition-colors">
                        <Send className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-[#0A0F1E] rounded-2xl p-4 shadow-xl border border-[#2B4BF2]/20 animate-float z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2B4BF2]/15 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#00C2FF]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">+47 mensagens</div>
                    <div className="text-xs text-[#6B7FA3]">Hoje</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-[#0A0F1E] rounded-2xl p-4 shadow-xl border border-[#2B4BF2]/20 animate-float z-10" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2B4BF2]/15 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#00C2FF]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Conversão 12%</div>
                    <div className="text-xs text-[#00C2FF] font-semibold">+3.2% esta semana</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade-out to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0F1E] to-transparent pointer-events-none z-10" />
    </section>
  )
}
