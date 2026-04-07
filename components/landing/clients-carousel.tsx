"use client"

import { useCallback, useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import useEmblaCarousel from "embla-carousel-react"

// Adicione os logos dos seus clientes aqui
// Substitua as URLs pelos caminhos dos logos PNG das empresas
const clients = [
  { name: "Cliente 1", logo: "/photos/visualink_logo_sfundo.PNG" },
  { name: "Cliente 2", logo: "/photos/image-removebg-preview.png" },
  { name: "Cliente 3", logo: "/photos/bem-bella.png" },
  { name: "Cliente 4", logo: "/photos/oldschool.webp" },
  { name: "Cliente 5", logo: "/logos/cliente-5.png" },
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
    <section className="py-16 bg-[#0A2540]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
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
            className="absolute left-0 z-10 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white shrink-0 -translate-x-2 sm:translate-x-0"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Carousel Content */}
          <div className="overflow-hidden mx-12 sm:mx-16" ref={emblaRef}>
            <div className="flex items-center">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-4 sm:px-6"
                >
                  <div className="flex items-center justify-center h-28 sm:h-32 lg:h-40 w-full">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={320}
                      height={160}
                      className="object-contain max-h-20 sm:max-h-24 lg:max-h-36 w-auto opacity-80 hover:opacity-100 transition-opacity brightness-0 invert mx-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollNext}
            className="absolute right-0 z-10 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white shrink-0 translate-x-2 sm:translate-x-0"
            aria-label="Proximo"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
