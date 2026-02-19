"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ShoppingCart, Minus, Plus, X, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Product {
  id: number;
  name: string;
  tamName: string;
  description: string;
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
    tamName: "ஆலன் சிப்ஸ் கிளாசிக்",
    description:
      "Our signature golden-crisp chips, made from the finest hand-picked ingredients and seasoned with our secret family blend.",
    image: "/images/products/alan-chips.webp",
    price: 40,
    weight: "100g",
    tag: "Bestseller",
    tagType: "bestseller",
  },
  {
    id: 2,
    name: "Plantain Chips",
    tamName: "நேந்திரம் பழம் சிப்ஸ்",
    description:
      "Sweet and savory sliced plantains, perfectly fried for a satisfying crunch that brings the taste of Kerala to your doorstep.",
    image: "/images/products/plantain-chips.webp",
    price: 35,
    weight: "100g",
    tag: "Classic",
    tagType: "classic",
  },
  {
    id: 3,
    name: "Plantain Masala Chips",
    tamName: "நேந்திரம் பழம் மசாலா சிப்ஸ்",
    description:
      "Classic plantain chips tossed in a bold mix of South Indian spices for those who love a little extra kick.",
    image: "/images/products/plantain-masala-chips.webp",
    price: 45,
    weight: "100g",
    tag: "Spicy",
    tagType: "spicy",
  },
  {
    id: 4,
    name: "Potato Puthina Masala Chips",
    tamName: "உருளைக்கிழங்கு புதினா மசாலா சிப்ஸ்",
    description:
      "Fresh potatoes thinly sliced and infused with the cooling zest of fresh mint and aromatic masala spices.",
    image: "/images/products/potato-puthina-masala-chips.webp",
    price: 50,
    weight: "100g",
    tag: "New",
    tagType: "new",
  },
  {
    id: 5,
    name: "Potato Salted Chips",
    tamName: "உருளைக்கிழங்கு உப்பு சிப்ஸ்",
    description:
      "The timeless classic—light, airy potato chips with just the right amount of sea salt to keep you coming back for more.",
    image: "/images/products/potato-salted-chips.webp",
    price: 40,
    weight: "100g",
    tag: "Classic",
    tagType: "classic",
  },
  {
    id: 6,
    name: "Stripe Sweet Plantain Chips",
    tamName: "பட்டை இனிப்பு நேந்திரம் பழம் சிப்ஸ்",
    description:
      "Long, elegant strips of ripe plantains caramelized to perfection, offering a naturally sweet and crunchy snack experience.",
    image: "/images/products/stripe-sweet-plantain-chips.webp",
    price: 55,
    weight: "100g",
    tag: "Bestseller",
    tagType: "bestseller",
  },
  {
    id: 7,
    name: "Sweet Plantain Chips",
    tamName: "இனிப்பு நேந்திரம் பழம் சிப்ஸ்",
    description:
      "Thick roundels of sun-ripened plantains, offering a rich sweetness balanced with a light pinch of salt.",
    image: "/images/products/sweet-plantain-chips.webp",
    price: 50,
    weight: "100g",
    tag: "Classic",
    tagType: "classic",
  },
  {
    id: 8,
    name: "Tapioca Finger Chips",
    tamName: "மரவள்ளிக்கிழங்கு குச்சி சிப்ஸ்",
    description:
      "Hand-cut tapioca sticks, incredibly crunchy and seasoned with a traditional dry-spice rub.",
    image: "/images/products/tapioca-finger-chips.webp",
    price: 45,
    weight: "150g",
    tag: "Crunchy",
    tagType: "new",
  },
  {
    id: 9,
    name: "Tapioca Round Chips",
    tamName: "மரவள்ளிக்கிழங்கு வட்ட சிப்ஸ்",
    description:
      "Classic round-cut tapioca slices, deep-fried to a brilliant white crunch and finished with rock salt.",
    image: "/images/products/tapioca-round-chips.webp",
    price: 40,
    weight: "150g",
    tag: "Classic",
    tagType: "classic",
  },
];



