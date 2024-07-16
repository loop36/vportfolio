
import SkillChips from "../../components/SkillChips/SkillChips";
import { Box } from "@mui/material";
import './skills.scss'

const Skills = () => {
  // Data and Analysis
  const dataAndAnalysisSkills = [
    "A/B Testing",
    "Analysis",
    "Data Analysis",
    "Data Driven",
    "Data Modeling",
    "Data Preparation",
    "Data Quality",
    "Data Visualization",
    "Statistical Analysis",
  ];

  // Marketing and Advertising
  const marketingAndAdvertisingSkills = [
    "Advertising Media",
    "Brand Awareness",
    "Content Marketing",
    "Copywriting",
    "CRM Systems",
    "Customer Acquisition",
    "Customer Engagement",
    "Customer Relationship Management",
    "Digital Marketing Planning",
    "Email Marketing",
    "Engaging Content",
    "Google Analytics",
    "Integrated Marketing",
    "Internet Marketing",
    "Keyword Research",
    "Marketing Automation",
    "Marketing Campaigns",
    "Marketing Planning",
    "Neuromarketing",
    "Onpage Optimization",
    "Organic Search Marketing",
    "Pay Per Click",
    "Search Engine Optimization",
    "Social Media",
    "Social Media Analysis",
    "Social Media Management",
    "Social Media Marketing",
  ];

  // Business and Growth
  const businessAndGrowthSkills = [
    "Bid Management",
    "Business Growth",
    "Business Intelligence",
    "Forecasting",
    "Innovation",
    "Revenue Growth",
    "Revenue Optimization",
    "Supply Chain Management",
    "Supply Chain Optimization",
  ];

  // Other Skills
  const otherSkills = [
    "Comprehensive",
    "Computer Network",
    "Database Normalization",
    "Microsoft Excel",
    "Power BI",
    "SAS Enterprise Miner",
    "Technical Competency",
    "Market Research",
    "Planning Process",
    "Process Improvement",
    "Inventory Management",
    "Performance Appraisal",
    "Sales Data Warehouse",
    "Sales Efficiency",
    "Sales Performance Analysis",
    "Target Audience",
    "Learning",
    "Online Learning",
    "Feature Extraction",
    "User Engagement",
    "Attend summits and seminars",
    "Fitness",
    "Podcast",
    "Reading",
    "Travelling",
  ];

  // Export the arrays for use in other JavaScript files

  return (
    <Box className="skill_chips_container">
      <SkillChips
        title="Marketing and Advertising"
        data={marketingAndAdvertisingSkills}
      />
      <SkillChips title="Data Analysis " data={dataAndAnalysisSkills} />
      <SkillChips title="Business Growth" data={businessAndGrowthSkills} />
      <SkillChips title="Others" data={otherSkills} />
    </Box>
  );
};

export default Skills;
