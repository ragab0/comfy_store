import products from "@/assets/data/products";
import Image from "next/image";
import Link from "next/link";
import Products from "./Products";


export default function Features() {
  return (
    <section className="py-20 bg-clrGrey">
      <div className="container">
        <h2>featured products</h2>
        <div className="articles my-16">
          <Products get={3} />
        </div>
        <Link href="products" className="btn-second mx-auto block w-fit">all products</Link>
      </div>
    </section>

  )
}
