import { Box, Chip, Typography } from "@mui/material";

interface SkillChipsPropTypes {
  title: string;
  data: string[];
}

const SkillChips = ({ title, data }: SkillChipsPropTypes) => {
  return (
    <Box>
      <Box>
        <Typography variant="h3">{title}</Typography>
      </Box>

      {data.map((skill) => (
        <Chip label={skill} color="primary" />
      ))}
    </Box>
  );
};

export default SkillChips;
