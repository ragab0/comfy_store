import { sortOptions, viewOptions } from "@/assets/data/data";
import { useDispatch, useSelector } from "react-redux";
import { topFilterActions } from "@/redux/slices/top_fitler/TopFilter";
import { toast } from "react-toastify";

export default function TopFilters({ listLength }) {
  const dispatch = useDispatch();
  const { view } = useSelector((state) => state.topFilterReducer);

  function viewHandler(val) {
    dispatch(topFilterActions.viewSetter(val));
    if (view !== val) {
      toast.success("View has been changed!");
    }
  }

  function sortHandler(e) {
    dispatch(topFilterActions.sortSetter(e.target.value));
    // toast.success("Sortting done!");
  }

  return (
    <section className="top-filter grid grid-cols-[auto_1fr_auto] gap-8 text-clrBrown items-center mb-8">
      <div>
        {viewOptions.map(({ value, Ico }, i) => (
          <button
            key={i}
            onClick={() => viewHandler(value)}
            className={`w-25 h-25 p-1 border-2 me-2 rounded-md 
              ${value === view ? " border-clrOrangeDark" : "border-current"}`}
          >
            <Ico
              className={`w-full h-full transition-none ${
                value === view ? "text-clrOrangeDark" : ""
              }`}
            />
          </button>
        ))}
        <span className="ms-4">{listLength} Rooms Found</span>
      </div>
      <div className="py-[1px] bg-clrOrangeLight"></div>
      <div className=" capitalize">
        <span className="me-1">sort by</span>
        <select onChange={sortHandler}>
          {sortOptions.map(({ name, value }, i) => (
            <option key={i} value={value}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
