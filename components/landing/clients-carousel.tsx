"use client"

import { useCallback, useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"

// Adicione os logos dos seus clientes aqui
// Substitua as URLs pelos caminhos dos logos PNG das empresas
const clients = [
  { name: "Visualink", logo: "/photos/visualink_logo_sfundo.PNG", url: "https://www.instagram.com/visua_link/" },
  { name: "Parrillaria Santa Cruz", logo: "/photos/image-removebg-preview.png", url: "https://parrilla-santa-cruz.vercel.app/" },
  { name: "LHD audiovisual", logo: "/photos/lhd.png", url: "https://lhd.visualink.com.br/" },
  { name: "Visualink", logo: "/photos/visualink_logo_sfundo.PNG", url: "https://www.instagram.com/visua_link/" },
  { name: "Visualink", logo: "/photos/visualink_logo_sfundo.PNG", url: "https://www.instagram.com/visua_link/" },
  { name: "Visualink", logo: "/photos/visualink_logo_sfundo.PNG", url: "https://www.instagram.com/visua_link/" },
  { name: "Visualink", logo: "/photos/visualink_logo_sfundo.PNG", url: "https://www.instagram.com/visua_link/" },
]

export function ClientsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  })

  const [isHovered, setIsHovered] = useState(false)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Autoplay implementation
  useEffect(() => {
    if (!emblaApi) return

    const startAutoplay = () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
      autoplayRef.current = setInterval(() => {
        if (!isHovered) {
          emblaApi.scrollNext()
        }
      }, 3000)
    }

    startAutoplay()

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [emblaApi, isHovered])

  return (
    <section className="py-16 bg-[#0A0F1E] relative overflow-hidden">
      {/* Subtle Mesh Background Glow at the top edge, matching how-it-works bottom edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#2B4BF2]/10 rounded-full blur-[100px] pointer-events-none" />
      {/* Bottom-left glow to blend with CTA section */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2B4BF2]/15 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Negócios que já cresceram com a Visualink
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="relative flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollPrev}
            className="absolute left-0 z-10 h-10 w-10 rounded-full bg-[#2B4BF2]/10 hover:bg-[#2B4BF2]/25 border border-[#2B4BF2]/30 text-white shrink-0 -translate-x-2 sm:translate-x-0 transition-all hover:scale-105 shadow-md shadow-[#2B4BF2]/10"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Carousel Content */}
          <div className="overflow-hidden mx-12 sm:mx-16 w-full" ref={emblaRef}>
            <div className="flex items-center">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-3 sm:px-4 flex flex-col items-center group"
                >
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block"
                  >
                    <div className="flex items-center justify-center h-24 sm:h-28 lg:h-32 w-full glass-card rounded-2xl border border-[#2B4BF2]/15 hover:border-[#00C2FF]/30 hover:shadow-lg hover:shadow-[#2B4BF2]/5 transition-all duration-300">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={280}
                        height={140}
                        className="object-contain max-h-12 sm:max-h-16 lg:max-h-20 w-auto opacity-70 group-hover:opacity-100 transition-opacity brightness-0 invert mx-auto duration-300"
                      />
                    </div>
                  </a>
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-xs sm:text-sm font-semibold text-[#6B7FA3] hover:text-[#00C2FF] transition-all hover:scale-105 duration-300 truncate max-w-full block"
                  >
                    {client.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollNext}
            className="absolute right-0 z-10 h-10 w-10 rounded-full bg-[#2B4BF2]/10 hover:bg-[#2B4BF2]/25 border border-[#2B4BF2]/30 text-white shrink-0 translate-x-2 sm:translate-x-0 transition-all hover:scale-105 shadow-md shadow-[#2B4BF2]/10"
            aria-label="Proximo"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
