import products from "@/assets/data/products";
import Image from "next/image";


export default function Products() {
  return (
    <section className="flex justify-between gap-8">
      {
        products.map(({title, price, img}, i) => (
          <figure key={i} className="figure-anim">
            <Image alt={title} src={img} className="w-[350px] h-[225px] object-cover rounded-md" />
            <figcaption className="flex justify-between items-center gap-5 py-5">
              <h5 className=" font-medium">{title}</h5>
              <span className="text-clrOrangeDark">{price}</span>
            </figcaption>
          </figure>
        ))
      }
    </section>
  )
}
