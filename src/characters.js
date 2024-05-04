import MabelImg from "./assets/characters/Mabel.webp";
import DipperImg from "./assets/characters/Dipper.webp";
import StanImg from "./assets/characters/Stan.webp";
import WaddlesImg from "./assets/characters/Waddles.webp";
import SoosImg from "./assets/characters/Soos.webp";
import FordImg from "./assets/characters/Ford.webp";
import GrendaImg from "./assets/characters/Grenda.webp";
import WendyImg from "./assets/characters/Wendy.webp";
import TobyImg from "./assets/characters/Toby.webp";
import CandyImg from "./assets/characters/Candy.webp";
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
