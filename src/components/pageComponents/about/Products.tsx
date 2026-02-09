/* eslint-disable @next/next/no-img-element */
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Potato chips ",
    alt: "Top-construction-companies-in-Madurai",
    image: "/images/products/alan-chips.webp",
  },
  {
    id: 2,
    title: "Plantain masala chips",
    alt: "the best plantain masala chips in the market",
    image: "/images/products/plantain-masala-chips.webp",
  },
  {
    id: 3,
    title: "Stripe sweet plantain chips",
    alt: "House construction contractors in Madurai",
    image: "/images/products/stripe-sweet-plantain-chips.webp",
  },
];

export default function Products() {
  return (
    <section className="py-24 overflow-x-clip bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="heading text-3xl md:text-4xl gradient-text font-bold text-blue mb-4 tracking-tight">
              Crafted with Purpose
            </h2>
            <div className="w-16 h-1 bg-orange mb-6 rounded-full opacity-80"></div>
            <p className="content text-md md:text-lg text-gray-500">
              Insights into our heritage, ingredients, and the care behind every crunch.
            </p>
          </div>

          <Link
            href="/chips"
            className="hidden md:flex items-center gap-2 text-blue font-semibold hover:text-orange transition-colors duration-300 group"
          >
            <span className="heading">View All Products</span>
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
                  <h3 className="heading text-lg md:text-xl text-white leading-tight group-hover:underline decoration-orange decoration-2 underline-offset-4 transition-all duration-300">
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
