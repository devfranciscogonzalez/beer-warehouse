import { Chip } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";

const StatusChip = ({ label }) => {
  const icon = <PaidIcon />;

  return (
    <Chip
      label={label}
      icon={icon}
      size="small"
      sx={{ backgroundColor: "yellow", color: "black" }}
    />
  );
};

export default StatusChip;
