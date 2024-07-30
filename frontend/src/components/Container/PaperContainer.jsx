import { Box, Paper } from "@mui/material";

const PaperContainer = ({ children }) => {
  return (
    <Paper
      component="section"
      variant="outlined"
      sx={{
        p: 2,
        bgcolor: "background",
      }}
    >
      <Box component="article">{children}</Box>
    </Paper>
  );
};

export default PaperContainer;
