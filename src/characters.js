import MabelImg from "./assets/characters/Mabel_Pines.png";
import DipperImg from "./assets/characters/Dipper_Pines.png";
import StanImg from "./assets/characters/Stan_Pines.png";
import WaddlesImg from "./assets/characters/Waddles.jpg";
import SoosImg from "./assets/characters/Soos.jpg";
import FordImg from "./assets/characters/Ford.jpg";
import GrendaImg from "./assets/characters/Grenda.jpg";
import WendyImg from "./assets/characters/Wendy.png";
import TobyImg from "./assets/characters/Toby.jpg";
import CandyImg from "./assets/characters/Candy.jpg";
import { v4 as uuidv4 } from "uuid";

export const characters = [
  { id: uuidv4(), name: "Mabel", src: MabelImg },
  { id: uuidv4(), name: "Dipper", src: DipperImg },
  { id: uuidv4(), name: "Stan", src: StanImg },
  { id: uuidv4(), name: "Waddles", src: WaddlesImg },
  { id: uuidv4(), name: "Soos", src: SoosImg },
  { id: uuidv4(), name: "Ford", src: FordImg },
  { id: uuidv4(), name: "Grenda", src: GrendaImg },
  { id: uuidv4(), name: "Wendy", src: WendyImg },
  { id: uuidv4(), name: "Toby", src: TobyImg },
  { id: uuidv4(), name: "Candy", src: CandyImg },
];
