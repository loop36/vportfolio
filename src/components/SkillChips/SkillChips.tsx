import { Box, Chip, Typography } from "@mui/material";
import "./SkillsChips.scss";

interface SkillChipsPropTypes {
  title: string;
  data: string[];
}

const SkillChips = ({ title, data }: SkillChipsPropTypes) => {
  return (
    <Box>
      <Box className="chip_title">
        <Typography variant="h3">{title}</Typography>
      </Box>
      <Box className="chip_list">
        {data.map((skill) => (
          <Chip
            label={skill}
            color="primary"
            sx={{ backgroundColor: "#498075", fontSize: 16}}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SkillChips;
