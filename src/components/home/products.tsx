import Image from "next/image"

const PRODUCTS = [
  {
    name: "SurfPod",
    tagline: "Surfboard rentals, automated.",
    description:
      "Self-service surfboard rental stations placed at beaches, resorts, and campuses. Available 24/7, no staff required.",
    image: "/images/surfpod.jpg",
  },
  {
    name: "SnowPod",
    tagline: "Snowboard rentals, automated.",
    description:
      "The same contactless rental experience, built for the mountains. Snowboard access at ski resorts and lodges.",
    image: "/images/snowpod.jpg",
  },
]

export function Products() {
  return (
    <section id="products" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-surf-500">
          Our Products
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-ocean-950 sm:text-4xl">
          Pods for Every Adventure
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-ocean-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-ocean-950">
                  {product.name}
                </h3>
                <p className="mt-1 font-medium text-surf-500">
                  {product.tagline}
                </p>
                <p className="mt-3 leading-relaxed text-ocean-700">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
