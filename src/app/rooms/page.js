"use client";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { roomsActions } from "@/redux/slices/rooms/Rooms";
import store from "@/redux/Store";
import Rooms from "@/components/Rooms";
import TopFilters from "@/components/TopFilters";
import RightFilters from "@/components/right_filter/RightFilters";


function RoomsBody() {
  const dispatch = useDispatch();
  const { view, sort } = useSelector((state) => state.topFilterReducer);
  const { rooms: { list, currentList }} = useSelector((state) => state.roomsReducer);
  const { 
    search,
    category,
    company,
    color,
    price,
    isFreeShipping, 
  } = useSelector((state) => state.rightFilterReducer)


  useEffect(function() {
    dispatch(roomsActions.fetchRooms());
  }, [])


  useEffect(function() {
    let newCurrentList = list.filter((item, i) => {
      const {
        name: n,
        colors: cs,
        price: p,
        company: cm,
        category: ct,
        shipping: sh,
      } = item

      return (
        (String(n).toLocaleLowerCase().includes(String(search).toLocaleLowerCase()))
        && (category === "all" || category === ct)
        && (company === "all" || company === cm)
        && (color === "all" || cs.includes(color))
        && (price >= p)
        && (isFreeShipping ? sh : true)
      )
    });

    if ( sort === "az" ) {
      newCurrentList.sort((second, first) => second.name.localeCompare(first.name));
    } else if (sort === "za") {
      newCurrentList.sort((first, second) => second.name.localeCompare(first.name));
    } else if (sort === "p1") {
      newCurrentList.sort((second, first) => first.price - second.price);
    } else if (sort === "p0") {
      newCurrentList.sort((second, first) => second.price - first.price);
    }

    dispatch(roomsActions.currentListSetter(newCurrentList));
  }, [list, sort, search, category, company, color, price, isFreeShipping,])


  return (
    <div className="body container mb-20 grid md:grid-cols-[auto_1fr] gap-8">
      <RightFilters />
      <div>
        <TopFilters listLength={currentList ? currentList.length : 0} />
        <Rooms roomsList={currentList} paillers={view === "paillers"} />
      </div>
    </div>
  )
}

export default function page() {
  return (
    <Provider store={store}>
      <RoomsBody />
    </Provider>
  )
}
