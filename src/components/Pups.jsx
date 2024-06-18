import "../index.css";

import MaxImage from "./Max_IMG_1722.jpeg";
import GryphonImage from "./Gryphon_IMG_3171.jpeg";

export default function Pups() {
  return (
    <div>
      <img src={MaxImage} alt="Max"></img>
      <br></br>
      <img src={GryphonImage} alt="Gryphon"></img>
    </div>
  );
}
