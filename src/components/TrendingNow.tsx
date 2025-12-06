// import Card from "@/components/Card";

// const trendingProducts = [
//   {
//     id: 5,
//     title: "REACT PRESTO",
//     subtitle: "Customizable Comfort",
//     meta: "New Technology",
//     price: 134.99,
//     imageSrc: "/shoes/trending-1.png",
//     badge: { label: "Hot", tone: "red" as const },
//     colors: 5,
//     category: "Men's Shoes",
//   },
//   {
//     id: 6,
//     title: "Air Max Día",
//     subtitle: "Summer Collection",
//     meta: "Seasonal",
//     price: 119.99,
//     imageSrc: "/shoes/trend-2.jpg",
//     badge: { label: "Summer", tone: "orange" as const },
//     colors: 4,
//     category: "Women's Shoes",
//   },
//   {
//     id: 7,
//     title: "Air Jordan 11 Retro",
//     subtitle: "Limited Edition",
//     meta: "Classic Returns",
//     price: 189.99,
//     imageSrc: "/shoes/trend-3.jpg",
//     badge: { label: "Limited", tone: "green" as const },
//     colors: 2,
//     category: "Men's Shoes",
//   },
// ];

// export default function TrendingNow() {
//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold mb-8">Trending Now</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {trendingProducts.map((product) => (
//             <Card
//               key={product.id}
//               title={product.title}
//               subtitle={product.subtitle}
//               meta={product.meta}
//               imageSrc={product.imageSrc}
//               price={product.price}
//               badge={product.badge}
//               href={`/products/${product.id}`}
//               colors={product.colors}
//               category={product.category}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import Card from "@/components/Card";

// Create a mapping of trending products to existing images
const trendingProducts = [
  {
    id: 5,
    title: "REACT PRESTO",
    subtitle: "Customizable Comfort",
    meta: "New Technology",
    price: 134.99,
    // Reuse shoe-4.webp for React Presto
    imageSrc: "/shoes/shoe-8.avif",
    badge: { label: "Hot", tone: "red" as const },
    colors: 5,
    category: "Men's Shoes",
    rating: 4.8,
  },
  {
    id: 6,
    title: "Air Max Día",
    subtitle: "Summer Collection",
    meta: "Seasonal",
    price: 119.99,
    // Reuse shoe-1.jpg for Air Max Día
    imageSrc: "/shoes/shoe-7.avif",
    badge: { label: "Summer", tone: "orange" as const },
    colors: 4,
    category: "Women's Shoes",
    rating: 4.6,
  },
  {
    id: 7,
    title: "Air Jordan 11 Retro",
    subtitle: "Limited Edition",
    meta: "Classic Returns",
    price: 189.99,
    // Reuse shoe-3.webp for Jordan
    imageSrc: "/shoes/shoe-11.avif",
    badge: { label: "Limited", tone: "green" as const },
    colors: 2,
    category: "Men's Shoes",
    rating: 4.9,
  },
];

export default function TrendingNow() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
          <a
            href="/trending"
            className="text-gray-600 hover:text-black font-medium transition-colors"
          >
            View All Trending →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingProducts.map((product) => (
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
  );
}