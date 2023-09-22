import { benifts } from "@/assets/data/data";
import Image from "next/image";


export default function Benifts() {
  return (
    <section className="py-20 lg:mb-20 bg-clrOrangeLight text-clrBrown">
      <div className="container">
        <div className="flex justify-between max-md:flex-col items-start md:items-center gap-8 mb-20">
          <h3 className="!text-start">Custom Furniture Built Only For You</h3>
          <p className="max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
        </div>
        <div className="articles lg:-mb-40 grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-8">
          {
            benifts.map(({name, desc, img}, i) => (
              <figure key={i} className="p-8 bg-clrOrange rounded-md hover:-translate-y-4 shadow-lg">
                <div className=" bg-clrOrangeLight w-[60px] h-[60px] p-4 rounded-full mx-auto">
                  <Image alt={name} src={img} className="w-full h-full" />
                </div>
                <figcaption className="text-center">
                  <h4 className="my-5 mx-auto">{name}</h4>
                  <p >{desc}</p>
                </figcaption>
              </figure>
            ))
          }
        </div>
      </div>
    </section>

  )
}
