"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

interface HeroSlide {
  background: string;
  heading: string;
  body: string;
  buttonText: string;
}

interface HeroSlideshowProps {
  slides: HeroSlide[];
}

export default function HeroSlideshow({ slides }: HeroSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-advance every 5 seconds, reset on manual navigation
  useEffect(() => {
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, [goNext, currentSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="relative h-screen flex flex-col">
      <div className="absolute top-0 left-0 right-0 z-20">
        <Navbar />
      </div>
      {/* Navbar overlaid on hero */}

      {/* Slide Backgrounds — all stacked, crossfade via opacity */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.background}
            alt={s.heading}
            fill
            sizes="100vw"
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-8 md:px-16 md:pb-16">
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight max-w-xl mb-4">
          {slide.heading}
        </h1>
        <p className="text-white/80 text-base md:text-lg mb-6">{slide.body}</p>
        {/* <div>
          <button className="bg-background border-2 border-background text-primary px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary hover:text-background transition-colors">
            {slide.buttonText}
          </button>
        </div> */}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-6 right-6 md:top-20 md:right-8 md:bottom-auto flex gap-2 z-10">
        <button
          onClick={goPrev}
          className="w-10 h-10 rounded-full bg-cream/80 flex items-center justify-center text-primary-dark hover:bg-cream transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <button
          onClick={goNext}
          className="w-10 h-10 rounded-full bg-cream/80 flex items-center justify-center text-primary-dark hover:bg-cream transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
