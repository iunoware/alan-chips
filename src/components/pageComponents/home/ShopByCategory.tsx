import Link from "next/link";
import React from "react";

const ShopByCategory = () => {
  const chipsCategory = [
    {
      title: "Best Loved Classics",
      images: [
        "/images/alan-chips.png",
        "/images/plantain-chips.png",
        "/images/potato-salted-chips.png",
      ],
    },
    {
      title: "Bold & Spiced Favourites",
      images: [
        "/images/plantain-masala-chips.png",
        "/images/potato-puthina-masala-chips.png",
        "/images/tapioca-round-chips.png",
      ],
    },
    {
      title: "Traditional Roots Collection",
      images: [
        "/images/stripe-sweet-plantain-chips.png",
        "/images/tapioca-finger-chips.png",
        "/images/sweet-plantain-chips.png",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip relative w-full bg-green py-10">
      {/* Background SVG - Adjusted color for visibility */}
      <div className="absolute inset-0 -top-15 md:-top-40 left-0 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#017432"
            fillOpacity="1"
            d="M0,64L60,85.3C120,107,240,149,360,149.3C480,149,600,107,720,85.3C840,64,960,64,1080,74.7C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center justify-center relative z-20 ">
        <h2 className="text-6xl text-white text-center font-bold tracking-tight">
          Shop By Category
        </h2>
        <p className="text-lg pt-4 text-white/80 text-center max-w-lg">
          Explore our wide range of authentic chips, crafted with traditional
          recipes and the finest ingredients.
        </p>
      </div>

      {/* Category Grid */}
      <div className="flex-1 flex items-center justify-center relative z-50! px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-7xl">
          {chipsCategory.map((chip, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center"
            >
              {/* Image Container with fixed height/width to prevent collapse */}
              <div className="relative h-70 md:h-87.5 w-full flex items-center justify-center mb-8">
                <img
                  src={chip.images[0]}
                  alt=""
                  className="h-full w-auto z-10 absolute -rotate-2 -translate-x-8 transition-transform duration-500 group-hover:-rotate-18 group-hover:-translate-x-16"
                />
                <img
                  src={chip.images[1]}
                  alt=""
                  className="z-20 h-full w-auto absolute transition-transform duration-500 group-hover:scale-110"
                />
                <img
                  src={chip.images[2]}
                  alt=""
                  className="h-full w-auto z-10 absolute rotate-2 translate-x-8 transition-transform duration-500 group-hover:rotate-18 group-hover:translate-x-16"
                />
              </div>

              {/* Category Title */}
              <h3 className="text-2xl font-bold text-white text-center group-hover:text-gold transition-colors duration-300">
                {chip.title}
              </h3>
              <Link
                href="/chips"
                className="mt-4 px-6 py-2 bg-white text-green font-bold rounded-full md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
              >
                View All
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
