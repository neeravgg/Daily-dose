import * as React from "react";
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import ContactsIcon from "@mui/icons-material/Contacts";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Menu, MenuItem, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const Option = styled(Box)`
    display: inline-flex;
    aligncontent: center;
    gap: 10px;
  `;
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title='Account settings'>
          <IconButton
            onClick={handleClick}
            size='small'
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              left: 18,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => navigate("/login")}>
          <Option>
            <ContactsIcon />
            <Typography>Profile</Typography>
          </Option>
        </MenuItem>
        <MenuItem onClick={() => navigate("/about")}>
          <Option>
            <InfoRoundedIcon />
            <Typography>About us</Typography>
          </Option>
        </MenuItem>
        <MenuItem onClick={() => navigate("/contact")}>
          <Option>
            <LocalPhoneRoundedIcon />
            <Typography>Contact us</Typography>
          </Option>
        </MenuItem>
        <MenuItem onClick={() => navigate("/")}>
          <Option>
            <HomeRoundedIcon />
            <Typography>Home</Typography>
          </Option>
        </MenuItem>
        <Divider />

        <MenuItem onClick={() => navigate("/login")}>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Login/Signup
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
