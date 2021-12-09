import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SportsBarIcon from "@mui/icons-material/SportsBar";

const Header = () => {
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <SportsBarIcon />
            <Typography
              variant="h6"
              role="app-title"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              BAR.io
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};

export default Header;
