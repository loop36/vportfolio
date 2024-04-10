import { Card, CardContent, CardMedia } from "@mui/material";
import { ReactNode } from "react";
import "./FeatureCard.scss";

interface FeatureCardType {
  img: string;
  title?: string;
  content?: string;
  children?: ReactNode;
}
const FeatureCard = ({ img, children }: FeatureCardType) => {
  return (
    <Card className="card">
      <CardMedia image={img} component="img" height="500" className="media" />
      <CardContent className="overlay">{children}</CardContent>
    </Card>
  );
};

export default FeatureCard;
