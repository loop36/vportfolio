import { EmailOutlined, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";

import "./ConnectWithMe.scss";

const ConnectWithMe = () => {
  return (
    <Box className="connect_container" id="connect">
      <Typography variant="h2"> Connect With me</Typography>
      <Grid container className="link_container">
        <Grid item xs={12} sm={3}>
          <EmailOutlined fontSize="large" />
          <a href="mailto:vinutreesa21@gmail.com"> Feel Free to mail me</a>
        </Grid>
        <Grid item xs={12} sm={3}>
          <LinkedIn fontSize="large" />
          <a href="https://www.linkedin.com/in/vineethathomasdigitalmarketer/">
            Lets Connect in professional network
          </a>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Twitter fontSize="large" />
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fvineetha_treesa">
            Lets Connect in social place
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ConnectWithMe;
