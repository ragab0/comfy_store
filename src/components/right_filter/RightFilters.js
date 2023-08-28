import Link from "next/link";
import "./RightFilters.css";

const catgs = [
  "all",
  "office",
  "living",
  "room",
  "kitchen",
  "bedroom",
  "dining",
  "kids",
]


export default function RightFilters() {
  return (
    <section className="right-filter max-w-[200px] mb-8">
      <input type="search" placeholder="Search here" className=" p-2 rounded-md text-clrOrangeDark bg-clrGrey w-full" />
      <div>
        <h5>Category</h5>
        <ul className="items-catgs text-sm leading-3 capitalize">
          {
            catgs.map((c, i) => (
              <li key={i}>
                <button>{c}</button>
              </li>
            ))
          }
        </ul>
      </div>
      <div>
        <h5>company</h5>
        <select>
          <option value="all">all</option>
          <option value="marcos">marcos</option>
        </select>
      </div>
      <div>
        <h5>colors</h5>
        <ul className="items-clrs flex items-center gap-1">
          {
            ["all", "", "", "", "", ""].map((item, i) => (
              <li key={i} >
                <button>{item}</button>
              </li>
            ))
          }
        </ul>
      </div>
      <div>
        <h5>price</h5>
        <p>$3,099.99</p>
        <input type="range" min="0" />
      </div>
      <label className="flex items-center gap-1 hover:opacity-80 cursor-pointer">
        <span>Free Shipping</span>
        <input type="checkbox" className=" cursor-pointer" />
      </label>
      <button className="btn-fire">clear fillter</button>
    </section>
  )
}
