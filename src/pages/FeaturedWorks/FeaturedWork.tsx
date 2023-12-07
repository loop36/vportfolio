import { Box, Card, CardMedia } from "@mui/material";
import "./FeaturedWork.scss";
import veiroot from "../../assets/veiroot.jpg";
import tyndis from "../../assets/tyndis.jpg";

const FeaturedWork = () => {
  return (
    <Box display={"flex"} paddingY={"5em"} gap={"4em"}>
      <Card className="card">
        <CardMedia
          image={veiroot}
          component="img"
          height="500"
          className="media"
        />
        <div className="overlay">
          <h3>PAID MARKETING</h3> - Veiroots
          <p>
            OBJECTIVE: LEAD GENERATION FOR FREE WEBINAR ON EPILIMO GENETIC
            TESTING PROGRAM.
            <p>
              TARGET AUDIENCE: METRO CITIES IN
              INDIA-MUMBAI-BANGLORE,DELHI,HYDRABAD,KOCHIN
            </p>
            <p>RESULT : EXCEEDED TARGET,INDICATED STRONG ENGAGEMENT</p>
          </p>
        </div>
      </Card>
      <Card className="card">
        <CardMedia
          image={tyndis}
          component="img"
          height="500"
          className="media"
        />
        <div className="overlay">
          <h3>BRAND TYNDIS </h3> - https://www.tyndistravel.com/
          <p>
            OBJECTIVE : IMPROVE THE WEBSITE RANK ON SEARCH ENGINE (RANK WAS 100+)
          </p>
          <p>
            OPTIMISE THE WEBSITE TO MAKE IT USER FRIENDLY (MULTIDEVICE) INCREASE
          </p>
          <p>
            THE TRAFFIC CAMPAIGN INFO WORKED ON THE OVERALL PLANNING AND
            STRATEGY CO ORDINATED WITH THE DEVELOPING TEAM TO FIX THE TECHNICAL
            ISSUES ON THE WEBSITE WHICH WERE CAUSING SLOW RESPONSE TIME CREATED
            HIGH QUALITY BACKLINKS TO GENERATE TRAFFIC TO THE WEBSITE RESULTS
          </p>
        </div>
      </Card>
    </Box>
  );
};

export default FeaturedWork;
