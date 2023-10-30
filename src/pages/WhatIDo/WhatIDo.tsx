import { Box } from "@mui/material";
import JobCard from "../../components/JobCard/JobCard";
import Arrow from "../../assets/icons/ar2.png";
import "./WhatIDo.scss";

const WhatIDo = () => {
  return (
    <Box className="what_container">
      <JobCard />
      <img src={Arrow} />
      <JobCard />
      <img src={Arrow} />
      <JobCard />
    </Box>
  );
};

export default WhatIDo;
