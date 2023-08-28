console.log("webpack is running :)");
import globals from "./assets/css/globals.css";
import Header from "./components/Header.jsx";


(document.onload = function() {
  const root = document.getElementById("root").innerHTML = `${Header()}`;
  console.log(1);
})()