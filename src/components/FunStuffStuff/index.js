import React from "react";

import { Box, Grid, Typography } from "@mui/material";

const FunStuffStuff = ({ title, blurb, photo, photoAltText, invert }) => {
  return (
    <Grid container spacing={4} sx={{ alignItems: "center" }}>
      {!invert ? (
        <Grid item sm={3}>
          <img src={photo} alt={photoAltText} width="100%" />
        </Grid>
      ) : null}

      <Grid item sm={8}>
        <Box>
          <Typography variant="h4">{title}</Typography>
          <Typography>{blurb}</Typography>
        </Box>
      </Grid>

      {invert ? (
        <Grid item sm={3}>
          <img src={photo} alt={photoAltText} width="100%" />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default FunStuffStuff;
