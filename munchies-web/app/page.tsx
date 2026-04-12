import Image from "next/image";
import HeroSlideshow from "@/components/HeroSlideshow";
import Footer from "@/components/Footer";

const heroSlides = [
  {
    background: "/images/hero-banner-product.jpg",
    heading: "Tasty Goodness, Out Of This World",
    body: "Munchies delivers tasty goodness through delicious meals",
    buttonText: "View Menu",
  },
  {
    background: "/images/hero-banner-impact.png",
    heading: "Food With Purpose",
    body: "At Munchies, every meal is made with purpose, guided by thoughtful choices that care for our planet.",
    buttonText: "View Impact",
  },
  {
    background: "/images/hero-banner-people.png",
    heading: "Made for You",
    body: "At Munchies, food is more than a meal — it's a shared experience for the campus community.",
    buttonText: "View About",
  },
  {
    background: "/images/hero-banner-place.png",
    heading: "Your campus food spot",
    body: "Munchies is your go-to food spot, serving fresh and fast meals.",
    buttonText: "View Story",
  },
];

const metrics = [
  {
    value: "48%",
    description: "Progress towards our 2030 emissions reduction target.",
  },
  {
    value: "82%",
    description: "Of our electricity comes from renewable sources.",
  },
  {
    value: "24%",
    description:
      "Of company revenue comes from low-carbon or climate-solution products.",
  },
];

const menuItems = [
  { label: "Snacks", tag: "New", image: "/images/snacks.jpg" },
  { label: "Local Foods", tag: "New", image: "/images/local-foods.jpg" },
  { label: "Fried Foods", tag: "New", image: "/images/fried-foods.jpg" },
  { label: "Snacks", tag: "New", image: "/images/snacks-1.jpg" }, 
  { label: "Local Foods", tag: "New", image: "/images/local-foods-1.png" },
  { label: "Fried Foods", tag: "New", image: "/images/fried-foods.jpg" },
];

const testimonials = [
  {
    name: "Vlad Matakou",
    rating: "3.6/5",
    text: "Whenever I'm hungry between classes, Munchies is the first place I think of. The meals are filling, tasty, and perfect for a busy student schedule.",
  },
  {
    name: "Guillermo Rauch",
    rating: "3.6/5",
    text: "Munchies is my go-to spot on campus. The food is always fresh and the service is super fast!",
  },
  {
    name: "Jane Rosha",
    rating: "3.6/5",
    text: "Munchies has really become part of my daily routine at Ashesi. The meals are affordable and filling, which is perfect for students. I also love the friendly atmosphere—it always feels like a comfortable place to sit, eat, and take a break from the day.",
  },
  {
    name: "Chun Jung",
    rating: "3.6/5",
    text: "Affordable meals, great taste, and a really nice atmosphere. I always recommend Munchies to my friends.",
  },
  {
    name: "Zeno Rocha",
    rating: "3.6/5",
    text: "Munchies has really become part of my daily routine at Ashesi. The meals are affordable and filling, which is perfect for students. I also love the friendly atmosphere—it always feels like a comfortable place to sit, eat, and take a break from the day.",
  },
  {
    name: "Hnet Matakou",
    rating: "3.6/5",
    text: "Whenever I'm hungry between classes, Munchies is the first place I think of. The meals are filling, tasty, and perfect for a busy student schedule.",
  },
  {
    name: "Adam Carrigan",
    rating: "3.6/5",
    text: "The food at Munchies never disappoints. I love how quickly the meals are prepared.",
  },
  {
    name: "Charity Foly",
    rating: "3.6/5",
    text: "Munchies has really become part of my daily routine at Ashesi. The meals are affordable and filling, which is perfect for students. I also love the friendly atmosphere—it always feels like a comfortable place to sit, eat, and take a break from the day.",
  },
  {
    name: "Ashley Mulligan",
    rating: "3.6/5",
    text: "Whenever I have a busy day on campus, I know I can rely on Munchies for a good meal.",
  },
  {
    name: "Mauyan Sakem",
    rating: "3.6/5",
    text: "Whenever I'm hungry between classes, Munchies is the first place I think of. The meals are filling, tasty, and perfect for a busy student schedule.",
  },
  {
    name: "Ashley Mulligan",
    rating: "3.6/5",
    text: "The food at Munchies never disappoints. I love how quickly the meals are prepared.",
  },
  {
    name: "Mark Dao",
    rating: "3.6/5",
    text: "I appreciate how consistent the quality of the food is.",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < 3 ? "#FFD700" : i === 3 ? "#FFD700" : "#ccc"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Slideshow */}
      <HeroSlideshow slides={heroSlides} />

      {/* Key Metrics Section */}
      <section className="bg-cream py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-foreground mb-4">
            Key Metrics
          </p>
          <h2 className="font-serif text-3xl font-bold text-accent text-center max-w-2xl mx-auto mb-12 leading-snug">
            Munchies began with a simple craving: food that makes you smile and
            a planet that thanks you for it.
          </h2>

          <div className="grid grid-cols-3 gap-8">
            {metrics.map((metric, i) => (
              <div key={i} className="text-center">
                {/* Icon placeholder */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-cream-light border border-primary/20 flex items-center justify-center text-xs text-primary/40">
                    Icon
                  </div>
                </div>
                <p className="text-4xl font-bold text-foreground mb-2">
                  {metric.value}
                </p>
                <p className="text-sm text-foreground/70 max-w-xs mx-auto">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid Section */}
      <section className="bg-cream py-8 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {menuItems.map((item, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/3] rounded-lg bg-[#8B7355] relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                  <span className="text-accent text-sm font-semibold">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Menu Button */}
          <div className="text-center mt-12">
            <button className="border-2 border-primary text-primary px-8 py-2.5 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors">
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-cream py-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Red dot */}
          <div className="flex justify-center mb-2">
            <div className="w-3 h-3 rounded-full bg-accent" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-12">
            Testimonials
          </h2>

          <div className="grid grid-cols-4 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-cream-light rounded-xl p-5">
                {/* Quote icon */}
                <div className="text-primary text-3xl font-serif mb-3">
                  &ldquo;&ldquo;
                </div>

                {/* Avatar + Name */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] text-primary/60">
                    {t.name[0]}
                  </div>
                  <span className="text-sm font-medium">{t.name}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <StarRating />
                  <span className="text-sm font-semibold">{t.rating}</span>
                </div>

                {/* Text */}
                <p className="text-xs leading-relaxed text-foreground/70">
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
