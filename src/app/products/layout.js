"use client";
import Store from "@/redux/Store";
import { Provider } from "react-redux";

export default function page({children}) {
  return (
    <Provider store={Store}>
      {
        children
      }
    </Provider>      
  )
}
