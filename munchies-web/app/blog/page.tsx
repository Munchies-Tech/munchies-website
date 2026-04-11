import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";

const categories = [
  { name: "Munchies Blog", count: "10" },
  { name: "Culture", count: "08" },
  { name: "Food", count: "13" },
  { name: "Culture", count: "17" },
  { name: "Beauty", count: "06" },
  { name: "Cooking", count: "02" },
  { name: "Wellness", count: "14" },
  { name: "Nature", count: "09" },
];

const blogPosts = [
  {
    date: "19th August,2025",
    title: "Why Food Should Be an Experience, Not Just a Meal",
  },
  {
    date: "19th August,2025",
    title: "Why Food Should Be an Experience, Not Just a Meal",
  },
  {
    date: "19th August,2025",
    title: "Why Food Should Be an Experience, Not Just a Meal",
  },
  {
    date: "19th August,2025",
    title: "Why Food Should Be an Experience, Not Just a Meal",
  },
  {
    date: "19th August,2025",
    title: "Why Food Should Be an Experience, Not Just a Meal",
  },
  {
    date: "19th August,2025",
    title: "Why Food Should Be an Experience, Not Just a Meal",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PromoBanner />

      {/* Header */}
      <div className="bg-cream">
        <Navbar />
      </div>

      {/* Blog Hero */}
      <section className="bg-cream pt-8 pb-12 px-8 text-center">
        <h1 className="font-serif text-5xl font-bold text-primary mb-3">
          Blog
        </h1>
        <p className="text-accent text-sm">
          For all updates and announcements about Munchies
        </p>
      </section>

      {/* Categories + Featured */}
      <section className="bg-cream px-8 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-12">
          {/* Categories sidebar */}
          <div className="col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-lg font-semibold text-foreground">
                Categories
              </h3>
              <div className="flex-1 h-px bg-foreground/30" />
            </div>
            <ul className="space-y-4">
              {categories.map((cat, i) => (
                <li key={i}>
                  <button className="flex items-center justify-between w-full text-left hover:text-primary transition-colors group cursor-pointer">
                    <span className="flex items-center gap-2 text-sm">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-foreground/50 group-hover:text-primary"
                      >
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                      </svg>
                      {cat.name}
                    </span>
                    <span className="text-sm text-foreground/50">
                      ({cat.count})
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured posts */}
          <div className="col-span-2 grid grid-cols-2 gap-6">
            {[0, 1].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-lg bg-[#8B7355] flex items-center justify-center text-white/30 text-sm overflow-hidden mb-3">
                  Featured Image {i + 1}
                </div>
                <p className="text-accent text-xs font-medium mb-1">
                  19th August,2025
                </p>
                <h4 className="text-sm font-bold text-foreground leading-snug">
                  Why Food Should Be an Experience, Not Just a Meal
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Munchies Blog Grid */}
      <section className="bg-cream px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-2xl font-bold text-accent">
              Munchies Blog
            </h2>
            <button className="text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
              View All
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-lg bg-[#8B7355] flex items-center justify-center text-white/30 text-sm overflow-hidden mb-3">
                  Blog Image {i + 1}
                </div>
                <p className="text-accent text-xs font-medium mb-1">
                  {post.date}
                </p>
                <h4 className="text-sm font-bold text-foreground leading-snug">
                  {post.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
