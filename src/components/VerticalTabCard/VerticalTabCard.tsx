import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import "./VerticalTabCard.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const VerticalTabCard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#EDEDED",
        display: "flex",
        borderRadius: "20px",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          ".Mui-selected": {
            color: `white !important`,
          },
          color: `whitesmoke !important`,
          borderRight: 1,
          borderColor: "divider",
          borderRadius: "20px 0 0px 20px",
          minWidth: 230,
          backgroundColor: "#11253E",
        }}
      >
        <Tab label="Weknowlondon" className="tabHeader" />
        <Tab
          label="Digital Marketing Strategist"
          {...a11yProps(1)}
          className="tabHeader"
        />
        <Tab
          label="Marketing Executive"
          {...a11yProps(2)}
          className="tabHeader"
        />
        <Tab
          label="Digital Marketing Maven and Podcaster"
          {...a11yProps(3)}
          className="tabHeader"
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography variant="h5">Sales Executive (2023)</Typography>
        <ul>
          <li>
            Increased sales by 25% in 6 months, enabling company to exceed
            quarterly targets.
          </li>

          <li>
            Increased sales revenue by 18% in 6 months, resulting in a
            record-breaking quarter.
          </li>
          <li>
            Grew sales team revenue by 50% in 12 months, exceeding goal by 30%.
          </li>
          <li>
            Excellent Customer Service Reviewed by the Customer Google Reviews
          </li>
          <li>
            Conducted a website analysis and suggestions based on the reliant
            data
          </li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h5">
          Digital Marketer Consultant(2018 - 2020)
        </Typography>
        <ul>
          <li>
            Increased digital marketing ROI by 25% in 4 months, resulting in a
            $50K boost to company revenue.
          </li>
          <li>
            Delivered 30% increase in web traffic in 6 months, driving up
            conversion rate by 15%.
          </li>
          <li>
            Increased web traffic by 25% in 6 months, resulting in improved
            customer engagement.
          </li>
          <li>
            Increased market share by 20% and brand awareness by 30% within 6
            months, utilizing marketing strategies and business leads.
          </li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h5">Marketing Executive (2015 - 2017)</Typography>
        <ul>
          <li>
            Increased sales revenue by 27% in 6 months through effective digital
            marketing campaigns.
          </li>
          <li>
            Increased new customer acquisition by 30% in 6 months, driving
            overall revenue growth.
          </li>
          <li>
            Increased market share by 40% in 6 months through effective branding
            campaigns and promotional strategies.
          </li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography variant="h5">Marketing Executive (2014 - 2015)</Typography>
        <ul>
          <li>
            Grew Branding and engagement by 50% in 6 months, resulting in a 30%
            increase in Sales Leads
          </li>
          <li> Increased revenue by 25% in 6 months for new product launch.</li>
          <li>
            Increased lead acquisition by 25% in 3 months, converting leads into
            valuable customers.
          </li>
          <li>
            Secured 10% increase in customer base in 6 months, driving up
            revenue by 20% YOY.
          </li>
        </ul>
      </TabPanel>
    </Box>
  );
};

export default VerticalTabCard;
