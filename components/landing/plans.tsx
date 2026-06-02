"use client"

import { useState } from "react"
import { Check, MessageCircle, ArrowRight, Zap, Sparkles, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Plans() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Plano Start",
      description: "Ideal para novos negócios ou quem quer dar os primeiros passos na internet.",
      priceMonthly: "89,90",
      priceAnnual: "71,90",
      setupPrice: "R$ 497 taxa única",
      features: [
        "1 Landing Page profissional e moderna",
        "Botão de contato direto para WhatsApp",
        "Hospedagem de alta velocidade inclusa",
        "Subdomínio personalizado (sua-marca.visualink.com.br)",
        "Design 100% responsivo (perfeito no celular)",
        "4 tickets de alterações mensais",
        "Certificado de segurança SSL gratuito",
        "Suporte via e-mail e WhatsApp comercial",
      ],
      ctaText: "Começar agora",
      whatsappText: "Olá! Quero contratar o Plano Start para o meu negócio.",
      popular: false,
      icon: Zap,
    },
    {
      name: "Plano Pro",
      description: "O melhor custo-benefício para empresas que querem crescer e vender de verdade.",
      priceMonthly: "129,90",
      priceAnnual: "103,90",
      setupPrice: "R$ 497 taxa única",
      features: [
        "Tudo do Plano Start incluso",
        "Domínio Próprio Incluso (suaempresa.com.br)",
        "8 tickets de alterações mensais",
        "Integração de Pixels (Meta e Google)",
        "Configuração inicial de Google Meu Negócio",
        "Relatórios de desempenho detalhados",
        "Suporte prioritário via WhatsApp",
      ],
      ctaText: "Escolher Plano Pro",
      whatsappText: "Olá! Quero contratar o Plano Pro (Mais Popular) para o meu negócio.",
      popular: true,
      icon: Sparkles,
    },
    {
      name: "Plano Growth",
      description: "Para empresas estruturadas que buscam escala e personalização contínua.",
      priceMonthly: "199,90",
      priceAnnual: "159,90",
      setupPrice: "R$ 497 taxa única",
      features: [
        "Tudo do Plano Pro incluso",
        "Alterações Ilimitadas (tickets sem restrição)",
        "Relatório Mensal detalhado de cliques e acessos",
        "Otimização de SEO básica para buscas locais",
        "Canal de suporte VIP e exclusivo no WhatsApp",
        "Termos de Uso e LGPD configurados",
      ],
      ctaText: "Escolher Plano Growth",
      whatsappText: "Olá! Quero contratar o Plano Growth (Completo) para o meu negócio.",
      popular: false,
      icon: MessageCircle,
    },
  ]

  const handleChoosePlan = (whatsappText: string) => {
    const baseUrl = "https://wa.me/5553981364363"
    const encodedText = encodeURIComponent(whatsappText + (isAnnual ? " (Faturamento Anual)" : " (Faturamento Mensal)"))
    window.open(`${baseUrl}?text=${encodedText}`, "_blank")
  }

  return (
    <section className="py-20 lg:py-28 bg-[#0A0F1E] relative overflow-hidden">
      {/* Background Orbes and Noise */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#2B4BF2]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-[#00C2FF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(43,75,242,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(43,75,242,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-[#00C2FF] uppercase tracking-wider mb-2">
            Nossos Planos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance tracking-tight">
            O investimento que se paga sozinho
          </h2>
          <p className="mt-4 text-lg text-[#6B7FA3] max-w-2xl mx-auto text-pretty font-medium">
            Escolha o plano perfeito para o momento do seu negócio. Sem fidelidade, cancele quando quiser.
          </p>

          {/* Toggle Mensal/Anual */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold transition-colors duration-200 ${!isAnnual ? "text-white" : "text-[#6B7FA3]"}`}>
              Faturamento Mensal
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-8 bg-zinc-950/60 border border-[#2B4BF2]/30 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00C2FF]/50"
              aria-label="Alternar faturamento mensal ou anual"
            >
              <div
                className={`w-6 h-6 rounded-full bg-[#00C2FF] shadow-md shadow-[#00C2FF]/30 transform transition-transform duration-300 ${isAnnual ? "translate-x-6 bg-[#25D366] shadow-[#25D366]/30" : "translate-x-0"
                  }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-semibold transition-colors duration-200 ${isAnnual ? "text-white" : "text-[#6B7FA3]"}`}>
                Faturamento Anual
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 animate-pulse">
                Economize 20%
              </span>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly
            const showSetup = !isAnnual && plan.name === "Plano Start"

            return (
              <div
                key={index}
                className={`relative flex flex-col justify-between glass-card rounded-[2rem] p-8 transition-all duration-300 border ${plan.popular
                    ? "border-[#00C2FF]/50 bg-gradient-to-b from-[#2B4BF2]/10 via-[#0A0F1E]/80 to-[#0A0F1E] shadow-xl shadow-[#2B4BF2]/10 scale-105 z-10 md:-translate-y-2"
                    : "border-[#2B4BF2]/10 hover:border-[#00C2FF]/40"
                  } group`}
              >
                {/* Decorative border highlight for hover */}
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${plan.popular ? "from-[#00C2FF] to-[#25D366]" : "from-[#00C2FF] to-transparent"} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-[2rem]`} />

                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-[#2B4BF2] to-[#00C2FF] text-white text-xs font-black rounded-full shadow-lg shadow-[#2B4BF2]/30 tracking-widest uppercase flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-white animate-spin" style={{ animationDuration: '4s' }} />
                    Mais Popular
                  </div>
                )}

                {/* Plan Content */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-black text-white tracking-tight">{plan.name}</h3>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.popular ? "bg-[#00C2FF]/10 border border-[#00C2FF]/30" : "bg-[#2B4BF2]/10 border border-[#2B4BF2]/20"
                      }`}>
                      <IconComponent className={`w-5 h-5 ${plan.popular ? "text-[#00C2FF]" : "text-[#6B7FA3]"}`} />
                    </div>
                  </div>

                  <p className="text-sm text-[#6B7FA3] leading-relaxed font-medium mb-6 min-h-[40px]">
                    {plan.description}
                  </p>

                  {/* Pricing block */}
                  <div className="border-t border-b border-white/5 py-5 mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-[#6B7FA3] font-bold">R$</span>
                      <span className="text-4xl lg:text-5xl font-black text-white tracking-tight">{price}</span>
                      <span className="text-sm text-[#6B7FA3] font-semibold">/mês</span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${plan.setupPrice.includes("GRÁTIS")
                          ? "bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20"
                          : "bg-white/5 text-[#6B7FA3] border border-white/5"
                        }`}>
                        {plan.setupPrice}
                      </span>
                      {isAnnual && (
                        <span className="text-xs text-[#00C2FF] font-bold">
                          Cobrado anualmente (R$ {(parseFloat(price.replace(",", ".")) * 12).toFixed(2).replace(".", ",")})
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, featureIndex) => {
                      const isStrong = feature.startsWith("Tudo") || feature.includes("Domínio") || feature.includes("Alterações") || feature.includes("Pixel") || feature.includes("Google") || feature.includes("VIP")
                      return (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.popular ? "bg-[#00C2FF]/10 text-[#00C2FF]" : "bg-[#2B4BF2]/10 text-[#2B4BF2]"
                            }`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className={`text-sm leading-relaxed ${isStrong ? "text-zinc-100 font-bold" : "text-[#6B7FA3] font-medium"
                            }`}>
                            {feature}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                {/* Plan Action CTA */}
                <div>
                  <Button
                    onClick={() => handleChoosePlan(plan.whatsappText)}
                    className={`w-full py-6 text-base font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group/btn ${plan.popular
                        ? "bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/35 hover:scale-[1.03] animate-pulse-glow"
                        : "bg-zinc-950/60 hover:bg-zinc-950 text-white border border-[#2B4BF2]/30 hover:border-[#00C2FF]/50 hover:scale-[1.02]"
                      }`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    {plan.ctaText}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Guarantee Info or Trust Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-zinc-950/40 border border-[#2B4BF2]/10 px-6 py-3.5 rounded-2xl backdrop-blur-sm max-w-xl mx-auto">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C2FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00C2FF]"></span>
            </span>
            <p className="text-xs text-[#6B7FA3] font-semibold text-left">
              <strong className="text-white">Sem fidelidade ou multas de cancelamento:</strong> pague apenas pelo tempo que utilizar. Ativação rápida da sua landing page em até 72h úteis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
