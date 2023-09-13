import Squares from "@/assets/imgs/Squares";
import Paillers from "@/assets/imgs/Paillers";
import mission from "@/assets/imgs/mission.svg";
import vision from "@/assets/imgs/vision.svg";
import history from "@/assets/imgs/history.svg";

export const links = [
  {
    name: "home",
    path: "/"
  },{
    name: "about",
    path: "/about"
  },{
    name: "rooms",
    path: "/rooms"
  },
]


export const benifts = [
  {
    name: "mission",
    img: mission,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur."
  },{
    name: "vision",
    img: vision,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur."
  },{
    name: "history",
    img: history,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur."
  },
]


export const sortOptions = [
  {
    name: "price (lowest)",
    value: "p0",
  }, {
    name: "price (highest)",
    value: "p1",
  }, {
    name: "name (a-z)",
    value: "az",
  }, {
    name: "name (z-a)",
    value: "za",
  },
]


export const viewOptions = [
  {
    value: "squares",
    Ico: Squares
  },
  {
    value: "paillers",
    Ico: Paillers
  },
]