import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const timelineEntries = [
  {
    year: "2018",
    title: "The Beginning",
    text: "What started as a small local eatery with a big dream has grown into a beloved part of the community, known not just for delicious meals, but for a warm, welcoming spirit that feels like home. Our journey has been driven by passion—passion for food, for hospitality, and for creating meaningful experiences around the table. We're a team of chefs, food lovers, and service professionals who believe in doing things the right way, with honesty, creativity, and care. Every member of our team plays a part in shaping the Munchies experience, and we take pride in the culture we've built together.",
    image: "/images/timeline-2018.jpg",
  },
  {
    year: "2020",
    title: "The Journey",
    text: "What started as a small local eatery with a big dream has grown into a beloved part of the community, known not just for delicious meals, but for a warm, welcoming spirit that feels like home. Our journey has been driven by passion—passion for food, for hospitality, and for creating meaningful experiences around the table. We're a team of chefs, food lovers, and service professionals who believe in doing things the right way, with honesty, creativity, and care. Every member of our team plays a part in shaping the Munchies experience, and we take pride in the culture we've built together.",
    image: "/images/timeline-2020.jpg",
  },
  {
    year: "2022",
    title: "The Journey",
    text: "What started as a small local eatery with a big dream has grown into a beloved part of the community, known not just for delicious meals, but for a warm, welcoming spirit that feels like home. Our journey has been driven by passion—passion for food, for hospitality, and for creating meaningful experiences around the table. We're a team of chefs, food lovers, and service professionals who believe in doing things the right way, with honesty, creativity, and care. Every member of our team plays a part in shaping the Munchies experience, and we take pride in the culture we've built together.",
    image: "/images/timeline-2022.jpg",
  },
  {
    year: "2024",
    title: "The Journey",
    text: "What started as a small local eatery with a big dream has grown into a beloved part of the community, known not just for delicious meals, but for a warm, welcoming spirit that feels like home. Our journey has been driven by passion—passion for food, for hospitality, and for creating meaningful experiences around the table. We're a team of chefs, food lovers, and service professionals who believe in doing things the right way, with honesty, creativity, and care. Every member of our team plays a part in shaping the Munchies experience, and we take pride in the culture we've built together.",
    image: "/images/hero-banner-place.png",
  },
  {
    year: "2026",
    title: "The Journey",
    text: "What started as a small local eatery with a big dream has grown into a beloved part of the community, known not just for delicious meals, but for a warm, welcoming spirit that feels like home. Our journey has been driven by passion—passion for food, for hospitality, and for creating meaningful experiences around the table. We're a team of chefs, food lovers, and service professionals who believe in doing things the right way, with honesty, creativity, and care. Every member of our team plays a part in shaping the Munchies experience, and we take pride in the culture we've built together.",
    image: "/images/timeline-2026.jpeg",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <PromoBanner /> */}
      {/* Hero Section */}
      <section className="bg-primary relative">
        <Navbar />
        <div className="text-center py-10 px-4 md:py-16 md:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            About
          </h1>
          <p className="text-white/80 text-sm max-w-lg mx-auto mb-8">
            Delicious meals made to thrill your taste buds and honor the world
            we share
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button className="border-2 border-transparent bg-cream text-primary px-6 py-2.5 rounded-md text-sm font-medium hover:bg-primary hover:text-cream hover:border-cream transition-colors">
              Contact Us
            </button>
            <button className="border-2 border-cream text-cream px-6 py-2.5 rounded-md text-sm font-medium hover:bg-cream hover:text-primary transition-colors">
              Try Our Mobile App
            </button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-cream pt-10 md:pt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="hidden md:block relative md:min-h-100 rounded-lg overflow-hidden">
            <Image
              src="/images/hero-banner-impact.png"
              alt="Our Mission & Vision"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-8 md:px-16 md:py-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              Our Mission &amp; Vision
            </h2>
            <p className="text-sm leading-relaxed text-foreground/70">
              At Munchies, our core values are rooted in quality, affordability,
              and community. Based at Ashesi University, we serve meals that are
              freshly prepared, thoughtfully made, and designed to meet the
              needs of busy students and staff. We aim to create more than just
              a place to eat — Munchies is a comfortable, inclusive space where
              people come together over good food and shared moments.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-cream py-12 px-4 md:py-16 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8 underline decoration-2 underline-offset-8">
            Our Core Values
          </h2>
          <p className="text-sm leading-relaxed text-foreground/70 mb-6 max-w-3xl mx-auto">
            At Munchies, our core values are rooted in quality, affordability,
            and community. Based at Ashesi University, we serve meals that are
            freshly prepared, thoughtfully made, and designed to meet the needs
            of busy students and staff. We aim to create more than just a place
            to eat — Munchies is a comfortable, inclusive space where people
            come together over good food and shared moments.
          </p>
          <p className="text-sm leading-relaxed text-foreground/70 max-w-3xl mx-auto">
            At Munchies, our core values are rooted in quality, affordability,
            and community. Based at Ashesi University, we serve meals that are
            freshly prepared, thoughtfully made, and designed to meet the needs
            of busy students and staff. We aim to create more than just a place
            to eat — Munchies is a comfortable, inclusive space where people
            come together over good food and shared moments.
          </p>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="bg-cream py-12 px-4 md:py-16 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-10 md:mb-16 underline decoration-2 underline-offset-8">
            Our Story
          </h2>

          <div className="relative space-y-10 md:space-y-16">
            <div
              aria-hidden
              className="hidden md:block pointer-events-none absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-primary"
            />
            {timelineEntries.map((entry, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start"
                >
                  <div
                    aria-hidden
                    className="hidden md:block absolute left-1/2 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_18px_4px_var(--color-primary)]"
                  />
                  {isLeft ? (
                    <>
                      {/* Text on left */}
                      <div>
                        <p className="text-sm text-primary font-semibold mb-1">
                          {entry.year}
                        </p>
                        <h3 className="font-serif text-2xl font-bold text-primary italic mb-4">
                          {entry.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-foreground/70">
                          {entry.text}
                        </p>
                      </div>
                      {/* Image on right — hidden on phone */}
                      <div className="hidden md:block relative rounded-lg aspect-4/3 overflow-hidden">
                        <Image
                          src={entry.image}
                          alt={`${entry.year} - ${entry.title}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Image on left — hidden on phone */}
                      <div className="hidden md:block relative rounded-lg aspect-4/3 overflow-hidden">
                        <Image
                          src={entry.image}
                          alt={`${entry.year} - ${entry.title}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      {/* Text on right */}
                      <div className="md:text-right">
                        <p className="text-sm text-primary font-semibold mb-1">
                          {entry.year}
                        </p>
                        <h3 className="font-serif text-2xl font-bold text-primary italic mb-4">
                          {entry.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-foreground/70">
                          {entry.text}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full Width Images */}
      <section className="grid grid-cols-4 h-24 sm:h-32 md:h-48">
        {[
          { src: "/images/local-foods.jpg", alt: "Local foods" },
          { src: "/images/local-foods-1.png", alt: "Local foods" },
          { src: "/images/local-foods-2.jpg", alt: "Local foods" },
          { src: "/images/fried-foods.jpg", alt: "Fried foods" },
        ].map(({ src, alt }) => (
          <div key={src} className="relative overflow-hidden">
            <Image src={src} alt={alt} fill className="object-cover" sizes="25vw" />
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-cream py-12 px-4 md:py-16 md:px-8 text-center">
        <h2 className="font-serif text-2xl font-bold text-primary mb-6 max-w-lg mx-auto">
          Reach out to Munchies today and order your favorite meals.
        </h2>
        <button className="border-2 border-primary text-primary px-8 py-2.5 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors">
          Contact Us to Order
        </button>
      </section>

      <Footer />
    </div>
  );
}
