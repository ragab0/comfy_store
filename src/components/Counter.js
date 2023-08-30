'use client';
import { useState } from "react";


export default function Counter() {
  const [counter, setCounter] = useState(1);

  return (
    <section>
      <div className="flex items-center text-2xl text-clrHead2 font-bold">
        <button className="p-1 hover:scale-150" onClick={() => setCounter(o=> o+1)}>+</button>
        <p className="text-4xl inline-block mx-4">{counter}</p>
        <button className="p-1 hover:scale-150" onClick={() => setCounter(o=> o > 1 ? o-1 : o)}>-</button>
      </div>
      <button className="btn-second mt-6 !rounded-none">add to cart</button>
    </section>
  )
}
