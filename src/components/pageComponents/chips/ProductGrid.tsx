"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  weight: string;
  tag: string;
  tagType: "spicy" | "bestseller" | "classic" | "new";
}

const products: Product[] = [
  {
    id: 1,
    name: "Alan Chips Classic",
    image: "/images/products/alan-chips.webp",
    price: 40,
    weight: "100g",
    tag: "Bestseller",
    tagType: "bestseller",
  },
  {
    id: 2,
    name: "Plantain Chips",
    image: "/images/products/plantain-chips.webp",
    price: 35,
    weight: "100g",
    tag: "Classic",
    tagType: "classic",
  },
  {
    id: 3,
    name: "Plantain Masala Chips",
    image: "/images/products/plantain-masala-chips.webp",
    price: 45,
    weight: "100g",
    tag: "Spicy",
    tagType: "spicy",
  },
  {
    id: 4,
    name: "Potato Puthina Masala",
    image: "/images/products/potato-puthina-masala-chips.webp",
    price: 50,
    weight: "100g",
    tag: "New",
    tagType: "new",
  },
  {
    id: 5,
    name: "Potato Salted Chips",
    image: "/images/products/potato-salted-chips.webp",
    price: 40,
    weight: "100g",
    tag: "Classic",
    tagType: "classic",
  },
  {
    id: 6,
    name: "Stripe Sweet Plantain",
    image: "/images/products/stripe-sweet-plantain-chips.webp",
    price: 55,
    weight: "100g",
    tag: "Bestseller",
    tagType: "bestseller",
  },
  {
    id: 7,
    name: "Sweet Plantain Chips",
    image: "/images/products/sweet-plantain-chips.webp",
    price: 50,
    weight: "100g",
    tag: "Classic",
    tagType: "classic",
  },
  {
    id: 8,
    name: "Tapioca Finger Chips",
    image: "/images/products/tapioca-finger-chips.webp",
    price: 45,
    weight: "150g",
    tag: "Crunchy",
    tagType: "new",
  },
  {
    id: 9,
    name: "Tapioca Round Chips",
    image: "/images/products/tapioca-round-chips.webp",
    price: 40,
    weight: "150g",
    tag: "Classic",
    tagType: "classic",
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const getTagStyles = (type: string) => {
    switch (type) {
      case "spicy":
        return "bg-red-50 text-red-600 border-red-100";
      case "bestseller":
        return "bg-orange-50 text-orange-600 border-orange-100";
      case "new":
        return "bg-blue-50 text-blue-600 border-blue-100";
      default:
        return "bg-green-50 text-green-700 border-green-100";
    }
  };

  const handleAddToCart = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
      });
    }
    // Logic for cart would go here
  };

  return (
    <div
      ref={cardRef}
      className="product-card shadow-xl group relative bg-white rounded-2xl border border-neutral-100 p-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full"
    >
      {/* Tag */}
      <div
        className={`absolute top-6 left-6 z-10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getTagStyles(product.tagType)}`}
      >
        {product.tag}
      </div>

      {/* Image Container */}
      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-neutral-50/50 flex items-center justify-center ">
        <div className="relative w-full h-full rounded-xl transition-transform duration-700 ease-out group-hover:scale-110">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className=" object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1 p-3">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-neutral-900 group-hover:text-green-700 transition-colors duration-300">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-medium text-neutral-400">
            {product.weight}
          </span>
          <span className="w-1 h-1 rounded-full bg-neutral-300" />
          <span className="text-xl font-bold text-neutral-900">
            ₹{product.price}
          </span>
        </div>

        {/* Action Button */}
        <button
          ref={buttonRef}
          onClick={handleAddToCart}
          className="mt-auto w-full bg-neutral-900 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-green-700 transition-all duration-300 active:scale-95 shadow-sm"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".product-card");

      // Set initial state to ensure they aren't hidden before GSAP kicks in
      gsap.set(cards, { opacity: 0, y: 30 });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true, // Only animate once
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="product"
      ref={sectionRef}
      className="py-24 bg-[#FAFAFA] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-tight">
            Our Crispy <span className="text-green-700">Collection</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-lg mx-auto font-medium">
            Freshly packed. Delivered across Tamil Nadu. Experience the
            authentic taste of tradition.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
