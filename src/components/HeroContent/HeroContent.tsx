import { Button, Grid, Typography } from "@mui/material";
import "./HeroContent.scss";
const HeroContent = () => {
  return (
    <Grid item alignItems={"flex-end"} display={"flex"} marginBottom={4} maxWidth={'40%'}>
      <div className="hero_container">
        <Typography variant="h6" className="hero_title" fontWeight={700}>
          Business Analyst
        </Typography>
        <Typography paragraph maxWidth={460}>
          I am a forward-thinking Business Intelligence and Digital Marketing
          Strategist, adept at weaving data-driven insights with creative
          strategies to ignite brand growth and maximize ROI.
        </Typography>
        <div className="action_button_container">
          <Button
            variant="outlined"
            className="action_button"
            sx={{ borderRadius: 40, color: "black", fontWeight: 600 , paddingInline:4, fontSize:14}}
          >
            Download Resume
          </Button>
          <Button
            variant="outlined"
            className="action_button"
            sx={{ borderRadius: 40, color: "black", fontWeight: 600 ,paddingInline:4 ,fontSize:14}}
          >
            Connect With Me
          </Button>
        </div>
      </div>
    </Grid>
  );
};

export default HeroContent;
