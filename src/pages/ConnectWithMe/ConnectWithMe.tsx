import {
  EmailOutlined,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import {  Grid } from "@mui/material";


const ConnectWithMe = () => {
  return (
    <Grid container>
      <Grid item>
        <EmailOutlined />
        <a href="mailto:vinutreesa21@gmail.com"> vinutreesa21@gmail.com</a>
      </Grid>
      <Grid item>
        <Instagram />
        <a href="mailto:vinutreesa21@gmail.com"> vinutreesa21@gmail.com</a>
      </Grid>
      <Grid item>
        <LinkedIn />
        <a href="mailto:vinutreesa21@gmail.com"> vinutreesa21@gmail.com</a>
      </Grid>
      <Grid item>
        <Twitter />
        <a href="mailto:vinutreesa21@gmail.com"> vinutreesa21@gmail.com</a>
      </Grid>
    </Grid>
  );
};

export default ConnectWithMe;
