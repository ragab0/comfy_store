"use client";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rightFilterActions } from "@/redux/slices/right_filter/RightFilter";
import "./RightFilters.css";


export default function RightFilters() {
  const selectRef = useRef(null);
  const dispatch = useDispatch();
  const { 
    info: {colors=[], categorys=[], companys=[], maxPrice=0},
    color,
    price,
    search,
    category,
    isFreeShipping,
  } = useSelector(state => state.rightFilterReducer)

  useEffect(function() {
    dispatch(rightFilterActions.fetchBasicData());
  }, [])

  function searchHandler(e) {
    dispatch(rightFilterActions.searchSetter(e.target.value));
  }

  function categoryHandler(cat) {
    dispatch(rightFilterActions.categorySetter(cat));
  }

  function companyHandler(e) {
    dispatch(rightFilterActions.companySetter(e.target.value));
  }

  function colorHandler(clr) {
    dispatch(rightFilterActions.colorSetter(clr));
  }

  function priceHandler(e) {
    dispatch(rightFilterActions.priceSetter(e.target.value));
  }

  function freeShippingHandler() {
    dispatch(rightFilterActions.freeShippingSetter());
  }

  function clearHandler() {
    dispatch(rightFilterActions.clearSetter());
    selectRef.current.selectedIndex = 0;
  }


  return (
    <section className="right-filter max-md:grid max-md:grid-cols-2 gap-8 md:max-w-[200px] mb-16">
      <div className="side-left">
        <input type="search" placeholder="Search here" value={search} onChange={searchHandler}
        className=" p-2 rounded-md text-clrOrangeDark bg-clrGrey w-full" />
        <div>
          <h5>Category</h5>
          <ul className="items-catgs text-sm leading-3 capitalize">
            {
              ["all", ...categorys].map((c, i) => (
                <li key={i}>
                  <button onClick={() => categoryHandler(c)} style={{borderColor: c===category ? "var(--clr-orange)" : ""}}>{c}</button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="side-right w-full">
        <div>
          <h5>company</h5>
          <select onChange={companyHandler} ref={selectRef}>
            {
              ["all", ...companys].map((c, i) => (
                <option key={i} value={c}>{c}</option>
              ))
            }
          </select>
        </div>
        <div>
          <h5>colors</h5>
          <ul className="items-clrs flex items-center justify-center gap-3">
            <li>
              <button onClick={() => colorHandler("all")} 
              className={`border-b-2 ${color==="all" ? "border-[var(--clr-orange)] " : "border-transparent"}`} >all</button>
            </li>
            {
              colors.map((clr, i) => (
                <li key={i} className="flex">
                  <button style={{backgroundColor: clr, boxShadow:color === clr ? `0 0 10px 1px ${clr}` : ""}} 
                  onClick={() => colorHandler(clr)}
                  className={`rounded-full !p-3 hover:scale-90`}>
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <h5>price</h5>
          <p>${price}</p>
          <input type="range" min="0" max={maxPrice} value={price} onChange={priceHandler}/>
        </div>
        <label className="flex items-center gap-1 hover:opacity-80 cursor-pointer">
          <span>Free Shipping</span>
          <input type="checkbox" className="cursor-pointer" checked={isFreeShipping} onChange={freeShippingHandler} />
        </label>
        <button className="btn-fire w-full" onClick={clearHandler}>clear fillter</button>
      </div>
    </section>
  )
}
