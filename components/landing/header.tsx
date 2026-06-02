"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Planos", href: "#planos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Perguntas frequentes", href: "#faq" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[#0A0F1E]/85 backdrop-blur-xl border-b border-[#2B4BF2]/20 shadow-lg shadow-[#2B4BF2]/5 py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 transition-transform hover:scale-105 duration-300">
            <img
              src="/photos/visualink_logo_sfundo.PNG"
              alt="Visualink"
              width={70}
              height={70}
              className="object-contain filter drop-shadow-[0_0_8px_rgba(43,75,242,0.3)]"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-all hover:scale-105 duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00C2FF] transition-all group-hover:w-full duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              size="sm"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-xl px-5 py-4 transition-all hover:scale-105 shadow-md hover:shadow-[#25D366]/20"
              asChild
            >
              <a href="https://wa.me/5553981364363" target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white hover:text-[#00C2FF] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#2B4BF2]/20 mt-2 bg-[#0A0F1E]/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/5 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-all py-2 hover:translate-x-2 duration-200 border-b border-white/5 last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium rounded-xl mt-2 w-full py-5" asChild>
                <a href="https://wa.me/5553981364363" target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
