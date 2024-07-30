import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeft from "@mui/icons-material/ArrowCircleLeft";
import MoveDownIcon from "@mui/icons-material/MoveDown";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const items = [
  {
    name: "Productos",
    path: "/",
    icon: <SportsBarIcon color="primary" />,
  },
  {
    name: "Ingresos",
    path: "/ingreso",
    icon: <ArrowCircleRightIcon color="primary" />,
  },
  {
    name: "Egresos",
    path: "/egreso",
    icon: <ArrowCircleLeft color="primary" />,
  },
  {
    name: "Traspasos",
    path: "/traspaso",
    icon: <MoveDownIcon color="primary" />,
  },
];

const NavegacionLista = () => {
  return (
    <List>
      {items.map((item) => (
        <ListItemButton key={item.name} component={Link} to={item.path}>
          <ListItemIcon> {item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItemButton>
      ))}
    </List>
  );
};
export default NavegacionLista;
