import Image from "next/image";


export default function Hero() {
  return (
    <section className="container min-h-[85vh] py-20 flex justify-between items-center gap-8">
      <div className="max-w-md">
        <h1>Design Your <span className="block">Comfort Zone</span></h1>
        <p className="my-10 text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
        <button className="btn-primary">shop now</button>
      </div>
      <Image alt="hero-img" src="" className="w-[525px]" />
    </section>
  )
}
