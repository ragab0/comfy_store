"use client";
import store from "@/redux/Store";
import Link from "next/link";
import car from "@/assets/imgs/car.svg"
import { Provider, useSelector } from "react-redux";
import Image from "next/image";


function CarBody() {
  const { cartList } = useSelector(state => state.cartReducer);
  const len = cartList.length > 9 ? "+9" : cartList.length;


  return (
    <Link href="/cart" className="text-2xl spacing text-clrHead1 inline-flex items-center gap-1" aria-label={len}>
      cart
      <div className={`relative after:content-['a'] after:flex after:justify-center after:items-center 
      after:text-sm after:bg-clrOrangeLight after:w-6 after:h-6 after:rounded-full
      after:absolute after:-top-1/2 after:-right-1/2`}
      >
        <Image alt="car" src={car} width={25} />
      </div>
    </Link>
  )
}

export default function Car() {
  return (
    <Provider store={store}>
      <CarBody />
    </Provider>
  )
}
