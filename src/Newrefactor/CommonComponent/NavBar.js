import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Drawer,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
  Typography,
  ThemeProvider
} from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/sv-logo.png";
import Icon from "@mui/material/Icon";
import FilterAlt from "@mui/icons-material/FilterAlt";
import { useMemo } from "react";
import {switchTheme} from "../../Theme";

export default function Navbar(props) {
  const { dataset, setDataset, pageType, drawerOpen, setDrawerOpen } =
    props.state;
  
    const color = (() =>{
      if(pageType === "voyage") {
        if(dataset==="0") {
          return "voyageTrans"
        }else{
          return "voyageIntra"
        }
      }
      if(dataset==="0") {
        return "primary"
      }else{
        return "secondary"
      }
    })()
  
  return (
    <AppBar position="sticky" color={color} elevation={0} style={{ zIndex: 3 }}>
      <Toolbar>
        <Icon>
          <img src={logo} height={30} width={60} />
        </Icon>
        <Typography
          variant="h5"
          noWrap
          href="/"
          component="a"
          sx={{
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          Voyages
        </Typography>

        <ThemeProvider theme={switchTheme}>
            <Stack spacing={4} direction={"row"} justifyContent="flex-end"
                   alignItems="flex-end" sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pageType !== "home" ? (
          <IconButton
            aria-label="open drawer"
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <FilterAlt sx={{ color: "white" }} />
            <Typography sx={{ color: "white" }}>Filter</Typography>
          </IconButton>
        ) : null}

        {pageType !== "enslaver" && pageType !== "home" ? (
          <ToggleButtonGroup
            color="blackMode"
            value={dataset}
            exclusive
            onChange={(event) => {
              console.log(event.target.value);
              setDataset(event.target.value);
            }}
            sx={{background: dataset === "0" ? "#42a5f5" : "#ab47bc"}}
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
        </Stack>
        </ThemeProvider>

        <Link to={"/voyage"} style={{ textDecoration: "none" }}>
          <Button sx={{ color: "white" }}>Voyages</Button>
        </Link>
        <Link to={"/past/enslaved"} style={{ textDecoration: "none" }}>
          <Button
            sx={{
              my: 2,
              color: "white",
              display: "block",
              position: "right",
            }}
          >
            PAST
          </Button>
        </Link>
        <Link to={"/documents"} style={{ textDecoration: "none" }}>
          <Button
            sx={{
              my: 2,
              color: "white",
              display: "block",
              position: "right",
            }}
          >
            Documents
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
