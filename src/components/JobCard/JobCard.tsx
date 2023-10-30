import { Card, CardContent, CardHeader } from "@mui/material";
import "./JobCard.scss";

const JobCard = ({ jobDetails }) => {
  return (
    <Card className="job_card_container">
      <CardHeader title="Marketing and Sale Executive" />
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

export default JobCard;
