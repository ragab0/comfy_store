"use client";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { roomsActions } from "@/redux/slices/rooms/Rooms";
import store from "@/redux/Store";
import Rooms from "@/components/Rooms";
import TopFilters from "@/components/TopFilters";
import RightFilters from "@/components/right_filter/RightFilters";


function RoomsBody() {
  const rooms = useSelector((state) => state.roomsReducer.rooms.list);
  const { view } = useSelector((state) => state.topFilterReducer);
  const dispatch = useDispatch();

  useEffect(function() {
    dispatch(roomsActions.fetchRooms());
  }, [])


  return (
    <div className="body container mb-20 grid md:grid-cols-[auto_1fr] gap-8">
      <RightFilters />
      <div>
        <TopFilters />
        <Rooms roomsList={rooms} paillers={view === "paillers"} />
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
