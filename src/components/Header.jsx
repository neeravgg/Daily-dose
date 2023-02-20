import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Hamburger from "./Hamburger";
import { Menu, MenuItem, styled, Typography, MenuIcon } from "@mui/material";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const ToolBox = styled(Toolbar)({
    justifyContent: "space-between",
  });
  const Logotext = styled(Typography)`
    font-size: 19px;
    margin-left: 1px;
    color: #000000;
    font-weight: bold;
  `;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' style={{ background: "#ffffff" }}>
        <ToolBox>
          {/* Hamburger icon */}
          <Hamburger />

          {/* Logo */}
          <Box sx={{ display: "inline-flex", alignItems: "center" }}>
            <img height={40} src='/logo192.png' />
            <Logotext>Daily Dose</Logotext>
          </Box>
          {/* Search */}
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            color='#000000'
          >
            <AccountCircle />
          </IconButton>

          <Menu
            id='menu-appbar'
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </ToolBox>
      </AppBar>
    </Box>
  );
}
