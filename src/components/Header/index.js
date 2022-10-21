import React from "react";

import { Box, Container, Link, Typography } from "@mui/material";

const Header = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        boxShadow: "0 3px 3px -3px rgba(50, 50, 93, 0.15)",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "right",
            gap: "15px",
            width: "100%",
            paddingTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Link href={`/`} sx={{ textDecoration: "none" }}>
            <Typography>Home</Typography>
          </Link>

          <Link href={`/experience`} sx={{ textDecoration: "none" }}>
            <Typography>Experience</Typography>
          </Link>

          <Link href={`/projects`} sx={{ textDecoration: "none" }}>
            <Typography>Projects</Typography>
          </Link>

          <Link href={`/fun-stuff`} sx={{ textDecoration: "none" }}>
            <Typography>Fun stuff</Typography>
          </Link>
        </Box>
      </Container>
    </div>
  );
};

export default Header;
