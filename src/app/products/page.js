import Paths from "@/components/Paths";
import Products from "@/components/Products";
import TopFilters from "@/components/TopFilters";
import RightFilters from "@/components/right_filter/RightFilters";

export default function page() {
  return (
    <main>
      <Paths />
      <div className="body container mb-20 grid md:grid-cols-[auto_1fr] gap-8">
        <RightFilters />
        <div>
          <TopFilters />
          <div>
            <Products />
            <Products />
            <Products />
          </div>
        </div>        
      </div>
    </main>
  )
}
