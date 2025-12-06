// import Image from "next/image";
// import Link from "next/link";

// export type BadgeTone = "red" | "green" | "orange";

// export interface CardProps {
//   title: string;
//   description?: string;
//   subtitle?: string;
//   meta?: string | string[];
//   imageSrc: string;
//   imageAlt?: string;
//   price?: string | number;
//   href?: string;
//   badge?: { label: string; tone?: BadgeTone };
//   className?: string;
// }

// const toneToBg: Record<BadgeTone, string> = {
//   red: "text-[--color-red]",
//   green: "text-[--color-green]",
//   orange: "text-[--color-orange]",
// };

// export default function Card({
//   title,
//   description,
//   subtitle,
//   meta,
//   imageSrc,
//   imageAlt = title,
//   price,
//   href,
//   badge,
//   className = "",
// }: CardProps) {
//   const displayPrice =
//     price === undefined
//       ? undefined
//       : typeof price === "number"
//       ? `$${price.toFixed(2)}`
//       : price;
//   const content = (
//     <article
//       className={`group rounded-xl bg-light-100 ring-1 ring-light-300 transition-colors hover:ring-dark-500 ${className}`}
//     >
//       <div className="relative aspect-square overflow-hidden rounded-t-xl bg-light-200">
//         <Image
//           src={imageSrc}
//           alt={imageAlt}
//           fill
//           sizes="(min-width: 1280px) 360px, (min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
//           className="object-cover transition-transform duration-300 group-hover:scale-105"
//         />
//       </div>
//       <div className="p-4">
//         <div className="mb-1 flex items-baseline justify-between gap-3">
//           <h3 className="text-heading-3 text-dark-900">{title}</h3>
//           {displayPrice && (
//             <span className="text-body-medium text-dark-900">
//               {displayPrice}
//             </span>
//           )}
//         </div>
//         {description && (
//           <p className="text-body text-dark-700">{description}</p>
//         )}
//         {subtitle && <p className="text-body text-dark-700">{subtitle}</p>}
//         {meta && (
//           <p className="mt-1 text-caption text-dark-700">
//             {Array.isArray(meta) ? meta.join(" • ") : meta}
//           </p>
//         )}
//       </div>
//     </article>
//   );

//   return href ? (
//     <Link
//       href={href}
//       aria-label={title}
//       className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-500]"
//     >
//       {content}
//     </Link>
//   ) : (
//     content
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

export type BadgeTone = "red" | "green" | "orange";

export interface CardProps {
  title: string;
  description?: string;
  subtitle?: string;
  meta?: string | string[];
  imageSrc: string;
  imageAlt?: string;
  price?: string | number;
  href?: string;
  badge?: { label: string; tone?: BadgeTone };
  className?: string;
  colors?: number;
  category?: string;
  rating?: number;
}

const toneToBg: Record<BadgeTone, string> = {
  red: "bg-red-100 text-red-800",
  green: "bg-green-100 text-green-800",
  orange: "bg-orange-100 text-orange-800",
};

export default function Card({
  title,
  description,
  subtitle,
  meta,
  imageSrc,
  imageAlt = title,
  price,
  href,
  badge,
  className = "",
  colors,
  category,
  rating,
}: CardProps) {
  const displayPrice =
    price === undefined
      ? undefined
      : typeof price === "number"
      ? `$${price.toFixed(2)}`
      : price;

  const content = (
    <article
      className={`group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1280px) 360px, (min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Badge */}
        {badge && (
          <div className="absolute top-3 left-3">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                toneToBg[badge.tone || "orange"]
              }`}
            >
              {badge.label}
            </span>
          </div>
        )}

        {/* Favorite button */}
        <div className="absolute top-3 right-3">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
            <Star className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          {displayPrice && (
            <span className="text-2xl font-bold text-gray-900">
              {displayPrice}
            </span>
          )}
        </div>

        {/* Category and Colors */}
        <div className="space-y-1 mb-3">
          {category && <p className="text-sm text-gray-600">{category}</p>}
          {colors !== undefined && (
            <p className="text-sm text-gray-500">
              {colors} Color{colors > 1 ? "s" : ""}
            </p>
          )}
        </div>

        {/* Meta info */}
        {meta && (
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-700">
              {Array.isArray(meta) ? meta.join(" • ") : meta}
            </p>
            {rating && (
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm font-medium">{rating}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );

  return href ? (
    <Link
      href={href}
      aria-label={title}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
    >
      {content}
    </Link>
  ) : (
    content
  );
}