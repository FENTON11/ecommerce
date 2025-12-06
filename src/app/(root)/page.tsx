// import Card from "@/components/Card";
// import React from "react";
// import HeroSection from "@/components/Hero";
// import { getCurrentUser } from "@/lib/auth/actions";

// const products = [
//   {
//     id: 1,
//     title: "Air Max Pulse",
//     subtitle: "Men's Shoes",
//     meta: "6 Colour",
//     price: 149.99,
//     imageSrc: "/shoes/shoe-1.jpg",
//     badge: { label: "New", tone: "orange" as const },
//   },
//   {
//     id: 2,
//     title: "Air Zoom Pegasus",
//     subtitle: "Men's Shoes",
//     meta: "4 Colour",
//     price: 129.99,
//     imageSrc: "/shoes/shoe-2.webp",
//     badge: { label: "Hot", tone: "red" as const },
//   },
//   {
//     id: 3,
//     title: "InfinityRN 4",
//     subtitle: "Men's Shoes",
//     meta: "6 Colour",
//     price: 159.99,
//     imageSrc: "/shoes/shoe-3.webp",
//     badge: { label: "Trending", tone: "green" as const },
//   },
//   {
//     id: 4,
//     title: "Metcon 9",
//     subtitle: "Men's Shoes",
//     meta: "3 Colour",
//     price: 139.99,
//     imageSrc: "/shoes/shoe-4.webp",
//   },
// ];

// const Home = async () => {
//   const user = await getCurrentUser();

//   // console.log("USER:", user);

//   return (
//     <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//       <section aria-labelledby="latest" className="pb-12">
//         <h2 id="latest" className="mb-6 text-heading-3 text-dark-900">
//           Latest shoes
//         </h2>
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {products.map((p) => (
//             <Card
//               key={p.id}
//               title={p.title}
//               subtitle={p.subtitle}
//               meta={p.meta}
//               imageSrc={p.imageSrc}
//               price={p.price}
//               badge={p.badge}
//               href={`/products/${p.id}`}
//             />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Home;

import Card from "@/components/Card";
import HeroSection from "@/components/Hero";
import TrendingNow from "@/components/TrendingNow";
// import BestOfNike from "@/components/BestOfNike";
// import CategoryGrid from "@/components/CategoryGrid";

const products = [
  {
    id: 1,
    title: "Air Max Pulse",
    subtitle: "Men's Shoes",
    meta: "Latest Technology",
    price: 149.99,
    imageSrc: "/shoes/shoe-1.jpg",
    badge: { label: "New", tone: "orange" as const },
    colors: 6,
    category: "Men's Shoes",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Air Zoom Pegasus",
    subtitle: "Men's Shoes",
    meta: "Running Shoes",
    price: 129.99,
    imageSrc: "/shoes/shoe-2.webp",
    badge: { label: "Best Seller", tone: "red" as const },
    colors: 4,
    category: "Men's Shoes",
    rating: 4.7,
  },
  {
    id: 3,
    title: "InfinityRN 4",
    subtitle: "Men's Shoes",
    meta: "Premium Running",
    price: 159.99,
    imageSrc: "/shoes/shoe-3.webp",
    badge: { label: "Trending", tone: "green" as const },
    colors: 6,
    category: "Men's Shoes",
    rating: 4.9,
  },
  {
    id: 4,
    title: "Metcon 9",
    subtitle: "Men's Shoes",
    meta: "Training Shoes",
    price: 139.99,
    imageSrc: "/shoes/shoe-4.webp",
    colors: 3,
    category: "Men's Shoes",
    rating: 4.6,
  },
];

const Home = async () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest</h2>
            <a
              href="/products"
              className="text-gray-600 hover:text-black font-medium transition-colors"
            >
              View All →
            </a>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Card
                key={product.id}
                title={product.title}
                subtitle={product.subtitle}
                meta={product.meta}
                imageSrc={product.imageSrc}
                price={product.price}
                badge={product.badge}
                href={`/products/${product.id}`}
                colors={product.colors}
                category={product.category}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
      </section>

      <TrendingNow />
      {/* <BestOfNike />
      <CategoryGrid /> */}
    </div>
  );
};

export default Home;
