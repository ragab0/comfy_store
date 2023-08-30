"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import products from "@/assets/data/products";
import Star from "@/assets/imgs/star.svg";
import Counter from "./Counter";
import reviews from "@/assets/imgs/previews";
import "./Comps.css"


export default function SingleProduct() {
  const id = useParams().id;
  const product = products.find(p => p.id == id) || null;
  if (!product) {
    return (
      <p className="container text-center">No product with the id {id}</p>
    )
  }


  const { title, price, img, desc, colors, company, category} = product;
  const [currentImg, setCurrentImg] = useState(img);


  return (
    <section className="container single-product grid md:grid-cols-2 justify-between gap-[5%] md:justify-center mb-20">
      <div className="grid grid-rows-[1fr_75px] gap-4">
        <div className="!mb-0">
          <Image alt="product" src={currentImg} className="rounded-md w-full h-full" />
        </div>
        <div className="grid gap-4 w-full h-full" style={{gridTemplateColumns: `repeat(${reviews.length+1}, 1fr)`}}>
          {
            [img, ...reviews].map((r, i) => (
                <Image alt="review-img" src={r} key={i} className="w-full h-full rounded-md cursor-pointer hover:scale-90" onClick={() => setCurrentImg(r)} />
            ))
          }
        </div>
      </div>
      <div>
        <h1 className=" !leading-[1]">{title}</h1>
        <div className="flex gap-2 flex-wrap">
          <div className="stars flex gap-2" style={{"--var":""}}>
            {
              [...Array(5)].map((a, i) => (
                <Image alt="star" src={Star} fill={false} />
              ))
            }
          </div>
          <p>(100 customer reviews)</p>
        </div>
        <span className="price text-clrOrangeDark font-bold text-2xl spacing block">${price}</span>
        <p className="text-base leading-[1.8]">{desc}</p>
        <div className="border-b-0">
          {
            [["Available","There is no Stock ^_^"],["SKU","RecQ0fMd8T0Vk211E"],["Brand",company]].map(([n,v], i) => (
              <p key={i} className="mb-4 text-base">
                <span className="w-[100px] inline-block font-bold text-clrHead2">{n}:</span> {v}
              </p>
            ))
          }
        </div>
        <hr />
        <div className="mb-4 ">
          <p className="w-[100px] inline-block font-bold text-clrHead2 text-base">Colors:</p>
          <ul className="items-clrs inline-flex items-center gap-3">
            {
              colors.map((clr, i) => (
                <li key={i} >
                  <button style={{backgroundColor: clr,}} className=" rounded-full !p-3"></button>
                </li>
              ))
            }
          </ul>
        </div>
        <Counter />
      </div>
    </section>
  )
}
