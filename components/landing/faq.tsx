"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Qual será o meu investimento?",
    answer: "O investimento é acessível e pensado para caber no dia a dia de um negócio local.Trabalhamos com uma taxa inicial de criação e uma mensalidade que inclui hospedagem, manutenção e suporte.A ideia é simples: com poucos clientes novos por mês, o investimento já se paga sozinho.",
  },
  {
    question: "Tem contrato mínimo ou posso cancelar quando quiser?",
    answer: "Não exigimos contrato mínimo. Você pode cancelar quando quiser, sem burocracia. Nosso objetivo é que você continue com a Visualink porque está tendo resultado, não por obrigação.",
  },
  {
    question: "Preciso entender de internet ou marketing para usar?",
    answer: "Não precisa. Nós cuidamos de toda a parte técnica para você. Você só precisa atender os clientes que chegam pelo WhatsApp.",
  },
  {
    question: "Como essa página vai trazer mais clientes para o meu negócio?",
    answer: "A página funciona como um outdoor digital moderno e acessível. Ela fica disponível na internet 24h por dia, 7 dias por semana, e qualquer pessoa pode encontrá-la através do link ou QR Code. Quando um cliente entra na página, ele encontra todas as informações do seu negócio de forma organizada e profissional, e pode entrar em contato com você diretamente pelo WhatsApp com apenas um clique.",
  },
  {
    question: "A página já vem integrada com meu WhatsApp?",
    answer: "Sim, totalmente integrada. O cliente clica no botão e já abre uma conversa direto com você no WhatsApp. Você pode usar seu número atual normalmente.",
  },
  {
    question: "O que está incluído na minha landing page?",
    answer: (
      <div className="space-y-4 mt-2">
        <p>Sua página inclui:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Estrutura profissional e moderna</li>
          <li>Botão direto para WhatsApp</li>
          <li>Informações do seu negócio (endereço, horário, serviços)</li>
          <li>Fotos organizadas</li>
          <li>Link personalizado</li>
          <li>QR Code para divulgação</li>
        </ul>
        <p>Tudo pronto para começar a receber clientes. Além de design moderno, otimização para celular, integração com WhatsApp, página de agradecimento, hospedagem rápida e segura, certificado SSL, manutenção e suporte técnico.</p>
      </div>
    ),
  },
  {
    question: "Posso pedir alterações depois que a página estiver pronta?",
    answer: "Sim. Você terá no mínimo 4 tickets mensais (a depender do plano) para solicitar ajustes sempre que precisar, como mudança de horário, fotos ou informações. Queremos que sua página esteja sempre atualizada e funcionando bem.",
  },
  {
    question: "Quem cuida da hospedagem e do funcionamento da página?",
    answer: "Nós cuidamos de tudo. Hospedagem, funcionamento, segurança e atualizações ficam por nossa conta. Você não precisa se preocupar com nada técnico.",
  },
  {
    question: "Se der algum problema, vocês resolvem?",
    answer: "Sim. Se acontecer qualquer problema, nossa equipe resolve para você. Nosso objetivo é manter sua página sempre no ar e funcionando perfeitamente.",
  },
  {
    question: "O que acontece depois que minha página estiver no ar?",
    answer: "Depois de publicada, sua página já começa a funcionar como uma vitrine digital do seu negócio. Você pode divulgar o link, usar o QR Code no seu espaço físico e começar a receber contatos diretamente no WhatsApp. A partir daí, o foco é simples: transformar esses contatos em clientes.",
  },
]

export function FAQ() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0F1E] text-white relative overflow-hidden">
      {/* Background Noise and Deep Radial Gradients */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E] via-[#2B4BF2]/10 to-[#0A0F1E] pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(43,75,242,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(43,75,242,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Background Mesh Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#2B4BF2]/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Matching top-right glow from cta-section bottom-right */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2B4BF2]/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-[#00C2FF] uppercase tracking-wider mb-2">
            Tire suas dúvidas
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-balance tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-[#6B7FA3] mx-auto text-pretty font-medium">
            Tudo o que você precisa saber sobre como transformamos seus visitantes em clientes reais.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-[#2B4BF2]/20 bg-zinc-950/40 backdrop-blur-sm rounded-2xl px-6 hover:border-[#00C2FF]/40 transition-colors duration-300 overflow-hidden shadow-sm"
            >
              <AccordionTrigger className="text-left text-base sm:text-lg font-bold hover:text-white hover:no-underline py-5 text-white/90 group">
                <span className="group-hover:text-white transition-colors">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-[#6B7FA3] text-sm sm:text-base leading-relaxed pb-5 pt-1 font-medium border-t border-white/5 mt-1">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
