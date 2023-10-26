
import ProfilePictureContainer from "../../components/ProfilePictureContainer/ProfilePictureContainer";
import HeroContent from "../../components/HeroContent/HeroContent";
import { Grid } from "@mui/material";

const Title = () => {
  return (
    <Grid container sx={{ marginTop: 12, marginInline: 0, gap: 2, }}>
      <ProfilePictureContainer />
      <HeroContent />
    </Grid>
  );
};

export default Title;
