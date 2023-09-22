"use client";
import Down from "@/assets/imgs/Down";
import Up from "@/assets/imgs/Up";
import store from "@/redux/Store";
import Image from "next/image";
import Link from "next/link";
import { Provider, useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/redux/slices/Cart/Cart";
  

function CartBody() {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cartReducer);

  function topHandler(index) {
    dispatch(cartActions.orderRoomCartSetter(index))
  }
  
  function downHandler(index) {
    dispatch(cartActions.sellRommCartSetter(index))
  }

  function removeHandler(id) {
    dispatch(cartActions.removeRoomCartSetter(id))
  }

  function clearHandler() {
    dispatch(cartActions.clearCartSetter());
  }


  return (
    <div>
      {
        cartList.map(({id, name, img, count, price, color}, i) => (
          <figure key={i} className="flex gap-8 mb-8">
            <Link href={`/rooms/${id}`} className="w-[100px] h-[100px]">
              <Image alt={name} src={img} width={100} height={100} className=" w-full h-full rounded-sm" />
            </Link>
            <figcaption className="flex-1 grid grid-cols-[1fr_auto] gap-8">
              <div>
                <h4 className=" text-base">{name}</h4>
                <h4 className=" text-base">${price}</h4>
                <button style={{backgroundColor: color, boxShadow:`0 0 10px ${color}`}} 
                  className={`rounded-full p-2 block mb-2 cursor-default`}>
                </button>
                <button onClick={() => removeHandler(id)} 
                className="hover:opacity-100 transition-none opacity-80">remove</button>
              </div>
              <div className="grid items-center content-center text-center">
                <button onClick={() => topHandler(i)}
                className="p-2 hover:fill-clrOrange transition-none">
                  <Up width={24} className="transition-none" />
                </button>
                <span className=" font-bold mb-0  text-clrHead2">{count}</span>
                <button onClick={() => downHandler(i)}
                className="p-2 hover:fill-clrOrange !transition-none">
                  <Down width={24} className="transition-none" />
                </button>
              </div>
            </figcaption>
          </figure>
        ))
      }
      <div className="border-t-2">
        <h4 className="mt-4 mb-8 max-w-full flex items-center justify-between">
          total <span>${cartList.reduce((p, c) => p+c.price, 0)}</span>
        </h4>
        <button onClick={clearHandler} className="btn-fire mx-auto !block">clear cart</button>
      </div>
    </div>
  )
}

export default function Cart() {
  return (
    <Provider store={store}>
      <CartBody />
    </Provider>
  )
}
