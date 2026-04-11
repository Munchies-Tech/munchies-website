import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";

const timelineEntries = [
  {
    year: "2018",
    title: "The Beginning",
    text: "What started as a small local eatery with a big dream has grown into a beloved part of the community, known not just for delicious meals, but for a warm, welcoming spirit that feels like home. Our journey has been driven by passion—passion for food, for hospitality, and for creating meaningful experiences around the table. We're a team of chefs, food lovers, and service professionals who believe in doing things the right way, with honesty, creativity, and care. Every member of our team plays a part in shaping the Munchies experience, and we take pride in the culture we've built together.",
  },
  {
    year: "2019",
    title: "The Journey",
    text: "What started as a small local eatery with a big dream has grown into a beloved part of the community, known not just for delicious meals, but for a warm, welcoming spirit that feels like home. Our journey has been driven by passion—passion for food, for hospitality, and for creating meaningful experiences around the table. We're a team of chefs, food lovers, and service professionals who believe in doing things the right way, with honesty, creativity, and care. Every member of our team plays a part in shaping the Munchies experience, and we take pride in the culture we've built together.",
  },
  {
    year: "2020",
    title: "The Journey",
    text: "What started as a small local eatery with a big dream has grown into a beloved part of the community, known not just for delicious meals, but for a warm, welcoming spirit that feels like home. Our journey has been driven by passion—passion for food, for hospitality, and for creating meaningful experiences around the table. We're a team of chefs, food lovers, and service professionals who believe in doing things the right way, with honesty, creativity, and care. Every member of our team plays a part in shaping the Munchies experience, and we take pride in the culture we've built together.",
  },
  {
    year: "2021",
    title: "The Journey",
    text: "What started as a small local eatery with a big dream has grown into a beloved part of the community, known not just for delicious meals, but for a warm, welcoming spirit that feels like home. Our journey has been driven by passion—passion for food, for hospitality, and for creating meaningful experiences around the table. We're a team of chefs, food lovers, and service professionals who believe in doing things the right way, with honesty, creativity, and care. Every member of our team plays a part in shaping the Munchies experience, and we take pride in the culture we've built together.",
  },
  {
    year: "2023",
    title: "The Journey",
    text: "What started as a small local eatery with a big dream has grown into a beloved part of the community, known not just for delicious meals, but for a warm, welcoming spirit that feels like home. Our journey has been driven by passion—passion for food, for hospitality, and for creating meaningful experiences around the table. We're a team of chefs, food lovers, and service professionals who believe in doing things the right way, with honesty, creativity, and care. Every member of our team plays a part in shaping the Munchies experience, and we take pride in the culture we've built together.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PromoBanner />

      {/* Hero Section */}
      <section className="bg-primary relative">
        <Navbar />
        <div className="text-center py-16 px-8">
          <h1 className="font-serif text-5xl font-bold text-white mb-4">
            About
          </h1>
          <p className="text-white/80 text-sm max-w-lg mx-auto mb-8">
            Delicious meals made to thrill your taste buds and honor the world we
            share
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-primary px-6 py-2.5 rounded-md text-sm font-medium hover:bg-cream transition-colors">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-white hover:text-primary transition-colors">
              Try Our Mobile App
            </button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-cream py-0">
        <div className="max-w-7xl mx-auto grid grid-cols-2">
          {/* Image placeholder */}
          <div className="bg-[#8B7355] min-h-[400px] flex items-center justify-center text-white/30">
            Mission Image
          </div>
          <div className="flex flex-col justify-center px-16 py-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6 leading-tight">
              Our Mission &amp; Vision
            </h2>
            <p className="text-sm leading-relaxed text-foreground/70">
              At Munchies, our core values are rooted in quality, affordability,
              and community. Based at Ashesi University, we serve meals that are
              freshly prepared, thoughtfully made, and designed to meet the needs
              of busy students and staff. We aim to create more than just a place
              to eat — Munchies is a comfortable, inclusive space where people
              come together over good food and shared moments.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-cream py-16 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-8 underline decoration-2 underline-offset-8">
            Our Core Values
          </h2>
          <p className="text-sm leading-relaxed text-foreground/70 mb-6 max-w-3xl mx-auto">
            At Munchies, our core values are rooted in quality, affordability,
            and community. Based at Ashesi University, we serve meals that are
            freshly prepared, thoughtfully made, and designed to meet the needs
            of busy students and staff. We aim to create more than just a place
            to eat — Munchies is a comfortable, inclusive space where people come
            together over good food and shared moments.
          </p>
          <p className="text-sm leading-relaxed text-foreground/70 max-w-3xl mx-auto">
            At Munchies, our core values are rooted in quality, affordability,
            and community. Based at Ashesi University, we serve meals that are
            freshly prepared, thoughtfully made, and designed to meet the needs
            of busy students and staff. We aim to create more than just a place
            to eat — Munchies is a comfortable, inclusive space where people come
            together over good food and shared moments.
          </p>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="bg-cream py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-16 underline decoration-2 underline-offset-8">
            Our Story
          </h2>

          <div className="space-y-16">
            {timelineEntries.map((entry, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className="grid grid-cols-2 gap-12 items-start">
                  {isLeft ? (
                    <>
                      {/* Text on left */}
                      <div>
                        <p className="text-sm text-primary font-semibold mb-1">
                          {entry.year}
                        </p>
                        <h3 className="font-serif text-2xl font-bold text-foreground italic mb-4">
                          {entry.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-foreground/70">
                          {entry.text}
                        </p>
                      </div>
                      {/* Image on right */}
                      <div className="bg-[#8B7355] rounded-lg aspect-[4/3] flex items-center justify-center text-white/30 text-sm">
                        {entry.year} Image
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Image on left */}
                      <div className="bg-[#8B7355] rounded-lg aspect-[4/3] flex items-center justify-center text-white/30 text-sm">
                        {entry.year} Image
                      </div>
                      {/* Text on right */}
                      <div>
                        <p className="text-sm text-primary font-semibold mb-1 text-right">
                          {entry.year}
                        </p>
                        <h3 className="font-serif text-2xl font-bold text-foreground italic mb-4">
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
      <section className="grid grid-cols-4 h-48">
        <div className="bg-[#6B5B3D] flex items-center justify-center text-white/30 text-sm">
          Food Image 1
        </div>
        <div className="bg-[#8B7355] flex items-center justify-center text-white/30 text-sm">
          Food Image 2
        </div>
        <div className="bg-[#7B6B4D] flex items-center justify-center text-white/30 text-sm">
          Food Image 3
        </div>
        <div className="bg-[#9B8365] flex items-center justify-center text-white/30 text-sm">
          Food Image 4
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cream py-16 px-8 text-center">
        <h2 className="font-serif text-2xl font-bold text-foreground mb-6 max-w-lg mx-auto">
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
