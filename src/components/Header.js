'use client';
import { usePathname } from "next/navigation";
import { links } from "@/assets/data/data";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/imgs/logo.svg";
import Car from "./Car";


export default function Header() {
  const currentPath = usePathname();
  
  return (
    <header>
      <div className="container py-4 flex justify-between items-center capitalize gap-8">
        <Link href="/">
          <Image alt="logo" src={logo} width={150} />
        </Link>
        <div className="menu hidden md:flex justify-between items-center gap-8">
          <nav>
            <ul className="flex items-center gap-8">
              {
                links.map(({name, path}, i) => (
                  <li key={i}>
                    <Link href={path ?? name} 
                      className={path === currentPath ? "active-path text-clrHead1 font-bold" : ""}
                    >{name}</Link>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
        <Car />
      </div>
    </header>
  )
}
