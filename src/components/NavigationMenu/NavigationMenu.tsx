import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

import VTLogo from "../../assets/logo/logo2.png";

import "./NavigationMenu.scss";

const NavigationMenu = () => {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "What I Do", id: "whatido" },
    { name: "Skills", id: "skill" },
    { name: "Connect With Me", id: "connect" },
  ];
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () =>
    setMobileOpen((prevMobileOpen) => !prevMobileOpen);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", maxWidth: "1800px" }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => {
                let element = document.getElementById(item.id);
                element &&
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                    inline: "nearest",
                  });
              }}
            >
              <ListItemText primary={item.name} sx={{ color: "black" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <CssBaseline />
      <AppBar
        component="nav"
        className="app_bar"
        sx={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#2b363b" }} />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                sx={{ color: "black", fontWeight: "500" }}
                onClick={() => {
                  let element = document.getElementById(item.id);
                  element &&
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "end",
                      inline: "nearest",
                    });
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ marginLeft: "auto" }}>
            <img src={VTLogo} alt="VT Logo" className="icon_style" />
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100vw",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default NavigationMenu;
