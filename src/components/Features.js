import products from "@/assets/data/products";
import Image from "next/image";
import Link from "next/link";
import Products from "./Products";
import "./Comps.css";

export default function Features() {
  return (
    <section className="sec-features py-20 bg-clrGrey">
      <div className="container">
        <h2>featured products</h2>
        <div className="articles mt-16">
          <Products number={3} />
        </div>
        <Link href="products" className="btn-second !block w-fit mx-auto">all products</Link>
      </div>
    </section>

  )
}
