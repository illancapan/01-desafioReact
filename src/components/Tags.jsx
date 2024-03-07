import Badge from "react-bootstrap/Badge";

const Tags = ({ color, tag }) => {
  return (
    <p>
      <Badge bg = {color} className="w-100">
        {tag}
      </Badge>
    </p>
  );
};

export default Tags;
