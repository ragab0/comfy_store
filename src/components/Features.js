"use client";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { roomsActions } from "@/redux/slices/rooms/Rooms";
import store from "@/redux/Store";
import Link from "next/link";
import Rooms from "./Rooms";
import "./Comps.css";
import Loading from "@/loading";

function FeaturesBody() {
  const {
    list: featuredRooms,
    isInitialized,
    isLoading,
    error,
  } = useSelector((state) => state.roomsReducer.roomsFeatured);
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch(roomsActions.fetchRoomsFeatured());
  }, []);

  return (
    <section className="sec-features py-20 bg-clrGrey">
      <div className="container">
        <h2>featured rooms</h2>
        {!isInitialized || isLoading ? (
          <Loading />
        ) : isInitialized && error ? (
          <h1 className=" text-center">{error}</h1>
        ) : (
          <>
            <div className="articles mt-16">
              <Rooms roomsList={featuredRooms} />
            </div>
            <Link href="rooms" className="btn-second !block w-fit mx-auto">
              all rooms
            </Link>
          </>
        )}
      </div>
    </section>
  );
}

export default function Features() {
  return (
    <Provider store={store}>
      <FeaturesBody />
    </Provider>
  );
}
