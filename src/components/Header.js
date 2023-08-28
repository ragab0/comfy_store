import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/imgs/logo.svg";
import user from "@/assets/imgs/user.svg"
import car from "@/assets/imgs/car.svg"


const links = [
  {
    name: "home",
    path: "/"
  },{
    name: "about",
  },{
    name: "products",
  },
]


export default function Header() {
  return (
    <header className="">
      <div className="container py-4 flex justify-between items-center capitalize">
        <Link href="/">
          <Image alt="logo" src={logo} width={150} />
        </Link>
        <nav>
          <ul className="flex items-center gap-8">
            {
              links.map(({name, path}, i) => (
                <li>
                  <Link href={path ?? name}>{name}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
        <div className="text-2xl spacing text-clrHead1">
          <Link href="/cart" className="inline-flex items-center gap-1 me-6">
            cart
            <Image alt="car" src={car} width={25} />
          </Link>
          <Link href="/login" className="inline-flex items-center gap-1">
            login
            <Image alt="user" src={user} width={25} />
          </Link>
        </div>
      </div>
    </header>
  )
}
