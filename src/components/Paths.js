'use client';
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Paths() {
  const [currentPath, setPath] = useState('');

  useEffect(function() {
    setPath("home" + window.location.pathname);
  }, [])

  
  return (
    <section className="paths py-20 mb-16 bg-clrOrangeLight ">
      <h3 className="container text-[#815444]">
        {
          currentPath.split("/").filter((f) => f).map((single, i, arr) => (
            i === arr.length-1 
            ? <span key={i} className="text-[#493128] cursor-default"> /{single}</span>
            : <Link key={i} href={`/${arr.slice(1, i+1).join("/")}`} className="hover:text-[#493128]"> /{single}</Link>
          ))
        }
      </h3>
    </section>
  )
}
