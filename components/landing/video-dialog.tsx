"use client"

import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface VideoDialogProps {
  children: React.ReactNode
}

export function VideoDialog({ children }: VideoDialogProps) {
  const [open, setOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (open && videoRef.current) {
      videoRef.current.play()
    }
    if (!open && videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [open])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        {children}
      </div>
      <DialogContent
        className="max-w-4xl w-full p-0 bg-black border-none overflow-hidden rounded-2xl"
        aria-describedby={undefined}
      >
        <DialogTitle className="sr-only">Como funciona a Visualink</DialogTitle>
        <div className="relative aspect-video">
          <video
            ref={videoRef}
            //src="/videos/como-funciona.mp4"
            controls
            autoPlay
            controlsList="nodownload"
            disablePictureInPicture
            className="w-full h-full object-cover"
            playsInline
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 text-white hover:bg-white/20 rounded-full z-10"
            onClick={() => setOpen(false)}
          >
            <X className="w-5 h-5" />
            <span className="sr-only">Fechar video</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
