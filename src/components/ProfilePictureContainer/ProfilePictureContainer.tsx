
import "./ProfilePicture.scss";
import { Grid, Typography } from "@mui/material";
import profile from "../../assets/vineetha.jpg";

const ProfilePictureContainer = () => {
  return (
    <Grid item className="pro_container">
      <div className="title_text_container">
        <Typography variant="h1" className="title_name">
          VINEETHA <br />
          THOMAS
        </Typography>
        <div className="image_container">
          <img src={profile} alt="vineetha" />
        </div>
      </div>
    </Grid>
  );
};

export default ProfilePictureContainer;
