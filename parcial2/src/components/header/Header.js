import Image from "../../images/image.svg";
import './Header.css';
function Header() {

    return (
    <div>
        <h1 className="ByMe-Title">El aroma mágico</h1>
        <img src={Image} className="ByMe-img" alt="image" ></img>
    </div>
    );
  }
  
  export default Header;