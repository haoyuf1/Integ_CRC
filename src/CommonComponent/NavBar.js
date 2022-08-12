import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
  Typography,
  ThemeProvider,
} from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../images/sv-logo.png";
import Icon from "@mui/material/Icon";
import FilterAlt from "@mui/icons-material/FilterAlt";
import { useMemo } from "react";
import { switchTheme } from "../Theme";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Navbar(props) {
  const { dataset, setDataset, pageType, drawerOpen, setDrawerOpen } =
    props.state;
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const color = useMemo(() => {
    if (pageType === "enslaver") {
      return "success";
    }
    if (dataset === "0") {
      return "primary";
    } else {
      return "secondary";
    }
  }, [pageType, dataset]);

  return (
    <>
      <AppBar
        position="fixed"
        color={color}
        elevation={0}
        style={{ zIndex: 4 }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            href="/"
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            <Icon>
              <img src={logo} height={30} width={60} />
            </Icon>
            VOYAGES
            {pageType !== "home" ?
              <small style={{marginTop:8, fontWeight: 200, fontSize: 16, letterSpacing: "0", fontFamily: "monospace", }}>
                /{pageType}
              </small>: null}
          </Typography>

          {pageType !== "home" && pageType !== "documents" ? (
            <IconButton
              aria-label="open drawer"
              onClick={() => setDrawerOpen(!drawerOpen)}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <FilterAlt sx={{ color: "white" }} />
              <Typography sx={{ color: "white" }}>Filter</Typography>
            </IconButton>
          ) : null}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="whiteIcon"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pageType !== "home" && pageType !== "documents" ? (
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography 
                      aria-label="open drawer"
                      onClick={() => setDrawerOpen(!drawerOpen)}>
                        Filter
                    </Typography>
                </MenuItem>
              ) : null}
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/voyage/scatter"} style={{ textDecoration: "none" }}>
                  Voyages
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/past/enslaved"} style={{ textDecoration: "none" }}>
                  Past
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/documents"} style={{ textDecoration: "none" }}>
                  Documents
                </Link>
              </MenuItem>

              <ThemeProvider theme={switchTheme}>
                <div style={{ flexGrow: 1 }}>
                  {pageType !== "enslaver" &&
                  pageType !== "home" &&
                  pageType !== "documents" ? (
                    <MenuItem>
                      <ToggleButtonGroup
                        color="blackMode"
                        value={dataset}
                        exclusive
                        onChange={(event) => {
                          setDataset(event.target.value);
                        }}
                        sx={{
                          background: dataset === "0" ? "#42a5f5" : "#ab47bc",
                        }}
                        size={"small"}
                      >
                        <ToggleButton
                          sx={{ background: "#42a5f5" }}
                          value={"0"}
                        >
                          Trans-Atlantic
                        </ToggleButton>
                        <ToggleButton
                          sx={{ background: "#ab47bc" }}
                          value={"1"}
                        >
                          Intra-American
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </MenuItem>
                  ) : null}
                </div>
              </ThemeProvider>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            Voyages
            <small style={{ fontWeight: 200, letterSpacing: "0" }}>
              /{pageType}
            </small>
          </Typography>

          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <ThemeProvider theme={switchTheme}>
              {pageType !== "enslaver" &&
              pageType !== "home" &&
              pageType !== "documents" ? (
                <ToggleButtonGroup
                  color="blackMode"
                  value={dataset}
                  exclusive
                  onChange={(event) => {
                    setDataset(event.target.value);
                  }}
                  sx={{ background: dataset === "0" ? "#42a5f5" : "#ab47bc" }}
                  size={"small"}
                >
                  <ToggleButton sx={{ background: "#42a5f5" }} value={"0"}>
                    Trans-Atlantic
                  </ToggleButton>
                  <ToggleButton sx={{ background: "#ab47bc" }} value={"1"}>
                    Intra-American
                  </ToggleButton>
                </ToggleButtonGroup>
              ) : null}
            </ThemeProvider>

            <Link to={"/voyage/scatter"} style={{ textDecoration: "none" }}>
              <Button sx={{ color: "white" }}>Voyages</Button>
            </Link>

            <Link to={"/past/enslaved"} style={{ textDecoration: "none" }}>
              <Button sx={{ color: "white" }}>PAST</Button>
            </Link>

            <Link to={"/documents"} style={{ textDecoration: "none" }}>
              <Button sx={{ color: "white" }}>Documents</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
