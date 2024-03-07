import Card from "react-bootstrap/Card";
import Tags from "./Tags";

const MyCard = ({ image, name, description, color, tag }) => {
  return (
    <>
        <Card className="w-100 m-3">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Tags color={color} tag={tag} />
      </Card>
    </>
  );
};

export default MyCard;
