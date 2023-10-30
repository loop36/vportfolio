import {
  EmailOutlined,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";

import "./ConnectWithMe.scss";

const ConnectWithMe = () => {
  return (
    <Box className="connect_container">
      <Typography variant="h2"> Connect With me</Typography>
      <Grid container className="link_container">
        <Grid item xs={3}>
          <EmailOutlined fontSize="large" />
          <a href="mailto:vinutreesa21@gmail.com"> Feel Free to mail me</a>
        </Grid>
        <Grid item xs={3}>
          <LinkedIn fontSize="large" />
          <a href="mailto:vinutreesa21@gmail.com">
            Lets Connect in professional network
          </a>
        </Grid>
        <Grid item xs={3}>
          <Twitter fontSize="large" />
          <a href="mailto:vinutreesa21@gmail.com">
            Lets Connect in social place
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ConnectWithMe;
