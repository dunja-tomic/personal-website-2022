import React from "react";

import { Box, Container, Typography } from "@mui/material";

import FunStuffStuff from "../../components/FunStuffStuff";
import Header from "../../components/Header";

import travel from "../../images/travel.png";
import cake from "../../images/cake.png";
import mountain from "../../images/mountain.png";
import bike from "../../images/bike.png";

const FunStuffPage = () => {
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
          <Typography variant="h2">Fun Stuff</Typography>

          <FunStuffStuff
            title="Travel"
            blurb={
              "I love to travel. After I graduated I did a solo backpacking trip around Europe.\n\nThis is me at the Fisherman's Bastion, in Budapest, Hungary."
            }
            photo={travel}
            photoAltText="Budapest"
          />

          <FunStuffStuff
            title="Pastry school"
            blurb={`I must have just watched Ratatouille one too many times as a child
          because I love French cooking and especially French pastry. I
          spent 3 months in 2022 attending pastry school in the south of
          France. And sure, I'll make your birthday cake.`}
            photo={cake}
            photoAltText="mmm cake"
            invert={true}
          />

          <FunStuffStuff
            title="Nature"
            blurb={`Once in a while I'll even go outside and touch grass. I love hiking in the mountains. This was taken in Garibaldi Park, just north of Vancouver, Canada.`}
            photo={mountain}
            photoAltText="mmmountain"
          />

          <FunStuffStuff
            title="More things I like"
            blurb={`Narrative podcasts, The New York Times crossword, my bike, the smell
          of pavement after rain, hyperbole for the sake of humour, spelling
          "humour" with a "u", and lots of other things.`}
            photo={bike}
            photoAltText="bike"
            invert={true}
          />
        </Box>
      </Container>
    </div>
  );
};

export default FunStuffPage;
