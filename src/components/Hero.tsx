// import { ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function HeroSection() {
//   return (
//     <section className="relative bg-linear-to-r from-gray-900 to-black text-white overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
//         <div className="max-w-2xl">
//           <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
//             Style That Moves <span className="block">With You.</span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
//             Not just style. Not just comfort. Footwear that effortlessly moves
//             with your every step.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <Link
//               href="/products"
//               className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center justify-center"
//             >
//               Shop Now
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//             <Link
//               href="/new-arrivals"
//               className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
//             >
//               Explore New Arrivals
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
//       </div>
//     </section>
//   );
// }


import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png" // Add your background image to public/hero-bg.jpg
          alt="Hero background"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Style That Moves <span className="block">With You.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              Not just style. Not just comfort. Footwear that effortlessly moves
              with your every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center justify-center"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/new-arrivals"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
              >
                Explore New Arrivals
              </Link>
            </div>
          </div>

          {/* Shoe Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              {/* Glow effect behind shoe */}
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full transform translate-x-1/4" />

              {/* Shoe image */}
              <Image
                src="/hero-shoe.png" // Add your hero shoe image here
                alt="Featured Shoe"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border border-white/10 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-white/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}