// ─── Portal Modal ─────────────────────────────────────────────────────────────
const ProductModal = ({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) => {
  const { addToCart } = useCart();
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedWeight, setSelectedWeight] = useState(product.weight);
  const [localQuantity, setLocalQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const [mounted, setMounted] = useState(false);
  const weights = ["100g", "250g", "500g"];

  // Step 1: confirm we're client-side so createPortal is safe
  useEffect(() => {
    setMounted(true);
  }, []);

  // Step 2: run GSAP only after portal has rendered and refs are attached
  useEffect(() => {
    if (!mounted) return;
    const backdrop = backdropRef.current;
    const modal = modalRef.current;
    if (!backdrop || !modal) return;

    gsap.set(backdrop, { opacity: 0 });
    gsap.set(modal, { opacity: 0, scale: 0.9, y: 40 });

    gsap.to(backdrop, { opacity: 1, duration: 0.35, ease: "power2.out" });
    gsap.to(modal, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
      delay: 0.05,
    });

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mounted, product.id]);

  const handleClose = () => {
    const backdrop = backdropRef.current;
    const modal = modalRef.current;
    if (!backdrop || !modal) {
      onClose();
      return;
    }

    gsap
      .timeline({ onComplete: onClose })
      .to(modal, {
        opacity: 0,
        scale: 0.9,
        y: 20,
        duration: 0.25,
        ease: "power2.in",
      })
      .to(backdrop, { opacity: 0, duration: 0.2 }, "-=0.15");
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!mounted) return null;

  // ✅ THE FIX: createPortal mounts the modal directly onto document.body.
  // This completely escapes the CSS stacking context created by the card's
  // transform (hover:-translate-y-2), which was trapping the modal behind
  // sibling cards regardless of how high z-index was set.
  return createPortal(
    <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={handleClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        style={{ opacity: 0 }}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] z-10"
        style={{ opacity: 0 }}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full text-neutral-900 border border-neutral-100 hover:bg-neutral-900 hover:text-white transition-all duration-300"
        >
          <X size={20} />
        </button>

        {/* Left: Image */}
        <div className="w-full md:w-1/2 relative bg-neutral-50 h-64 md:h-auto flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-8 md:p-12 hover:scale-105 transition-transform duration-700"
            priority
          />
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col">
          <div className="mb-auto">
            <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
              {product.tag}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-2 leading-tight">
              {product.name}
            </h2>
            <p className="text-sm text-neutral-500 font-medium mb-6">
              {product.tamName}
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Weight */}
            <div className="mb-8">
              <label className="text-sm font-bold text-neutral-900 mb-4 block uppercase tracking-wider">
                Select Weight
              </label>
              <div className="grid grid-cols-3 gap-3">
                {weights.map((w) => (
                  <button
                    key={w}
                    onClick={() => setSelectedWeight(w)}
                    className={`py-3 px-4 rounded-xl border-2 font-bold transition-all duration-300 ${selectedWeight === w
                      ? "border-green-700 bg-green-50 text-green-700"
                      : "border-neutral-100 hover:border-neutral-300"
                      }`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

            {/* Price & Qty */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                  Price
                </span>
                <span className="text-3xl font-black text-neutral-900">
                  ₹{product.price}
                </span>
              </div>
              <div className="flex items-center bg-neutral-100 rounded-xl p-1.5 gap-4">
                <button
                  onClick={() => setLocalQuantity(Math.max(1, localQuantity - 1))}
                  className="p-2 bg-white rounded-lg shadow-sm text-neutral-600 hover:text-neutral-950 active:scale-90 transition-all"
                >
                  <Minus size={18} />
                </button>
                <span className="font-bold text-xl text-neutral-900 min-w-7.5 text-center">
                  {localQuantity}
                </span>
                <button
                  onClick={() => setLocalQuantity(localQuantity + 1)}
                  className="p-2 bg-white rounded-lg shadow-sm text-neutral-600 hover:text-neutral-950 active:scale-90 transition-all"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 space-y-4">
            <button
              onClick={() => {
                addToCart({
                  id: product.id,
                  name: product.name,
                  image: product.image,
                  price: product.price,
                  weight: selectedWeight,
                  quantity: localQuantity
                });
                setIsAdded(true);
                setTimeout(() => setIsAdded(false), 2000);
              }}
              className={`w-full font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 active:scale-[0.98] shadow-lg ${isAdded ? "bg-green-700 text-white" : "bg-neutral-900 text-white hover:bg-green-700"
                }`}
            >
              {isAdded ? (
                <>
                  <Check size={20} />
                  Added to Basket
                </>
              ) : (
                <>
                  <ShoppingCart size={20} />
                  Add to Cart • ₹{product.price * localQuantity}
                </>
              )}
            </button>
            <p className="text-center text-xs font-medium text-neutral-400">
              Freshly packed & delivered across Tamil Nadu.
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

// ─── Product Card
const ProductCard = ({
  product,
  onOpen,
}: {
  product: Product;
  onOpen: (p: Product) => void;
}) => {
  const { cart, addToCart, updateQuantity } = useCart();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Find cart item with default weight
  const cartItem = cart.find(item => item.id === product.id && item.weight === product.weight);
  const quantity = cartItem?.quantity || 0;
  const added = quantity > 0;

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

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
      });
    }
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      weight: product.weight,
      quantity: 1
    });
  };



  return (
    <div
      onClick={() => onOpen(product)}
      className="product-card shadow-xl group relative bg-white rounded-2xl border border-neutral-100 p-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full cursor-pointer"
    >
      {/* Tag */}
      <div
        className={`absolute top-6 left-6 z-10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getTagStyles(product.tagType)}`}
      >
        {product.tag}
      </div>

      {/* Image */}
      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-neutral-50/50">
        <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-110">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col flex-1 p-3">
        <div className="flex flex-col justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-neutral-900 group-hover:text-green-700 transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-sm text-neutral-700">{product.tamName}</p>
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

        <button
          ref={buttonRef}
          onClick={handleAddToCart}
          className={`mt-auto ${added ? "hidden" : "flex"} w-full bg-neutral-900 text-white font-bold py-3.5 rounded-xl items-center justify-center gap-2 hover:bg-green-700 transition-all duration-300 active:scale-95 shadow-sm`}
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>

        <div
          className={`${added ? "flex" : "hidden"} gap-3 items-center w-full`}
        >
          <div className="flex items-center justify-between bg-neutral-100 rounded-xl p-1.5 flex-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                updateQuantity(product.id, product.weight, quantity - 1);
              }}
              className="p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all text-neutral-600 active:scale-90"
            >
              <Minus size={16} />
            </button>
            <span className="font-bold text-neutral-900 min-w-5 text-center">
              {quantity}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                updateQuantity(product.id, product.weight, quantity + 1);
              }}
              className="p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all text-neutral-600 active:scale-90"
            >
              <Plus size={16} />
            </button>
          </div>
          <button
            onClick={(e) => e.stopPropagation()}
            className="flex-[1.5] bg-green-700 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-green-800 transition-all duration-300 active:scale-95 shadow-sm"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Product Grid
const ProductGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".product-card");
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
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <>
      <section
        id="product"
        ref={sectionRef}
        className="py-24 bg-[#FAFAFA] relative"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-tight">
              Our Crispy <span className="text-green-700">Collection</span>
            </h2>
            <p className="text-lg text-neutral-500 max-w-lg mx-auto font-medium">
              Freshly packed. Delivered across Tamil Nadu. Experience the
              authentic taste of tradition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpen={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default ProductGrid;
