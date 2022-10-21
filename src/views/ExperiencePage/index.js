import React from "react";

import { Box, Grid, Container, Typography } from "@mui/material";

import Header from "../../components/Header";

import cat1 from "../../images/cat1.png";
import cat2 from "../../images/cat2.png";
import cat3 from "../../images/cat3.png";

const ExperiencePage = () => {
  return (
    <div>
      <Header />

      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "35px",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          <Typography variant="h2">Technical Skills</Typography>

          <Grid container spacing={4} sx={{ alignItems: "center" }}>
            {/* <Grid item sm={4}>
              <img src={cat1} alt="cat1" width="100%" />
            </Grid> */}

            <Grid
              item
              sm={8}
              sx={{ display: "flex", flexDirection: "column", gap: "25px" }}
            >
              <Box>
                <Typography sx={{ marginBottom: "15px" }}>
                  Here is a (non-exhaustive) list of the tools and technologies
                  I've used, either professionally, in school, or for a personal
                  project. If I don't know a language or I'm unfamiliar with a
                  tool: just give me a week.
                </Typography>

                <Typography variant="h5">Languages</Typography>
                <Typography sx={{ marginBottom: "15px" }}>
                  Kotlin, Typescript, Javascript, Python, Java
                </Typography>

                <Typography variant="h5">Frameworks</Typography>
                <Typography sx={{ marginBottom: "15px" }}>
                  React, React Native, NodeJS, GraphQL
                </Typography>

                <Typography variant="h5">Tools</Typography>
                <Typography sx={{ marginBottom: "15px" }}>
                  Git, AWS, Vercel, Jira, Android Studio, Docker, Kubernetes,
                  Cypress
                </Typography>
              </Box>
            </Grid>

            <Grid item sm={4}>
              <img src={cat1} alt="cat1" width="100%" />
            </Grid>
          </Grid>

          <Typography variant="h2">Professional Experience</Typography>

          <Grid container spacing={4}>
            <Grid item sm={4}>
              <img src={cat2} alt="cat2" width="100%" />
            </Grid>

            <Grid
              item
              sm={8}
              sx={{ display: "flex", flexDirection: "column", gap: "25px" }}
            >
              <Box>
                <Typography variant="h5">Modal Education</Typography>
                <Typography variant="subtitle1">
                  Software engineer, Part-time contractor
                </Typography>
                <Typography variant="subtitle2">
                  January 2022 - April 2022 | San Francisco, CA
                </Typography>
                <ul>
                  <li>
                    <Typography>
                      Designed the interface for and led the implementation of a
                      new wizard feature to make it easier for admins to create
                      and manage cohorts of users for an online education
                      platform, and wrote thorough unit and E2E tests.
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Participated in design review meetings with the
                      development team as well as product managers and customer
                      service representatives in order to determine
                      requirements, and solicit and provide feedback for new
                      features
                    </Typography>
                  </li>
                </ul>
              </Box>

              {/* <Box>
              <Typography variant="h5">Newfront Insurance</Typography>
              <Typography variant="subtitle1">
                Full-stack software engineering intern
              </Typography>
              <Typography variant="subtitle2">
                September 2021 - December 2021 | San Francisco, CA
              </Typography>
            </Box> */}

              <Box>
                <Typography variant="h5">Nearside, previously Hatch</Typography>
                <Typography variant="subtitle1">
                  Backend engineering intern
                </Typography>
                <Typography variant="subtitle2">
                  January 2021 - April 2021 | San Francisco, CA
                </Typography>
                <ul>
                  <li>
                    <Typography>
                      Led the development of an integration with a third-party
                      API to improve the automated identity verification process
                      which resulted in reducing the number of cases sent to
                      customer service agents by up to 27%
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Contributed to the automated fraud monitoring screening
                      process by processing and comparing results from various
                      APIs and adhering to strict legal compliance guidelines
                    </Typography>
                  </li>
                </ul>
              </Box>

              <Box>
                <Typography variant="h5">Square, Cash App</Typography>
                <Typography variant="subtitle1">
                  Android engineering intern
                </Typography>
                <Typography variant="subtitle2">
                  May 2020 - August 2020 | Kitchener, ON
                </Typography>
                <ul>
                  <li>
                    <Typography>
                      Implemented and tested features, as well as fixed bugs in
                      various parts of Cash App using Kotlin and Java, and
                      contributed to projects involving flagging potential spam
                      requests and dark mode theming
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Designed and implemented an interactive interface for a
                      new stock recommendation feature as Hack Week project
                    </Typography>
                  </li>
                </ul>
              </Box>

              <Box>
                <Typography variant="h5">Accenture, Liquid Studio</Typography>
                <Typography variant="subtitle1">
                  Fullstack software engineering intern
                </Typography>
                <Typography variant="subtitle2">
                  September 2019 - December 2019 | Toronto, ON
                </Typography>
                <ul>
                  <li>
                    <Typography>
                      Used React Native, AWS (EC2, Lambda, S3, DynamoDB,
                      Cognito, CloudFront, API Gateway) and Hyperledger Fabric
                      to create a product authenticity verification application
                      on a blockchain network
                    </Typography>
                  </li>
                </ul>
              </Box>

              <Box>
                <Typography variant="h5">Hyalto Inc</Typography>
                <Typography variant="subtitle1">
                  Fullstack software engineering intern
                </Typography>
                <Typography variant="subtitle2">
                  January 2019 - April 2019 | Ottawa, ON
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5">LoyaltyOne</Typography>
                <Typography variant="subtitle1">IT help desk intern</Typography>
                <Typography variant="subtitle2">
                  May 2018 - August 2018 | Toronto, ON
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Typography variant="h2">Education</Typography>

          <Grid container spacing={4} sx={{ alignItems: "center" }}>
            <Grid
              item
              sm={8}
              sx={{ display: "flex", flexDirection: "column", gap: "25px" }}
            >
              <Box>
                <Typography variant="h5">University of Waterloo</Typography>
                <Typography variant="subtitle1">
                  Bachelor of Computer Science, Co-operative Program, Honours
                </Typography>

                <Typography variant="subtitle2" sx={{ marginBottom: "10px" }}>
                  September 2017 - May 2022
                </Typography>

                <Typography sx={{ marginBottom: "10px" }}>
                  Specialization in Human-Computer Interaction
                </Typography>
                <Typography sx={{ marginBottom: "10px" }}>
                  Relevant courses: Algorithms, OS, UI/UX, Databases, Security &
                  Privacy, Networks, Requirements & Specifications
                </Typography>
              </Box>
            </Grid>

            <Grid item sm={4}>
              <img src={cat3} alt="cat1" width="100%" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ExperiencePage;
