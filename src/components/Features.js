"use client";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { productsActions } from "@/redux/slices/products/Products";
const { fetchProductsFeatured } = productsActions;
import store from "@/redux/Store";
import Link from "next/link";
import Products from "./Products";
import "./Comps.css";


function FeaturesBody() {
  const featuredProducts = useSelector((state) => state.products.products.productsList);
  const dispatch = useDispatch();
  useEffect(function() {
    dispatch(fetchProductsFeatured());
  }, [])

  return (
    <section className="sec-features py-20 bg-clrGrey">
      <div className="container">
        <h2>featured products</h2>
        <div className="articles mt-16">
          <Products productsList={featuredProducts} />
        </div>
        <Link href="products" className="btn-second !block w-fit mx-auto">all products</Link>
      </div>
    </section>
  )
}


export default function Features() {
  return (
    <Provider store={store}>
      <FeaturesBody />
    </Provider>   
  )
}