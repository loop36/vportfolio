import { Card, CardContent, CardHeader } from "@mui/material";
import "./JobCard.scss";

const JobCard = ({ jobDetails }) => {
  return (
    <Card className="job_card_container">
      <CardHeader title={jobDetails.title} />
      <CardContent>
        <ul>
          {jobDetails?.accomplishments.map((data, index) => {
            if (index > 2) return;
            return <li>{data}</li>;
          })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default JobCard;
