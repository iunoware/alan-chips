/* eslint-disable @next/next/no-img-element */
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Residential Construction Process in India? ",
    alt: "Top-construction-companies-in-Madurai",
    date: "December 19, 2025",
    category: "Knowledge",
    image: "/images/p-1.webp",
  },
  {
    id: 2,
    title: "Sai Construction – Leading Construction Company in Madurai",
    alt: "Reliable builders in Madurai",
    date: "Dec 26, 2025",
    category: "Construction",
    image: "/images/Residential-construction-in-Madurai.webp",
  },
  {
    id: 3,
    title: "The Ultimate Guide to Home Renovation",
    alt: "House construction contractors in Madurai",
    date: "Nov 15, 2025",
    category: "Guides",
    image: "/images/House-construction-contractors-in-Madurai.webp",
  },
];

export default function Products() {
  return (
    <section className="py-24 overflow-x-clip bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="heading text-3xl md:text-4xl font-bold text-blue mb-4 tracking-tight">
              Insights & Articles
            </h2>
            <div className="w-16 h-1 bg-orange mb-6 rounded-full opacity-80"></div>
            <p className="content text-md md:text-lg text-gray-500">
              Thoughts, tips, and updates from our construction journey.
            </p>
          </div>

          <Link
            href="/chips"
            className="hidden md:flex items-center gap-2 text-blue font-semibold hover:text-orange transition-colors duration-300 group"
          >
            <span className="heading">View All Blogs</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Blog Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-112.5">
          {products.map((blog) => (
            <Link
              href={`/chips`}
              key={blog.id}
              className="group relative w-full h-100 md:h-full overflow-hidden  bg-gray-100 block"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-3 text-white/80 text-sm mb-3 content font-medium">
                    <span className="bg-orange/90 px-2 py-0.5 rounded text-white text-xs uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="text-xs md:text-md">{blog.date}</span>
                    </div>
                  </div>

                  <h3 className="heading text-lg md:text-2xl font-bold text-white leading-tight group-hover:underline decoration-orange decoration-2 underline-offset-4 transition-all duration-300">
                    {blog.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 flex md:hidden justify-center">
          <Link
            href="/chips"
            className="flex items-center gap-2 text-blue font-semibold hover:text-orange transition-colors duration-300 group"
          >
            <span className="heading">View All Blogs</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
