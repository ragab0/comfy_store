import products from "@/assets/data/products";
import Image from "next/image";
import Link from "next/link";


export default function Products({productsList=[], paillers=false}) {
  return (
    <section className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 ${paillers ? "!grid-cols-1" : ""}`}>
      {
        productsList.map(({title, price, image, description, id}, i) => (
          <figure key={i} className={`mb-8 ${paillers ? "grid grid-cols-[300px_1fr] gap-8" : ""}`}>
            <Link href={`/products/${id}`}>
              <Image alt={title} src={image} width={100} height={200} className="w-full h-[175px] object-cover rounded-md hover:scale-90 " />
            </Link>
            <figcaption className={`${paillers ? "" : "flex py-5 justify-between gap-5"}`}>
              <h5 className={`font-medium mb-0 ${paillers ? " text-2xl" : ""}`}>{title}</h5>
              <span className="price text-clrOrangeDark font-bold">${price}</span>
              <p className={`mt-1 mb-2 text-base overflow-ellipsis ${paillers ? "" : "hidden"}`}>{description.slice(0, description.length/2.5)}...</p>
              <Link href={`/products/${id}`} className={`btn-second !py-0 !rounded-none !px-2 !text-[8px] ${paillers ? "" : "!hidden"}`}>Details</Link>
            </figcaption>
          </figure>
        ))
      }
    </section>
  )
}
