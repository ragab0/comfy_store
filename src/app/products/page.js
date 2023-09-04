"use client";
import Paths from "@/components/Paths";
import Products from "@/components/Products";
import TopFilters from "@/components/TopFilters";
import RightFilters from "@/components/right_filter/RightFilters";
import { useEffect } from "react";
import { Connect } from "react-redux";


export default function page() {
  useEffect(function() {

  }, [])
  
  return (
    <main>
      <Paths />
      <div className="body container mb-20 grid md:grid-cols-[auto_1fr] gap-8">
        <RightFilters /> {/** 1. accessingData */}
        <div>
          <TopFilters />
          <Products /> {/** 2. accessingData */}
        </div>  
      </div>
    </main>
  )
}
