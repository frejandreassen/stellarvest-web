'use client'
import { useRef, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Header from './Header'

export default function Hero() {
  const t = useTranslations('hero')
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      const playPromise = videoElement.play()
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Autoplay prevented:', error)
        })
      }
    }
  }, [])

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="auto"
          poster="/lisbon_areal_image.jpg"
          className="w-full h-full object-cover brightness-110 contrast-105"
        >
          <source src="/lisbon_areal_drone.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Updated gradient overlay: white to black */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-black/40 to-black/50"></div>
      </div>
      <div className="relative z-30 h-full">
        <Header />
        <div className="relative px-6 lg:px-8 flex items-center justify-center h-full">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-white/10 hover:ring-white/20">
                {t('specialist')}
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {t('welcome')}
              </h1>
              <p className="mt-6 text-2xl leading-8 text-gray-200">
                {t('tagline')}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/about"
                  className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {t('learnMore')}
                </a>
                <a href="/contact" className="text-sm font-semibold leading-6 text-white">
                  {t('contactUs')} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}