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
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#7ACFE5] uppercase tracking-wider mb-2">
            Tire suas dúvidas
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground mx-auto text-pretty">
            Tudo o que você precisa saber sobre como transformamos seus visitantes em clientes reais.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base sm:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
