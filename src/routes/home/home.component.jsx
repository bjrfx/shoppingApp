import React from "react";
import ItemNames from '../../components/ItemNames.component';
import { Box, Grid } from "@mui/material";
import {Outlet} from 'react-router-dom';
const Home = () => {
  return (
    <Box>
      <Outlet />
      <Grid container spacing={2}>
        <ItemNames />
      </Grid>
    </Box>
  );
};

export default Home;
