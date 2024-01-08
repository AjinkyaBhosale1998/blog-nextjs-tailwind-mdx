// components/Header.tsx
import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const headerStyle = {
  flexGrow: 1,
  backgroundColor: "rgb(15, 23, 42)",
};

const iconStyle = {
  color: "white",
  fontSize: 25,
};

const Header: React.FC = () => {
  return (
    <AppBar position="static" style={headerStyle}>
      <Toolbar>
        <Link href="/">
          <Typography variant="h6">About</Typography>
        </Link>

        <div
          style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
        >
          <IconButton
            aria-label="GitHub"
            color="inherit"
            href="https://github.com/AjinkyaBhosale1998"
            target="_blank"
          >
            <GitHubIcon style={iconStyle} />
          </IconButton>
          <IconButton
            aria-label="LinkedIn"
            color="inherit"
            href="https://www.linkedin.com/in/ajinkya-bhosale-b8b2b0204/"
            target="_blank"
          >
            <LinkedInIcon style={iconStyle} />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
