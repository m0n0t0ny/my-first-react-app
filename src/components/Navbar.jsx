import "./Navbar.css";
import Link from "./Link";

function Navbar() {
  const x = 1;
  const img = "../../public/vite.svg";

  return (
    <>
      <nav>{x.toFixed(2)}</nav>
      <img style={{ height: "200px" }} src={`${img}`} alt="" />
      <ul>
        <li>
          <Link>ciao da link children</Link>
        </li>
        <li>
          <Link>contatti</Link>
        </li>
        <li>
          <Link>about</Link>
        </li>
        <li>
          <Link>shop</Link>
        </li>
        <li>
          <Link>iscrivetevi al mio canale</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
