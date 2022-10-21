import React from "react";

import {
  Box,
  Grid,
  Container,
  Link,
  IconButton,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import headshot from "../../images/headshot.png";

const HomePage = () => {
  return (
    <Container
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <Box>
        <Grid container spacing={4} sx={{ alignItems: "center" }}>
          <Grid item sm={4}>
            <img src={headshot} alt="headshot" width="100%" />
          </Grid>

          <Grid item sm={8}>
            <Typography variant="h1" sx={{ color: "#FAC8CD" }}>
              Hello world,
            </Typography>
            <Typography variant="h1">I'm Dunja Tomic.</Typography>
            <Typography sx={{ marginTop: "25px", marginBottom: "10px" }}>
              I graduated from the University of Waterloo, in Waterloo, Canada,
              with a bachelor's degree in computer science in May 2022.
            </Typography>
            <Typography sx={{ marginBottom: "10px" }}>
              I enjoy working on meaningful projects that, in their own small
              way, help to make people's lives better.
            </Typography>
            <Typography>
              When I'm not behind a computer screen, you can find me baking in
              my kitchen, riding my bike, or listening to a podcast.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <Link href={`/experience`} sx={{ textDecoration: "none" }}>
                <Typography>Experience</Typography>
              </Link>

              <Typography>&nbsp;|&nbsp;</Typography>

              <Link href={`/projects`} sx={{ textDecoration: "none" }}>
                <Typography>Projects</Typography>
              </Link>

              <Typography>&nbsp;|&nbsp;</Typography>

              <Link href={`/fun-stuff`} sx={{ textDecoration: "none" }}>
                <Typography>Fun Stuff</Typography>
              </Link>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row" }}>
              {/* Email */}
              <Link
                href={`mailto:dunjatomic2323@gmail.com`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconButton color="primary">
                  <EmailIcon />
                </IconButton>
              </Link>

              {/* Github */}
              <Link
                href={`https://github.com/dunja-tomic`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconButton color="primary">
                  <GitHubIcon />
                </IconButton>
              </Link>

              {/* LinkedIn */}
              <Link
                href={`https://www.linkedin.com/in/dunja-tomic/`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconButton color="primary">
                  <LinkedInIcon />
                </IconButton>
              </Link>

              {/* Instagram */}
              <Link
                href={`https://www.instagram.com/dunjahumanlife`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconButton color="primary">
                  <InstagramIcon />
                </IconButton>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
