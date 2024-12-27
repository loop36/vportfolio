import { Button, Grid, Typography } from "@mui/material";
import "./HeroContent.scss";
const HeroContent = () => {
  return (
    <Grid item alignItems={"flex-end"} display={"flex"} marginBottom={4}>
      <div className="hero_container">
        <Typography
          variant="h6"
          className="hero_title"
          fontWeight="bold"
          fontSize={24}
        >
          AI integrated marketing professional
        </Typography>
        <Typography paragraph maxWidth={460}>
          Welcome! I'm Vineetha, your AI-powered marketing guru. With over five
          years of global experience, I've mastered the art of boosting sales
          through precision promotions and cutting-edge online marketing. But
          what truly sets me apart is my expertise in Python, Power BI, and AI
          engineering. No need for extra hands—
          <strong>I'm a one-woman marketing powerhouse.</strong>
        </Typography>
        <div className="action_button_container">
          <Button
            variant="outlined"
            className="action_button"
            sx={{
              borderRadius: 40,
              color: "black",
              fontWeight: 600,
              paddingInline: 4,
              fontSize: 14,
            }}
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1Q1EaTRqWx9GASK5r7yt4i6tt_SL15t5g/view?usp=sharing",
                "_blank",
                "noreferrer"
              );
            }}
          >
            Download Resume
          </Button>
          <Button
            variant="outlined"
            className="action_button"
            sx={{
              borderRadius: 40,
              color: "black",
              fontWeight: 600,
              paddingInline: 4,
              fontSize: 14,
            }}
            onClick={() => {
              let element = document.getElementById("connect");
              element && element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            }}
          >
            Connect With Me
          </Button>
        </div>
      </div>
    </Grid>
  );
};

export default HeroContent;
