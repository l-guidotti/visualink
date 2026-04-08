"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Smartphone, MessageCircle, Zap, Send } from "lucide-react"
import { VideoDialog } from "./video-dialog"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0D3251] to-[#0A2540]" />

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#7ACFE5]/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7ACFE5]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#7ACFE5]/5 to-transparent rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white/80 mb-6">
              <Zap className="w-4 h-4 text-[#7ACFE5]" />
              <span>Landing pages de alta conversão</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance">
              Mais clientes, direto no seu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-[#20BD5A]">
                WhatsApp
              </span> ou Página de Vendas
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty">
              Criamos páginas que contam a história do seu negócio e transformam visitantes em clientes. Simples, rápido e eficiente.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-8 py-6 text-base rounded-xl shadow-lg shadow-[#25D366]/25 transition-all hover:shadow-xl hover:shadow-[#25D366]/30 hover:scale-105"
                onClick={() => window.open("https://wa.me/5553981364363", "_blank")}
              >
                Quero mais clientes
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <VideoDialog>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:text-white px-8 py-6 text-base rounded-xl transition-all"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Ver como funciona
                </Button>
              </VideoDialog>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">30+</div>
                <div className="text-sm text-white/60">Clientes ativos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-white/60">Satisfação</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">3x</div>
                <div className="text-sm text-white/60">Mais conversões</div>
              </div>
            </div>
          </div>

          {/* Right content - Mockup */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Phone mockup */}
              <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-[3rem] p-3 shadow-2xl border border-white/10">
                <div className="bg-[#0A2540] rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 py-3 bg-black/20">
                    <span className="text-white/80 text-xs">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 bg-white/80 rounded-sm" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#25D366] to-[#20BD5A] flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm ">Novo cliente</div>
                        <div className="text-white/60 text-xs">Agora</div>
                      </div>
                    </div>

                    {/* Chat bubbles */}
                    <div className="space-y-3">
                      <div className="bg-white/10 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                        <p className="text-white/90 text-sm">Olá! Vi sua página e quero saber mais sobre os serviços.</p>
                      </div>

                      <div className="bg-[#25D366] rounded-2xl rounded-tr-none p-4 max-w-[80%] ml-auto">
                        <p className="text-white text-sm">Oi! Claro, vou te ajudar. Qual serviço você precisa?</p>
                      </div>

                      <div className="bg-white/10 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                        <p className="text-white/90 text-sm">Quero agendar um horário para amanhã!</p>
                      </div>
                    </div>

                    {/* Input */}
                    <div className="flex items-center gap-2 bg-white/5 rounded-full p-2 mt-4">
                      <div className="flex-1 px-4 text-white/40 text-sm">Mensagem</div>
                      <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                        <Send className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#7ACFE5]/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-[#7ACFE5]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0A2540]">+47 mensagens</div>
                    <div className="text-xs text-gray-500">Hoje</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0A2540]/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#0A2540]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0A2540]">Conversão 12%</div>
                    <div className="text-xs text-[#7ACFE5]">+3.2% esta semana</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute -bottom-[1px] left-0 right-0 w-full">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 100V60C240 20 480 0 720 20C960 40 1200 80 1440 60V100H0Z" fill="var(--background)" />
        </svg>
      </div>
    </section>
  )
}
