// components/Footer.tsx
import React from "react";
import { Typography, Container } from "@mui/material";

const Footer: React.FC = () => {
  const footerStyle = {
    flexGrow: 1,
    backgroundColor: "rgba(10, 15, 30)",
  };

  return (
    <footer style={footerStyle}>
      <Container maxWidth="sm">
        <Typography
          variant="body2"
          color="textprimary"
          align="center"
          fontSize="1.5rem"
          style={{ padding: "20px 0" }}
        >
          Made with : Nextjs, TypeScript, MDX, Tailwind{" "}
        </Typography>
        <Typography
          variant="body2"
          color="textprimary"
          align="center"
          fontSize="1rem"
          style={{ padding: "20px 0" }}
        >
          &copy; 2023 My Blog. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
