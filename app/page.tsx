import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { ClientsCarousel } from "@/components/landing/clients-carousel"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Benefits } from "@/components/landing/benefits"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="como-funciona">
          <HowItWorks />
        </section>
        <section id="beneficios">
          <Benefits />
        </section>
        <CTASection />
        <section id="clientes">
          <ClientsCarousel />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
