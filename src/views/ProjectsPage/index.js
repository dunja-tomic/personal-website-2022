import React, { useState } from "react";

import { Box, Grid, Container, Link, Typography } from "@mui/material";

import Header from "../../components/Header";

import rntyr from "../../images/rntyr.png";
import tgh from "../../images/tgh.png";

const ProjectsPage = () => {
  const [rntyrShowMore, setRntyrShowMore] = useState(true);
  const [tghShowMore, setTghShowMore] = useState(true);

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
          <Typography variant="h2">Projects</Typography>

          <Grid
            container
            spacing={4}
            sx={
              rntyrShowMore ? { alignItems: "center" } : { alignItems: "top" }
            }
          >
            <Grid item sm={4}>
              <img src={rntyr} alt="rntyr logo" width="100%" />
            </Grid>

            <Grid
              item
              sm={8}
              sx={{ display: "flex", flexDirection: "column", gap: "25px" }}
            >
              <Box>
                <Typography variant="h4">RNTYR, Co-founder & CTO</Typography>
                <Typography variant="subtitle1">
                  Platform for lending and borrowing items between neighbours
                  (WIP)
                </Typography>
                <Link
                  href={`https://www.rntyr.com/`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Typography variant="subtitle1">rntyr.com</Typography>
                </Link>
                <Typography variant="subtitle2" sx={{ marginBottom: "10px" }}>
                  July 2022 - present
                </Typography>

                <Typography sx={{ marginBottom: "10px" }}>
                  These days we have homeshare through Airbnb, and rideshare
                  through Uber, but why isn't there an easy way to share… stuff?
                  I finally decided to start bringing an idea I had had a few
                  years ago to life.
                </Typography>

                {!rntyrShowMore ? (
                  <div>
                    <Typography sx={{ marginBottom: "10px" }}>
                      There are all sorts of things I want to try before I
                      commit to buying them, or things I know I would only need
                      to use once in a while, so why waste the time, money and
                      storage space to buy them for myself? I've always wanted
                      to try a sous vide machine but I don't want to own one
                      necessarily. And I certainly don't know anyone who owns
                      one. Conversely, I have also bought innumerable hobby
                      items, sporting goods, and kitchen equipment that I rarely
                      use and would be happy if they could be put to use instead
                      of gathering dust in storage. Instead of waiting for
                      someone else to create a platform for this, I decided to
                      take matters into my own hands and make my idea a reality.
                      For the last few months, my entrepreneurially-minded
                      friend and I started working on a project we call RNTYR
                      (“renter”). In my role as CTO, my job is to create a
                      website that facilitates the easy and safe lending and
                      borrowing of items between neighbors.
                    </Typography>

                    <Typography sx={{ marginBottom: "10px" }}>
                      My goal for the backend of this project was to make it
                      scalable, which is something I’d never before had to worry
                      about in the other personal projects I had worked on. This
                      time, I wanted to give myself a challenge and force myself
                      to think a few steps ahead to when our website was fully
                      operational and had hundreds and thousands of active
                      users. How would we serve thousands of requests each day
                      in a timely manner? How could we maximize the user
                      experience without sacrificing things like security &
                      privacy? In answering questions like these, I got very
                      well-acquainted with the ins and outs of many AWS
                      microservices, namely DynamoDB, Lambda, and Cognito.
                    </Typography>
                  </div>
                ) : null}

                <Link onClick={() => setRntyrShowMore(!rntyrShowMore)}>
                  <Typography variant="subtitle1">
                    {rntyrShowMore ? "Show more" : "Show less"}
                  </Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={4}
            sx={tghShowMore ? { alignItems: "center" } : { alignItems: "top" }}
          >
            <Grid
              item
              sm={8}
              sx={{ display: "flex", flexDirection: "column", gap: "25px" }}
            >
              <Box>
                <Typography variant="h4">The GoldenHack, VP of Tech</Typography>
                <Link
                  href={`https://www.thegoldenhack.ca/`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Typography variant="subtitle1">thegoldenhack.ca</Typography>
                </Link>
                <Typography variant="subtitle2" sx={{ marginBottom: "10px" }}>
                  January 2019 - November 2021
                </Typography>

                <Typography sx={{ marginBottom: "10px" }}>
                  I was a member of the founding team of The GoldenHack, a
                  business hackathon based in Wilfrid Laurier University in
                  Waterloo, Canada.
                  {/* I helped see the event through its first 3 years of existence. */}
                </Typography>

                <Link onClick={() => setTghShowMore(!tghShowMore)}>
                  <Typography variant="subtitle1">
                    {tghShowMore ? "Show more" : "Show less"}
                  </Typography>
                </Link>

                {!tghShowMore ? (
                  <div>
                    <Typography sx={{ marginBottom: "10px" }}>
                      In my final year as VP of Tech, I managed a team of 9
                      developers and designers and together we designed and
                      implemented a new website for the event, and created our
                      very own internal application system and an admin tracking
                      tool. In my role as VP, I was in charge of creating a
                      roadmap for my team, running weekly meetings, and making
                      sure that everyone was motivated and on track.
                    </Typography>
                  </div>
                ) : null}
              </Box>
            </Grid>

            <Grid item sm={4}>
              <img src={tgh} alt="the goldenhack logo" width="100%" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ProjectsPage;
