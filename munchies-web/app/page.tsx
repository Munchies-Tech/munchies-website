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
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10c0 4.3-2.714 7.966-6.522 9.378a1 1 0 0 1-.203.084l-.095.022A10 10 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2m2.91 2.546l-.176.881a3 3 0 0 1-2.273 2.336l-.401.092a1 1 0 0 0-.764 1.14l.175 1.048a2 2 0 0 1-2.558 2.24l-1.29-.394A3 3 0 0 1 5.5 9.02V7.335a8 8 0 0 0 8.262 12.47l-.581-2.032a1 1 0 0 0-.255-.432l-1.238-1.239a1.5 1.5 0 0 1 .123-2.232l1.565-1.251a2 2 0 0 1 2.144-.227l1.47.735a3 3 0 0 1 1.635 2.311l.11.881A8.003 8.003 0 0 0 14.91 4.546m-.285 9.635l-1.128.902l.844.843a3 3 0 0 1 .695 1.09l.068.208l.543 1.898q.526-.27 1.004-.612l.313-.236l-.323-2.588a1 1 0 0 0-.438-.708l-.108-.062zM12 4a7.96 7.96 0 0 0-4.506 1.389q.006.054.006.111v3.52a1 1 0 0 0 .707.957l1.291.394l-.175-1.048a3 3 0 0 1 2.291-3.418l.401-.091a1 1 0 0 0 .758-.78l.196-.976A8 8 0 0 0 12 4"/></g></svg>`,
  },
  {
    value: "82%",
    description: "Of our electricity comes from renewable sources.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12m10-6h1M12 2V1m0 22v-1m8-2l-1-1m1-15l-1 1M4 20l1-1M4 4l1 1m-4 7h1"/></svg>',
  },
  {
    value: "24%",
    description:
      "Of company revenue comes from low-carbon or climate-solution products.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M4.712 18.141c-1.537-1.69-1.957-3.828-1.77-5.738c.206-2.107 1.167-4.128 2.418-5.171c1.672-1.393 3.428-1.965 4.952-2.245a26 26 0 0 1 2.24-.283c.404-.038.813-.076 1.206-.174c.828-.207 1.645-.543 2.318-1.077c.308-.245.62-.493 1.035-.447a1 1 0 0 1 .735.46c3.2 5.067 2.717 10.446.044 13.834c-1.335 1.691-3.21 2.871-5.397 3.22c-1.908.303-3.993-.036-6.094-1.136a11 11 0 0 0-.41 1.758a1 1 0 1 1-1.98-.283c.124-.865.36-1.786.703-2.718m5.96-11.187c.704-.129 1.365-.191 2.007-.254c.524-.05 1.052-.102 1.564-.23a8.9 8.9 0 0 0 2.45-1.006c2.178 4.117 1.57 8.134-.373 10.598c-1.048 1.328-2.489 2.22-4.14 2.482c-1.483.236-3.2-.024-5.03-1.026c1.112-2.267 2.93-4.44 5.297-5.623a1 1 0 1 0-.894-1.79c-2.608 1.304-4.606 3.559-5.905 5.964c-.641-1.05-.833-2.271-.715-3.472c.169-1.728.96-3.205 1.707-3.829c1.328-1.107 2.728-1.574 4.033-1.814Z"/></g></svg>`,
  },
];

const menuItems = [
  { label: "Snacks", tag: "", image: "/images/snacks.jpg" },
  { label: "Local Foods", tag: "", image: "/images/local-foods.jpg" },
  { label: "Fried Foods", tag: "", image: "/images/fried-foods.jpg" },
  { label: "Snacks", tag: "", image: "/images/snacks-1.jpg" },
  { label: "Local Foods", tag: "", image: "/images/local-foods-1.png" },
  { label: "Fried Foods", tag: "", image: "/images/local-foods-2.jpg" },
];

const testimonials = [
  {
    name: "Akua Serwaa",
    rating: "5/5",
    text: "Whenever I'm hungry between classes, Munchies is the first place I think of. The meals are filling, tasty, and perfect for a busy student schedule.",
  },
  {
    name: "Yaw Prempeh",
    rating: "5/5",
    text: "Munchies is my go-to spot on campus. The food is always fresh and the service is super fast!",
  },
  {
    name: "Jane Owusu",
    rating: "5/5",
    text: "Munchies has really become part of my daily routine at Ashesi. The meals are affordable and filling, which is perfect for students. I also love the friendly atmosphere—it always feels like a comfortable place to sit, eat, and take a break from the day.",
  },
  {
    name: "Michael Essumang",
    rating: "5/5",
    text: "Affordable meals, great taste, and a really nice atmosphere. I always recommend Munchies to my friends.",
  },
  {
    name: "Kumaru Usman",
    rating: "5/5",
    text: "Munchies has really become part of my daily routine at Ashesi. The meals are affordable and filling, which is perfect for students. I also love the friendly atmosphere—it always feels like a comfortable place to sit, eat, and take a break from the day.",
  },
  {
    name: "Mark Tettevi",
    rating: "5/5",
    text: "Whenever I'm hungry between classes, Munchies is the first place I think of. The meals are filling, tasty, and perfect for a busy student schedule.",
  },
  {
    name: "Adam Carrigan",
    rating: "5/5",
    text: "The food at Munchies never disappoints. I love how quickly the meals are prepared.",
  },
  {
    name: "Joshua Ayitey",
    rating: "5/5",
    text: "Munchies has really become part of my daily routine at Ashesi. The meals are affordable and filling, which is perfect for students. I also love the friendly atmosphere—it always feels like a comfortable place to sit, eat, and take a break from the day.",
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
          fill="#E8B84B"
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
      <section className="bg-cream-light py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-foreground mb-4">
            Key Metrics
          </p>
          <h2 className="font-serif text-3xl font-bold text-accent text-center max-w-2xl mx-auto mb-12 leading-snug">
            Munchies began with a simple craving: food that makes you smile and
            a planet that thanks you for it.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {metrics.map((metric, i) => (
              <div key={i} className="text-center">
                {/* Icon placeholder */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <div
                    className="w-6 h-6 text-primary"
                    dangerouslySetInnerHTML={{ __html: metric.icon }}
                  />
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
      <section className="bg-cream py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, i) => (
              <div key={i} className="group">
                <div className="aspect-[4/3] rounded-lg bg-[#8B7355] relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
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
            {/* <button className="border-2 border-primary text-primary px-8 py-2.5 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors">
              View Full Menu
            </button> */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-cream-light py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-2 text-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M11.29 20.69c.2.2.45.29.71.29s.51-.1.71-.29l7.5-7.5c2.35-2.35 2.35-6.05 0-8.41c-2.29-2.29-5.84-2.35-8.21-.2c-2.36-2.15-5.91-2.09-8.21.2c-2.35 2.36-2.35 6.06 0 8.41z"
              />
            </svg>
          </div>
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-12">
            Testimonials
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-cream-light border border-foreground/10 rounded-xl p-5"
              >
                {/* Quote icon */}
                <div className="mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="black"
                      d="M21.01 10h-2.85c.27-1.02 1.01-2.51 3.09-3.03l.76-.19V4h-1c-2.78 0-4.91.77-6.31 2.29c-1.89 2.05-1.7 4.68-1.69 4.71v7c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2m-12 0H6.16c.27-1.02 1.01-2.51 3.09-3.03l.76-.19V4h-1C6.23 4 4.1 4.77 2.7 6.29C.81 8.34 1 10.97 1.01 11v7c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2"
                    />
                  </svg>
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
