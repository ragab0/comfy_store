import Image from "next/image";
import Link from "next/link";
import heroImg from "@/assets/imgs/hero/hero-bcg.jpeg"
import heroImg2 from "@/assets/imgs/hero/hero-bcg2.jpeg"


export default function Hero() {
  return (
    <section className="container min-h-[85vh] py-10 grid md:grid-cols-2 md:justify-between items-center gap-8 gap-y-16">
      <div className="max-w-md">
        <h1>Design Your <span className="block">Comfort Zone</span></h1>
        <p className="my-10 text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
        <Link href="/rooms" className="btn-primary">shop now</Link>
      </div>
      <div className="relative max-w-[525px] mx-auto">
        <Image alt="hero-img" src={heroImg} className="hero-img w-3/4 object-cover ms-auto rounded-md relative" />
        <Image alt="hero-img" src={heroImg2} className="w-2/4 absolute bottom-0 left-0 rounded-md" />
      </div>
    </section>
  )
}
