import ProfilePictureContainer from "../../components/ProfilePictureContainer/ProfilePictureContainer";
import HeroContent from "../../components/HeroContent/HeroContent";
import { Grid } from "@mui/material";

const Title = () => {
  return (
    <Grid container justifyContent={"center"}>
      <ProfilePictureContainer />
      <HeroContent />
    </Grid>
  );
};

export default Title;
