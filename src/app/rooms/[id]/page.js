"use client";
import { useParams } from "next/navigation";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { roomActions } from "@/redux/slices/room/Room";
import { cartActions } from "@/redux/slices/Cart/Cart";
import store from "@/redux/Store";
import Star from "@/assets/imgs/star.svg";
import Image from "next/image";


function RoomBody() {
  const id = useParams().id;
  const dispatch = useDispatch();
  const { 
    currentImg, 
    currentNumber,
    currentColor,
    item: { name, price, image="", description, colors=[], images=[], company, shipping, category} 
  } = useSelector((state) => state.roomReducer);

  useEffect(function() {
    dispatch(roomActions.fetchRoom(id));
  }, [])

  function currentImgHandler(e, index) {
    dispatch(roomActions.imaginedRoom(index))
  }

  function currentColorHandler(clr) {
    dispatch(roomActions.coloringRoom(clr));
  }

  function increNumberHandler() {
    dispatch(roomActions.orderRoom());
  }

  function decreNumberHandler() {
    dispatch(roomActions.sellRoom());
  }

  function addHandler() {
    const theItem = {
      id,
      name,
      color: currentColor,
      count: currentNumber,
      img: image,
      price,
    };
    dispatch(cartActions.addToCartSetter(theItem));
  }


  return (
    <main className="container grid md:grid-cols-2 justify-between gap-[5%] md:justify-center mb-20">
      <div className="grid grid-rows-[1fr_75px] gap-4">
        <div className="!mb-0 w-full h-[400px]">
          <Image alt="room" src={currentImg} width={400} height={300} className="rounded-md !w-full !h-full" />
        </div>
        <div className="grid gap-4" style={{gridTemplateColumns: `repeat(${images.length+1}, 1fr)`}}>
          {
            [image, ...images].map((r, i) => (
              <Image key={i} alt="review-img" src={r} width={75} height={75} 
              className="w-full h-full rounded-md cursor-pointer hover:scale-90" onClick={(e) => currentImgHandler(e, i)} />
            ))
          }
        </div>
      </div>
      <div>
        <h1 className=" !leading-[1]">{name}</h1>
        <div className="flex gap-2 flex-wrap">
          <div className="stars flex gap-2" style={{"--var":""}}>
            {
              [...Array(5)].map((a, i) => (
                <Image key={i} alt="star" src={Star} fill={false} />
              ))
            }
          </div>
          <p>(100 customer reviews)</p>
        </div>
        <span className="price text-clrOrangeDark font-bold text-2xl spacing block my-2">${price}</span>
        <p className="text-base leading-[1.8]">{description}</p>
        <div className="border-b-0 my-4">
          {
            [["Available", shipping],["Category", category],["Brand",company]].map(([n,v], i) => (
              <p key={i} className="mb-2 text-base">
                <span className="w-[100px] inline-block font-bold text-clrHead2">{n}:</span> {`${v}`}
              </p>
            ))
          }
        </div>
        <hr />
        <div className="my-4 flex items-center justify-start">
          <p className="w-[100px] font-bold text-clrHead2 text-base">Colors:</p>
          <ul className="items-clrs flex items-center justify-center gap-3">
            {
              colors.map((clr, i) => (
                <li key={i} className="flex">
                  <button style={{backgroundColor: clr, boxShadow:currentColor === clr ? `0 0 10px ${clr}` : ""}} onClick={() => currentColorHandler(clr)}
                  className={`rounded-full !p-3 hover:scale-90`}>
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
        <section>
          <div className="flex items-center text-2xl text-clrHead2 font-bold">
            <button className="p-1 hover:scale-150" onClick={increNumberHandler}>+</button>
            <p className="text-4xl inline-block mx-4">{currentNumber}</p>
            <button className="p-1 hover:scale-150" onClick={decreNumberHandler}>-</button>
          </div>
          <button onClick={addHandler} className="btn-second mt-6 !rounded-none">add to cart</button>
        </section>
      </div>
    </main>
  )
}


export default function page() {
  return (
    <Provider store={store}>
      <RoomBody />
    </Provider>   
  )
}