import { Box, Card, CardMedia, Grid } from "@mui/material";
import "./FeaturedWork.scss";
import veiroot from "../../assets/vieroots-home.jpg";
import tyndis from "../../assets/tyndis-home.jpg";
import FeatureCard from "../../components/FeatureCard/FeatureCard";

const FeaturedWork = () => {
  return (
    <Box
      display={"flex"}
      gap={"4em"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid container spacing={2}>
        <Grid item spacing={2} md={12}>
          <FeatureCard img={tyndis}>
            <h3>Tyndis </h3>
            <a href="https://www.tyndistravel.com/" target="_blank">
              - https://www.tyndistravel.com/
            </a>
            <p>
              Objective : Improve the website rank on search engine (rank was
              100+)
            </p>
            <p>
              Optimise the website to make it user friendly (multidevice)
              increase
            </p>
            <p>
              The traffic campaign info worked on the overall planning and
              strategy. Co ordinated with the developing team to fix the
              technical issues on the website which were causing slow response
              time created high quality backlinks to generate traffic to the
              website results
            </p>
          </FeatureCard>
        </Grid>
        <Grid item spacing={2} md={12}>
          <FeatureCard img={veiroot}>
            <h3>Paid Marketing</h3>
            <a href="https://vieroots.com/" target="_blank">
              - Veiroots
            </a>
            <p>
              OBJECTIVE: LEAD GENERATION FOR FREE WEBINAR ON EPILIMO GENETIC
              TESTING PROGRAM.
              <p>
                TARGET AUDIENCE: METRO CITIES IN
                INDIA-MUMBAI-BANGLORE,DELHI,HYDRABAD,KOCHIN
              </p>
              <p>RESULT : EXCEEDED TARGET,INDICATED STRONG ENGAGEMENT</p>
            </p>
          </FeatureCard>
        </Grid>
      </Grid>
      {/* <Card className="card">
        <CardMedia
          image={tyndis}
          component="img"
          height="500"
          className="media"
        />
        <div className="overlay">
        
      </Card> */}
    </Box>
  );
};

export default FeaturedWork;
