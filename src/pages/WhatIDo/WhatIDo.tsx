import { Box } from "@mui/material";
import JobCard from "../../components/JobCard/JobCard";
import Arrow from "../../assets/icons/ar2.png";
import "./WhatIDo.scss";

const exp_details = [
  {
    title: "Marketing and Sales Executive (2022 - 2023)",
    companyName: "WeKnowLondon",
    accomplishments: [
      "Monitored and reported on competitor and customer activity, industry trends and developments to inform sales and marketing strategy.",
      "Thorough knowledge UK tourism and Attractions and made record sales on Attractions over 200% over 6 months of time",
      "Suggested SEO techniques and back links building to drive engagement and improve Google rankings more than 60% over three months time.",
      "100% customer satisfaction by initiated immediate solutions kept them coming back.",
      "Maintained excellent customer satisfaction by updating clients on holiday bookings, changes and latest offers.",
      "Boosted customer savings by sourcing best rates for accommodation, car rental, and services",
      "Oversaw bookings with accurate calendar management",
      "Facilitated effective follow-up by creating and maintaining accurate sales records in Salesforce.",
      "Stimulated customer interest, conducting product demonstrations to highlight unique features.",
    ],
  },
  {
    title: "Part Time Customer Service Executive, (2021 - 2022)",
    companyName: "McDonald's - Uxbridge, Hillingdon",
    accomplishments: [
      "Warmly greeted customers and proactively reduced wait times",
      "Prepared and packaged orders with precise presentation skills.",
      "Completed opening and closing checklists to create welcoming store environment.",
      "Maintained safe working environment by reporting unsafe conditions, accidents and injuries to supervisor.",
      "Completed daily cleaning lists to maintain tidy and welcoming dining areas.",
      "Enabled smooth operations during peak times by assisting in food preparation tasks.",
      "Operated fryer to create fresh and tasty fries quickly and efficiently.",
      "Processed sales, exchange and refund transactions efficiently to reduce customer waiting times.",
      "Used cash registers and POS systems to request and record customer orders and compute transactions.",
      "Reduced customer wait times through optimised checkout processes.",
      "Handled cash and card payments with precision, maintaining customer confidentiality and discretion throughout.",
      "Educated customers on promotions, offers and special events to enhance product sales.",
      "Delivered outstanding customer care with proactive sales and listening skills.",
    ],
  },
  {
    title: "Marketing Executive,(2015 - 2017)",
    companyName: "Modern stationary LLC - Dubai",
    accomplishments: [
      "Developed and executed comprehensive marketing strategies aligned with company's objectives, resulting in remarkable increase in brand awareness, customer acquisition, and revenue growth by over 75%",
      "Created and managed integrated marketing campaigns across diverse channels, encompassing digital marketing, social media, email marketing, content marketing, and events",
      "Implemented lead generation strategies, leveraging marketing automation tools and CRM systems.",
    ],
  },
];

const WhatIDo = () => {
  return (
    <Box className="what_container">
      <JobCard jobDetails={exp_details[0]} />
      <img src={Arrow} />
      <JobCard jobDetails={exp_details[1]} />
      <img src={Arrow} />
      <JobCard jobDetails={exp_details[2]} />
    </Box>
  );
};

export default WhatIDo;
