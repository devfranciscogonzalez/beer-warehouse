import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Logo = () => (

    <Link to="/">
      <img
        src={logo}
        alt="Logo Almacen cerveza"
        style={{ maxWidth: 120, cursor: "pointer" }}
      />
    </Link>
);

export default Logo;
