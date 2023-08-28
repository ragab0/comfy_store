import Squares from "@/assets/imgs/squares.svg";
import Paillers from "@/assets/imgs/paillers.svg";
import Image from "next/image";


const options = [
  {
    name: "price (lowest)",
    value: "p0",
  }, {
    name: "price (highest)",
    value: "p1",
  }, {
    name: "name (a-z)",
    value: "az",
  }, {
    name: "name (z-a)",
    value: "za",
  },
]


export default function TopFilters() {
  return (
    <section className='top-filter grid grid-cols-[auto_1fr_auto] gap-8 text-clrBrown items-center mb-8'>
      <div>
        {
          [Squares, Paillers].map((b, i) => (
            <button key={i} className='w-25 h-25 p-1 border-2 me-2 border-current rounded-md'>
              <Image alt="img" src={b} className="w-full h-full !text-red-400 fill-current" />
            </button>
          ))
        }
        <span className="ms-8">N Products Found</span>
      </div>
      <div className="py-[1px] bg-clrOrangeLight"></div>
      <div className=" capitalize">
        <span className="me-1">sort by</span>
        <select>
          {
            options.map(({name, value}, i) => (
              <option key={i} value={value}>{name}</option>
            ))
          }
        </select>
      </div>
    </section>
  )
}
