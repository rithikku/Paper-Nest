import { Link } from "react-router-dom";

const SemesterCard = ({ to, title }) => {
  return (
    <li className="list-item">
      <Link to={to} className="first-sem-card">
        <h2 className="course">{title}</h2>
      </Link>
    </li>
  );
};

export default SemesterCard;
